import React from 'react';
import PropTypes from 'prop-types';

import '../views/MobileClient.css';
import {mobileEvents} from './events';
import MobileClientView from '../views/MobileClientView';

class MobileClientModule extends React.PureComponent {

  static propTypes = {
    id: PropTypes.number.isRequired,
    info: PropTypes.shape({
      id: PropTypes.number.isRequired,
      fam: PropTypes.string.isRequired,
      im: PropTypes.string.isRequired,
      otch: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired,
    }),
    
  };

  
  editUser = (EO) => {     
    mobileEvents.emit('EAeditUser',this.props.id);
  }
  deleteUser = (EO) => {   
    mobileEvents.emit('EAdeleteUser',this.props.id);
  }

  render() {
    return  <MobileClientView id={this.props.id} editUser={this.editUser}  deleteUser={this.deleteUser} info={{id:this.props.info.id,fam:this.props.info.fam,status:this.props.info.status,im:this.props.info.im,otch:this.props.info.otch,balance:this.props.info.balance }}/>

  }

}

export default MobileClientModule;
