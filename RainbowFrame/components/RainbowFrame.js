import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';
import Frame from './Frame';

class RainbowFrame extends React.Component {

    static propTypes = {  
        colors: PropTypes.array,      
    };
    
    
    render() {
      let colors = this.props.colors;
      
      let FrameCode = colors.reduce((el, a, index ) =>(              
        <Frame  key={index} color={a}>{el}</Frame>
      ),this.props.children);
                       
      return(
        <div>   
          {FrameCode} 
        </div>             
       )
    }
  
  }

  export default RainbowFrame;