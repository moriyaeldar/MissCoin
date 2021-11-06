import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/interfaces/contact.interface';
import { ContactService } from 'src/app/services/contact.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  
  subscription: Subscription
  contact: Contact
  answer:string
  transfer:number

  constructor(private contactService: ContactService,private userService:UserService, private route: ActivatedRoute, private router: Router) { }

  async ngOnInit(): Promise<void> {
    this.subscription = this.route.data.subscribe(data=>{
      this.contact= data.contact
    })
  
}

onTransfer(){
this.userService.transferBits(this.transfer,this.contact._id)
}
}