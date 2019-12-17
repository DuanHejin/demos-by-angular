import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class IssueService extends BaseService {

  constructor(public http: HttpClient) {
    super();
  }

  getIssueList() {
    const listUrl = 'issue/list';
    return this.http.get(this.resolveUrl(listUrl));
  }

  async getIssueById(id) {
    const list: any = await this.http.get('/assets/issue/list.json').toPromise();
    return list.find(item => item.id === id);
  }
}
