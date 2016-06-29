import { Component }        from '@angular/core';
import { CHART_DIRECTIVES } from 'angular2-highcharts'; 

@Component({
    selector: 'mouse-over-series',
    directives: [CHART_DIRECTIVES],
    styles: [`
      chart {
        display: block;
      }
    `],
    template: `
      <chart [options]="options">
        <series (mouseOver)="onSeriesMouseOver($event)">
        </series>
      </chart>
      <p><b>{{serieName}}</b> is hovered<p>
    `
})
export class MouseOverSeries {

    private serieName:any;

    constructor() {
        this.options = {
            title : { text : 'mouseOver series events example' },
            chart: { zoomType: 'x'},
            series: [
              { name : 'serie 1', data: [29.9, 71.5, 106.4, 129.2, 45,13,120], },
              { name : 'serie 2',  data: [-29.9, 4, -106.4, 0, 10,-100, 120] }
            ]
        };
    }
    options: Object;
    onSeriesMouseOver (e) {
      this.serieName = e.context.name;
    }
}