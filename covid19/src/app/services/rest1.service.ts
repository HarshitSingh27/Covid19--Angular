import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { districtwise } from 'src/app/models/district';

@Injectable({
  providedIn: 'root'
})
export class Rest1Service {
   

  constructor(private https:HttpClient) { }
  url:string="https://api.covid19india.org/v2/state_district_wise.json";

  getUsers1()
  {
    return this.https.get<districtwise[]>(this.url)
  }
}
