  import { Location } from '@angular/common';
  import { Component, ViewChild, OnInit} from '@angular/core';
  import {
    ChartBase,
    ChartEditorComponent,
    ChartType,
    FilterType,
    Formatter,
    ScriptLoaderService,
   
  } from 'angular-google-charts';
  import { Observable } from 'rxjs';
  import { map, share } from 'rxjs/operators';
  import { CoinsService } from 'src/app/services/coins.service';
@Component({
  selector: 'app-google-chart',
  templateUrl: './google-chart.component.html',
  styleUrls: ['./google-chart.component.scss'],
  styles: ['.inline > * { display: inline-block; vertical-align: top; }']
})
export class GoogleChartComponent{
  constructor(private coinsService:CoinsService,private location: Location, private scriptLoaderService: ScriptLoaderService) { }

 async ngOnInit() {
  await this.getMarketPrice() 
 await this.getDates()
 let data = this.marketPrice.map((price,idx)=>[this.dateLabels[idx],price])
 this.chart.data=data
}

marketPrice:[]
dateLabels:[]

    public chart = {
      title: 'Market Price',
      type: ChartType.LineChart,
      data: [
        ['08', 8.94],
        ['09', 10.49],
        ['10', 19.3],
        ['11', 21.45]
      ],
      columnNames: ['Element', 'Density'],
      options: {
        animation: {
          duration: 250,
          easing: 'ease-in-out',
          startup: true
        }
      }
    };
  
    public dashboardData = [
      ['Michael', 5],
      ['Elisa', 7],
      ['Robert', 3],
      ['John', 2],
      ['Jessica', 6],
      ['Aaron', 1],
      ['Margareth', 8]
    ];
    public filterType = FilterType.NumberRange;
  
    public chartWrapperSpecs: google.visualization.ChartSpecs = {
      chartType: ChartType.AreaChart,
      dataTable: [
        ['SMR CV', 'US Cents/KG'],
        [new Date(1990, 1, 1), 10],
        [new Date(1991, 1, 1), 20],
        [new Date(1992, 1, 1), 40],
        [new Date(1993, 1, 1), 80],
        [new Date(1994, 1, 1), 160],
        [new Date(1995, 1, 1), 320],
        [new Date(1996, 1, 1), 640],
        [new Date(1997, 1, 1), 1280]
      ]
    };
  
    public readonly formatters$: Observable<Formatter[]> = this.scriptLoaderService.loadChartPackages().pipe(
      share(),
      map(() => [
        { colIndex: 1, formatter: new google.visualization.NumberFormat({ fractionDigits: 0, prefix: '$', suffix: '‰' }) }
      ])
    );
  
    @ViewChild(ChartEditorComponent)
    public readonly editor!: ChartEditorComponent;
  
  
    public edit(chart: ChartBase) {
      this.editor
        .editChart(chart)
        .afterClosed()
        .subscribe(result => {
          if (result) {
            console.log(result);
          } else {
            console.log('Editing was cancelled');
          }
        });
    }
  
    public goBack() {
      this.location.back();
    }
    async getMarketPrice() {
      const marketPriceDetails =await this.coinsService.getMarketPrice()
       this.marketPrice=marketPriceDetails.data.values.map((data:any) => data.y)
        
      }
    async getDates() {
      const marketPriceDetails =await this.coinsService.getMarketPrice()
       this.dateLabels=marketPriceDetails.data.values.map((data:any) =>
            new Date(data.x * 1000).toLocaleDateString('en-GB'))
      }
    
  }

