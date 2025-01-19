import { Injectable } from '@angular/core';
import { EmployeeModel } from '../../models/data';

@Injectable({
  providedIn: 'root'
})
export class InitializerService {
    employee: EmployeeModel | undefined= undefined;
    private targetId: string = "";
  
  constructor(
  ) { }

  setCurrentId(currentUrl: string) {
    // console.log('Hello Current URL:', currentUrl);
    
     const match = currentUrl.match(/([^\/]+)$/);
      if (match) {
        this.targetId = match[1];
        // console.log(this.targetId);
      } else {
        console.log('No match found');
      }
    return this.targetId;
  }

  // getTargetItem(id: string, itemType: string) {
  //   switch(itemType) {
  //     case "department" : {
  //       // this.getDepartmentById()
  //       break;
  //     }
  //     case "employee" : {
  //       // this.getEmployeeById()
  //       break;
  //     }
  //     case "manager" : {
  //       break;
  //     }
  //   }
  // }

  // getEmployeeById() {
  //   this.apiService.getEmployeesById(this.targetId).subscribe({
  //     next: (response) => {
  //       this.employee = response
  //       console.log(response)
  //     },
  //     error: (error) => {
  //       console.error('Error fetching employee data', error);
  //     },
  //   });
  // }

  // getDepartmentById() {
  //   this.apiService.getDepartmentById(this.targetId).subscribe({
  //     next: (response) => {
  //       this.employee = response
  //       console.log(response)
  //     },
  //     error: (error) => {
  //       console.error('Error fetching employee data', error);
  //     },
  //   });
  // }

}
