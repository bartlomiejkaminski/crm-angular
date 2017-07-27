import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ListService } from './list.service';
import { Popup } from 'ng2-opd-popup';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'companies-list',
  template: `
    <div class="row">
		  	<div class="col-md-4">
		  		<div class="content-box-header">
			  		<div class="panel-title">Module 1</div>
				  </div>
				  <div class="content-box-large box-with-header">
				    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi. Praesent sodales velit quis augue. Cras suscipit, urna at aliquam rhoncus, urna quam viverra nisi, in interdum massa nibh nec erat.
						<br /><br />
					</div>
        </div>
            <div class="col-md-4">
		  		<div class="content-box-header">
			  		<div class="panel-title">Module 2</div>
				  </div>
				  <div class="content-box-large box-with-header">
				   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi. Praesent sodales velit quis augue. Cras suscipit, urna at aliquam rhoncus, urna quam viverra nisi, in interdum massa nibh nec erat.
						<br /><br />
					</div>
        </div>
            <div class="col-md-4">
		  		<div class="content-box-header">
			  		<div class="panel-title">Module 3</div>
				  </div>
				  <div class="content-box-large box-with-header">
				    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi. Praesent sodales velit quis augue. Cras suscipit, urna at aliquam rhoncus, urna quam viverra nisi, in interdum massa nibh nec erat.
						<br /><br />
					</div>
		  	</div>
		  </div>

		  <div class="row">
		  	<div class="col-md-12">
		  		<div class="content-box-header">
            <div class="panel-title">List of companies</div>
            <button type="button" class="btn btn-success pull-right" (click)="ClickButton()">Add new company</button>
				  </div>
				  <div class="content-box-large box-with-header">
            
            <table class="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>City</th>
                  <th>Address</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Voivodeship</th>
                  <th>Code</th>
                  <th>Description</th>
                  <th>Created</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let company of companiesList; let i = index">
                  <th scope="row"> {{ i+1 }} </th>
                  <th> {{ company.name }} </th>
                  <th> {{ company.city }} </th>
                  <th> {{ company.address }} </th>
                  <th> {{ company.email }} </th>
                  <th> {{ company.phone }} </th>
                  <th> {{ company.voivodeship }} </th>
                  <th> {{ company.code }} </th>
                  <th> {{ company.description }} </th>
                  <th> {{ company.created }} </th>
                </tr>
              </tbody>
            </table>

						<br /><br />
					</div>
		  	</div>
      </div>
        

      <popup> 
          <form [formGroup]="companyForm" #formRef="ngForm">
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" formControlName="name" required minlength="5" class="form-control input-block-level" id="name" placeholder="Name">
                <div *ngIf="">This field is required!</div>
                </div>
              <div class="form-group">
                <label for="city">City</label>
                <input type="text" formControlName="city" required minlength="3" class="form-control input-block-level" id="city" placeholder="City">
              </div>
              <div class="form-group">
                <label for="address">Address</label>
                <input type="text" formControlName="address" required minlength="5" class="form-control input-block-level" id="address" placeholder="Address">
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" formControlName="email" required minlength="5" class="form-control input-block-level" id="email" placeholder="Email">
              </div>
              <div class="form-group">
                <label for="phone">Phone</label>
                <input type="text" formControlName="phone" required minlength="5" class="form-control input-block-level" id="phone" placeholder="Phone">
              </div>
              <div class="form-group">
                <label for="voivodeship">Voivodeship</label>
                <input type="text" formControlName="voivodeship" required minlength="5" class="form-control input-block-level" id="voivodeship" placeholder="Voivodeship">
              </div>
              <div class="form-group">
                <label for="code">Code</label>
                <input type="text" formControlName="code" required minlength="2" class="form-control input-block-level" id="code" placeholder="Code">
              </div>
              <div class="form-group">
                <label for="description">Description</label>
                <input type="text" formControlName="description" required class="form-control input-block-level" id="description" placeholder="Description">
              </div>
              {{formRef.valid}}
              <br/>
              <button id="cancelBtn" class="btn btn-secondary" type="reset" (click)="confirmNo()">Cancel</button>
              <button id="confirmBtn" class="btn btn-success" (click)="confirmYes(formRef.valid)">Add</button>
          </form>
      </popup>
  `,
  styles: []
})
export class CompaniesListComponent implements OnInit {

  companiesList = []

  companyForm: FormGroup
  
  constructor(private listService: ListService, private popup: Popup) {

    this.companyForm = new FormGroup({
      'name': new FormControl(''),
      'city': new FormControl(''),
      'address': new FormControl(''),
      'email': new FormControl(''),
      'phone': new FormControl(''),
      'voivodeship': new FormControl(''),
      'code': new FormControl(''),
      'description': new FormControl('')
    })
    console.log(this.companyForm)
   }

  ngOnInit() {
    this.listService.getListCompanies((data)=>{
      this.companiesList = data
    });
  }

  confirmYes(valid){
    if(!valid){
      return;
    }
    this.listService.addCompany(this.companyForm.getRawValue())
  };

  confirmNo(){
  };


  ClickButton(){
    this.popup.options = {
    header: "Add a company",
    color: "#2c3742", // red, blue.... 
    widthProsentage: 40, // The with of the popou measured by browser width 
    animationDuration: 1, // in seconds, 0 = no animation 
    showButtons: false, // You can hide this in case you want to use custom buttons 
    confirmBtnContent: "Add", // The text on your confirm button 
    cancleBtnContent: "Cancel", // the text on your cancel button 
    confirmBtnClass: "btn btn-success", // your class for styling the confirm button 
    cancleBtnClass: "btn btn-secondary", // you class for styling the cancel button 
    animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown' 
};
 
  this.popup.show(this.popup.options);
  }

}
