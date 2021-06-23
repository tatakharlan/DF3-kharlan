import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';


class RainbowFrame extends React.Component {

    static propTypes = {  
        colors: PropTypes.array,      
    };
    
    
    render() {
      let colors = this.props.colors;
      let colorsArrOut = colors.map((item, index) => {
        return <div key={index} style={{border:"solid 10px "+item,padding:"10px"}}>
                    {this.props.children}
               </div> ;
      })
      return(
        <div >
        {colorsArrOut}
        </div>     
       )
    }
  
  }

  export default RainbowFrame;