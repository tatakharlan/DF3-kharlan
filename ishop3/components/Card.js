
import React from 'react';
import PropTypes from 'prop-types';

import './Card.css'; 

class Card extends React.Component {
  
    static propTypes = {
      cardMode:PropTypes.number,
      editedGood:PropTypes.number,  
      selectedGood:PropTypes.number,    
      code: PropTypes.number.isRequired,
      goodName: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      cbItemChanged:PropTypes.func.isRequired,
    };
    itemChanged = (EO) => {      
      //this.props.cbItemChanged(this.props.code, EO.target.dataset.item, EO.target.value); 
      let label = document.querySelectorAll('.IShop-card_error');
      console.log("label", label);
      if(EO.target.value){
        label.forEach(element => {
          if(element.dataset.error == EO.target.dataset.item) {            
            element.classList.remove("visible_error");
          }
        });
      } else {
        label.forEach(element => {
          if(element.dataset.error == EO.target.dataset.item) {
            element.classList.add("visible_error");
          }
        });
        
      }     
    }
    render() {  
      
      if(this.props.cardMode == 1) {
        return  (
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
        )
      }else {
        return  (
              <tbody> 
                        <tr>
                            <td>goodName</td>
                            <td>
                              <input type="text" defaultValue={this.props.goodName} onChange={this.itemChanged} data-item="goodName"/>
                              <label className="IShop-card_error" data-error="goodName">goodName is required</label>
                            </td>                           
                        </tr>
                        <tr>
                            <td>price</td>
                            <td>
                              <input type="text" defaultValue={this.props.price} onChange={this.itemChanged} data-item="price"/>
                              <label className="IShop-card_error" data-error="price">price is required</label>
                            </td>
                        </tr> 
                        <tr>
                            <td>count</td>
                            <td>
                              <input type="text" defaultValue={this.props.count} onChange={this.itemChanged} data-item="count"/>
                              <label className="IShop-card_error" data-error="count">count is required</label>
                            </td>
                        </tr>
                        <tr>
                            <td>url</td>
                            <td>
                              <input type="text" defaultValue={this.props.url} onChange={this.itemChanged} data-item="url"/>
                              <label className="IShop-card_error" data-error="url">url is required</label>
                            </td>
                        </tr>
              </tbody>
        )
      }

    }

}
export default Card;