import React from 'react';
import PropTypes from 'prop-types';

import './Good.css';

class Good extends React.Component {
  
    static propTypes = {  
      cbDeleted: PropTypes.func.isRequired, 
      cbSelected: PropTypes.func.isRequired,      
      code: PropTypes.number.isRequired,
      goodName: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      selectedGood:PropTypes.number,
    };
    goodClicked = ()=> {
      this.props.cbSelected(this.props.code);
    }
    goodDeleted = (EO) => {      
      this.props.cbDeleted(this.props.code); 
      EO.stopPropagation();      
    }
    render() {     
      return  (
        <tr className= {((this.props.selectedGood == this.props.code)? "IShop-table-row_selected" : "")} key = {this.props.code} onClick= {this.goodClicked}>
          <td>{this.props.goodName}</td>
          <td>{this.props.price}</td>
          <td>{this.props.count}</td>
          <td>{this.props.url}</td>
          <td>            
            <input type="button" onClick= {this.goodDeleted} value= 'Удалить'/>
          </td>
        </tr>


      )
  }
}
export default Good;