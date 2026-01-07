import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFeaturesComponent } from './admin-features.component';

describe('AdminFeaturesComponent', () => {
  let component: AdminFeaturesComponent;
  let fixture: ComponentFixture<AdminFeaturesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminFeaturesComponent]
    });
    fixture = TestBed.createComponent(AdminFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
