import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private userService:UserService) { }
currUser:object
  ngOnInit() {
   this.currUser= this.userService.getLoggedinUser()
  }
  onLogout(){
    this.userService.logout()
  }
}
