import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-boxes',
  templateUrl: './rating-boxes.component.html',
  styleUrls: ['./rating-boxes.component.scss'],
})
export class RatingBoxesComponent implements OnInit {
  @Input() rating: number = 0;

  rates: number[] = [];

  constructor() {}

  ngOnInit(): void {
    for (let i = 1; i <= 5; i++) {
      this.rates.push(i);
    }
  }
}
