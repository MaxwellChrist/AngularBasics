import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';
import { DonutService } from '../../services/donut.service';

@Component({
  selector: 'donut-list',
  templateUrl: './donut-list.component.html',
  styleUrls: ['./donut-list.component.css']
})
export class DonutListComponent implements OnInit{
  donuts!: Donut[];
  constructor(private donutService: DonutService) {}

  // This is where the data gets fetched (within this ngOnInit lifecycle hook)
  ngOnInit(): void {
    this.donuts = this.donutService.read();
  }

  trackById(index: number, value: Donut) {
    return value.id;
  }
}
