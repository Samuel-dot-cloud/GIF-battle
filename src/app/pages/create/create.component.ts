import { Component, OnInit } from '@angular/core';
import { GifService } from 'src/app/core/services/gif.service';

@Component({
  selector: 'app-create',
  template: `
 <h1 class="title has-text-centered">Create a Gif</h1>

 <div class="box">
 <div class="gif-container" *ngIf="randomGif">
 <img [src]="randomGif.url">

 <div class="caption">{{caption}}</div>
 </div>

 <div class="field">
 <input type="text" class="input" [(ngModel)]="caption">
 </div>

 <a class="button is-success" (click)="saveGif()">Create</a>
 </div>
  `,
  styles: [`
.gif-container{
  position: relative;
}

  .caption{
    display: block;
    position: absolute;
    left: 20px;
    right: 20px;
    bottom: 30px;
    text-align: center;
    color: #FFF;
    font-size: 30px;
    text-transform: uppercase;
    line-height: 1;
    word-break: break-all;
    text-shadow: 1px 1px 3px #000;
  }

  .button {
    display: block;
    width: 100%;
  }

  img {
    width: 100%;
    border-radius: 3px;
  }
  `
  ]
})
export class CreateComponent implements OnInit {
  randomGif;
  caption = '';

  constructor(private gifService: GifService) { }

  ngOnInit() {
    this.gifService.getRandom()
    .subscribe(gif =>{
      this.randomGif = gif;
    })
  }

}
