var IShop = React.createClass({

    displayName: 'IShop',
    propTypes: {   
      goods:React.PropTypes.arrayOf(
        React.PropTypes.shape({
          code: React.PropTypes.number.isRequired,
          goodName: React.PropTypes.string.isRequired,
          count: React.PropTypes.number.isRequired,
          price: React.PropTypes.number.isRequired,
          url: React.PropTypes.string.isRequired,
        })
      )
    },
    getInitialState: function() {
      return { 
        selectedGood: null,
        ArrGood: this.props.goods,
      };
    },
    goodSelected: function(code) {
      console.log('выбран товар с кодом '+code);
      this.setState( {selectedGood:code} );
    },
    goodDeleted: function(code) {
      console.log('удален товар с кодом '+code);
      var result = confirm("Вы хотите удалить этот товар?");
      if(result) {  
        var copyArrGoods =  this.state.ArrGood.slice();
        console.log("copyArrGoods", copyArrGoods);    
        for(let i=0; i< copyArrGoods.length; i++) {
          if(copyArrGoods[i].code == code){
            copyArrGoods.splice(i,1);            
          }
        }
        this.setState( {ArrGood: copyArrGoods} );        
      }   
    },
    render: function() {
     
      var goodsCode = this.state.ArrGood.map( v =>
        React.createElement(Good, {key:v.code,
          goodName:v.goodName, count:v.count, code:v.code, price:v.price,url:v.url,           
          cbSelected:this.goodSelected,
          cbDeleted:this.goodDeleted,
          selectedGood:this.state.selectedGood,
        })
      )

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
        React.DOM.tbody( null, goodsCode) ,   
      ));
    },
  
  });