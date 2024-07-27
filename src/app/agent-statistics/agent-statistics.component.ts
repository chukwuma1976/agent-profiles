import { Component } from '@angular/core';
import { User } from '../../models/user';
import { AgentsService } from '../../service/agents.service';
import { NgFor, NgClass, NgIf } from '@angular/common';
import { PieChartComponent } from "../pie-chart/pie-chart.component";
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-agent-statistics',
  standalone: true,
  imports: [NgFor, NgClass, PieChartComponent, NgIf, MatButtonModule],
  templateUrl: './agent-statistics.component.html',
  styleUrl: './agent-statistics.component.css'
})
export class AgentStatisticsComponent {

  agentList: User[] = [];
  genders: any = [];
  roles: any = [];
  eyeColors: any = [];
  hairColors: any = [];
  hairTypes: any = [];
  bloodTypes: any = [];
  colleges: any = [];
  dayJobs: any = [];
  companies: any = [];
  chart: any;
  backgroundColor = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'pink']
  displayPieChart = true;
  isBtnActive!: string;
  chartTitle!: string;
  chartLabels!: string[];
  chartData!: any[];
  chartColors!: string[];
  statsArray!: any[];

  constructor(private agentsService: AgentsService) {
    this.agentsService.getUsers().subscribe((data: any) => {
      this.agentList = data.users
      this.genders = Object.entries(this.agentsService.getGenderDistribution(this.agentList));
      this.roles = Object.entries(this.agentsService.getRoleDistribution(this.agentList));
      this.eyeColors = Object.entries(this.agentsService.getEyeColorDistribution(this.agentList));
      this.hairColors = Object.entries(this.agentsService.getHairColorDistribution(this.agentList));
      this.hairTypes = Object.entries(this.agentsService.getHairTypeDistribution(this.agentList));
      this.bloodTypes = Object.entries(this.agentsService.getBloodTypeDistribution(this.agentList));
      this.colleges = Object.entries(this.agentsService.getEducationDistribution(this.agentList));
      this.dayJobs = Object.entries(this.agentsService.getJobTitleDistribution(this.agentList));
      this.companies = Object.entries(this.agentsService.getCompanyDistribution(this.agentList));

      this.updateChart('Gender', this.genders);
    });
  }

  updateChart(title: string, dataArray: any[]) {
    if (!this.displayPieChart) this.displayPieChart = true;
    this.isBtnActive = title;
    dataArray.sort((a,b)=>sortAlphabetically(a,b));

    this.chartTitle = title;
    this.chartData = dataArray.map(item => item[1]);
    this.chartLabels = dataArray.map(item => item[0] + ': ' + item[1]);

    if (title === 'Hair Color' || title === 'Eye Color')
      this.chartColors = dataArray
        .map(item => (item[0] === "Amber" || item[0] === "Blonde") ? "yellow" : item[0])
    else this.chartColors = this.backgroundColor;
  }

  displayStats(title: string, stats: any[]) {
    if (this.displayPieChart) this.displayPieChart = false;
    this.isBtnActive = title;
    this.chartTitle = title;

    this.statsArray = [];

    const tempArray: any[] = [...stats];
    tempArray.sort((a,b)=>sortAlphabetically(a,b));
    let subArray = []
    for (let item of tempArray) {
      subArray.push(item);
      if ((tempArray.indexOf(item) % 15 == 14) || (tempArray.indexOf(item) === tempArray.length - 1)) {
        this.statsArray.push(subArray);
        subArray = [];
      }
    }

  }

}
function sortAlphabetically(a: any[], b:any []): number{
  if (a[0]<b[0]) return -1;
  if (a[0]>b[0]) return 1;
  return 0;
}

