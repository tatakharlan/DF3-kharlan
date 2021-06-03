var Good = React.createClass({

    displayName: 'Good',
    propTypes: {   
      cbDeleted: React.PropTypes.func.isRequired, 
      cbSelected: React.PropTypes.func.isRequired,      
      code: React.PropTypes.number.isRequired,
      goodName: React.PropTypes.string.isRequired,
      count: React.PropTypes.number.isRequired,
      price: React.PropTypes.number.isRequired,
      url: React.PropTypes.string.isRequired,
      selectedGood:React.PropTypes.number,
    },
    goodClicked: function() {
      this.props.cbSelected(this.props.code);
    },
    goodDeleted: function(EO) {      
      this.props.cbDeleted(this.props.code); 
      EO.stopPropagation();      
    },
    render: function() {     
      return  React.DOM.tr({className: "IShop-table-row "+((this.props.selectedGood == this.props.code)? "IShop-table-row_selected" : ""), key:this.props.code, onClick: this.goodClicked}, 
              React.DOM.td(null,this.props.goodName),
              React.DOM.td(null,this.props.price),
              React.DOM.td(null,this.props.count),
              React.DOM.td(null,this.props.url),
              React.DOM.td(null,
                React.DOM.input({type:'button', onClick:this.goodDeleted, value: 'Удалить'}),
              ));
    }
  });