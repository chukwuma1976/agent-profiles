import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentDetailsButtonRendererComponent } from './agent-details-button-renderer.component';

describe('AgentDetailsButtonRendererComponent', () => {
  let component: AgentDetailsButtonRendererComponent;
  let fixture: ComponentFixture<AgentDetailsButtonRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentDetailsButtonRendererComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentDetailsButtonRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
