import React from 'react';

class MobileClientView extends React.PureComponent {

    render() {
        console.log("MobileClient id="+this.props.id+" render");    
        return (          
              
              <tr>
                <td>{this.props.info.fam}</td>
                <td>{this.props.info.im}</td>
                <td>{this.props.info.otch}</td>
                <td>{this.props.info.balance}</td>
                <td>{this.props.info.status}</td>
                <td><input type="button" value="Редактировать" onClick={this.props.editUser} /></td>
                <td><input type="button" value="Удалить" onClick={this.props.deleteUser} /></td>
              </tr>
        );
    
      }



}



export default MobileClientView;