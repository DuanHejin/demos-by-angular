import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IssueService } from 'src/app/services/issue.service';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css']
})
export class IssueDetailComponent implements OnInit {

  issue: any = {};
  paramSubscription: Subscription;

  constructor(
    private cartService: CartService,
    private issueService: IssueService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.paramSubscription = this.route.paramMap.subscribe(async (params) => {
      this.issue = await this.issueService.getIssueById(params.get('id'));
    });
  }

  ngOnDestory() {
    if(this.paramSubscription) this.paramSubscription.unsubscribe();
  }

  onClickBuy = (issue) => {
    this.cartService.addToCart(issue);
  }
}
