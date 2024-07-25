import { Component, Input } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.css'
})
export class PieChartComponent {

  @Input() title!: string;
  @Input() labels!: string[];
  @Input() data!: any[];
  @Input() colors!: string[];

  chart: any = undefined;

  ngOnInit(){
    this.createChart();
  }

  ngOnChanges(){
    if (this.chart) this.chart.destroy();
    this.createChart();
  }

  createChart() {
    this.chart = new Chart("MyChart", {
      type: 'pie', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: this.labels,
        datasets: [{
          label: this.title,
          data: this.data,
          backgroundColor: this.colors,
          hoverOffset: 4
        }],
      },
      options: {
        aspectRatio: 2.5
      }

    });
  }
}
