import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  constructor(private contactService: ContactService,private userService:UserService
    ) {}
  tuggleLogin: boolean = true;
  tuggleSignUp: boolean = false;
  currUser: object = null;
  ngOnInit() {
    this.currUser=this.contactService.getUser()
    console.log('user',this.currUser);
    this.currUser=this.userService.getLoggedinUser()      
  }

  onTuggle() {
    !this.tuggleSignUp
      ? (this.tuggleSignUp = true)
      : (this.tuggleSignUp = false);
    !this.tuggleLogin ? (this.tuggleLogin = true) : (this.tuggleLogin = false);
  }
}
