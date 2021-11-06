import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/interfaces/contact.interface';

@Component({
  selector: 'app-contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {
@Input() contact:Contact
@Output() remove = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {
  }
  onRemove(ev: MouseEvent) {
    ev.stopPropagation()
    this.remove.emit(this.contact._id)

  }
}
