import { bootstrap } from '@angular/platform-browser-dynamic';
import {SimpleChartExample} from './basic';
import {PointEvent} from './point.event';
import {MouseOverSeries} from './mouse.over.series';
import {DynamicData} from './dynamic.data';
import {StockChart} from './stock.chart';
import {JSONP_PROVIDERS} from '@angular/http';

bootstrap(SimpleChartExample);
bootstrap(PointEvent);
bootstrap(MouseOverSeries);
bootstrap(DynamicData);
bootstrap(StockChart, [JSONP_PROVIDERS]);