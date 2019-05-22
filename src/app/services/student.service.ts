import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  apiUrl: string ="http://localhost/STUDENT/process/crud_cateactivity.php";
  constructor(public http: HttpClient) { }

  getCatActvity(){
    const header = {'Content-Type': 'application/json'};
    let data = {
      'cmd' : 'select'
    }
    return this.http.post(this.apiUrl,data, {headers: header});
  }

  get(stud_id : any){
    const header = {'Content-Type': 'application/json'};
    let data = {
      'cmd' : 'selectone',
      'stud_id' : stud_id
    }
    return this.http.post(this.apiUrl,data, {headers: header});
  }
  
  insert( stud_name: string, stud_status: string, stud_age: string, stud_school: string){
    const header = { 'Content-Type': 'application/json' };
    let data = {
      'cmd' : 'insert',
      'stud_name': stud_name,
      'stud_status': stud_status,
      'stud_age': stud_age,
      'stud_school': stud_school
    }
    return this.http.post(this.apiUrl, data, { headers: header });
  }

  del( stud_id : any){
    const header = { 'Content-Type': 'application/json' };
    let data = {
      'cmd' : 'delete',
      'stud_id' : stud_id
    }
    return this.http.post(this.apiUrl, data, { headers: header });
  }

  edit( stud_id: any , stud_name: string, stud_status: string, stud_age: string, stud_school: string){
    const header = { 'Content-Type': 'application/json' };
    let data = {
      'cmd' : 'edit',
      'stud_id' : stud_id ,
      'stud_name': stud_name,
      'stud_status': stud_status,
      'stud_age': stud_age,
      'stud_school': stud_school
    }
    return this.http.post(this.apiUrl, data, { headers: header });
  }
}
