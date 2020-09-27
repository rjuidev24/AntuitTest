import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() data;

  summary = {
    average: 0,
    double: 0,
    total: 0,
    count: 0
  };

  initOpts = {
    renderer: 'svg',
    width: 1000,
    height: 600
  };

  options = {
    color: ['#d48265'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: [],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [{
      type: 'value'
    }],
    series: [{
      name: 'Balance',
      type: 'bar',
      barWidth: '60%',
      data: []
    }]
  };

  constructor() { }

  ngOnInit(): void {
    this.options.xAxis[0].data = [...this.data[0]];
    this.options.series[0].data = [...this.data[1]];

    this.summary = {
      total: this.data[1].reduce((total, amt) => total += amt, 0).toFixed(2),
      double: this.data[1].map(amt => amt * 2).reduce((total, amt) => total += amt).toFixed(2),
      average: 0,
      count: this.data[1].filter(amt => amt >= 10 && amt <= 20).length
    };

    this.summary.average = this.summary.total / this.data[1].length;
  }
}
