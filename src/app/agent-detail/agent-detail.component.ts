import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { AgentsService } from '../../service/agents.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-agent-detail',
  standalone: true,
  imports: [NgIf, RouterOutlet, MatCardModule, MatDividerModule, MatIconModule, MatButtonModule],
  templateUrl: './agent-detail.component.html',
  styleUrl: './agent-detail.component.css'
})
export class AgentDetailComponent implements OnInit {

  agent?: User;
  id!: string;

  constructor(
    private agentService: AgentsService,
    private route: ActivatedRoute,
    private router: Router,
  ){}

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.agentService.getUserById(this.id).subscribe((data: any) => {
      this.agent = data;
      this.goToAddress();
    });

  }

  backToAgentList(){
    this.router.navigate(['/agents']);
  }

  goToAddress() {
    this.router.navigate([`/agent/${this.id}/address`], {state: this.agent?.address});
  }

  goToBankCard() {
    this.router.navigate([`/agent/${this.id}/bank-card`], {state: this.agent?.bank});
  }

  goToCompany() {
    this.router.navigate([`/agent/${this.id}/company`], {state: this.agent?.company});
  }

  goToCrypto() {
    this.router.navigate([`/agent/${this.id}/cryptocurrency`], {state: this.agent?.crypto});
  }

}
