"use strict";
import MobileCompany from '.././components/MobileCompany';

function  addUser (){
    MobileCompany.addUserAct(null, true);
}

  function  mobileEdited(id){
    this.setState({editedClient: id});
  }
  function  mobileSave(nci){    
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
  function  mobileDeleted(id){
    let newClients=[...this.state.clients]; 
    newClients.forEach( (c,i) => {
      if ( c.id==id) {
        newClients.splice(i, 1) ;       
      }
    });
    this.setState({clients:newClients});
  }
  function  showAll(){
    this.setState({dBlock: false});
    this.setState({dActive: false});
  }
  function  showActive(){
    this.setState({dBlock: false});
    this.setState({dActive: true});
  }
  function  showBlock(){
    this.setState({dBlock: true});
    this.setState({dActive: false});
  }
  

export {addUser};  
export {showBlock}; 
export {showActive}; 
export {showAll}; 
export {mobileDeleted}; 
export {mobileSave}; 
export {mobileEdited};