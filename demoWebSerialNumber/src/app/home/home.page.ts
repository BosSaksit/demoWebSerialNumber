import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CallapiService } from '../callapi.service';
import { datamonk } from 'src/Models/datamonk';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  getDataCallApi: any;
  data: FormGroup;
  monkData: datamonk
  submitRequested: boolean = false;
  num:number = 1;

  constructor(public alertController: AlertController, public navCtrl: NavController, public fb: FormBuilder,
    public callapi: CallapiService) {
    this.data = this.fb.group({
      'id': [null],
      'typeAmulet': ['', Validators.compose([
        Validators.required
      ])],
      'nameAmulet': [null, Validators.compose([
        Validators.required
      ])],
      'shapeAmulet': [null, Validators.compose([
        Validators.required
      ])],
      'compoundAmulet': [null, Validators.required],
      'nameMonk': [null, Validators.required],
      'dateConsecrate': [null, Validators.required],
      'temple': [null, Validators.required],
      'province': [null, Validators.required],
      'nameHost': [null, Validators.required],
      'firstId': [null, Validators.required],
      'countGenIdOfMount': [null, Validators.required],
      'amountGenId': [null, Validators.required]
    });
  }
  get f() { return this.data.controls; }

  public gotoInfoData() {
    this.navCtrl.navigateForward('info-data');
  }

  public logCallApi() {
    this.callapi.getMonkAll().subscribe((it) => {
      console.log(it);
      this.getDataCallApi = it;
      console.log(this.getDataCallApi)
    });
  }


  public async presentAlertConfirm() {
    this.submitRequested = true;
    console.log(this.data);
    if (this.data.valid) {
      const alert = await this.alertController.create({
        header: 'เพิ่มข้อมูลพระ!',
        message: 'ยืนยันการเพิ่มข้อมูลพระจำนวน',
        buttons: [
          {
            text: 'ยกเลิก',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('ยกเลิกการเพิ่มข้อมูลพระ');
            }
          }, {
            text: 'ยืนยัน',
            handler: () => {
              console.log('เพิ่มข้อมูล');
              console.log(this.data);
              console.log(this.data.value);  
              this.monkData = this.data.value;
              for (let index = 1; index <= this.monkData.amountGenId; index++) {
                this.monkData.monkId = index.toString();
                console.log(this.monkData.firstId);
                console.log(this.monkData);
  
                this.callapi.addUser(this.monkData).subscribe(it =>{
                  console.log(it);
                  
                });
                
              }
              console.log('AddDataSucess');
            }
          }
        ]
      });
  
      await alert.present();
      
      
    }else{
      const alert = await this.alertController.create({
        header: 'ข้อมูลไม่ถูกต้อง',
        subHeader: 'Subtitle',
        message: 'กรุณากรอกข้อมูลให้ถูกต้อง',
        buttons: ['OK']
      });
  
      await alert.present();
    }
    
  }

  public isValid(name: string): boolean {
    var ctrl = this.data.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

}
