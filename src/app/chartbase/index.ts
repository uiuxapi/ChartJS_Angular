import * as Chart from 'chart.js';
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
        label: chartObj.title,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 3,
        borderDash: [0.5],       // 30 min
        data: chartObj.data
      }]
    },
    // Configuration options go here
    options: {
      maintainAspectRatio: false,
      title: {
        display: true,
        text: 'Temperature Chart',
        fontSize: 16
      },
      legend: {
        display: true,
        position: 'top'
      }
    }
  });

  //Chart.defaults.line.showLines = false;

}