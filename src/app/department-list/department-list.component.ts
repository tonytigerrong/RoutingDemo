import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, ParamMap } from '@angular/router'
@Component({
  selector: 'app-department-list',
  template: `
    <p>
      department-list works!
    </p>
    <div *ngFor="let d of departments">
      <ul>
        <li (click)="onSelect(d)"><span>{{ d.id }}</span>{{ d.name }}
          <div *ngIf="depId == d.id"> *
          </div>
        </li>
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
  public depId ;
  onSelect(dep){
    // console.log("*()*)*)",dep.id);
    this.router.navigate([dep.id],{relativeTo: this.activatedRoute});
  }
  constructor(private router: Router,private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.paramMap.subscribe(
      (param: ParamMap) =>{
        this.depId = parseInt(param.get("id"));
        console.log("depId",this.depId);
      }
    );
  }

  ngOnInit(): void {
  }

}
