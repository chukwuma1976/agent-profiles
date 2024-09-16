import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlympicStatsComponent } from './olympic-stats.component';

describe('OlympicStatsComponent', () => {
  let component: OlympicStatsComponent;
  let fixture: ComponentFixture<OlympicStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OlympicStatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlympicStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
