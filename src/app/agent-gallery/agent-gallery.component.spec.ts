import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentGalleryComponent } from './agent-gallery.component';

describe('AgentGalleryComponent', () => {
  let component: AgentGalleryComponent;
  let fixture: ComponentFixture<AgentGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
