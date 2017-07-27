import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ListService } from '../companies/list.service';
import { Popup } from 'ng2-opd-popup';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'users-list',
  template: `
    <div class="row">
		  	<div class="col-md-6">
		  		<div class="content-box-header">
			  		<div class="panel-title">Module 1</div>
				  </div>
				  <div class="content-box-large box-with-header">
				    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi. Praesent sodales velit quis augue. Cras suscipit, urna at aliquam rhoncus, urna quam viverra nisi, in interdum massa nibh nec erat.
						<br /><br />
					</div>
        </div>
            <div class="col-md-6">
		  		<div class="content-box-header">
			  		<div class="panel-title">Module 2</div>
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
            <div class="panel-title">List of users</div>
				  </div>
				  <div class="content-box-large box-with-header">
            
            <table class="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>First name</th>
                  <th>Last name</th>
                  <th>Date Joined</th>
                  <th>Is staff</th>
                  <th>Is active</th>
                  <th>Is superuser</th>
                  <th>Last login</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let user of usersList; let i = index">
                  <th scope="row"> {{ i+1 }} </th>
                  <th> {{ user.username }} </th>
                  <th> {{ user.email }} </th>
                  <th> {{ user.first_name }} </th>
                  <th> {{ user.last_name }} </th>
                  <th> {{ user.date_joined }} </th>
                  <th> {{ user.is_staff }} </th>
                  <th> {{ user.is_active }} </th>
                  <th> {{ user.is_superuser }} </th>
                  <th> {{ user.last_login }} </th>
                  <th> <button id="editBtn" (click)="editBtn(user.id)" class="btn btn-success">Edit</button></th>
                </tr>
              </tbody>
            </table>

						<br /><br />
					</div>
		  	</div>
      </div>

      <popup> 
          <form [formGroup]="userForm" #formRef="ngForm">
              <div class="form-group">
                <label for="username">Username</label>
                <input type="text" formControlName="username" required minlength="5" class="form-control input-block-level" id="username" placeholder="Userame">
                </div>
              <div class="form-group">
                <label for="city">Email</label>
                <input type="text" formControlName="email" required minlength="3" class="form-control input-block-level" id="city" placeholder="Email">
              </div>
              <div class="form-group">
                <label for="address">First name</label>
                <input type="text" formControlName="first_name" required minlength="5" class="form-control input-block-level" id="address" placeholder="First name">
              </div>
              <div class="form-group">
                <label for="email">Last name</label>
                <input type="email" formControlName="last_name" required minlength="5" class="form-control input-block-level" id="email" placeholder="Last name">
              </div>
              <div class="form-group">
                <label for="phone">Date joined</label>
                <input type="text" formControlName="date_joined" class="form-control input-block-level" id="phone" placeholder="Date joined">
              </div>
              <div class="form-group">
                <label for="voivodeship">Is staff</label>
                <input type="text" formControlName="is_staff" required class="form-control input-block-level" id="voivodeship" placeholder="Is staff">
              </div>
              <div class="form-group">
                <label for="code">Is active</label>
                <input type="text" formControlName="is_active" required class="form-control input-block-level" id="code" placeholder="Is active">
              </div>
              <div class="form-group">
                <label for="description">Is superuser</label>
                <input type="text" formControlName="is_superuser" required class="form-control input-block-level" id="description" placeholder="Is superuser">
              </div>
              <div class="form-group">
                <label for="description">Last login</label>
                <input type="text" formControlName="last_login" class="form-control input-block-level" id="description" placeholder="Last login">
              </div>
              <br/>
              <button id="cancelBtn" class="btn btn-secondary" type="reset" (click)="confirmNo()">Cancel</button>
              <button id="confirmBtn" class="btn btn-success" (click)="confirmYes(formRef.valid)">Add</button>
          </form>
      </popup>
  `,
  styles: []
})
export class UsersListComponent implements OnInit {

  usersList = []
  user = {}

  userForm: FormGroup

  constructor(private listService: ListService, private popup:Popup) { 
    
    this.userForm = new FormGroup({
        'username': new FormControl(''),
        'email': new FormControl(''),
        'first_name': new FormControl(''),
        'last_name': new FormControl(''),
        'date_joined': new FormControl(''),
        'is_staff': new FormControl(''),
        'is_active': new FormControl(''),
        'is_superuser': new FormControl(''),
        'last_login': new FormControl('')
      })

  }

  editBtn(id){
    this.listService.getUser(id,(data)=>{
      this.user = data;
      
        this.userForm.setValue({
        'username': this.user['username'],
        'email': this.user['email'],
        'first_name': this.user['first_name'],
        'last_name': this.user['last_name'],
        'date_joined': this.user['date_joined'],
        'is_staff': this.user['is_staff'],
        'is_active': this.user['is_active'],
        'is_superuser': this.user['is_superuser'],
        'last_login': this.user['last_login']
      })
    })
    
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
  };

  confirmYes(valid){
    if(!valid){
      return;
    }
    this.listService.editUser(this.user['id'], this.userForm.getRawValue())
    console.log(this.userForm)
  };

  confirmNo(){
  };


  ngOnInit() {
    this.listService.getListUsers((data)=>{
      this.usersList = data;
    });
  }

}
