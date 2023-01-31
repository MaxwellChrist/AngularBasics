import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'donut-form',
  templateUrl: './donut-form.component.html',
  styleUrls: ['./donut-form.component.css']
})
export class DonutFormComponent {
  @Output() create = new EventEmitter<Donut>();
  icons: string[] = [
      'chocolate',
      'glazed-fudge',
      'caramel-swirl',
      'sprinkles-galore',
      'strawberry-glaze',
      'zesty-lemon',
  ];
  constructor() {};
  handleSubmit(form: NgForm) {
    if (form.valid) {
      this.create.emit(form.value);
    } else {
      /* 
        This line below is really only necessary if we don't disable the submit button. Because 
        someone could go into the dev tools and delete the disabled feature, I'll keep this in
        just in case
      */
      form.form.markAllAsTouched();
    }
  }



    // // Promises
    // const promise = new Promise(resolve => {
    //   console.log('promise call...')
    //   setTimeout(() => {
    //     resolve("This is the promise 1")
    //     resolve("This is the promise 2")
    //     resolve("This is the promise 3")
    //     resolve("This is the promise 4")
    //     resolve("This is the promise 5")
    //   }, 1000)
    // })
    // promise.then(result => console.log(result))

    // // observables
    // const observable = new Observable(resolve => {
    //   console.log('observable call...')
    //   setTimeout(() => {
    //     resolve.next('this is the obervable 1')
    //     resolve.next('this is the obervable 2')
    //     resolve.next('this is the obervable 3')
    //     resolve.next('this is the obervable 4')
    //     resolve.next('this is the obervable 5')

    //   }, 3000)

    //   let counter = 0;
    //   setInterval(()=> {
    //     counter++;
    //     resolve.next(counter)
    //   }, 1000)
    // })
    // observable.pipe(
    //   filter(res => res === 'this is the obervable 3' || typeof(res) === 'number')
    // )
    // observable.subscribe(result => console.log(result))
}