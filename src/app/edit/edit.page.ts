import { Component, OnInit } from '@angular/core';
import {Router , ActivatedRoute} from '@angular/router';
import{StudentService} from '../services/student.service';
//import {Subscription} from 'rxjs/Subscription';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  subscription : Subscription;
  dataList : any = [];
  dataRow = 0;
  stud_id : string;
  constructor(private StudSV : StudentService ,private route:Router,private router: ActivatedRoute) {
    this.showData();
   }


  showData(){
    let stud_id = this.stud_id = (this.router.snapshot.paramMap.get('stud_id'));
    this.subscription=this.StudSV.get(stud_id)
    .subscribe(
      data =>{
        this.dataList = data['rs'];
      }
    )
  }

  edit(form) {
    let stud_id = this.stud_id = (this.router.snapshot.paramMap.get('stud_id'));
    let stud_name = form.stud_name;
    let stud_status = form.stud_status;
    let stud_age = form.stud_age;
    let stud_school = form.stud_school;
    
    this.StudSV.edit(stud_id , stud_name, stud_status, stud_age,stud_school).subscribe(
      
       );
       this.route.navigateByUrl("home");
       console.log(stud_id + stud_name + stud_status + stud_age+stud_school);
       
  }
  ngOnInit() {
  }
  
  
}
