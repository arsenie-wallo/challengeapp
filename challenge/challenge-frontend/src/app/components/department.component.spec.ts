import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ViewDepartmentPage } from '../view-department/view-department.page';

import { departmentComponent } from './department.component';

describe('departmentComponent', () => {
  let component: departmentComponent;
  let fixture: ComponentFixture<departmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [departmentComponent, ViewDepartmentPage],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(departmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
