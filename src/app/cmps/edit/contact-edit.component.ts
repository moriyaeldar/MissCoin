import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';
import { Contact } from '../../interfaces/contact.interface';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class contactEditComponent implements OnInit {

  contact: Contact
  constructor(private contactService: ContactService, private router: Router, private route: ActivatedRoute) { }
  subscription: Subscription

  ngOnInit(): void {
    
    this.subscription = this.route.data.subscribe(({contact})=>{
      this.contact = contact || this.contactService.getEmptyContact()
    })

  
  }

  async onSavecontact() {
    await this.contactService.save(this.contact).toPromise()
    this.router.navigateByUrl('')

  }


  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
