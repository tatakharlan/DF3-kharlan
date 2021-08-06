import React from 'react';

class CardView extends React.PureComponent {

    render() {     
      
        return  (
          <div>
              <table className="IShop-card">
                  <tbody> 
                        <tr>
                            <td>fam</td>
                            <td>
                              <input type="text" defaultValue={this.props.info.fam} name="fam" ref={this.props.setNewFamRef}/>
                            </td>                           
                        </tr>
                        <tr>
                            <td>im</td>
                            <td>
                              <input type="text" defaultValue={this.props.info.im} name="im" ref={this.props.setNewImRef}/>
                            </td>
                        </tr> 
                        <tr>
                            <td>otch</td>
                            <td>
                            <input type="text" defaultValue={this.props.info.otch} name="otch" ref={this.props.setNewOtchRef}/>
                            </td>
                        </tr>
                        <tr>
                            <td>balance</td>
                            <td>
                            <input type="text" defaultValue={this.props.info.balance} name="balance" ref={this.props.setNewBalanceRef}/>                            
                            </td>
                        </tr>
                        <tr>
                            <td>status</td>
                            <td>
                            <input type="text" defaultValue={this.props.info.status} name="status" ref={this.props.setNewStatusRef}/>                            
                            </td>
                        </tr>
                  </tbody>
                </table>
              <div>
              <button type="button" onClick={this.props.saveClient}>{(this.props.newGood)?"Add":"Save"}</button>
              
            </div>
            </div>
        )
      

    }



}



export default CardView;