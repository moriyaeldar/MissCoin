import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
  constructor( private formBuilder: FormBuilder,
    private contactService:ContactService,
    private userService:UserService,
    private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      phone: [0, Validators.required],
      email: ['', Validators.required]
  });
  console.log(this.signUpForm.value);
  
  }
  get f() { return this.signUpForm.controls; }

  onSubmit() {
      this.submitted = true;
    this.userService._saveLocalUser(this.signUpForm.value)  
    this.router.navigateByUrl('')

      if (this.signUpForm.invalid) {
          return;
      }
 
      this.loading = true;
          
}
}
