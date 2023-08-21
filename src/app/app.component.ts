

import { Component, OnInit, VERSION } from '@angular/core';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'BOUTIQUE NTAZIMBA';
  version = VERSION.full;

  constructor(
    
    private cartService:CartService) {
    //comment

    }

 
  get nbCart() {
    return this.cartService.NbProducts;
  }

 
  ngOnInit() {
    //comment
  }
}

