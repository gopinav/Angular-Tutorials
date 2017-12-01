import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2 *ngIf="displayName; else nameElseBlock">
      Codevolution
    </h2>
    <ng-template #nameElseBlock>
      <h2>
        Name is hidden
      </h2>
    </ng-template>

    <div *ngIf="displayName; then thenBlock; else elseBlock"></div>

    <ng-template #thenBlock>
      <h2>Codevolution</h2>
    </ng-template>

    <ng-template #elseBlock>
      <h2>Hidden</h2>    
    </ng-template>



    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'">You picked red color</div>
      <div *ngSwitchCase="'blue'">You picked blue color</div>
      <div *ngSwitchCase="'green'">You picked green color</div>
      <div *ngSwitchDefault>Pick again</div>
    </div>


    <div *ngFor="let color of colors; index as i">
      <h2>{{i}} {{color}}</h2>
    </div>

  `,
  styles: []
})
export class TestComponent implements OnInit {

  public displayName = false;
  public color = "red";
  public colors = ["red","blue","green","yellow"]

  constructor() { }

  ngOnInit() {
  }

}
