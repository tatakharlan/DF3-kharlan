import { Directive, Input, ElementRef, Attribute } from "@angular/core"; 

@Directive({ 
  selector: "[sprite-bg]", 
}) 
export class SpriteDirective { 
  @Input("sprite-bg")
  private startBg:string;
  
  private useStart:boolean = false; 

  constructor(private element: ElementRef, 
    @Attribute("sprite-url") url: string, 
    @Attribute("sprite-offset-x") offsetx: number,
    @Attribute("sprite-offset-y") offsety: number,
    @Attribute("sprite-width") width: number,
    @Attribute("sprite-height") height: number ) {
    if(url&&offsetx&&offsety&&height&&width) {
      this.element.nativeElement
      .style.backgroundImage = "url("+url+")";
      this.element.nativeElement
      .style.backgroundPositionX= offsetx;  
      this.element.nativeElement
      .style.backgroundPositionY= offsety;
      this.element.nativeElement
      .style.backgroundSize= width + "px " + height + "px";
    }else {
      this.useStart = true;      
    }
  } 
  ngAfterViewInit():void { 
    if(this.useStart === true)  {
      this.element.nativeElement
      .style.backgroundImage="url("+ this.startBg +")";
      this.element.nativeElement
      .style.backgroundPositionX= 0;  
      this.element.nativeElement
      .style.backgroundPositionY= 0;
      this.element.nativeElement
      .style.backgroundSize= "800px  800px"; 
    } 
       
  } 

}
