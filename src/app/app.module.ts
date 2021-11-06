import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app/pages/app-page/app.component';
import { HeaderComponent } from './cmps/header/header.component';
import { Routes,RouterModule} from "@angular/router";
import { ContactsComponent } from './pages/contacts/contacts.component';
import { DetailsComponent } from './pages/details/details.component';
import { LoginComponent } from './cmps/login/login.component';
import { SignUpComponent } from './cmps/sign-up/sign-up.component';
import { FormsModule,FormBuilder,ReactiveFormsModule } from '@angular/forms';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AppRoutingModule } from './app.routing';
import { contactEditComponent } from './cmps/edit/contact-edit.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { GoogleChartComponent } from './cmps/google-chart/google-chart.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
ContactsComponent,
DetailsComponent,
LoginComponent,
SignUpComponent,
ContactListComponent,
ContactPreviewComponent,
HomePageComponent,
contactEditComponent,
ContactFilterComponent,
GoogleChartComponent,
StatisticsComponent,
LoginPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    GoogleChartsModule,
    ReactiveFormsModule,
    // RouterModule.forRoot([
    //   // {path:'', component:AppComponent},
    // {path:'contact', component:ContactsComponent},
    // {path:'', component:HomePageComponent}])
    ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
