import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  constructor(private http: HttpClient) { }

  getIssueList() {
    return this.http.get('/assets/issue/list.json');
  }

  async getIssueById(id) {
    const list: any = await this.http.get('/assets/issue/list.json').toPromise();
    return list.find(item => item.id === id);
  }
}
