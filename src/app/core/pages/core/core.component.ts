import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../carts/service/cart.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cartService.initCartsListener();
    this.cartService.getListCarts();
  }

}
