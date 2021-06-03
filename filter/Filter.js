var Filter = React.createClass({

    displayName: 'Filter',
  
    propTypes: {
      startSortMode: React.PropTypes.bool,
      deffsearchtext: React.PropTypes.string.isRequired,
      filters:React.PropTypes.arrayOf(
        React.PropTypes.shape({
          code: React.PropTypes.number.isRequired,
          name: React.PropTypes.string.isRequired
        })
      )
    },
    
    getInitialState: function() {
        return { 
          sortMode: this.props.startSortMode ,
          searctext: this.props.deffsearchtext,         
        };
    },
    sortFilter: function(EO) {        
        if(EO.target.checked == true) {
            this.setState( {sortMode: true } );
            this.props.filters.sort((a, b) => a.name > b.name ? 1 : -1) ;                                
        }else {
            this.setState( {sortMode: false } );
            this.props.filters.sort((a, b) => a.code > b.code ? 1 : -1) ;            
        }        
    },
    searchTextChanged: function(EO) {
        this.setState( {searctext: EO.target.value } );
    },
    searchRefresh: function() {         
        this.setState( {sortMode: false } );   
        this.props.filters.sort((a, b) => a.code > b.code ? 1 : -1) ; 
        this.setState( {searctext: this.props.deffsearchtext } );        
    },
    render: function() {
        var filtersCode=[];
        if(this.state.sortMode == true) {
          var filtersArr = this.props.filters.sort((a, b) => a.name > b.name ? 1 : -1);
        } else {
          var filtersArr =this.props.filters.sort((a, b) => a.code > b.code ? 1 : -1);
        }
         
        filtersArr.forEach((filter) => {            
          if(filter.name.indexOf(this.state.searctext) == -1) {            
          } else {
            var filterCode = React.DOM.option({key:filter.code, value: filter.name},filter.name);
            filtersCode.push(filterCode);
          }            
        });       

        return React.DOM.div( {className:'FilterBlock'}, 
          React.DOM.div( {className:'FilterBlock-search'},
          React.DOM.input( {className:'FilterBlock-search_chkb', type:'checkbox', onClick:this.sortFilter, checked: this.state.sortMode}) , 
          React.DOM.input( {type:'text',name:'filtersearch',className:'FilterBlock-search_input',
          onChange:this.searchTextChanged, value:this.state.searctext 
          }),
          React.DOM.input( {type:'button',name:'filtersearch-btn',className:'FilterBlock-search_btn',
          onClick:this.searchRefresh, value: 'Сбросить'
          })),   
          React.DOM.div( {className:'FilterSelectBlock'},
          React.DOM.select( {className:'FilterSelectBlock-select', size: 6}, filtersCode )));        
      },
  
  });