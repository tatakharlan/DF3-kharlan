var Filter = React.createClass({

    displayName: 'Filter',
  
    propTypes: {
      filters:React.PropTypes.arrayOf(
        React.PropTypes.shape({
          code: React.PropTypes.number.isRequired,
          name: React.PropTypes.string.isRequired,
          display: React.PropTypes.bool,
        })
      )
    },
    render: function() {
        var filtersCode=[];
        var filtersArr = this.props.filters;  

        filtersArr.forEach((filter) => {
          var filterCode=         
              React.DOM.option({key:filter.code, value: filter.name},filter.name
            );
            filtersCode.push(filterCode);
        });
    
        return React.DOM.div( {className:'FilterBlock'}, 
          React.DOM.div( {className:'FilterBlock-search'},
          React.DOM.input( {type:'checkbox',onClick:this.sorter}) , 
          React.DOM.input( {type:'text',name:'filtersearch',className:'FilterBlock-search_input',
          onChange:this.searchTextChanged
          }),
          React.DOM.input( {type:'button',name:'filtersearch-btn',className:'FilterBlock-search_btn',
          onChange:this.searchRefresh, value: 'Сбросить'
          })),   
          React.DOM.div( {className:'FilterSelectBlock'},
          React.DOM.select( {className:'FilterSelectBlock-select', size: 6}, filtersCode )));        
      },
  
  });