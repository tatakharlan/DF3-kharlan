import React from 'react';

  function WithRainbowFrame(colors) {   
    return function(Component) {
      return props => (
        colors.reduce((el, color, index ) =>(              
          <div key={index} style={{border:"solid 10px "+color,padding:"10px"}}>{el}</div> 
        ),<Component {...props} />)      
      );
    };
  }

  export { WithRainbowFrame };