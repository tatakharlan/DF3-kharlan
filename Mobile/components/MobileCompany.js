import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';
import Card from './Card';
import {mobileEvents} from './events';
import './MobileCompany.css';

class MobileCompany extends React.PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    clients:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        fam: PropTypes.string.isRequired,
        im: PropTypes.string.isRequired,
        otch: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
        status:PropTypes.string.isRequired,
      })
    ),
  };

  state = {
    name: this.props.name,
    clients: this.props.clients,
    editMode: false,
  };

  setName1 = () => {
    this.setState({name:'МТС'});
  };

  setName2 = () => {
    this.setState({name:'Velcom'});
  };
  
  setBalance = (clientId,newBalance) => {
    let changed=false;
    let newClients=[...this.state.clients]; // копия самого массива клиентов
    newClients.forEach( (c,i) => {
      if ( c.id==clientId && c.balance!=newBalance ) {
        let newClient={...c}; // копия хэша изменившегося клиента
        newClient.balance=newBalance;
        newClients[i]=newClient;
        changed=true;
      }
    } );
    if ( changed )
      this.setState({clients:newClients});
  };  
  
  componentDidMount = () => {
    mobileEvents.addListener('EAeditUser',this.mobileEdited);
    mobileEvents.addListener('EAdeleteUser',this.mobileDeleted);
  };

  componentWillUnmount = () => {
    mobileEvents.removeListener('EAeditUser',this.mobileEdited);
    mobileEvents.removeListener('EAdeleteUser',this.mobileDeleted);
  };
  mobileEdited = (id) => {
    let newClients=[...this.state.clients]; 
    newClients.forEach( (c,i) => {
      if ( c.id==id) {
        let editClient={...c};        
      }
    });
    this.setState({editMode:true});
  }
  mobileDeleted= (id) => {
    let newClients=[...this.state.clients]; 
    newClients.forEach( (c,i) => {
      if ( c.id==id) {
        newClients.splice(i, 1) ;       
      }
    });
    this.setState({clients:newClients});
  }
  render() {

    console.log("MobileCompany render");

    var clientsCode=this.state.clients.map( client => {
        let info={fam:client.fam,im:client.im,otch:client.otch, balance: client.balance, status:client.status};
        return <MobileClient key={client.id} id={client.id} info={info} />;
      }
    );

    let cardClient = [];
    let newClients=[...this.state.clients];
      if(this.state.editMode) {
        cardClient = newClients.filter( v =>  (v.id == this.state.editedGood));
      } 
      if (this.state.newGood == true) {
        cardClient = [{goodName: "",code:null,count:null, price: null, url: ""}]        
      }
    let cardCode = cardClient.map( v =>
      <Card key={v.code} editedGood = {this.state.editedGood} selectedGood = {this.state.selectedGood} cardMode = {this.state.cardMode}
              goodName= {v.goodName} newGood={this.state.newGood} 
              cbitemChanged = {this.itemChanged} cbSaved={this.goodSaved}                 
              goodNameError = {this.state.goodNameError} 
              countError = {this.state.countError} urlError = {this.state.urlError}
              priceError = {this.state.priceError} 
              count= {v.count} code={v.code} price={v.price} url={v.url}  cbCancel={this.EditModeCancel}
      />      
    )
    return (
      <div className='MobileCompany'>
        <input type="button" value="=МТС" onClick={this.setName1} />
        <input type="button" value="=Velcom" onClick={this.setName2} />
        <div className='MobileCompanyName'>Компания &laquo;{this.state.name}&raquo;</div>
        <div>
          <input type="button" value="Все" onClick={this.showAll} />
          <input type="button" value="Активные" onClick={this.showActive} />
          <input type="button" value="Заблокированные" onClick={this.showBlock} />
        </div>
        <table>
          <thead>
          <tr>
            <th>фамилия</th>
            <th>имя</th>
            <th>отчетство</th>
            <th>баланс</th>
            <th>статус</th>
            <th></th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          {clientsCode}
          </tbody>
          </table>
        <input type="button" value="Добавить" onClick={this.addUser} />  
        {
            ((this.state.editMode)) &&
                <div className="Card">                  
                  {cardCode}                  
                </div>
          }

      </div>
    )
    ;

  }

}

export default MobileCompany;
