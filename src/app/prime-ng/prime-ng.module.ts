import { NgModule } from '@angular/core';

import {BadgeModule} from 'primeng/badge';
import {ButtonModule} from 'primeng/button';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import {ChipModule} from 'primeng/chip';
import {DataViewModule} from 'primeng/dataview';
import {DialogModule} from 'primeng/dialog';
import {DividerModule} from 'primeng/divider';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {MenubarModule} from 'primeng/menubar';
import {MessageModule} from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {OrderListModule} from 'primeng/orderlist';
import {PasswordModule} from 'primeng/password';
import {RatingModule} from 'primeng/rating';
import {SkeletonModule} from 'primeng/skeleton';
import {SplitButtonModule} from 'primeng/splitbutton';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';


@NgModule({
  exports: [
    BadgeModule,
    ButtonModule,
    BreadcrumbModule,
    CardModule,
    CarouselModule,
    ChipModule,
    DataViewModule,
    DialogModule,
    DividerModule,
    DropdownModule,
    InputTextModule,
    MenubarModule,
    MessageModule,
    MessagesModule,
    OrderListModule,
    PasswordModule,
    RatingModule,
    SkeletonModule,
    SplitButtonModule,
    TableModule,
    ToastModule
  ]
})
export class PrimeNgModule { }

