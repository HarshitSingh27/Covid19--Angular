import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { statewise} from 'src/app/models/users';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {

  constructor( private rs:RestService) { }
  columns=["Active","Confirmed","Deaths","Recovered","Last Updated","State","State Code"];
  index=["active","confirmed","deaths","recovered","lastupdatedtime","state","statecode"];
  users:statewise[]=[];

  ngOnInit(): void {
    this.rs.getUsers().subscribe
    (
      (response)=>

      {
        console.log(response['statewise']);
        this.users=response['statewise'];
      },
      (error)=>console.log(error)

    )
  }

}
