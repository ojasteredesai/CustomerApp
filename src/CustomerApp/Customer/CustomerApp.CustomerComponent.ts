import { Component } from '@angular/core';
import {Customer} from './CustomerApp.model'

@Component({
  selector: 'app-root',
  templateUrl: './CustomerApp.CustomerView.html',
  styleUrl: './CustomerApp.CustomerComponent.css'
})
export class CustomerComponent {
  title = 'Customer Application';
  CustomerModel : Customer = new Customer();
  CustomerModels : Array<Customer> = new Array<Customer>();

  Add(){
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new Customer(); //clears UI
  }
}
