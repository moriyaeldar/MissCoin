import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
})
export class User {   id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  token: string;}
