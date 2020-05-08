import { Component, OnInit } from '@angular/core';
import { Rest1Service } from 'src/app/services/rest1.service';
import { districtwise } from 'src/app/models/district';


@Component({
  selector: 'app-up',
  templateUrl: './up.component.html',
  styleUrls: ['./up.component.css']
})
export class UpComponent implements OnInit {

  constructor(private rs:Rest1Service) { }
  columns=["District","Confirmed","Active","Recovered","Deceased"];columns1=["NewConfirmed","NewDeceased","NewRecovered"];
  index=["district","confirmed","active","recovered","deceased"];index1=["confirmed","deceased","recovered"];
  // district:districtwise[]=[];
  district:any;
  delta:any;

  ngOnInit(): void {
    this.rs.getUsers1().subscribe
    (
      (response)=>
      {
        console.log(response[30]['districtData'])
        this.district=response[30]['districtData'];
        console.log(response[30]['districtData'][6]['delta'])
        this.delta=response[30]['districtData'][6]['delta'];
      },
      (error)=>console.log(error)
    )
     
  }

}
