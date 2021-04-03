import { NgModule } from '@angular/core';

import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';

import {DividerModule} from 'primeng/divider';

import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {CaptchaModule} from 'primeng/captcha';
import { ChipModule } from 'primeng/chip';
import {SplitButtonModule} from 'primeng/splitbutton';

import {MenubarModule} from 'primeng/menubar';
import {DropdownModule} from 'primeng/dropdown';
import {DataViewModule} from 'primeng/dataview';
import {RatingModule} from 'primeng/rating';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {CarouselModule} from 'primeng/carousel';
import {DialogModule} from 'primeng/dialog';
@NgModule({
  exports: [
    CardModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    DividerModule,
    MessageModule,
    MessagesModule,
    CaptchaModule,
    MenubarModule,
    ChipModule,
    SplitButtonModule,
    DialogModule,
    DataViewModule,
    BreadcrumbModule,
    DropdownModule,
    RatingModule,
    CarouselModule
  ]
})
export class PrimeNgModule { }

