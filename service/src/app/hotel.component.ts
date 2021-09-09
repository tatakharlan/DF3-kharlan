import { Component, OnInit } from '@angular/core';

import { TicketService } from './tikets.service';

@Component({
  moduleId: module.id,
  selector: 'hotel',
  templateUrl: 'hotel.component.html',
  styleUrls: ['hotel.component.css']
})
export class HotelComponent implements OnInit {

  private tickets:TicketService;

  constructor(_tickets:TicketService) {
    this.tickets=_tickets;
  }
 
  getFree():number {
    return this.tickets.getFree();
  };
  getAll():number {
    return this.tickets.getAll();
  };
  getBusy():number {
    return this.tickets.getBusy();
  };

  ngOnInit():void {
   
  }
}
