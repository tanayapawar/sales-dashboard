import { Component, OnInit } from '@angular/core';
import { SalesServiceService } from 'src/services/sales-service.service';
import { Sales } from '../../models/sales';

@Component({
  selector: 'app-funnel-section',
  templateUrl: './funnel-section.component.html',
  styleUrls: ['./funnel-section.component.css'],
  providers: [SalesServiceService]
})
export class FunnelSectionComponent implements OnInit {
  sales: Sales[];

  constructor(private dataService: SalesServiceService) { }

  ngOnInit(): void {
    this.sales = this.dataService.getSalesData();
  }

}
