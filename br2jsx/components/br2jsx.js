import React from 'react';
import PropTypes from 'prop-types';

import './br2jsx.css';


class BR2JSX extends React.Component {

    static propTypes = {  
        text: PropTypes.string.isRequired
    };
    handleClick(temp) {
      let textArr = temp.split(/<br *\/?>/);     
      return textArr.reduce((el, a, index) =>( (index == (textArr.length-1))?el.concat(a, "" ):el.concat(a,<br key= {index}/> )), []);      
    }
    
    render() {      
      return <div className= "BR2JSX">{this.handleClick(this.props.text)} </div>       
    }
  
  }
/*

render() { 
      let words = this.props.text.split(/<br *\/?>/);
      let parts=[];
      words.forEach((word, i) => {
        if (i) {          
          parts.push(<br>);
          parts.push(word);
        }
        
      });     
      return <div className= "BR2JSX">{parts} </div>
*/
  export default BR2JSX;