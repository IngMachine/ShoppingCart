import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../../products/interface/product';
import { ProductService } from '../../../products/services/product.service';
import { MenuItem } from 'primeng/api';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/ngrx/app.reducer';
import { DeactivateLoadingAction } from '../../../ngrx/actions/ui-loading.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  subscriptionUI: Subscription;

  products!: Product[];

  responsiveOptions: any;

  items!: MenuItem[];

  home!: MenuItem;

  loading: boolean;

  constructor(
    private productService: ProductService,
    private store: Store<AppState>
  ) {
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
    this.subscriptionUI = this.store.select('uiLoading')
              .subscribe( uiLoading => this.loading = uiLoading.isLoading );
    this.productService.getProductsSmall().subscribe(products => {
      this.products = products;
      this.store.dispatch(new DeactivateLoadingAction() );
    });
  }

  ngOnDestroy(): void {
    this.subscriptionUI.unsubscribe();
  }

}
