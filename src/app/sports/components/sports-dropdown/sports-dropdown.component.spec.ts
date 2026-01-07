import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsDropdownComponent } from './sports-dropdown.component';

describe('SportsDropdownComponent', () => {
  let component: SportsDropdownComponent;
  let fixture: ComponentFixture<SportsDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SportsDropdownComponent]
    });
    fixture = TestBed.createComponent(SportsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
