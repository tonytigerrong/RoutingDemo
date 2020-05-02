import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router'
@Component({
  selector: 'app-department-detail',
  template: `
    <p>
      department-detail works!
    </p>
    <div>
      <p> {{ departmentId }} </p>
      <a (click)="goPre()">Previous</a>
      <a (click)="goNext()">Next</a>
      <button (click)="gotoList()">back</button>
    </div>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId;
  constructor(private activaRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // let id = parseInt(this.activaRoute.snapshot.paramMap.get("id"));
    this.activaRoute.paramMap.subscribe(
      (params: ParamMap) => {
        this.departmentId = parseInt(params.get("id"));
      }
    );
  
  }
  goPre(){
    let preId = this.departmentId - 1;
    this.router.navigate(['../',preId],{relativeTo: this.activaRoute});
    console.log("PPP:",preId);
  }
  goNext(){
    let nextId = this.departmentId + 1;
    this.router.navigate(["../",nextId],{relativeTo: this.activaRoute});
  }
  gotoList(){
    this.router.navigate(["../",{id: this.departmentId}],{relativeTo: this.activaRoute});
  }
}
