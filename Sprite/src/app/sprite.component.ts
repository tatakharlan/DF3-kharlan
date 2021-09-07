import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sprite',
  templateUrl: 'sprite.component.html',
})
export class SpriteComponent {
  @Output("clicked")
  private spriteOutputEE=new EventEmitter<number>();
  
  @Input("url")
  public url:string;

  @Input("height")
  public height:number;

  @Input("width")
  public width:number;

  @Input("offset-x")
  public offsetx:number;

  @Input("offset-y")
  public offsety:number;

  clicked():void {
    this.spriteOutputEE.emit();
  }
}