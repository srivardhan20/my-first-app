import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No Server Created!";
  serverName = "TestServerName";
  userName = "";
  serverCreated = false;
  servers = ["New Server", "New Server 2"];
  displayDetails = false;
  displayButtonClick = 0;
  displayDetailsArray = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }
      , 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created, name " + this.serverName;
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }


  setDefaultUserName() {
    this.userName = "";
  }

  toggleDisplayDetails() {
    if (!this.displayDetails) {
      this.displayDetails = true;
    } else {
      this.displayDetails = false;
    }
    this.displayDetailsArray.push(new Date());
  }

  getDisplayColor(){
    if(this.displayDetailsArray.length>4){
      return "blue";
   }
   return "";
  }
}
