import { Injectable } from "@angular/core";

@Injectable()
export class TicketService {

  public ticketArray:Array<number> = [1,2,3,4,5,6,7,8,9,10,11,12];
  public ticketBusyArray:Array<number> = [];
  public ticketFreeArray:Array<number>= [1,2,3,4,5,6,7,8,9,10,11,12];
  public freeArr:Array<number> =[];

  getTicket(s:number):void {
    let randomIndex:number
      =Math.floor(Math.random()*this.ticketFreeArray.length);
    let solded:Array<number> = this.ticketFreeArray.slice();
    let checkSolded = solded.splice(randomIndex,s);
    let addToArr:number = 1; 
    if(checkSolded.length < s) {
      addToArr = 0;
    }else {
      for(let i:number=0; i<checkSolded.length; i++){
        let m:number = i + 1;
        if(m < checkSolded.length ) {
          if (checkSolded[m] - checkSolded[i] !==1) {
            addToArr = 0;
           } 
        }
        
      }    
    } 
    
    if(addToArr == 1) {
      this.freeArr = checkSolded;
      this.ticketFreeArray.splice(randomIndex,s);
      for(let i=0; i< this.freeArr.length; i++){  
        this.ticketBusyArray.push(this.freeArr[i]);
      }
    }else {
      console.log("net takih mest");
    }

  }
  getTicketsList():Array<number> {    
    return this.freeArr        
  }
  getFree():number {
    return this.ticketFreeArray.length
  }
  getAll():number {
    return this.ticketArray.length
  }
  getBusy():number {
    return this.ticketBusyArray.length
  }
}
