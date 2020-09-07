import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as slots from './slots';
import * as PIXI from 'pixi.js';
import { WindowRefService } from 'src/app/services/window-ref.service';

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['slots.component.scss']
})
export class SlotsComponent implements OnInit, AfterViewInit {
  @ViewChild('container') container: ElementRef<HTMLDivElement>;
  game: { app: PIXI.Application; startPlay: () => void };
  originalWidth: number;

  constructor(private window: WindowRefService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.originalWidth = this.container.nativeElement.clientWidth;

    slots.load(this.container.nativeElement).then(game => {
      this.game = game;
      this.container.nativeElement.appendChild(this.game.app.view);
    });

    window.onresize = () => this.scaleGame();
  }

  startPlay(): void {
    this.game.startPlay();
  }

  private scaleGame(): void {
    const currentWidth = this.container.nativeElement.clientWidth;
    const scale = currentWidth / this.originalWidth;

    this.game.app.stage.scale = new PIXI.ObservablePoint(null, null, scale, scale);
  }

}
