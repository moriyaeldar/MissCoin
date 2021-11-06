import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { of } from 'rxjs'
import { Contact } from '../interfaces/contact.interface';
import {IFilterBy} from '../interfaces/filterby.interface'
import { Move } from '../interfaces/move.interface';
const CONTACTS = [
  {
    "_id": "5a56640269f443a5d64b32ca",
    "name": "Ochoa Hyde",
    "email": "ochoahyde@renovize.com",
    "phone": "+1 (968) 593-3824",
    "coins":100,
   "moves":[]=[]
  },
  {
    "_id": "5a5664025f6ae9aa24a99fde",
    "name": "Hallie Mclean",
    "email": "halliemclean@renovize.com",
    "phone": "+1 (948) 464-2888",
    "coins":100,
   "moves":[]=[]
  },
  {
    "_id": "5a56640252d6acddd183d319",
    "name": "Parsons Norris",
    "email": "parsonsnorris@renovize.com",
    "phone": "+1 (958) 502-3495",
    "coins":100,
   "moves":[]=[]
  },
  {
    "_id": "5a566402ed1cf349f0b47b4d",
    "name": "Rachel Lowe",
    "email": "rachellowe@renovize.com",
    "phone": "+1 (911) 475-2312",
    "coins":100,
   "moves":[]=[]
  },
  {
    "_id": "5a566402abce24c6bfe4699d",
    "name": "Dominique Soto",
    "email": "dominiquesoto@renovize.com",
    "phone": "+1 (807) 551-3258",
    "coins":100,
   "moves":[]=[]
  },
  {
    "_id": "5a566402a6499c1d4da9220a",
    "name": "Shana Pope",
    "email": "shanapope@renovize.com",
    "phone": "+1 (970) 527-3082",
    "coins":100,
   "moves":[]=[]
  },
  {
    "_id": "5a566402f90ae30e97f990db",
    "name": "Faulkner Flores",
    "email": "faulknerflores@renovize.com",
    "phone": "+1 (952) 501-2678",
    "coins":100,
   "moves":[]=[]
  },
  {
    "_id": "5a5664027bae84ef280ffbdf",
    "name": "Holder Bean",
    "email": "holderbean@renovize.com",
    "phone": "+1 (989) 503-2663",
    "coins":100,
   "moves":[]=[]
  },
  {
    "_id": "5a566402e3b846c5f6aec652",
    "name": "Rosanne Shelton",
    "email": "rosanneshelton@renovize.com",
    "phone": "+1 (968) 454-3851",
    "coins":100,
   "moves":[]=[]
  },
  {
    "_id": "5a56640272c7dcdf59c3d411",
    "name": "Pamela Nolan",
    "email": "pamelanolan@renovize.com",
    "phone": "+1 (986) 545-2166",
    "coins":100,
   "moves":[]=[]
  },
  {
    "_id": "5a5664029a8dd82a6178b15f",
    "name": "Roy Cantu",
    "email": "roycantu@renovize.com",
    "phone": "+1 (929) 571-2295",
    "coins":100,
   "moves":[]=[]
  },
  {
    "_id": "5a5664028c096d08eeb13a8a",
    "name": "Ollie Christian",
    "email": "olliechristian@renovize.com",
    "phone": "+1 (977) 419-3550",
    "coins":100,
   "moves":[]=[]
  },
  {
    "_id": "5a5664026c53582bb9ebe9d1",
    "name": "Nguyen Walls",
    "email": "nguyenwalls@renovize.com",
    "phone": "+1 (963) 471-3181",
    "coins":100,
   "moves":[]=[]
  },
  {
    "_id": "5a56640298ab77236845b82b",
    "name": "Glenna Santana",
    "email": "glennasantana@renovize.com",
    "phone": "+1 (860) 467-2376",
    "coins":100,
    "moves":[]=[]

  },
  {
    "_id": "5a56640208fba3e8ecb97305",
    "name": "Malone Clark",
    "email": "maloneclark@renovize.com",
    "phone": "+1 (818) 565-2557",
    "coins":100,
    "moves":[]=[]
  },
  {
    "_id": "5a566402abb3146207bc4ec5",
    "name": "Floyd Rutledge",
    "email": "floydrutledge@renovize.com",
    "phone": "+1 (807) 597-3629",
    "coins":100,
    "moves":[]=[]
  },
  {
    "_id": "5a56640298500fead8cb1ee5",
    "name": "Grace James",
    "email": "gracejames@renovize.com",
    "phone": "+1 (959) 525-2529",
    "coins":100,
    "moves":[]=[]
  },
  {
    "_id": "5a56640243427b8f8445231e",
    "name": "Tanner Gates",
    "email": "tannergates@renovize.com",
    "phone": "+1 (978) 591-2291",
    "coins":100,
    "moves":[]=[]
  },
  {
    "_id": "5a5664025c3abdad6f5e098c",
    "name": "Lilly Conner",
    "email": "lillyconner@renovize.com",
    "phone": "+1 (842) 587-3812",
    "coins":100,
    "moves":[]=[]
  }
];

@Injectable({
  providedIn: 'root'
})
export class ContactService {
public firstQuery(){
  return CONTACTS
}

  //mock the server

 public _currUser: object=null

  private _contactsDb: Contact[] = CONTACTS;

  private _contacts$ = new BehaviorSubject<Contact[]>([])
  public contacts$ = this._contacts$.asObservable()

  private _filterBy$ = new BehaviorSubject({ term: '' });
  public filterBy$ = this._filterBy$.asObservable()

  constructor() {
  }

public simpleQuery(){
  return CONTACTS
}
  public query() {
    const filterBy = this._filterBy$.getValue()
    const contacts = this._contactsDb.filter(({ name }) => {
      return name.toLowerCase().includes(filterBy.term.toLowerCase());
    });
    
    this._contacts$.next(contacts);
    // return contacts
  }


  public getById(contactId: string) {
    const contact = this._contactsDb.find(contact => contact._id === contactId)
    return of({ ...contact })
  }

  public getEmptyContact() {
    return { name: '', phone: 0, email:'' }
  }
  public getContactById(id: string): Observable<Contact> {
    //mock the server work
    const contact = CONTACTS.find(contact => contact._id === id)

    //return an observable
    return contact ? of(contact) : Observable.throw(`Contact id ${id} not found!`)
  }
  public remove(contactId: string) {
    const contacts = this._contactsDb
    const contactIdx = contacts.findIndex(contact => contact._id === contactId)
    contacts.splice(contactIdx, 1)
    this._contacts$.next(contacts);
    return of({})
  }

  public save(contact: Contact) {
    return contact._id ? this._edit(contact) : this._add(contact)
  }

  public login(user:Contact){
    const contacts=this._contactsDb
   const currUser= contacts.find(contact => contact.name === user.name)
   if(!currUser)return 'user not exist in the system'
   this._currUser=currUser
  return currUser
  }


public getUser(){
  return this._currUser
}
  private _add(contact:any) {
    contact._id = this._makeId()
    contact.coins=100
    contact.moves=[]
    this._contactsDb.push(contact)
    CONTACTS.push(contact)
    this._contacts$.next(this._contactsDb)
    return of(contact)
  }

  private _edit(contact: Contact) {
    const contacts = this._contactsDb
    const contactIdx = contacts.findIndex(_contact => _contact._id === contact._id)
    contacts.splice(contactIdx, 1, contact)
    this._contacts$.next(contacts)
    return of(contact)
  }

  private _makeId(length = 5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
 

  private _updateContact(contact: Contact) {
    //mock the server work
    this._contactsDb = this._contactsDb.map(c => contact._id === c._id ? contact : c)
    // change the observable data in the service - let all the subscribers know
    this._contacts$.next(this._sort(this._contactsDb))
  }


  public setFilter(filterBy:IFilterBy) {
    console.log('service setFilter -> filterBy', filterBy)
    this._filterBy$.next(filterBy)
    filterBy.term===''?this.firstQuery():
    this.query()

  }
 public transfer(amount:number, id:string,user:any) {   
    const contacts = CONTACTS
    const contactIdx = contacts.findIndex((contact) => contact._id === id);
    const contact:Contact = contacts[contactIdx];    
    contact.coins += amount;   
    const currUser:any=contacts.filter((contact) => contact.name === user.username);
    console.log(currUser);
    currUser[0].coins -= amount;
    contact.moves.unshift(
      {
      amount,
      balanceBefore: contact.coins,
      contact:user.name,
      transferedAt: Date.now(),
      id: Date.now() % 1000
  })
  currUser[0].moves.unshift({
      amount,
      balanceBefore: user.coins,
      contact:contact.name,
      transferedAt: Date.now(),
      id: Date.now() % 1000
  })
    
  }
  private _sort(contacts: Contact[]): Contact[] {
    return contacts.sort((a, b) => {
      if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
        return -1;
      }
      if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
        return 1;
      }

      return 0;
    })
  }

}
