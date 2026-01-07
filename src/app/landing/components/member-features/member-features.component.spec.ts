import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberFeaturesComponent } from './member-features.component';

describe('MemberFeaturesComponent', () => {
  let component: MemberFeaturesComponent;
  let fixture: ComponentFixture<MemberFeaturesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MemberFeaturesComponent]
    });
    fixture = TestBed.createComponent(MemberFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
