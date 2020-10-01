import { Injectable } from '@angular/core';
import {SALESDATA, SALESNUMBER} from './mock-data';
import {Sales, SalesNumber} from './../models/sales';

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
}
