import React from 'react';
import PropTypes from 'prop-types';

import './IShop.css';

import Good from './Good';
import Card from './Card';

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
      cardMode: null,
      selectedGood: null,
      editedGood: null,
      ArrGood: this.props.goods,
    }
    goodSelected = (code) => {
      console.log('выбран товар с кодом '+code);
      this.setState( {selectedGood:code} );
      this.setState( {cardMode:1} );
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
    goodEdited = (code)=> {
      console.log('редактируется товар с кодом '+code);
      this.setState( {editedGood:code} );
      this.setState( {cardMode:2} );
    }
    goodChanged = (code)=> {

    }
    render() {
     
      let goodsCode = this.props.goods.map( v =>
        <Good  key={v.code} 
          goodName= {v.goodName}  count= {v.count} code={v.code} price={v.price} url={v.url}          
          cbSelected={this.goodSelected}
          cbDeleted={this.goodDeleted}
          cbEdited={this.goodEdited}          
          cbItemChanged = {this.goodChanged}
          selectedGood={this.state.selectedGood}
          cardMode={this.state.cardMode}
        />
      );
      let cardGood = [];
      if(this.state.cardMode == 2) {
        cardGood = this.props.goods.filter( v =>  (v.code == this.state.editedGood));
      } else {
        cardGood = this.props.goods.filter( v =>  (v.code == this.state.selectedGood));
      }
      

      console.log("cardGood", cardGood);
      let cardCode = cardGood.map( v =>
        <Card key={v.code} editedGood = {this.state.editedGood} selectedGood = {this.state.selectedGood} cardMode = {this.state.cardMode}
                goodName= {v.goodName} 
                cbItemChanged = {this.goodChanged}  count= {v.count} code={v.code} price={v.price} url={v.url} 
        />      
      )

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
          {
            ((this.state.selectedGood)||(this.state.editedGood)) &&
                <div className="Card">
                  <h2>Card {(this.state.cardMode == "2")? "edit" : "view"}</h2>  
                  <table className="IShop-card">               
                  {cardCode}
                  </table>
                  {((this.state.cardMode == 2)&& 
                  <div>
                    <button type="button">Save</button>
                    <button type="button">Cancel</button>
                  </div>
                  )}
                </div>
          }
        </div>

      )  
       
    }
  
  }

  export default IShop;