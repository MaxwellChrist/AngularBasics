import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'donut-single',
  templateUrl: './donut-single.component.html',
  styleUrls: ['./donut-single.component.css']
})
export class DonutSingleComponent {
   constructor() {

   }
   ngOnInit(): void {

   }

   onCreate(donut: Donut) {
    console.log('onCreate', donut);
   }
}
