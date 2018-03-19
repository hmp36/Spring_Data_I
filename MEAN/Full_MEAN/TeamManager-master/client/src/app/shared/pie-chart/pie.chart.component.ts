import {
    Component,
    ElementRef,
    ViewChild,
    AfterViewInit,
    Input,
    OnChanges,
    SimpleChanges
} from "@angular/core";
import * as _ from 'lodash';
import * as D3 from 'd3';
import { ChartSettings } from './chart.settings.model';
import { IChartItem, IChartSettings } from './chart.interfaces';

@Component({
    // inputs: [
    //     'chartData',
    //     'chartTitle',
    // ],
    selector: 'pieChart',
    templateUrl: './pie.chart.component.html',
    styleUrls: [
        './pie.chart.component.css'
    ]
})

export class PieChartComponent implements AfterViewInit {

    // @info: https://angular.io/guide/component-interaction
    @Input('chartData') _chartData: Array<IChartItem>;
    public _chartDataNumbers: Array<number> = [];
    public _chartDataNames: Array<string> = [];
    @Input('chartTitle') _chartTitle: string;

    testChartData: Array<number>;

    @ViewChild('containerPieChart') element: ElementRef;

    private host: D3.Selection;
    private svg: D3.Selection;
    private width: number;
    private height: number;
    private radius: number;
    private htmlElement: HTMLElement;

    ngOnChanges(changes: SimpleChanges) {
        if( changes._chartData.currentValue ) {
            this._chartData = JSON.parse( JSON.stringify( changes._chartData.currentValue ) );
            this._chartDataNumbers = _.map( this._chartData, (el: IChartItem) => el.number );
            this._chartDataNames = _.map( this._chartData, (el: IChartItem) => el.name );
            // test
                // console.log( '\n this._chartDataNumbers : ', this._chartDataNumbers );
                // console.log( '\n this._chartDataNames : ', this._chartDataNames[0] );
            // test - end
            this.buildPie();
        }

    }

    constructor() {
        this.testChartData = [1,2,3,4,5];
        // this.chartSettings = JSON.parse( JSON.stringify( this.chartSettings ) );
        // this.chartData = _.map(
        //     this.chartSettings.data, (el: IChartItem) => {
        //         return el.number;
        //     });

    }

    ngAfterViewInit() {
        this.htmlElement = this.element.nativeElement;
        this.host = D3.select(this.htmlElement);
        this.setup();
        this.buildSVG();
        this.buildPie();
    }

    private setup(): void {
        this.width = 250;
        this.height = 250;
        this.radius = Math.min( this.width, this.height ) / 2;
    }

    private buildSVG(): void {
        this.host.html('');
        this.svg = this.host.append('svg')
            .attr('viewBox', `0 0 ${this.width} ${this.height}`)
            .append("g")
            .attr('transform', `translate(${this.width / 2},${this.height / 2})`);
    }

    private buildPie(): void {
        let pie = D3.layout.pie();
        let arcSelection = this.svg.selectAll('.arc')
            // .data( pie( _numbers ) )
            .data( pie( this._chartDataNumbers ) )
            .enter()
            .append('g')
            .attr('class', 'arc');

        this.populatePie(arcSelection);
    }

    private populatePie(arcSelection: D3.Selection<D3.layout.pie.Arc>): void {
        let innerRadius = this.radius;
        let outerRadius = this.radius;
        let pieColor = D3.scale.category20c();
        let arc = D3.svg.arc< D3.layout.pie.Arc >()
            .outerRadius(outerRadius);
        arcSelection.append("path")
            .attr('d', arc)
            .attr('fill', (datum, index) => {
                return pieColor(`${index}`);
            });

        arcSelection.append('text')
            .attr("font-size", "10px")
            .attr("fill", "white")
            .attr('transform', (datum: any) => {
                datum.innerRadius = 0;
                datum.outerRadius = outerRadius;
                return 'translate(' + arc.centroid(datum) + ')';
            })
            .text( (datum, index) => {
                return this._chartDataNames[index] + '( ' + this._chartDataNumbers[index] + ' )';
            })
            .style('text-anchor', 'middle');
    }
}