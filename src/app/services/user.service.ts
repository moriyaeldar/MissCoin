import { Injectable } from '@angular/core';
import { Observable ,  BehaviorSubject ,  ReplaySubject } from 'rxjs';
import { Contact } from '../interfaces/contact.interface';
import { map ,  distinctUntilChanged, throwIfEmpty } from 'rxjs/operators';
import { ContactService } from './contact.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserSubject = new BehaviorSubject<Contact>({} as Contact);
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  private STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser';

  constructor (private contactService:ContactService
  ) {}



  async logout() {
    sessionStorage.removeItem(this.STORAGE_KEY_LOGGEDIN_USER);
  }
  
  _saveLocalUser(user:any) {
    sessionStorage.setItem(this.STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user));
    this.contactService.save(user)
  }
  
   getLoggedinUser() {
    return JSON.parse(
      sessionStorage.getItem(this.STORAGE_KEY_LOGGEDIN_USER) || 'null'
    );
  }

 transferBits(amount:number,id:string) {
    const user =  this.getLoggedinUser()
    if (user.coins - amount < 0) return "not enough bits"
   this.contactService.transfer(+amount, id,user);
   return user
 }

}
