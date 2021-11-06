import { Component, OnInit, Output, EventEmitter, Input ,NgModule  } from '@angular/core';
import { interval,Subscription,timer } from 'rxjs';
import {HeaderComponent} from '../../cmps/header/header.component'
import { CoinsService } from 'src/app/services/coins.service';
import { HomePageComponent } from '../home-page/home-page.component';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
  
})
export class AppComponent implements OnInit {
  title = 'my-first-project';
  @Output() onGoBack = new EventEmitter<void>();

  constructor() { 
  }

  async ngOnInit(): Promise<void> {
    
  }


}
