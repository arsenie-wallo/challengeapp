import { Injectable } from '@angular/core';
import { EmployeeModel } from '../../models/data';
// import { RefresherCustomEvent } from '@ionic/angular/standalone';
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

  // refresh(ev: any) {
  //   setTimeout(() => {
  //     (ev as RefresherCustomEvent).detail.complete();
  //   }, 3000);
  // }

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
}
