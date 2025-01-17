import { Injectable } from '@angular/core';
import { NavigationService } from '../../services/navigation/navigation.service';
import { EmployeeInformation } from '../../models/data';
import { DepartmentInformation } from '../../models/data';

@Injectable({
  providedIn: 'root'
})
export class DetailRetrieverService<T> {
  private collection: T[] = [];
  constructor(
    private navigator: NavigationService
  ) { }
  
  navigateTo(page: string) {
    this.navigator.navigateTo(page);
  }

  setCollection(collection: T[]) {
    console.log(`Collection is set`)
    this.collection = collection;
  }
  getDetailsById(item: DepartmentInformation | EmployeeInformation, index: number) {
    // console.log(`Hello from retriever: ${item._id}`)
    // this.setCollection(collection);
    // let index;
    if (item) {
      // index = this.collection.indexOf(item);
      this.getEmployeeDetailsById(index);
    }
  }

  // getDetailsById(id: string, collection: T[]) {
  //   this.setCollection(collection)
  //   // console.log(`Hello from retriever: ${id}`)
  //   console.log(`Hello from retriever: ${this.collection[0].name}`)
  //   // this.navigateTo(`employee/${index}`);
  // }

  // searchCollection() {
  //   const employee = this.findEmployee(id);
  //   let index;
  //   if (employee) {
  //     index = this.collection.indexOf(employee)
  //     this.getEmployeeDetailsById(index);
  //   }
  //   else {
  //     console.log(`Employee Not Found`)
  //   }
  // }

  getEmployeeDetailsById(index: number) {
    console.log(`Hi from retriever getEmployeeDetails: ${index}`)
    this.navigateTo(`employee/${index}`);
  }
}
