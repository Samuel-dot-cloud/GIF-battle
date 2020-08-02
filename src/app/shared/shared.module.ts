import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifComponent } from './components/gif/gif.component';



@NgModule({
  declarations: [GifComponent],
  imports: [
    CommonModule
  ],
  exports:[GifComponent]
})
export class SharedModule { }
