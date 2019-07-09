import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IssueListComponent } from './components/issue-list/issue-list.component';
import { IssueDetailComponent } from './components/issue-detail/issue-detail.component';
import { HomeComponent } from './components/home/home.component';

import { AppRoutingModule } from './app-routing.module';
import { SharedCommonModule } from './components/common/shared-common.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IssueListComponent,
    IssueDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
