import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SpriteComponent } from './sprite.component';
import { HotelComponent } from './hotel.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ HotelComponent, SpriteComponent],
  providers: [],
  bootstrap: [HotelComponent]
})
export class AppModule { }
