import { Component, OnInit } from '@angular/core';
import { SalesServiceService } from 'src/services/sales-service.service';
import { SalesNumber } from '../../models/sales';

@Component({
  selector: 'app-funnel-section',
  templateUrl: './funnel-section.component.html',
  styleUrls: ['./funnel-section.component.css'],
  providers: [SalesServiceService]
})
export class FunnelSectionComponent implements OnInit {
  salesnumbers: SalesNumber[];

  constructor(private dataService: SalesServiceService) { }

  ngOnInit(): void {
    this.salesnumbers = this.dataService.getSalesNumbers();
  }

}
