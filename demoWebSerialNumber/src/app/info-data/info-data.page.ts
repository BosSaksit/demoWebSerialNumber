import { Component, OnInit } from '@angular/core';
import { CallapiService } from '../callapi.service';
import { datamonk } from 'src/Models/datamonk';
import { NavController } from '@ionic/angular';
import { UrlTree, Router } from '@angular/router';

@Component({
  selector: 'app-info-data',
  templateUrl: './info-data.page.html',
  styleUrls: ['./info-data.page.scss'],
})
export class InfoDataPage implements OnInit {

  public getDataAll: datamonk

  constructor(public callapi: CallapiService, public navCtrl: NavController,public router: Router ) { }

  ngOnInit() {
    this.callapi.getMonkAll().subscribe((it) => {
      console.log(it);
      this.getDataAll = it;
      console.log(this.getDataAll)
    });
  }

  public toSeeData() {
   this.navCtrl.navigateForward('see-data');
  }

}
