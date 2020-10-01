import { Injectable } from '@angular/core';
import {SALESDATA} from './mock-data';
import {Sales} from './../models/sales';

@Injectable({
  providedIn: 'root'
})
export class SalesServiceService {

  constructor() { }

  getSalesData():Sales[]{
    return SALESDATA;
  }
}
