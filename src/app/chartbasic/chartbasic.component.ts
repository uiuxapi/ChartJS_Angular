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

  unitOfMeasure: string;
  maxTemp: number = 105;


  lineChart: IlineChart = {
    labels: this.generateLabels(),
    data: this.generateSeries(),
    title: 'Normal high temp range',
    type: 'line',
    unit: this.unitOfMeasure
  }

  // constructor() { }

  ngOnInit() {
    ch.draw(this.lineChart);
  }

  generateLabels(): string[] {

    let labels = [];
    let m = moment();
    let m1 = moment('04/07/2020 04:47');

    let elapsed = moment.duration(m.diff(m1)).asHours();

    if (elapsed) {
      for (let i = 0; i < elapsed; i++) {
        console.log(elapsed)
        labels[i] = i.toString()
      }
      return [...labels];
    }
    return [];
  }


  generateSeries(): number[] {
    let maxTemp: number = 105;

    let labels: number[] = [];

    if (maxTemp) {
      for (let i = 0; i < maxTemp; i++) {
        labels[i] = i * (Math.floor(Math.random() * 105)) / 100;
      }
      return [...labels].filter((l) => l > this.convertFah(20));
    }
    return [];
  }

  toggle(chart: any) {
    if (chart.data.datasets[0].label == 'Wafer Temperature Reading') {
      //
      chart.data.datasets[0].data = this.lineChart.data;
      chart.data.datasets[0].label = 'Normal high temp range';
      chart.data.datasets[0].borderColor = 'rgba(255, 99, 132, 0.2)';
      chart.data.datasets[0].backgroundColor = 'rgb(255, 99, 132)';
      chart.options.title.text = ['Wafer Temperature over 7 days'];
    } else {
      // else...
      chart.data.datasets[0].data = this.lineChart.data;
      chart.data.datasets[0].label = 'Normal low temp range';
      chart.data.datasets[0].borderColor = 'rgba(255, 99, 132, 0.2)';
      chart.data.datasets[0].backgroundColor = 'rgb(255, 99, 132)';
      chart.options.title.text = ['Wafer Temperature over 24 hours'];
    }
  }

  convertFah(numCel: number) {      // C° TO F°
    this.unitOfMeasure = 'fahrenheit';
    return (numCel * 1.8) + 32;
  }

  convertCel(numFah: number) {     //  F° TO C°
    this.unitOfMeasure = 'celsius';
    return (numFah - 32) * .5556;
  }

}
