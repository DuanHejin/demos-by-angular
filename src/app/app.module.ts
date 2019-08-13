import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { IssueListComponent } from './components/issue-list/issue-list.component';
import { IssueDetailComponent } from './components/issue-detail/issue-detail.component';
import { HomeComponent } from './components/home/home.component';

import { AppRoutingModule } from './app-routing.module';
import { SharedCommonModule } from './components/common/shared-common.module';
import { CartComponent } from './components/cart/cart.component';
import { RxjsDemosComponent } from './components/rxjs-demos/rxjs-demos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IssueListComponent,
    IssueDetailComponent,
    CartComponent,
    RxjsDemosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
