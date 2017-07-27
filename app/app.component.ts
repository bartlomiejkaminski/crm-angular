import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selected = "companies";

  loadModuleCompanies(event){
    this.selected = "companies";
    console.log("firma")
  };

  loadModuleUsers(event){
    this.selected = "users";
    console.log("użytkownicy")
  };
}
