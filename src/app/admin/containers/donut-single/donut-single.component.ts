import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'donut-single',
  templateUrl: './donut-single.component.html',
  styleUrls: ['./donut-single.component.css']
})
export class DonutSingleComponent implements OnInit{
  donut!: Donut;
   constructor() {

   }
   ngOnInit(): void {
    this.donut = {
      id: '1',
      name: 'Chocolate',
      icon: 'chocolate',
      price: 119,
      promo: true,
      released: 'Limited Edition',
      description: 'For the pure chocoholic'
    }
   }

   onCreate(donut: Donut) {
    console.log('onCreate', donut);
   }
}
