import React from 'react';
import PropTypes from 'prop-types';

import './br2jsx.css';


class BR2JSX extends React.Component {

    static propTypes = {  
        text: PropTypes.string.isRequired,      
    };
    
    
    render() {
      let text="первый<br>второй<br>третий<br>последний";
      
      let cardCode = cardGood.map( v =>
        <BR2JSX key={v.code} editedGood = {this.state.editedGood} selectedGood = {this.state.selectedGood} cardMode = {this.state.cardMode}
                goodName= {v.goodName} newGood={this.state.newGood} 
                cbitemChanged = {this.itemChanged} cbSaved={this.goodSaved}                 
                goodNameError = {this.state.goodNameError} 
                countError = {this.state.countError} urlError = {this.state.urlError}
                priceError = {this.state.priceError} 
                count= {v.count} code={v.code} price={v.price} url={v.url}  cbCancel={this.EditModeCancel}
        />      
      )
      
      return;     
       
    }
  
  }

  export default BR2JSX;