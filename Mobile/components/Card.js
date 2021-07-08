
import React from 'react';
import PropTypes from 'prop-types';



class Card extends React.Component {
  
    static propTypes = {
      cardMode:PropTypes.number,
      editedGood:PropTypes.number,  
      selectedGood:PropTypes.number, 
      newGood: PropTypes.bool.isRequired, 
      code: PropTypes.number,
      goodName: PropTypes.string,
      count: PropTypes.number,
      price: PropTypes.number,
      url: PropTypes.string,
      cbItemChanged:PropTypes.func,
      cbSaved:PropTypes.func.isRequired,
      cbCancel:PropTypes.func.isRequired,
      goodNameError: PropTypes.bool.isRequired,
      priceError:PropTypes.bool.isRequired,
      countError:PropTypes.bool.isRequired,
      urlError:PropTypes.bool.isRequired,
    };
    
    itemChanged = (EO) => {      
      let errorName= EO.target.dataset.item ;        
      if(EO.target.value){  
        console.log("EO.target.value",EO.target.value) ;
        console.log("EO.target.defaultValue",EO.target.defaultValue) ;
        if(EO.target.value == EO.target.defaultValue) { 
          this.props.cbitemChanged(errorName, false , false);
        } else {         
          this.props.cbitemChanged(errorName, false , true);
        };

      } else {
        this.props.cbitemChanged(errorName, true);
      };
      
    }
    saveGood = ()=>{
      let form = document.querySelector('.GoodsForm');
      
      let data = {};
      for (let i=0; i < form.elements.length; i++) {
          let elemName = form.elements[i].name;
          let elemValue;
          if((elemName == "count")||(elemName == "price")||(elemName == "code")) {
            elemValue = parseInt(form.elements[i].value);
            if(isNaN(elemValue)){elemValue = 0;}
          } else {
            elemValue = form.elements[i].value;
          }         
          if(elemName != "") {            
            data[elemName] = elemValue; 
          }                 
      }      
      this.props.cbSaved(data);
    }
    cancelEdit= ()=>{
      this.props.cbCancel();
    }
    render() {  
      
      if(this.props.cardMode == 1) {
        return  (
          <table className="IShop-card"> 
          <tbody> 
            <tr>
                <td>goodName</td>
                <td>{this.props.goodName}</td>
            </tr>
            <tr>
                <td>price</td>
                <td>{this.props.price}</td>
            </tr> 
            <tr>
                <td>count</td>
                <td>{this.props.count}</td>
            </tr>
            <tr>
                <td>url</td>
                <td>{this.props.url}</td>
            </tr> 
          </tbody>
          </table>
        )
      }else {
        return  (
            <form className="GoodsForm">
              <table className="IShop-card">
                  <tbody> 
                        <tr>
                            <td>goodName</td>
                            <td>
                              <input type="text" defaultValue={this.props.goodName} name="goodName" onChange={this.itemChanged} data-item="goodName"/>
                              <label className= {((this.props.goodNameError == true)?"IShop-card_error visible_error":"IShop-card_error")} >goodName is required</label>
                            </td>                           
                        </tr>
                        <tr>
                            <td>price</td>
                            <td>
                              <input type="text" defaultValue={this.props.price} name="price" onChange={this.itemChanged} data-item="price"/>
                              <label className= {((this.props.priceError == true)?"IShop-card_error visible_error":"IShop-card_error")} >price is required</label>
                            </td>
                        </tr> 
                        <tr>
                            <td>count</td>
                            <td>
                              <input type="text" defaultValue={this.props.count} name="count" onChange={this.itemChanged} data-item="count"/>
                              <label className= {((this.props.countError == true)?"IShop-card_error visible_error":"IShop-card_error")} >count is required</label>
                            </td>
                        </tr>
                        <tr>
                            <td>url</td>
                            <td>
                              <input type="text" defaultValue={this.props.url} name="url" onChange={this.itemChanged} data-item="url"/>
                              <label className= {((this.props.urlError == true)?"IShop-card_error visible_error":"IShop-card_error")}>url is required</label>
                            </td>
                        </tr>
                  </tbody>
                </table>
              <div>
              <input type="hidden" defaultValue={((this.props.newGood == true)?Math.floor(Math.random()*1000):this.props.code)} name="code"/>
              
              <button type="button" disabled= {((this.props.goodNameError == true)||(this.props.urlError == true)||(this.props.countError == true)||(this.props.priceError == true)&& "disabled")} onClick={this.saveGood}>{(this.props.newGood)?"Add":"Save"}</button>
              <button type="button" onClick={this.cancelEdit}>Cancel</button>
            </div>
            </form>
        )
      }

    }

}
export default Card;