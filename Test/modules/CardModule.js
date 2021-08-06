
import React from 'react';
import PropTypes from 'prop-types';
import {mobileEvents} from './events';
import CardView from  '../views/CardView';

class CardModule extends React.PureComponent {
  
    static propTypes = {
      cardMode:PropTypes.number,
      editedClient:PropTypes.number, 
      newClient:PropTypes.bool,
      id: PropTypes.number,
      info: PropTypes.shape({
        id: PropTypes.number,
        fam: PropTypes.string,
        im: PropTypes.string,
        otch: PropTypes.string,
        balance: PropTypes.number,
        status: PropTypes.string,
      })
    };

    NewFamRef = null;
    setNewFamRef = (ref) => {
      this.NewFamRef=ref;
    }; 
    NewImRef = null;
    setNewImRef = (ref) => {
      this.NewImRef=ref;
    };
    NewOtchRef =null;
    setNewOtchRef= (ref) => {
      this.NewOtchRef=ref;
    };
    NewBalanceRef =null;
    setNewBalanceRef= (ref) => {
      this.NewBalanceRef=ref;
    };
    NewStatusRef =null;
    setNewStatusRef= (ref) => {
      this.NewStatusRef=ref;
    };

    saveClient = ()=>{
      let newClientInfo= {
        ...this.props.info,
        id : this.props.info.id,
        fam : this.NewFamRef.value,
        im : this.NewImRef.value,
        otch : this.NewOtchRef.value,
        status : this.NewStatusRef.value,
        balance : parseInt(this.NewBalanceRef.value)
      } 
      if(isNaN(newClientInfo.balance) ) {
        newClientInfo.balance = 0;
      }
      mobileEvents.emit('EAasaveUser',newClientInfo);
    }
    render() {
    return (<CardView id={this.props.id} saveClient={this.saveClient} cardMode={this.props.cardMode}
       editedClient={this.props.editedClient} newClient={this.props.newClient}
        info={{id:this.props.info.id,fam:this.props.info.fam,status:this.props.info.status,im:this.props.info.im,otch:this.props.info.otch,balance:this.props.info.balance }}
        setNewFamRef = {this.setNewFamRef} setNewImRef = {this.setNewImRef} setNewOtchRef={this.setNewOtchRef}
        setNewBalanceRef={this.setNewBalanceRef} setNewStatusRef ={this.setNewStatusRef}
        />);
      }
    

}
export default CardModule;