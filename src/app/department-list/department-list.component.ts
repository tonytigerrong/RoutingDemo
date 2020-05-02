import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-list',
  template: `
    <p>
      department-list works!
    </p>
    <div *ngFor="let d of departments">
      <ul>
        <li><span>{{ d.id }}</span>{{ d.name }}</li>
      </ul>
    </div>
  `,
  styles: [
  ]
})
export class DepartmentListComponent implements OnInit {
  departments = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "Node"},
    {"id": 3, "name": "MongoDb"},
    {"id": 4, "name": "Ruby"}

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
