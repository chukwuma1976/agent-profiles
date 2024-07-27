import { Component } from '@angular/core';
import { User } from '../../models/user';
import { AgentsService } from '../../service/agents.service';
import { NgFor, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-agent-gallery',
  standalone: true,
  imports: [NgFor, NgIf, MatIconModule, MatButtonModule, RouterLink],
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
      this.maxIndex = this.agentList!.length-1;
      this.setAgent();
      this.agentList = this.agentsService.updateImageUrls(this.agentList);
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
