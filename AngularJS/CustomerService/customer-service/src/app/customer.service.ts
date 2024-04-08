import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  API="http://localhost:8080";
  public registerCustomer(customerData: any)
  {
    return this.http.post(this.API + '/registerCustomer' , customerData);
  }

  public getCustomers(){
    return this.http.get(this.API+'/getCustomers');
  }

  public deleteCustomer(C_id:any){
    return this.http.delete(this.API+'/deleteCusomter?C_id=' + C_id);
  }

  public updateCustomer(customer: any){
    return this.http.put(this.API +'/updateCustomer', customer);
  }
  constructor(private http: HttpClient) { }
}
