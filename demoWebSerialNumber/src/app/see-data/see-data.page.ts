import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CallapiService } from '../callapi.service';
import { datamonk } from 'src/Models/datamonk';


@Component({
  selector: 'app-see-data',
  templateUrl: './see-data.page.html',
  styleUrls: ['./see-data.page.scss'],
})
export class SeeDataPage implements OnInit {

  getid: any;
  dataById:datamonk;
  serial:string;
  monkId:string;
  //ประเภทพระเครื่อง

  typeAmulet:string;
   //ชื่อพระเครื่อง
  nameAmulet:string;
   //พิมพ์พระเครื่อง
  shapeAmulet:string;
   //มวลสาร
  compoundAmulet:string;
   //ชื่อพระที่ปลุกเสก
  nameMonk:string;
  //วันที่ปลุกเสก
  dateConsecrate:string;
  //วัดที่ปลุกเสก
  temple:string;
  //จังหวัด
  province:string;
  //ชื่อเจ้าภาพ
  nameHost:string;
  //รหัสนำ(ขึ้นต้น)
  firstId:string;
  //ครั้งที่เจนรหัสในเดือน
  countGenIdOfMount:string;
  //จำนวนที่เจนรหัส
  amountGenId:number;

  
  constructor(public callapi:CallapiService ,public activatedRoute:ActivatedRoute) {
    
  }

  ngOnInit() {
    this.getid = this.activatedRoute.snapshot.paramMap.get('_id');
    console.log(this.getid);
    this.callapi.getUserById(this.getid).subscribe(it =>{
      console.log(it);
      this.dataById = it;
      console.log(this.dataById);
      this.serial = this.dataById.serial;
      this.typeAmulet = this.dataById.typeAmulet;
      this.nameAmulet = this.dataById.nameAmulet;
      this.shapeAmulet = this.dataById.shapeAmulet;
      this.compoundAmulet = this.dataById.compoundAmulet;
      this.nameMonk = this.dataById.nameMonk;
      this.dateConsecrate = this.dataById.dateConsecrate
      this.temple = this.dataById.temple;
      this.province = this.dataById.province;
      this.nameHost = this.dataById.nameHost;
      this.amountGenId = this.dataById.amountGenId;
    });
  }

}
