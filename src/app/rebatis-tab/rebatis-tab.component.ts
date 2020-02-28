import { Component, OnInit, Input, Output } from '@angular/core';
import { Tab } from '../core/tab.model';
import { style, state, transition, animation, animate, trigger } from '@angular/animations';

@Component({
  selector: 'rebatis-tab',
  templateUrl: './rebatis-tab.component.html',
  styleUrls: ['./rebatis-tab.component.css'],
  animations: [
    trigger('stateCreate', [
      // state('start', style ({
      // })),
      // state('init', style({
      // })),
      transition('void => *',[
        style({transform: 'translateX(-100%)'}), 
        animate('100ms ease-out')])
    ])
    
  ]
})
export class RebatisTabComponent implements OnInit {

  @Input() tab: Tab;

  @Output() onCloseClick: Event

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }
}
