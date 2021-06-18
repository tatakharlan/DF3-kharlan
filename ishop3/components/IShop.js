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
      newGood:false,
      goodNameError: false,
      priceError: false,
      countError:false,
      urlError:false
    }
    goodSelected = (code) => {
      console.log('выбран товар с кодом '+code);
      this.setState( {selectedGood:code} );
      this.setState( {cardMode:1} );
      this.setState( {newGood:false} );
    }
    goodDeleted = (code)=> {
      this.setState( {newGood:false} );
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
      this.setState( {selectedGood:code} );
      this.setState( {cardMode:2} );
      this.setState( {newGood:false} );
      this.setState( {goodNameError:false} );
      this.setState( {priceError:false} );
      this.setState( {countError:false} );
      this.setState( {urlError:false} );
    }
    itemChanged = (item, mode)=> {   
      if(item == "goodName")  {
        if(mode == false) {
          this.setState( { goodNameError: false });
        }else {
          this.setState( { goodNameError: true });
        }
      } 
      if(item == "price")  {
        if(mode == false) {
          this.setState( { priceError: false });
        }else {
          this.setState( { priceError: true });
        }
      } 
      if(item == "count")  {
        if(mode == false) {
          this.setState( { countError: false });
        }else {
          this.setState( { countError: true });
        }
      } 
      if(item == "url")  {
        if(mode == false) {
          this.setState( { urlError: false });
        }else {
          this.setState( { urlError: true });
        }
      } 
      
    }

    addGood=()=>{
      this.setState( {newGood:true} );
      this.setState( {cardMode:2} );
      this.setState( {selectedGood: null} );   
      this.setState( {goodNameError:true} );
      this.setState( {priceError:true} );
      this.setState( {countError:true} );
      this.setState( {urlError:true} );      
    }
    goodSaved =(data)=> {
      let newArrGoods =  this.state.ArrGood.slice();
      if(this.state.newGood == true) {        
        newArrGoods.push(data);
      }else {        
        newArrGoods.forEach((element, index) => {
          if(element.code == data.code) {            
            element.goodName = data.goodName;
            element.count = data.count;
            element.price = data.price;
            element.url = data.url;
          }
        });
      }
      
      this.setState( {ArrGood: newArrGoods} );
    }


    render() {
      let ArrGood = this.state.ArrGood;
      let goodsCode = ArrGood.map( v =>
        <Good  key={v.code} 
          goodName= {v.goodName}  count= {v.count} code={v.code} price={v.price} url={v.url}          
          cbSelected={this.goodSelected}
          cbDeleted={this.goodDeleted}
          cbEdited={this.goodEdited}         
          selectedGood={this.state.selectedGood}
          cardMode={this.state.cardMode}
        />
      );
      let cardGood = [];
      if(this.state.cardMode == 2) {
        cardGood = ArrGood.filter( v =>  (v.code == this.state.editedGood));
      } else {
        cardGood = ArrGood.filter( v =>  (v.code == this.state.selectedGood));
      }
      if (this.state.newGood == true) {
        cardGood = [{goodName: "",code:null,count:null, price: null, url: ""}]        
      }
      console.log("cardGood", cardGood);
      let cardCode = cardGood.map( v =>
        <Card key={v.code} editedGood = {this.state.editedGood} selectedGood = {this.state.selectedGood} cardMode = {this.state.cardMode}
                goodName= {v.goodName} newGood={this.state.newGood} 
                cbitemChanged = {this.itemChanged} cbSaved={this.goodSaved}                 
                goodNameError = {this.state.goodNameError} goodNameError = {this.state.goodNameError} 
                countError = {this.state.countError} urlError = {this.state.urlError}
                priceError = {this.state.priceError}
                count= {v.count} code={v.code} price={v.price} url={v.url} 
        />      
      )
      console.log("cardCode", cardCode);
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
          <input type="button" value="Add new good" onClick={this.addGood}/>
          {
            ((this.state.cardMode)) &&
                <div className="Card">
                  <h2>Card {(this.state.cardMode == "2")? "edit" : "view"}</h2> 
                  {cardCode}                  
                </div>
          }
        </div>

      )  
       
    }
  
  }

  export default IShop;