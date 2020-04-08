import { Component, OnInit } from '@angular/core';
import * as ch from '../chartbase';
import { IlineChart } from '../model/linechart.interface';
import * as moment from 'moment';

@Component({
  selector: 'app-chartbasic',
  templateUrl: './chartbasic.component.html',
  styleUrls: ['./chartbasic.component.scss']
})
export class ChartbasicComponent implements OnInit {
  // current Date + Time
  m = moment();
  m1 = moment('04/06/2020');
  m2 = this.m;
  maxTemp: number = 105;

  elapsed = moment.duration(this.m2.diff(this.m1)).asHours()

  lineChart: IlineChart = {
    labels: this.generateLabels(this.elapsed),   // elassed time hrs
    data: this.generateSeries(this.maxTemp),
    title: 'Temperature Chart',
    type: 'line',
  }

  // constructor() { }

  ngOnInit() {
    ch.draw(this.lineChart);
  }

  generateLabels(num: number): string[] {
    let labels = []
    if (num) {
      for (let i = 0; i < num; i++) {
        labels[i] = i
      }
      return [...labels];
    }
    return [];
  }


  generateSeries(num: number): number[] {
    let labels: number[] = [];

    if (num) {
      for (let i = 0; i < num; i++) {
        labels[i] = i * (Math.floor(Math.random() * 104)) / 100;
      }
      return [...labels].filter((l) => l > 65);
    }
    return [];
  }

  toggle(chart: any) {
    if (chart.data.datasets[0].label == 'Temperature Chart') {
      //
      chart.data.datasets[0].data = this.lineChart.data;
      chart.data.datasets[0].label = 'Wafer Temperature';
      chart.data.datasets[0].borderColor = 'rgba(255, 99, 132, 0.2)';
      chart.data.datasets[0].backgroundColor = 'rgb(255, 99, 132)';
      chart.options.title.text = ['Wafer Temperature over 7 days'];
    } else {
      // else...
      chart.data.datasets[0].data = this.lineChart.data;
      chart.data.datasets[0].label = 'Wafer Temperature';
      chart.data.datasets[0].borderColor = 'rgba(255, 99, 132, 0.2)';
      chart.data.datasets[0].backgroundColor = 'rgb(255, 99, 132)';
      chart.options.title.text = ['Wafer Temperature over 24 hours'];
    }
  }

  convertFah(numCel: number) {      // C° TO F°
    return (numCel * 1.8) + 32;
  }

  convertCel(numFah: number) {     //  F° TO C°
    return (numFah - 32) * .5556;
  }

}
