import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../../auth/service/auth.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }


  items!: MenuItem[];
  items1!: MenuItem[];

  ngOnInit(): void {
      this.items = [
        {
          label: 'Home',
          icon: 'pi pi-home',
          routerLink: 'home'
        },
        {
          label: 'Products',
          icon: 'pi pi-apple',
          routerLink: 'products'
        },
        {
          label: 'Carts',
          icon: 'pi pi-shopping-cart',
          routerLink: 'carts'
        },
        {
          label: 'Orders',
          icon: 'pi pi-chart-bar',
          routerLink: 'orders'
        },
      ];
      this.items1 = [
        {
          label: 'Profile',
          icon: 'pi pi-user'
        }
      ];
  }
  logout(): void {
    this.authService.logout();
  }
}
