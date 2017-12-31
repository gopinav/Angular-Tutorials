import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You selected department with id = {{departmentId}}</h3>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;
  constructor(private route: ActivatedRoute){}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.departmentId = id;
  }

}
