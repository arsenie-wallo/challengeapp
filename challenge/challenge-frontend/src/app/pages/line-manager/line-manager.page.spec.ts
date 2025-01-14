import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LineManagerPage } from './line-manager.page';

describe('LineManagerPage', () => {
  let component: LineManagerPage;
  let fixture: ComponentFixture<LineManagerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LineManagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
