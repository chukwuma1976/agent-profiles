import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community'
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-agent-details-button-renderer',
  standalone: true,
  imports: [RouterLink, MatButtonModule],
  templateUrl: './agent-details-button-renderer.component.html',
  styleUrl: './agent-details-button-renderer.component.css'
})
export class AgentDetailsButtonRendererComponent implements ICellRendererAngularComp {

  id!: string;
  agInit(params: ICellRendererParams): void {
    this.refresh(params);
  }

  //Return cell id
  refresh(params: ICellRendererParams): boolean {
    this.id = params.value;
    return true;
  }
}
