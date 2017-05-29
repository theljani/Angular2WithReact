import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {MainComponent} from './main-component/main.component';
import {ProductsFilterPipe} from './main-component/_pipes/products.filter.pipe';
import {AccountModule} from './account/account.module';
import {DashboardModule} from './dashboard/dashboard.module';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'home', component: HomeComponent,
      },
      {
        path: '', component: HomeComponent,
      }
    ]),
    AccountModule,
    DashboardModule
  ],
  declarations: [
    MainComponent,
    HomeComponent,
    ProductsFilterPipe
  ],
  bootstrap: [MainComponent]
})
export class MainModule {
}
