import { Component } from '@angular/core';
import { SpriteComponent } from './sprite.component';

@Component({
  moduleId: module.id,
  selector: 'hotel',
  templateUrl: 'hotel.component.html',
  styleUrls: ['hotel.component.css']
})
export class HotelComponent {

  private url:string="http://fe.it-academy.by/Examples/cards2.png";
  private offsetx:number = 0;
  private height:number=190;
  private width:number=140;
  private offsety:number=0;
  getUrl():string {
    return this.url;
  };
  getHeight():number {
    return this.height;
  };
  getWidth():number {
    return this.width;
  };
  getOffsetX():number {
    return this.offsetx;
  };
  getOffsetY():number {
    return this.offsety;
  };
  clickedCard():void {
    this.offsetx-=this.height;
  }
}
