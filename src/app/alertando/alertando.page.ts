import { Component, OnInit } from "@angular/core";
import { AlertController } from '@ionic/angular';

@Component({
  selector: "app-alertando",
  templateUrl: "./alertando.page.html",
  styleUrls: ["./alertando.page.scss"],
})
export class AlertandoPage implements OnInit {
  private validador = false;
  constructor(private alertCtrl: AlertController) {}

  async presentAlert(){
    const alert= await this.alertCtrl.create({
      header:'low battery',
      subHeader:'10% of battery remaining',
      buttons:['Dismiss']
    });
    await alert.present();
    console.log("mariano");    
  }
  async presentConfirm() {
    const alert = await this.alertCtrl.create({
      header: 'Confirm purchase',
      message: 'Do you want to buy this book?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Buy',
          handler: () => {
            console.log('Buy clicked');
          }
        }
      ]
    });
    await alert.present();
  }

  async presentPrompt() {
    const alert = await this.alertCtrl.create({
      header: 'Login',
      //insertamos cuadros de input
      inputs: [
        {
          name: 'username',
          placeholder: 'Username'
        },
        {
          name: 'password',
          placeholder: 'Password',
          type: 'password'
        }
      ],
      //insertamos botones asociados
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Login',
          handler: data => {
            if (data.username == "jose")
              this.validador = true;
            if (this.validador) {
              // logged in!
              console.log(data.username + " " + data.password);
              this.validador = false;
            } else {
              // invalid login
              return false;
            }
          }
        }
      ]
    });
    await alert.present();
  }
  async presentChecking() {
    const alert = await this.alertCtrl.create({
      header: "chequeando",
      inputs: [{
        type: 'checkbox',
        name: 'nada',
        label: 'Password',
        handler: (data) => console.log("apretao" + data.checked)
      }]
    });

    await alert.present();
  }
  ngOnInit() {}
}
