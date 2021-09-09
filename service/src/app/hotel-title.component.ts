import { Component, Input, OnInit, Output ,EventEmitter,ViewChild} from '@angular/core';

import { TicketService } from './tikets.service';

@Component({
  moduleId: module.id,
  selector: 'cash',
  templateUrl: 'hotel-title.component.html',
  styleUrls: ['hotel-title.component.css']
})
export class HotelTitleComponent implements OnInit {

  private tickets:TicketService;

  @ViewChild("ticketCount") ticketCountRef;
  constructor(_tickets:TicketService) {
    this.tickets=_tickets;
  }
  getTicketsList():Array<number> {
    return this.tickets.getTicketsList();
  }
  getTicket(s:number):void {
    this.tickets.getTicket(s);
  }
  ngOnInit():void {
   
  }

}
