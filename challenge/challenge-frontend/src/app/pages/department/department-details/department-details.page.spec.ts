import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { DepartmentDetailsPage } from './department-details.page';
// import { DepartmentDetailsPage } from './view-department.page';

describe('DepartmentDetailsPage', () => {
  let component: DepartmentDetailsPage;
  let fixture: ComponentFixture<DepartmentDetailsPage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [DepartmentDetailsPage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(DepartmentDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { DepartmentDetailsPage } from './department-details.page';

// describe('DepartmentDetailsPage', () => {
//   let component: DepartmentDetailsPage;
//   let fixture: ComponentFixture<DepartmentDetailsPage>;

//   beforeEach(() => {
//     fixture = TestBed.createComponent(DepartmentDetailsPage);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
