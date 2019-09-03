import { Component, OnInit } from '@angular/core';
import {
  TweenMax, Back, Bounce, Circ, Cubic, Ease, EaseLookup, Elastic,
  Power0, Power1, Power2, Power3, Power4
} from 'gsap';

@Component({
  selector: 'app-tweenmax-easing',
  templateUrl: './tweenmax-easing.component.html',
  styleUrls: ['../tweenmax-demos/index.css', './tweenmax-easing.component.css']
})
export class TweenmaxEasingComponent implements OnInit {

  constructor() { }

  easing: any[] = [];

  ngOnInit() {
    this.easing = [{
      className: 'Back', target: Back
    }, {
      className: 'Bounce', target: Bounce
    }, {
      className: 'Circ', target: Circ
    // }, {
    //   className: 'Cubic', target: Cubic
    }, {
      className: 'Ease', target: Ease
    // }, {
    //   className: 'EaseLookup', target: EaseLookup
    }, {
      className: 'Elastic', target: Elastic
    }, {
      className: 'Power0', target: Power0
    }, {
      className: 'Power1', target: Power1
    }, {
      className: 'Power2', target: Power2
    }, {
      className: 'Power3', target: Power3
    }, {
      className: 'Power4', target: Power4
    }];
  }

  ngAfterViewInit() {
    for (const itrator of this.easing) {
      TweenMax.to(`.${itrator.className} .easeIn`, 4, { x: 600, repeat: -1, repeatDelay: 1, yoyo: false, ease: itrator.target.easeIn });
      TweenMax.to(`.${itrator.className} .easeInOut`, 4, { x: 600, repeat: -1, repeatDelay: 1, yoyo: false, ease: itrator.target.easeInOut });
      TweenMax.to(`.${itrator.className} .easeOut`, 4, { x: 600, repeat: -1, repeatDelay: 1, yoyo: false, ease: itrator.target.easeOut });
    }
  }

}
