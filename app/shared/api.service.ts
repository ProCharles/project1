import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import{map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient) { }
   
  postUser(data : any){ 
    return this.http.post<any>("http://localhost:3000/posts",data) 
    .pipe(map((res:any)=>{
      return res;
    }))
  } 

  gettUser(){ 
    return this.http.get<any>("http://localhost:3000/posts") 
    .pipe(map((res:any)=>{
      return res;
    }))
  } 

  updateUser(data : any ,user:number){ 
    return this.http.post<any>("http://localhost:3000/posts/"+user,data) 
    .pipe(map((res:any)=>{
      return res;
    }))
  }
   
  deleteUser(user : number){ 
    return this.http.delete<any>("http://localhost:3000/posts"+user) 
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
