import React from 'react';

class MobileCompanyRender extends React.PureComponent {
    render() {

        console.log("MobileCompany render");
    
        var clientsCode=this.props.clients.map( client => {
          return (((this.props.dBlock)&&(client.status == "block")) || ((this.props.dActive)&&(client.status == "active")) || ((!(this.props.dActive)&&(!(this.props.dBlock)))) )&&
             <MobileClientModule key={client.id} id={client.id} info={client}/>;
          }
        );    
          let newClients=[...this.props.clients];
          let editClient = [];
          if(this.props.editedClient) {
            editClient = newClients.filter(client=>client.id == this.props.editedClient );
          }else {
            let editClientVal = newClients[0];
            for(let key in editClient) {
              editClientVal[key] = "";
            }
            editClient = [{editClientVal}];
            editClient[0].id = parseInt(Math.max(...newClients.map(user => user.id)) + 1);         
          }
          let cardCode = editClient.map( client => {
            return <CardModule key={client.id} id= {client.id} newClient = {this.state.newClient} info={client}  editedClient = {this.state.editedClient} /> 
          }
          )  
        return (
          <div className='MobileCompany'>
            <div>
              <input type="button" value="Все" onClick={this.props.showAll} />
              <input type="button" value="Активные" onClick={this.props.showActive} />
              <input type="button" value="Заблокированные" onClick={this.props.showBlock} />
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
            <input type="button" value="Добавить" onClick={this.props.addUser} />  
            {
                ((this.props.newClient)||(this.props.editedClient)) &&
                    <div className="Card">                  
                      {cardCode}                  
                    </div>
              }
    
          </div>
        )
        ;
    
      }




}



export default MobileCompanyRender;