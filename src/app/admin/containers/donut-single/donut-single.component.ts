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
    this.donut = this.donutService.readOne('0');
   }

   onCreate(donut: Donut) {
    // console.log('onCreate', donut);
    this.donutService.create(donut);
   }

   onUpdate(donut: Donut) {
    this.donutService.update(donut);
   }

   onDelete(donut: Donut) {
    this.donutService.delete(donut);
   }
}
