import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IssueListComponent } from './components/issue-list/issue-list.component';
import { IssueDetailComponent } from './components/issue-detail/issue-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { RxjsDemosComponent } from './components/rxjs-demos/rxjs-demos.component';

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'list', component: IssueListComponent},
  {path: 'detail/:id', component: IssueDetailComponent},
  {path: 'cart', component: CartComponent},
  {path: 'rxjs', component: RxjsDemosComponent},
  {path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
