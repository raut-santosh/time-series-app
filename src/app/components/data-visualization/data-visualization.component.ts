import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-data-visualization',
  templateUrl: './data-visualization.component.html',
  styleUrls: ['./data-visualization.component.css'],
})
export class DataVisualizationComponent implements AfterViewInit {
  @ViewChild('lineChartCanvas') lineChartCanvas!: ElementRef;
  data: any = [];
  chart!: Chart;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getData();
  }

  ngAfterViewInit() {
    this.renderLineChart();
  }

  renderLineChart() {
    const ctx = this.lineChartCanvas.nativeElement;

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [],
        datasets: [],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Timestamp',
            },
            offset: true,
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Value',
            },
          },
        },
      },
    });
  }

  getData() {
    this.apiService.callapi('GET_TIMESERIES', {}, null, 'get').subscribe(
      (response: any) => {
        console.log(response);
        this.data = response.data;

        const labels = response.data.map((item: any) => item.variable + ' : ' + item.timestamp);
        const datasets = [{
          label: 'Value',
          data: response.data.map((item: any) => item.value),
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderWidth: 1,
          fill: false,
        }];

        if (this.chart) {
          this.chart.data.labels = labels;
          this.chart.data.datasets = datasets;

          this.chart.update();
        }
      },
      (error: any) => {
        console.error(error);
      }
    );
  }


}
