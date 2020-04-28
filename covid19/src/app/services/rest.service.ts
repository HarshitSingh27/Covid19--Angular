import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { statewise } from  'src/app/models/users'

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }
  url:string= "https://api.covid19india.org/data.json"

  getUsers()
  {
    return this.http.get<statewise[]>(this.url)
  }
}
