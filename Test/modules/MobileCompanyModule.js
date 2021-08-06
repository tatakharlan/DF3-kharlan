import React from 'react';
import PropTypes from 'prop-types';

import {mobileEvents} from './events';
import MobileCompanyRender from '../views/MobileCompanyRender';
let clientsArr=[ 
  {id:101, fam:"Иванов", im:"Иван", otch:"Иванович", balance:200, status: "active"}, 
  {id:105, fam:"Сидоров", im:"Сидор", otch:"Сидорович", balance:250, status: "active"}, 
  {id:110, fam:"Петров", im:"Пётр", otch:"Петрович", balance:180, status: "active"},
  {id:120, fam:"Григорьев", im:"Григорий", otch:"Григорьевич", balance:220, status: "block"},
];

class MobileCompanyModule extends React.PureComponent {

  static propTypes = {    
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
  clientsArr=[ 
    {id:101, fam:"Иванов", im:"Иван", otch:"Иванович", balance:200, status: "active"}, 
    {id:105, fam:"Сидоров", im:"Сидор", otch:"Сидорович", balance:250, status: "active"}, 
    {id:110, fam:"Петров", im:"Пётр", otch:"Петрович", balance:180, status: "active"},
    {id:120, fam:"Григорьев", im:"Григорий", otch:"Григорьевич", balance:220, status: "block"},
  ];
  state = {
    clients: this.clientsArr,
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
  
  addUser = () =>{
    this.setState({editedClient: null});
    this.setState({newClient: true});
  }

  mobileEdited = (id) => {
    this.setState({newClient: false});
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
  return (<MobileCompanyRender clients={this.state.clients} newClient={this.state.newClient} dBlock={this.state.dBlock} dActive={this.state.dActive} 
    editedClient={this.state.editedClient} addUser={this.addUser} showActive={this.showActive} showBlock={this.showBlock} showAll={this.showAll}/>);
  }

}

export default MobileCompanyModule;
