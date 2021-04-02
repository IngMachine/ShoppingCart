import { NgModule } from '@angular/core';

import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';

import {DividerModule} from 'primeng/divider';

import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {CaptchaModule} from 'primeng/captcha';

@NgModule({
  exports: [
    CardModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    DividerModule,
    MessageModule,
    MessagesModule,
    CaptchaModule
  ]
})
export class PrimeNgModule { }
