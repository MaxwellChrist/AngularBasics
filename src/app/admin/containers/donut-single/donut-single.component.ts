import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';
import { DonutService } from '../../services/donut.service';

@Component({
  selector: 'donut-single',
  templateUrl: './donut-single.component.html',
  styleUrls: ['./donut-single.component.css']
})
export class DonutSingleComponent implements OnInit{
  donut!: Donut;
   constructor(private donutService: DonutService) {

   }
   ngOnInit(): void {
    const id = '1'
    this.donut = this.donutService.readOne('1');
   }

   onCreate(donut: Donut) {
    console.log('onCreate', donut);
   }
}
