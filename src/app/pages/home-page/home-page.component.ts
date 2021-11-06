import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  NgModule
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { interval, Subscription, timer } from 'rxjs';
import { HeaderComponent } from '../../cmps/header/header.component';
import { CoinsService } from 'src/app/services/coins.service';
import { UserService } from 'src/app/services/user.service';
import { ContactService } from 'src/app/services/contact.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(
    private coinsService: CoinsService,
    private userService: UserService,
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this.dateNow;
    this.bitcoinRate = await this.coinsService.getRate();
    const user = this.userService.getLoggedinUser();
    this.currUser = this.contactService
      .simpleQuery()
      .filter((contact) => contact.name === user.username);
    console.log(this.currUser[0]);
  }

  date: undefined;
  tuggle: boolean = false;
  bitcoinRate: number;
  currUser: any;

  get timeNow() {
    let time: string = new Date().toLocaleTimeString();
    return time;
  }

  get dateNow() {
    let date: string = new Date().toDateString();
    return date;
  }

  onTuggleClick() {
    this.tuggle = !this.tuggle;
  }
  onDemoUser() {
    this.userService._saveLocalUser({ username: "Ochoa Hyde",password:'oooo'})
    window.location.reload();
  }
}
