import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Contact } from '../interfaces/contact.interface';
import { ContactService } from './contact.service';

@Injectable({
  providedIn: 'root'
})
export class contactResolverService implements Resolve<Contact> {

  constructor(private contactService:ContactService) { }

  async resolve(route: ActivatedRouteSnapshot) {
    const id = route.params.id
    const contact = await this.contactService.getContactById(id).toPromise()
    return contact
  }
}
