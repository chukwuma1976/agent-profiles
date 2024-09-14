import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import { User } from '../../models/user';
import { AgentsService } from '../../service/agents.service';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { AgentDetailsButtonRendererComponent } from '../agent-details-button-renderer/agent-details-button-renderer.component';

@Component({
  selector: 'app-agent-list-scroll',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './agent-list-scroll.component.html',
  styleUrl: './agent-list-scroll.component.css'
})
export class AgentListScrollComponent {

  // Row Data: The data to be displayed.
  rowData?: User[];

  defaultColDef: ColDef = {
    flex: 1,
    filter: true
  }

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: 'first name', valueGetter: p => p.data.firstName, checkboxSelection: true },
    { field: 'last name', valueGetter: p => p.data.lastName },
    { field: 'age' },
    { field: 'gender' },
    { field: 'username' },
    { field: 'city', valueGetter: p => p.data.address.city },
    { field: 'state', valueGetter: p => p.data.address.stateCode },
    { field: 'country', valueGetter: p => p.data.address.country, filter: false },
    { field: 'role' },
    { field: 'action', valueGetter: p => p.data.id, filter: false, cellRenderer: AgentDetailsButtonRendererComponent }
  ];

  constructor(private agentsService: AgentsService) { }

  ngOnInit() {
    this.agentsService.getUsers().subscribe((data: any) => this.rowData = data.users);
  }

}
