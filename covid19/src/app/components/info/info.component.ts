import { Component, OnInit, OnDestroy, ViewEncapsulation, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class InfoComponent implements OnInit,OnDestroy {
  constructor( @Inject(DOCUMENT) private _document ) {}
  ngOnInit() {
      this._document.body.classList.add('bodybg-color');
      // OR you can Add inline style css with the help of code below
      // this._document.body.style.background = '#fff';
  }
    ngOnDestroy() {
      // remove the class form body tag
      this._document.body.classList.add('bodybg-color');
    }
  }  