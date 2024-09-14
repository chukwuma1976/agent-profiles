import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentListScrollComponent } from './agent-list-scroll.component';

describe('AgentListScrollComponent', () => {
  let component: AgentListScrollComponent;
  let fixture: ComponentFixture<AgentListScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentListScrollComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentListScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
