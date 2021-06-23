import React from 'react';
import PropTypes from 'prop-types';

import './br2jsx.css';


class BR2JSX extends React.Component {

    static propTypes = {  
        text: PropTypes.string.isRequired,      
    };
    
    
    render() {
      let text = this.props.text;
      let textArr = text.split(/<br>|<br\/>|<br \/>/);
      let textArrOut = textArr.map((item, i) => {
        return  <span key={i}>{item} {i != (textArr.length-1) ? <br/> : ''}</span>
          
      })
      console.log("result",textArr);

      return(
        <div className='BR2JSX'>
          {textArrOut}
        </div>     
       )
    }
  
  }

  export default BR2JSX;