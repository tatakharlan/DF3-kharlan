var IShop = React.createClass({

    displayName: 'IShop',
  
    getDefaultProps: function() {
      return { question: "Просто магазин" }
    },
  
    render: function() {
  
      var goodsCode=[];
      var goodsArr = this.props.goods;  

      goodsArr.forEach((good) => {
        var goodCode=         
            React.DOM.tr({className:'IShop-table-row', key:good.code}, 
            React.DOM.td(null,good.name),
            React.DOM.td(null,good.price),
            React.DOM.td(null,good.count),
            React.DOM.td(null,good.url),
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
        React.DOM.th(null,"url"))), 
        React.DOM.tbody( null, goodsCode ,   
      )));
    },
  
  });