import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'customer-module';
constructor(private customerService: CustomerService){
  this.getCustomerDetails();
}

  register(registerForm: NgForm){
    this.customerService.registerCustomer(registerForm.value).subscribe(
      (resp: any)=>{
        console.log(resp);
        registerForm.reset();
        this.getCustomerDetails();

      },(err: any)=>{
        console.log(err);
      }
    );
  }

  getCustomerDetails(){
    this.customerService.getCustomers().subscribe(
      (resp)=>{
        console.log(resp);
        this.customerDetails=resp;
      }, (err)=>{
        console.log(err);
      }
    );
  }

  customerDetails= null as any;

  deleteCustomer(customer: any){
    this.customerService.deleteCustomer(customer.sid).subscribe(
      (resp)=>{
        console.log(resp);
        this.getCustomerDetails();
      },(err)=>{
        console.log(err);
      }
    );
  }
 
  customerToUpdate={
    C_id: "",
    C_name: "",
    C_dept: "",
    desig:"",
    city: ""
  };

  edit(customer: any){
    this.customerToUpdate=customer;
  }
  updateCustomer(){
    this.customerService.updateCustomer(this.customerToUpdate).subscribe(
      (resp)=>{
        console.log(resp);
      },(err)=>{
        console.log(err);
      }
    );
  }
  
}
