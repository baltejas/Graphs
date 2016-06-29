import { Component }        from '@angular/core';
import { CHART_DIRECTIVES } from 'angular2-highcharts'; 

@Component({
    selector: 'dynamic-data',
    directives: [CHART_DIRECTIVES],
    styles: [`
      chart {
        display: block;
      }
    `],
    template: `
      <chart [options]="options" 
             (load)="saveInstance($event.context)">
      </chart>
    `
})
export class DynamicData {
     
    constructor() {
        this.options = {
          chart: { type: 'spline' },
          title: { text : 'dynamic data example'},
          series: [{ data: [2,3,5,8,13] }]
        };
        setInterval(() => this.chart.series[0].addPoint(Math.random() * 10), 1000);
    }
    chart : any;
    options: Object;
    saveInstance(chartInstance) {
        this.chart = chartInstance;
    }
}