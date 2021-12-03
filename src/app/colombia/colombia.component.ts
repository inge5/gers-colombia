import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
declare var mainFunction: any;

@Component({
  selector: 'app-colombia',
  templateUrl: './colombia.component.html',
  styleUrls: ['./colombia.component.css']
})
export class ColombiaComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformid ) { }

  ngOnInit(): void {
    if(isPlatformBrowser(this.platformid)){
      mainFunction();
      if(!localStorage.getItem('carrito')){
        localStorage.setItem('carrito', JSON.stringify([]));
      }
    }
  }

}
