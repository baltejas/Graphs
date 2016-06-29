import { Component }                    from '@angular/core';
import {Highcharts }                    from 'angular2-highcharts'; 
import { Jsonp, JSONP_PROVIDERS }       from '@angular/http';
import { CHART_DIRECTIVES }             from 'angular2-highcharts';

@Component({
    selector: 'stock-chart',
    directives: [CHART_DIRECTIVES],
    styles: [`
      chart {
        display: block;
      }
    `],
    template: `<chart type="StockChart" [options]="options"></chart>`
})
export class StockChart {
    constructor(jsonp : Jsonp) {
        jsonp.request('https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=JSONP_CALLBACK').subscribe(res => {
            this.options = {
                title : { text : 'AAPL Stock Price' },
                series : [{
                    name : 'AAPL',
                    data : res.json(),
                    tooltip: {
                        valueDecimals: 2
                    }
                }]
            };
        });
    }
    options: Object;
}