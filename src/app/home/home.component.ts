import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: any;
  
  constructor(private data: DataService) { }

  ngOnInit() {
    //console.log(this.data.getUsers());
    this.data.getUserList().subscribe(response => {
      this.users = response;
      console.log(this.users);
    })
  }  
}
