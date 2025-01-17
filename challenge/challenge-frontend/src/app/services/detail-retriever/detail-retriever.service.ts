import { Injectable } from '@angular/core';
import { NavigationService } from '../../services/navigation/navigation.service';
import { EmployeeInformation } from '../../models/data';
import { DepartmentInformation } from '../../models/data';

@Injectable({
  providedIn: 'root'
})
export class DetailRetrieverService<T> {
  private collection: T[] = [];
  private item: EmployeeInformation | DepartmentInformation | undefined= undefined;
  private title: string = "Not Found";
  constructor(
    private navigator: NavigationService
  ) { }
  
  setCollection(collection: T[]) {
    console.log(`Collection is set`)
    this.collection = collection;
  }
  setItem(item: DepartmentInformation | EmployeeInformation) {
    this.item = item;
    this.title = item.name;
  }

  getDetailsById(item: DepartmentInformation | EmployeeInformation, index: number, objectType: string) {
    // console.log(`Hello from retriever: ${item._id}`)
    // this.setCollection(collection);
    // let index;
    if (item) {
      // index = this.collection.indexOf(item);
      this.setItem(item);
      this.navigateTo(`${objectType}/${index}`);
      // this.getEmployeeDetailsById(index);
    }
  }
    navigateTo(page: string) {
    this.navigator.navigateTo(`${page}`);
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
