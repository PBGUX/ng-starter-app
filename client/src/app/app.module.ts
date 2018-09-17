import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

import { AppComponent, AppRoutingModule } from '@app/index';

import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LoadingBarHttpClientModule, LoadingBarRouterModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
