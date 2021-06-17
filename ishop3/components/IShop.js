import React from 'react';
import PropTypes from 'prop-types';

import './IShop.css';

import Good from './Good';

class IShop extends React.Component {

    static propTypes = {
      code: PropTypes.number.isRequired,    
      goods:PropTypes.arrayOf(
        PropTypes.shape({
          code: PropTypes.number.isRequired,
          goodName: PropTypes.string.isRequired,
          count: PropTypes.number.isRequired,
          price: PropTypes.number.isRequired,
          url: PropTypes.string.isRequired,
        })
      )
    };
    state = {
      selectedGood: null,
    }
    goodSelected = (code) => {
      console.log('выбран товар с кодом '+code);
      this.setState( {selectedGood:code} );
    }
    goodDeleted = (code)=> {
      console.log('удален товар с кодом '+code);
      let result = confirm("Вы хотите удалить этот товар?");
      if(result) {  
        let newArrGoods =  this.props.goods;    
        for(let i=0; i< newArrGoods.length; i++) {
          if(newArrGoods[i].code == code){
            newArrGoods.splice(i,1);            
          }
        }
        this.setState( {ArrGood: newArrGoods} );        
      }   
    }
    render() {
     
      var goodsCode = this.props.goods.map( v =>
        <Good  key={v.code} 
          goodName= {v.goodName}  count= {v.count} code={v.code} price={v.price} url={v.url}          
          cbSelected={this.goodSelected}
          cbDeleted={this.goodDeleted}
          selectedGood={this.state.selectedGood}
        />
      );

      return (
        <div className='IShop'>
          <h1>{this.props.title}</h1>
          <table className='IShop-table'>
            <thead>
            <tr>
              <th>name</th>
              <th>price</th>
              <th>count</th>
              <th>url</th>
              <th></th>
            </tr>
            </thead>
            <tbody>{goodsCode}</tbody>            
          </table>
        </div>

      )  
       
    }
  
  }

  export default IShop;