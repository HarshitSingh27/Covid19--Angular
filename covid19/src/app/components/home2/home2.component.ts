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
  columns=["State","Last Updated","Confirmed","Active","Recovered","Deaths"];
  index=["state","lastupdatedtime","confirmed","active","recovered","deaths"];
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
