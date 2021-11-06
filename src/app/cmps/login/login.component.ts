import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { UserService } from 'src/app/services/user.service';
@Component({ templateUrl: 'login.component.html' ,  selector: 'app-login',
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    currUser:object=null;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private contactService:ContactService,
        private userService:UserService
    ) {
        // redirect to home if already logged in
        
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    //   this.currUser= this.contactService.getUser()

    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.currUser=this.loginForm.value
        this.submitted = true;
 this.userService._saveLocalUser(this.loginForm.value)
  this.currUser=this.userService.getLoggedinUser()     
  this.router.navigateByUrl('')
 
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
            
}
}