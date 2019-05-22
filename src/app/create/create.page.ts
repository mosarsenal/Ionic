import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import{StudentService} from '../services/student.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  constructor(private StudSV : StudentService,private route:Router) { }

  ngOnInit() {
  }
  insert(form) {
    let stud_name = form.stud_name;
    let stud_status = form.stud_status;
    let stud_age = form.stud_age;
    let stud_school = form.stud_school;
    
    this.StudSV.insert(stud_name, stud_status,stud_age,stud_school).subscribe(
      
       );
       this.route.navigateByUrl("home");
       
  }
}
