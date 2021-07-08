import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';
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
    mobileEvents.addListener('EAeditUser',this.id);
    mobileEvents.addListener('EAdeleteUser',this.id);
  };

  componentWillUnmount = () => {
    mobileEvents.removeListener('EAeditUser',this.id);
    mobileEvents.removeListener('EAdeleteUser',this.id);
  };


  render() {

    console.log("MobileCompany render");

    var clientsCode=this.state.clients.map( client => {
        let info={fam:client.fam,im:client.im,otch:client.otch, balance: client.balance, status:client.status};
        return <MobileClient key={client.id} id={client.id} info={info} />;
      }
    );

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
      </div>
    )
    ;

  }

}

export default MobileCompany;
