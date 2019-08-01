import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { datamonk } from 'src/Models/datamonk';


@Injectable({
  providedIn: 'root'
})
export class CallapiService {

  public static host: string = "https://testboswebapi.azurewebsites.net/api/";

  constructor(public http:HttpClient) {
    console.log('Hello CallapiProvider Service');
   }
   public getUserAll() {
    return this.http.get<datamonk>(CallapiService.host + 'DataMonk/GetMonkDataAll');
  }

}
