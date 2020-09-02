import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { SlotsService } from './slots.service';

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  providers: [
    SlotsService
  ]
})
export class SlotsComponent implements OnInit, AfterViewInit {
  @ViewChild('container') container: ElementRef<HTMLDivElement>;

  constructor(private slotsService: SlotsService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const view = this.slotsService.load();
    this.container.nativeElement.appendChild(view);
  }

}
