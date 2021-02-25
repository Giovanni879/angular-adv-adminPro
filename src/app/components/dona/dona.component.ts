import { Component, Input, OnInit } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {
  @Input() title: String = 'sin titulo';

  @Input('labels') doughnutChartLabels: Label[] = ['label1', 'label2', 'label3'];
  @Input('data') doughnutChartData: MultiDataSet = [
    [350, 450, 100],
  ];

  public colors:Color[] = [
    { backgroundColor: [ '#16dac7', '#bb8fce', '#e6b0aa' ] }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
