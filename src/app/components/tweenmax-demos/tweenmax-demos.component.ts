import { Component, OnInit } from '@angular/core';
import { TweenMax, Power1 } from 'gsap';

@Component({
  selector: 'app-tweenmax-demos',
  templateUrl: './tweenmax-demos.component.html',
  styleUrls: ['./tweenmax-demos.component.css', './index.css']
})
export class TweenmaxDemosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.run();
  }

  run() {
    TweenMax.staggerTo('.box', 1.5, {
      x: 0, y: 400, rotation: 360, repeat: -1, repeatDelay: 1, yoyo: true, yoyoEase: true, ease: Power1.easeOut
    }, 0.1);
  }

}
