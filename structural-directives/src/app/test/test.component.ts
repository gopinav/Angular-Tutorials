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
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public displayName = false;
  constructor() { }

  ngOnInit() {
  }

}
