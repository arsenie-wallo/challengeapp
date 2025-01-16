import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DepartmentDetailsPage } from './department-details.page';

describe('DepartmentDetailsPage', () => {
  let component: DepartmentDetailsPage;
  let fixture: ComponentFixture<DepartmentDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
