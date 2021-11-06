import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/interfaces/contact.interface';
import { ContactPreviewComponent } from '../contact-preview/contact-preview.component';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
@Input() contacts:Contact[]
@Output() remove = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {
    
  }

}
