import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HotelComponent } from './hotel.component';
import { SpriteDirective } from './sprite.attr.directive';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ HotelComponent, SpriteDirective],
  providers: [],
  bootstrap: [HotelComponent]
})
export class AppModule { }
