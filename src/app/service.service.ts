import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {

  constructor(private http : HttpClient) { }
  // fetchdata(){
  //   this.http.get('http://192.168.1.13:5000/user/1').subscribe(
  //     (data)=> console.log(data)
  //   )
  // }
}
