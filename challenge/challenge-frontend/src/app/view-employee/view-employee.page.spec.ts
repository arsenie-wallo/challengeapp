import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ViewEmployeePage } from './view-employee.page';

describe('ViewEmployeePage', () => {
  let component: ViewEmployeePage;
  let fixture: ComponentFixture<ViewEmployeePage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ViewEmployeePage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewEmployeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
