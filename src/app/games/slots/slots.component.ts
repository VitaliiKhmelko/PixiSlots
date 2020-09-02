import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as slots from './slots.js';

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['slots.component.scss']
})
export class SlotsComponent implements OnInit, AfterViewInit {
  @ViewChild('container') container: ElementRef<HTMLDivElement>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const view = slots.view;
    this.container.nativeElement.appendChild(view);
  }

  spin(): void {
    slots.startPlayGame();
  }

}
