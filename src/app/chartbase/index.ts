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
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: chartObj.data
      }]
    },

    // Configuration options go here
    options: {}
  });
}