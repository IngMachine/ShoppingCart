import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../../auth/service/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/ngrx/app.reducer';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
})
export class MenuBarComponent implements OnInit, OnDestroy {
  authSubscrition: Subscription;
  countProducts: number;

  constructor(
    public authService: AuthService,
    private store: Store<AppState>
  ) {}

  items!: MenuItem[];
  items1!: MenuItem[];
  username: string;

  ngOnInit(): void {
    this.getItems();
    this.getCountProducts();

    this.authSubscrition = this.store
      .select('auth')
      .pipe(filter((auth) => auth.user != null))
      .subscribe((auth) => {
        this.username = auth.user.username;
      });
  }

  ngOnDestroy(): void {
    this.authSubscrition.unsubscribe();
  }

  logout(): void {
    this.authService.logout();
  }

  getCountProducts(){
    // conteo para la cantidad de productos agregados al carrrito
    this.store.select('cartProducts')
    .subscribe(
      data => {
        this.countProducts = data.products.length === 0 ? 0 : data.products.length  ;
      }
    );
  }

  getItems() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: 'home',
      },
      {
        label: 'Products',
        icon: 'pi pi-apple',
        routerLink: 'products',
      },
      {
        label: 'Carts',
        icon: 'pi pi-shopping-cart',
        routerLink: 'carts',
      },
      {
        label: 'Orders',
        icon: 'pi pi-chart-bar',
        routerLink: 'orders',
      },
    ];
    this.items1 = [
      {
        label: 'Profile',
        icon: 'pi pi-user',
      },
    ];
  }

  
}
