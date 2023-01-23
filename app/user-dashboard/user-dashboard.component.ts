import { Component, OnInit} from '@angular/core'; 
import {FormBuilder,FormGroup} from '@angular/forms'
import { ApiService } from '../shared/api.service';
import { UserModel } from './user-dashboardmodel';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
}) 

export class UserDashboardComponent implements OnInit{
 
  formValue !: FormGroup; 
  userModelObject: UserModel = new UserModel();
  constructor(private formbuilber: FormBuilder,
    private api : ApiService){} 
  
  
  

  ngOnInit(): void{  
    this.formValue = this.formbuilber.group({
      firstName:[''],
      lastName:[''],
      email:[''],
      mobile:[''],
      role:['']  
    })
  } 
postUserDetails(){

  this.userModelObject.firstName= this.formValue.value.firstName;
  this.userModelObject.lastName= this.formValue.value.lastName;
  this.userModelObject.email= this.formValue.value.email;
  this.userModelObject.phone= this.formValue.value.phone;
  this.userModelObject.role= this.formValue.value.role;
 
  this.api.postUser(this.userModelObject)
  .subscribe(res=>{
    console.log(res);
    alert("User added successfully") 
    this.formValue.reset();
  }, 
   err=>{
    alert("Something went wrong");
   })

}
   
}
