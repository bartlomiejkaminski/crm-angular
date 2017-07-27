import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompaniesListComponent } from './companies-list.component';
import { ListService } from './list.service';
import { PopupModule } from 'ng2-opd-popup';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HttpModule,
    PopupModule.forRoot(),
    ReactiveFormsModule
  ],
  declarations: [
    CompaniesListComponent,
  ],
  exports: [
    CompaniesListComponent,
  ],
  providers: [
    ListService
  ]
})
export class CompaniesModule { }
