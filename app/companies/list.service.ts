import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers} from '@angular/http';

@Injectable()
export class ListService {

  constructor(private http: Http) { 
  }

  getListCompanies(callback){
    let url = `http://35.177.14.49/companies/`

    this.http.get(url).subscribe((response:Response)=>{
      let data = response.json();
      callback(data);
      console.log(data)
    });
  }


  addCompany(query){
    let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let requestOptions = new RequestOptions({headers: headers});

    query['user_id'] = '2';
    console.log(query)    

	  this.http.post(`http://35.177.14.49/companies/create`, JSON.stringify(query), requestOptions).subscribe(res => {
	      console.log(res.json());
	    }, (err) => {
	      console.log(err);
      });
  }


  getListUsers(callback){
    let url = `http://35.177.14.49/users/`

    this.http.get(url).subscribe((response:Response)=>{
      let data = response.json();
      callback(data);
    });
  }

  getUser(query, callback){
    let url = `http://35.177.14.49/user/${query}/`

    this.http.get(url).subscribe((response:Response)=>{
      let data = response.json();
      callback(data);
    });
  }

  editUser(id, query){
    let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let requestOptions = new RequestOptions({headers: headers});

    console.log("aa" + JSON.stringify(query))

	  this.http.post(`http://35.177.14.49/user/${id}/`, JSON.stringify(query), requestOptions).subscribe(res => {
	      console.log(res.json());
	    }, (err) => {
	      console.log(err);
      });
  }

}


