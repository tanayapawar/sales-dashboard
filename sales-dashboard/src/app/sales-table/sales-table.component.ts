import { Component, OnInit } from '@angular/core';
import { SalesServiceService } from 'src/services/sales-service.service';
import { Sales } from '../../models/sales';

@Component({
  selector: 'app-sales-table',
  templateUrl: './sales-table.component.html',
  styleUrls: ['./sales-table.component.css'],
  providers: [SalesServiceService]
})
export class SalesTableComponent implements OnInit {
  sales: Sales[];

  constructor(private dataService: SalesServiceService) { }

  ngOnInit(): void {
    this.sales = this.dataService.getSalesData();
  }

}
