import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Output()
  clickNav: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
  }

  onClickNav() {
    this.clickNav.emit();
  }
}
