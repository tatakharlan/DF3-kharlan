import React from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';
import {mobileEvents} from './events';

class MobileClient extends React.PureComponent {

  static propTypes = {
    id: PropTypes.number.isRequired,
    info: PropTypes.shape({
      fam: PropTypes.string.isRequired,
      im: PropTypes.string.isRequired,
      otch: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired,
    }),
    
  };

  state = {
    info: this.props.info,
  };

  componentWillReceiveProps = (newProps) => {
    //console.log("MobileClient id="+this.props.id+" componentWillReceiveProps");
    this.setState({info:newProps.info});
  };

  editUser = (EO) => {     
    mobileEvents.emit('EAeditUser',this.props.id);
  }
  deleteUser = (EO) => {   
    mobileEvents.emit('EAdeleteUser',this.props.id);
  }

  render() {

    console.log("MobileClient id="+this.props.id+" render");
    
    return (            
          <tr className='MobileClient'>
            <td>{this.state.info.fam}</td>
            <td>{this.state.info.im}</td>
            <td>{this.state.info.otch}</td>
            <td>{this.state.info.balance}</td>
            <td>{this.state.info.status}</td>
            <td><input type="button" value="Редактировать" onClick={this.editUser} /></td>
            <td><input type="button" value="Удалить" onClick={this.deleteUser} /></td>
          </tr>
    );

  }

}

export default MobileClient;
