var IShop = React.createClass({

    displayName: 'IShop',
    propTypes: {   
      selectedTr: React.PropTypes.string, 
      canDeleted: React.PropTypes.string,
      goods:React.PropTypes.arrayOf(
        React.PropTypes.shape({
          code: React.PropTypes.number.isRequired,
          name: React.PropTypes.string.isRequired,
          count: React.PropTypes.number.isRequired,
          price: React.PropTypes.number.isRequired,
          url: React.PropTypes.string.isRequired,
        })
      )
    },
    getDefaultProps: function() {
      return { question: "Просто магазин" }
    },
    trClick: function(EO){  
      if (EO.target.tagName == 'TD') {             
        this.hightLight( EO.target.closest('tr'));
      }
    },
    deleteTr: function(EO) {
      EO.preventDefault();
      console.log("EO.target", EO.target.closest('tr'));
      if(EO.target.closest('tr') == canDeletedTr ) {
        EO.target.closest('tr').remove();
      }else {
        alert("Кликните на строку");
      }
    },
    hightLight: function(el) { 
      if(selectedTr) {
        selectedTr.classList.remove('IShop-table-row_selected');
      }       
      selectedTr = el; 
      selectedTr.classList.add('IShop-table-row_selected');
      canDeletedTr = el;
    },
    render: function() {
      var goodsArr = this.props.goods;
      var goodsCode=[];
     
      goodsArr.forEach((good) => {
        var goodCode=         
            React.DOM.tr({className: "IShop-table-row", key:good.code, onClick: this.trClick}, 
            React.DOM.td(null,good.name),
            React.DOM.td(null,good.price),
            React.DOM.td(null,good.count),
            React.DOM.td(null,good.url),
            React.DOM.td(null,
              React.DOM.input({type:'button', onClick:this.deleteTr, value: 'Удалить'}),
            )
          );
        goodsCode.push(goodCode);
      });

      return React.DOM.div( {className:'IShop'}, 
        React.DOM.h1(null, this.props.title ),
        React.DOM.table( {className:'IShop-table'} ,
        React.DOM.thead(null,        
        React.DOM.tr(null, 
        React.DOM.th(null,"name"),
        React.DOM.th(null,"price"),
        React.DOM.th(null,"count"),
        React.DOM.th(null,"url"),
        React.DOM.th(null,""))), 
        React.DOM.tbody( null, goodsCode ,   
      )));
    },
  
  });