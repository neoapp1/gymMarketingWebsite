import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesWithUsComponent } from './companies-with-us.component';

describe('CompaniesWithUsComponent', () => {
  let component: CompaniesWithUsComponent;
  let fixture: ComponentFixture<CompaniesWithUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompaniesWithUsComponent]
    });
    fixture = TestBed.createComponent(CompaniesWithUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
