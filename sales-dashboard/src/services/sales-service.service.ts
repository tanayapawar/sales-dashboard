import { Injectable } from '@angular/core';
import {SALESDATA, SALESNUMBER, SALESSTATUS} from './mock-data';
import {Sales, SalesNumber, SalesStatus} from './../models/sales';

@Injectable({
  providedIn: 'root'
})
export class SalesServiceService {

  constructor() { }

  getSalesData():Sales[]{
    return SALESDATA;
  }
  getSalesNumbers(): SalesNumber[] {
    return SALESNUMBER;
  }
  getSalesStatus(): SalesStatus[] {
    return SALESSTATUS;
  }
}
