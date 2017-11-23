import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div>
      <h2>Welcome {{name}}</h2>
      <h2>{{2+2}}</h2>
      <h2>{{"Welcome " + name}}</h2>
      <h2>{{name.length}}</h2>
      <h2>{{name.toUpperCase()}}</h2>
      <h2>{{greetUser()}}</h2>
      <h2>{{url}}</h2>

      <input [id]="myId" bind-disabled="isDisabled"  type="text" value="Vishwas">
      <input id="{{myId}}" [disabled]="isDisabled"  type="text" value="Vishwas">
      
    </div>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = "Codevolution";
  public url = window.location.href;
  public myId = "testId";
  public isDisabled = true;
  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello " + this.name;
  }

  

}
