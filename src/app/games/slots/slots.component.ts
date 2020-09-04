import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as slots from './slots.js';

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['slots.component.scss']
})
export class SlotsComponent implements OnInit, AfterViewInit {
  @ViewChild('container') container: ElementRef<HTMLDivElement>;
  game: { view: any; startPlay: () => void };

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    slots.load(this.container.nativeElement).then(game => {
      this.game = game;
      this.container.nativeElement.appendChild(this.game.view);
    });
  }

  startPlay(): void {
    this.game.startPlay();
  }

}
