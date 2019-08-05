import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { datamonk } from 'src/Models/datamonk';


@Injectable({
  providedIn: 'root'
})
export class CallapiService {

  public static host: string = "https://webbostest.azurewebsites.net/api/";
  // public static host: string = "https://localhost:5001/api/";

  constructor(public http: HttpClient) {
    console.log('Hello CallapiProvider Service');
  }

  public getMonkAll() {
    return this.http.get<datamonk>(CallapiService.host + 'DataMonk/GetMonkDataAll');
  }

  public addUser(data:datamonk) {
    console.log(data);
    return this.http.post<datamonk>(CallapiService.host + 'DataMonk/AddMonkData', data );
  }

  public getUserById(Id: string){
    return this.http.get<datamonk>(CallapiService.host + 'User/GetbyId/'+ Id);
  }

}
