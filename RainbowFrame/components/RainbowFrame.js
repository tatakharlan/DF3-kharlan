import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';

class RainbowFrame extends React.Component {

    static propTypes = {  
        colors: PropTypes.array,      
    };
    
    /*
    render() {
      let colors = this.props.colors;
      
      let FrameCode = colors.reduce((el, color, index ) =>(              
        <div key={index} style={{border:"solid 10px "+color,padding:"10px"}}>{el}</div> 
      ),this.props.children);
                       
      return(
        <div>   
          {FrameCode} 
        </div>             
       )
    }
    
    render() {
      let colors = this.props.colors;
      let FrameCode = this.props.children;
      colors.forEach(color => {
        FrameCode = <div key={color} style={{border:"solid 10px "+color,padding:"10px"}}>{FrameCode}</div>
      });
      return(
        <div>   
          {FrameCode} 
        </div>             
       )
    }
  */
    render() {
      let colors = this.props.colors;
        if(colors.length == 0) {
          return this.props.children;
        }else {
          return <div style={{border:"solid 10px "+colors[0],padding:"10px"}}> <RainbowFrame colors={colors.slice(1)}>{this.props.children}</RainbowFrame></div>
        };
      
    }

  }

  export default RainbowFrame;