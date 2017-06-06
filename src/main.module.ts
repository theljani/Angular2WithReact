import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {MainComponent} from './main-component/main.component';
import {ProductsFilterPipe} from './main-component/_pipes/products.filter.pipe';
import {AccountModule} from './account/account.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {HeaderComponent} from './common/header/header.component';
import {headerActions} from './common/header/_store/actions';

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
    HeaderComponent,
    MainComponent,
    HomeComponent,
    ProductsFilterPipe
  ],
  providers: [
    headerActions
  ],
  bootstrap: [MainComponent]
})
export class MainModule {
}
