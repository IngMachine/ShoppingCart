import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {

  items!: MenuItem[];

  home!: MenuItem;

  constructor() { }

  ngOnInit(): void {

    this.items = [
      {label: 'Products', routerLink: '/products'},
      {label: 'Poducto detalle', routerLink: '/products/id'},
    ];

    this.home = {icon: 'pi pi-home', routerLink: '/'};
  }

}
