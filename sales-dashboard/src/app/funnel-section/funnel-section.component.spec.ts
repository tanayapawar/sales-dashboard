import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunnelSectionComponent } from './funnel-section.component';

describe('FunnelSectionComponent', () => {
  let component: FunnelSectionComponent;
  let fixture: ComponentFixture<FunnelSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunnelSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunnelSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
