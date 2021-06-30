import React from 'react';
import PropTypes from 'prop-types';

class DoubleButton extends React.Component {

    static propTypes = {  
        caption1: PropTypes.string.isRequired,
        caption2: PropTypes.string.isRequired,
        cbPressed: PropTypes.func.isRequired    
    };
    cbPressedBtn = (num) => {        
        alert(num);
    }
   
    render() {
        return (
            <div>
                <button onClick={() => this.cbPressedBtn(1)}>{this.props.caption1}</button>
                {this.props.children}
                <button onClick={() => this.cbPressedBtn(2)}>{this.props.caption2}</button>
            </div>
        )
      
    }

  }

  export default DoubleButton;