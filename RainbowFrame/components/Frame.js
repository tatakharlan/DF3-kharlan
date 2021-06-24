import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';


class Frame extends React.Component {

    static propTypes = {  
        color: PropTypes.string,      
    };
    
    
    render() {
      let color = this.props.color;

      return(
        <div  style={{border:"solid 10px "+color,padding:"10px"}}>{this.props.children}</div>             
       )
    }
  
  }

  export default Frame;