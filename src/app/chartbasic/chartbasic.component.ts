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

  elapsed = moment.duration(this.m2.diff(this.m1)).asHours()

  lineChart: IlineChart = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    data: [0, 10, 5, 2, 20, 30, 45],
    title: 'Temperature Chart',
    type: 'line',
  }

  constructor() { }

  ngOnInit() {
    ch.draw(this.lineChart);
  }

}
