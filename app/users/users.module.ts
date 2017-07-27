import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { UsersListComponent } from './users-list.component';
import { ListService } from '../companies/list.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopupModule } from 'ng2-opd-popup';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    PopupModule.forRoot(),
  ],
  declarations: [
    UsersListComponent
  ],
  exports: [
    UsersListComponent
  ],
  providers: [
    ListService
  ]
})
export class UsersModule { }
