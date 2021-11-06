import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { AppComponent } from './pages/app-page/app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DetailsComponent } from './pages/details/details.component';
import { contactResolverService } from './services/contact-resolver.service';
import { contactEditComponent } from './cmps/edit/contact-edit.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { LoginComponent } from './cmps/login/login.component';
import { SignUpComponent } from './cmps/sign-up/sign-up.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
const routes: Routes = [
  // {path:'', component:AppComponent},
  {path:'login', component:LoginPageComponent}, 
  {path:'sign-up', component:SignUpComponent}, 
  {path:'statistics', component:StatisticsComponent}, 
  {path:'edit', component:contactEditComponent}, 
  {path:'edit/:id', component:contactEditComponent}, 
  {path:'contact', component:ContactsComponent}, 
  {path:'contact/:id', component:DetailsComponent,resolve: { contact: contactResolverService }}, 
   {path:'', component:HomePageComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true, paramsInheritanceStrategy: 'always' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }