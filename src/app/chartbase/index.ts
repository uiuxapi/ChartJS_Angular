import * as Chart from 'chart.js';
import * as moment from 'moment';
import { IlineChart } from '../model/linechart.interface';


export function draw(chartObj: IlineChart) {

  const canvas = <HTMLCanvasElement>document.getElementById('chartb');
  const ctx = canvas.getContext('2d');

  new Chart(ctx, {
    // chart type
    type: chartObj.type,

    // dataset
    data: {
      labels: chartObj.labels,
      datasets: [{
        label: chartObj.unit,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 3,
        borderDash: [0.5],       // 30 min
        pointHoverBackgroundColor: 'white',
        spanGaps: true,
        data: chartObj.data
      }]
    },
    options: {
      maintainAspectRatio: false,
      title: {
        display: true,
        text: chartObj.title,
        fontSize: 10
      },
      legend: {
        display: false,
        position: 'top',
        labels: {
          fontColor: '#cecece',
        }
      },
      scales: {
        xAxes: [{
          //type: 'linear',
          // offset: true,
          //time: {
          // unit: 'hour'
          //},
          scaleLabel: {
            display: true,
            labelString: "Normal low temp range",
            fontSize: 10,
          },
          ticks: {
            max: 24,
            min: 0
          },
          gridLines: {
            display: true,
            lineWidth: 2,
            drawBorder: true,
            borderDash: [0, 2],
            offsetGridLines: false
          },
        }],
        yAxes: [{
          type: 'linear',
          offset: true,
          scaleLabel: {
            display: true,
            labelString: "",
            fontSize: 10,
          },
          ticks: {
            min: 68,
            max: 105
          },
          gridLines: {
            display: true,
            lineWidth: 2,
            drawBorder: true,
            borderDash: [1, 2],
            offsetGridLines: false
          },
        }]
      }
    }
  });

}