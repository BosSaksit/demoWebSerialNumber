import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data: FormGroup;
  private submitRequested: boolean = false;

  constructor(public alertController: AlertController, public navCtrl: NavController, public fb: FormBuilder) {
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



  presentAlertConfirm(value: any): void {
    this.submitRequested = true;
    console.log(this.data.value);
    if (this.data.invalid) {
      return;
    }
    // const alert = await this.alertController.create({
    //   header: 'เพิ่มข้อมูลเรียบร้อย',
    //   message: 'เพิ่มข้อมูลลงระบบเรียบร้อยแล้ว',
    //   buttons: [
    //     {
    //       text: 'ยกเลิก',
    //       role: 'cancel',
    //       cssClass: 'secondary',
    //       handler: (blah) => {
    //         console.log('Confirm Cancel: blah');
    //       }
    //     }, {
    //       text: 'ตกลง',
    //       handler: () => {
    //         console.log('Confirm Okay');
    //       }
    //     }
    //   ]
    // });

    // await alert.present();
  }

  // public isValid(name: string): boolean {
  //   var ctrl = this.data.get(name);
  //   return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  // }

}
