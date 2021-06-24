import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';


class RainbowFrame extends React.Component {

    static propTypes = {  
        colors: PropTypes.array,      
    };
    
    
    render() {
      let colors = this.props.colors;
      let colorsArrOut;  
      colorsArrOut = colors.map((item, index) => {                        
         return (index==0) &&<div key={index} style={{border:"solid 10px "+item,padding:"10px"}}>
          {
          colorsArrOut = colors.map((item, index) => {                        
            return (index==1) &&<div key={index} style={{border:"solid 10px "+item,padding:"10px"}}>
              
              {
          colorsArrOut = colors.map((item, index) => {                        
            return (index==2) &&<div key={index} style={{border:"solid 10px "+item,padding:"10px"}}>
                  
                  {
              colorsArrOut = colors.map((item, index) => {                        
                return (index==3) &&<div key={index} style={{border:"solid 10px "+item,padding:"10px"}}>
                  
                  {
              colorsArrOut = colors.map((item, index) => {                        
                return (index==4) &&<div key={index} style={{border:"solid 10px "+item,padding:"10px"}}>
                  
                  {
              colorsArrOut = colors.map((item, index) => {                        
                return (index==5) &&<div key={index} style={{border:"solid 10px "+item,padding:"10px"}}>
                  
                        {
                    colorsArrOut = colors.map((item, index) => {                        
                      return (index==6) &&<div key={index} style={{border:"solid 10px "+item,padding:"10px"}}>
                        
                        {this.props.children}
                        
                        </div>          
                    })
                  }
                  
                  </div>          
              })
            }
                  
                  </div>          
              })
            }
                  
                  </div>          
              })
            }
              
              </div>          
          })
        }
              
              </div>          
          })
        }
          </div>          
      })
      
/*
      colorsArrOut = colors.map((color, n) => {                        
        colorsArrOut = colors.map((item, index) => {                        
          return (n) &&<div key={index} style={{border:"solid 10px "+item,padding:"10px"}}>
            {
              colorsArrOut = colors.map((item, index) => { 
                return (n-1) &&<div key={index} style={{border:"solid 10px "+item,padding:"10px"}}>
                    (n==(this.props.colors.length - 1))&& {this.props.children}
                    </div>
            }
              )
            }                             
            </div>          
        })          
      })
*/




      return(
        <div>   
          {colorsArrOut} 
        </div>             
       )
    }
  
  }

  export default RainbowFrame;