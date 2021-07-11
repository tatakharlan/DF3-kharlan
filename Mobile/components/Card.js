
import React from 'react';
import PropTypes from 'prop-types';
import {mobileEvents} from './events';


class Card extends React.PureComponent {
  
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
      
        return  (
          <div>
              <table className="IShop-card">
                  <tbody> 
                        <tr>
                            <td>fam</td>
                            <td>
                              <input type="text" defaultValue={this.props.info.fam} name="fam" ref={this.setNewFamRef}/>
                            </td>                           
                        </tr>
                        <tr>
                            <td>im</td>
                            <td>
                              <input type="text" defaultValue={this.props.info.im} name="im" ref={this.setNewImRef}/>
                            </td>
                        </tr> 
                        <tr>
                            <td>otch</td>
                            <td>
                            <input type="text" defaultValue={this.props.info.otch} name="otch" ref={this.setNewOtchRef}/>
                            </td>
                        </tr>
                        <tr>
                            <td>balance</td>
                            <td>
                            <input type="text" defaultValue={this.props.info.balance} name="balance" ref={this.setNewBalanceRef}/>                            
                            </td>
                        </tr>
                        <tr>
                            <td>status</td>
                            <td>
                            <input type="text" defaultValue={this.props.info.status} name="status" ref={this.setNewStatusRef}/>                            
                            </td>
                        </tr>
                  </tbody>
                </table>
              <div>
              <button type="button" onClick={this.saveClient}>{(this.props.newGood)?"Add":"Save"}</button>
              
            </div>
            </div>
        )
      

    }

}
export default Card;