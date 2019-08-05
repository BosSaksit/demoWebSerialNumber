import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-see-data',
  templateUrl: './see-data.page.html',
  styleUrls: ['./see-data.page.scss'],
})
export class SeeDataPage implements OnInit {

  // getid: any;
  // getid2: any;

  constructor(public navParam: NavParams, private route: ActivatedRoute) {
    // this.getid = this.route.params.subscribe(params => {
    //   this.getid2 = params['id'];
    // });
  }

  ngOnInit() {
  }

}
