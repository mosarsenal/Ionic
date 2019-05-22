import { Component } from '@angular/core';
import{StudentService} from '../services/student.service';
//import {Subscription} from 'rxjs/Subscription';
import { Subscription } from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  subscription : Subscription;
  dataList : any = [];
  dataRow = 0;
  
constructor(private StudSV : StudentService,private route:Router){
this.showData();//เรียกใช้เมธอดเสมอ
}

showData(){
  this.subscription = this.StudSV.getCatActvity()
  .subscribe(data =>
    {
      
     this.dataList = data['rs'];
    }
    );
  }

  Add(){
    this.route.navigateByUrl("create");
  }

  edit(stud_id) { 
    this.route.navigate(['/edit',{stud_id : stud_id}]);
  }

  Delete(stud_id) {
    
    this.StudSV.del(stud_id).subscribe(
       );
       this.showData();
  }
  /*ngAfterViewInit(){
    this.showData();
  }*/
}
