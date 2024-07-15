import { Component, ViewChild } from '@angular/core';
import { User } from '../../interfaces/user';
import { AgentsService } from '../../service/agents.service';
import { NgFor } from '@angular/common';
import { MatTableModule, MatTableDataSource} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-agent-list',
  standalone: true,
  imports: [NgFor, MatTableModule, MatPaginatorModule, RouterLink],
  templateUrl: './agent-list.component.html',
  styleUrl: './agent-list.component.css'
})
export class AgentListComponent {

  agentList? : User[] = [];
  agentTable : any;
  dataSource? : any;
  displayedColumns : string[] = 
    ['first-name', 'last-name', 'age', 'gender', 'username', 'city', 'state', 'country', 'role', 'action'];

    @ViewChild(MatPaginator) paginator?: MatPaginator;
    
  constructor(private agentsService: AgentsService){
    this.agentsService.getUsers().subscribe((data: any) => {
      this.agentList = data.users
      this.agentTable = this.agentList?.map(agent => {
        const {id, firstName, lastName, age, gender, username, address, role} = agent;
        return {
          id,
          firstName,
          lastName,
          age,
          gender,
          username,
          city: address.city,
          state: address.stateCode,
          country: address.country,
          role,
          action: 'Details'
        }
      }).sort((a,b)=>this.sortByName(a,b));
      this.dataSource = new MatTableDataSource<any>(this.agentTable);
      this.dataSource.paginator = this.paginator;
    });
  }

  sortByName(a: any, b: any){
    if (a.lastName < b.lastName) return -1;
    if (a.lastName > b.lastName) return 1;
    if (a.lastName === b.lastName){
      if (a.firstName < b.firstName) return -1;
      if (a.firstName > b.lastName) return 1;
    }
    return 0;
  }

}