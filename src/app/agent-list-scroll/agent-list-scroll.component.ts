import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef, GridReadyEvent } from 'ag-grid-community'; // Column Definition Type Interface
import { User } from '../../models/user';
import { AgentsService } from '../../service/agents.service';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import {
  ColGroupDef,
  GridApi,
  GridOptions,
  ICellRendererParams,
  IDatasource,
  IGetRowsParams,
  ModuleRegistry,
  RowModelType,
  createGrid,
} from "@ag-grid-community/core";
import { InfiniteRowModelModule } from "@ag-grid-community/infinite-row-model";
ModuleRegistry.registerModules([InfiniteRowModelModule]);
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
  rowData!: User[];

  defaultColDef: ColDef = {
    flex: 1,
    filter: true
  }

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { headerName: "First Name", field: 'firstName', checkboxSelection: true, cellRenderer: "agGroupCellRenderer" },
    { headerName: "Last Name", field: 'lastName' },
    { field: 'age' },
    { field: 'gender' },
    { field: 'username' },
    { headerName: "City", field: 'address.city' },
    { headerName: "State", field: 'address.stateCode' },
    { headerName: "Country", field: 'address.country', filter: false },
    { field: 'role' },
    { headerName: "Action", field: 'id', filter: false, cellRenderer: AgentDetailsButtonRendererComponent }
  ];


  public rowBuffer = 0;
  public rowSelection: "single" | "multiple" = "multiple";
  public rowModelType: RowModelType = "infinite";
  public cacheBlockSize = 10;
  public cacheOverflowSize = 0;
  public maxConcurrentDatasourceRequests = 1;
  public infiniteInitialRowCount = 1000;
  public maxBlocksInCache = 10;

  constructor(private agentsService: AgentsService) { }

  // onGridReady(params: GridReadyEvent<User>) {
  //   this.agentsService.getUsers()
  //     .subscribe((data: any) => {
  //       const dataSource: IDatasource = {
  //         rowCount: undefined, // behave as infinite scroll
  //         getRows: (params: IGetRowsParams) => {
  //           console.log(
  //             "asking for " + params.startRow + " to " + params.endRow,
  //           );
  //           // At this point in your code, you would call the server.
  //           // To make the demo look real, wait for 500ms before returning
  //           setTimeout(() => {
  //             // take a slice of the total rows
  //             const rowsThisPage = data.users.slice(params.startRow, params.endRow);
  //             // if on or after the last page, work out the last row.
  //             let lastRow = -1;
  //             if (data.users.length <= params.endRow) {
  //               lastRow = data.users.length;
  //             }
  //             // call the success callback
  //             params.successCallback(rowsThisPage, lastRow);
  //           }, 500);
  //         },
  //       };
  //       params.api!.setGridOption("datasource", dataSource);
  //     });
  // }

  onGridReadyBatch(params: GridReadyEvent<User>) {
    let page = 1;
    const dataSource: IDatasource = {
      rowCount: undefined,
      getRows: (params: IGetRowsParams) => {
        console.log(
          "asking for " + params.startRow + " to " + params.endRow,
        );
        page = params.endRow / this.cacheBlockSize;
        this.agentsService.getUsersByBatch(this.cacheBlockSize, page).subscribe((data: any) => {
          const rowsThisPage = data.users;
          // if on or after the last page, work out the last row.
          let lastRow = -1;
          if (data.total <= params.endRow) {
            lastRow = data.total;
          }
          // call the success callback
          params.successCallback(rowsThisPage, lastRow);
        });
      },
    }
    params.api!.setGridOption("datasource", dataSource);
  }

}
