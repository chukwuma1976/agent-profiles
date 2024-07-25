import { Component } from '@angular/core';
import { User } from '../../models/user';
import { AgentsService } from '../../service/agents.service';
import { NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-agent-gallery',
  standalone: true,
  imports: [NgFor, MatIconModule],
  templateUrl: './agent-gallery.component.html',
  styleUrl: './agent-gallery.component.css'
})
export class AgentGalleryComponent {
  agentList: User[] = [];
  index = 0;
  maxIndex! : number;
  currentAgent! : User;
  
  constructor(private agentsService: AgentsService) {
    this.agentsService.getUsers().subscribe((data: any) => {
      this.agentList = data.users
      this.agentList?.sort((a, b) => this.sortByName(a, b));
      this.maxIndex = this.agentList!.length
      this.setAgent();
      this.agentsService.getGenderDistribution(this.agentList);
    });
    
  }

  sortByName(a: any, b: any) {
    if (a.lastName < b.lastName) return -1;
    if (a.lastName > b.lastName) return 1;
    if (a.lastName === b.lastName) {
      if (a.firstName < b.firstName) return -1;
      if (a.firstName > b.lastName) return 1;
    }
    return 0;
  }

  previous(){
    if (this.index > 0 ) this.index--;
    this.setAgent()
  }

  next(){
    if (this.index < this.maxIndex) this.index++;
    this.setAgent()
  }

  setAgent(){
    this.currentAgent = this.agentList![this.index]
  }
  
}
