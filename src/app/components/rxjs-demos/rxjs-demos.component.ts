import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-demos',
  templateUrl: './rxjs-demos.component.html',
  styleUrls: ['./rxjs-demos.component.css']
})

export class RxjsDemosComponent implements OnInit {

  constructor() { }

  cases: Array<RxjsCase> = [];

  ngOnInit() {
    this.cases.push({ label: 'Run Case 1', method: this.onClickCase1, desc: 'sync observable' });
    this.cases.push({ label: 'Run Case 2', method: this.onClickCase2 });
  }

  onClickCase1() {
    console.log('onClickCase1');
    const source$ = of(1, 2, 3);
    source$.pipe(
      filter(x => x > 1),
      map(x => x * 2)
    ).subscribe(console.log);
  }

  onClickCase2() {
    console.log('onClickCase2');
  }

}

interface RxjsCase {
  label: string,
  method: any,
  desc?: string
}
