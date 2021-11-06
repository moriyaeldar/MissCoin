import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/interfaces/contact.interface';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts$: Observable<Contact[]>
  subscription: Subscription
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contacts=this.contactService.query()
    this.contacts$ = this.contactService.contacts$

  }
  contacts:any

  onRemoveContact(contactId:string) {
    this.contactService.remove(contactId)
}
}