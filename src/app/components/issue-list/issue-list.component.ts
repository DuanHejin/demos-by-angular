import { Component, OnInit } from '@angular/core';
import { IssueService } from 'src/app/services/issue.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  constructor(private issueService: IssueService) { }

  issueList: Observable<any>;

  ngOnInit() {
    this.issueList = this.issueService.getIssueList();
  }

}
