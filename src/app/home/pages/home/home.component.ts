import { Component, OnInit } from '@angular/core';
import { Product } from '../../../products/interface/product';
import { ProductService } from '../../../products/services/product.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products!: Product[];

  responsiveOptions: any;

  items!: MenuItem[];

  home!: MenuItem;

  constructor(private productService: ProductService) {
    this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
  }

  ngOnInit(): void {

    this.home = {label: ' Home' , icon: 'pi pi-home'};
    this.productService.getProductsSmall().subscribe(products => {
      this.products = products;
    });
  }

}
