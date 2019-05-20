import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
}
var number1 = prompt('Введите первое число!');
var number2 = prompt('Введите второе число!');
var result = (+number1 + +number2) / 2;

console.log(result);