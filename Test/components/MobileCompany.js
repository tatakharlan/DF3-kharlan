import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';
import Card from './Card';
import {mobileEvents} from './events';
import './MobileCompany.css';
import {addUser} from '../modules/addUserBtn';
import {showBlock} from '../modules/addUserBtn';
import {showActive} from '../modules/addUserBtn';
import {showAll} from '../modules/addUserBtn';
import {mobileDeleted} from '../modules/addUserBtn';
import {mobileSave} from '../modules/addUserBtn';
import {mobileEdited} from '../modules/addUserBtn';

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
    clients: this.props.clients,
    newClient: false,
    editedClient: null,
    dBlock:false,
    dActive: false,
  };

  componentDidMount = () => {
    mobileEvents.addListener('EAeditUser',this.mobileEdited);
    mobileEvents.addListener('EAdeleteUser',this.mobileDeleted);
    mobileEvents.addListener('EAasaveUser',this.mobileSave);
  };

  componentWillUnmount = () => {
    mobileEvents.removeListener('EAeditUser',this.mobileEdited);
    mobileEvents.removeListener('EAdeleteUser',this.mobileDeleted);
    mobileEvents.addListener('EAasaveUser',this.mobileSave);
  };
  mobileEdited = (id) => {
    this.setState({editedClient: id});
  }
  mobileSave = (nci) => {    
    let index = this.state.clients.findIndex(client => client.id==nci.id);
    let newClients=[...this.state.clients]; 
    if(index !==-1){  
      newClients[index] =nci;
    }else {
      newClients.push(nci);
      this.setState({newClient: false});
    }
    this.setState({clients: newClients});    
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
  showAll =  () => {
    this.setState({dBlock: false});
    this.setState({dActive: false});
  }
  showActive =  () => {
    this.setState({dBlock: false});
    this.setState({dActive: true});
  }
  showBlock =  () => {
    this.setState({dBlock: true});
    this.setState({dActive: false});
  }
  addUserAct =(edit, newCl) => {
    this.setState({editedClient:edit});
    this.setState({newClient:newCl});
  }
  render() {

    console.log("MobileCompany render");

    var clientsCode=this.state.clients.map( client => {
      return (((this.state.dBlock)&&(client.status == "block")) || ((this.state.dActive)&&(client.status == "active")) || ((!(this.state.dActive)&&(!(this.state.dBlock)))) )&&
         <MobileClient key={client.id} id={client.id} info={client}/>;
      }
    );    
      let newClients=[...this.state.clients];
      let editClient = [];
      if(this.state.editedClient) {
        editClient = newClients.filter(client=>client.id == this.state.editedClient );
      }else {
        let editClientVal = newClients[0];
        for(let key in editClient) {
          editClientVal[key] = "";
        }
        editClient = [{editClientVal}];
        editClient[0].id = parseInt(Math.max(...newClients.map(user => user.id)) + 1);         
      }
      let cardCode = editClient.map( client => {
        return <Card key={client.id} id= {client.id} newClient = {this.state.newClient} info={client}  editedClient = {this.state.editedClient} /> 
      }
      )  
    return (
      <div className='MobileCompany'>
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
        <input type="button" value="Добавить" onClick={addUser} />  
        {
            ((this.state.newClient)||(this.state.editedClient)) &&
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
