import { Component } from '@angular/core';

@Component({
   /* First part of template is proper bindings, the second is not, and the third is showing
   a correct way to implement one way data flow. We take the input of message and we want to
   change it, so we grab the new event and set it to a new variable in the handleInput function.

   The fourth is an example of a template reference variable (allows us to grab a hold of an element
   or component and access some further information about it) and how to use it (use "#" followed
   by whatever you want to call it, which then gives you a variable to pluck information from)

  The way we pass data in a component is through property binding, 
  which you can do by putting the property in brackets like <h1 [innerText]="message"></h1>
  or with the {{ }} which is syntactical sugar for biding the innerHTML property
  with the code between the brackets like {{ message }}

  The way we get data from a component is with an event binding, which you can do
  by putting the event in parenthesis like <input (input)="handleInput($event)">

  template: `
  <div class="app">
    {{ message }}<br>
    {{ message === "hello world" }}<br>
    <h1 [innerText]=" message.length ? message : 'Nothing here' "></h1>
    <h1 (click)="handleClick()">This is a proper event binding!</h1>
    <h1 (click)="handleClick2($event)">This is another proper event binding using the event object!</h1>

    <input value="no binding">

    <h1>{{ newMessage }}</h1> 
    <input [value]="binding" (input)="handleInput($event)">

    <input value="new message" (input)="altMessage = exampleOfTemplateRefVar.value" #exampleOfTemplateRefVar>
    <p>{{ exampleOfTemplateRefVar.value }}</p>
    </div>`,

    export class AppComponent {
    title = 'my-first-project';
    message!: string;
    binding!: string;
    newMessage!: string;
    altMessage!: string;
    ngOnInit() {
      this.message = "Hello World";

      // bindings set with message and binding are proper bindings
      this.binding = "this is how you bind something";
    }
    handleClick() {
      console.log("clicked")
    }
    handleClick2(event: Event) {
      console.log(event)
    }
    handleInput(event: Event) {
      const { value } = event.target as HTMLInputElement;
      // can also be written as: const value  = event.target.value as HTMLInputElement';
      console.log(value)
      this.newMessage = value;
  }
  */
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  message!: string;
  binding!: string;
  newMessage!: string;
  altMessage!: string;
  ngOnInit() {
    
  }
}
