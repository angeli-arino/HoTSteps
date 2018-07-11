import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { AlertController } from 'ionic-angular';

//pages
import { Login } from '../login/login';

/**
 * Generated class for the Resetpass page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-resetpass',
  templateUrl: 'resetpass.html',
})
export class Resetpass {
  form: FormGroup;
  resetError: string;

  constructor(
    public navCtrl: NavController,
    fb: FormBuilder,
    private auth: AuthService,
    public alertCtrl: AlertController
  ) {
    this.form = fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])]
    });
  }

  showAlert() {
    console.log('hi');
    const alert = this.alertCtrl.create({
      title: 'Password Reset',
      subTitle: 'An email has been sent to reset your password!',
      buttons: [{
                  text: 'OK',
                  handler:() => {
                    this.navCtrl.setRoot(Login);
                  }}]
    });
    alert.present();
  }

  reset() {
    let data = this.form.value;
    console.log('hello');
    this.auth.resetPassword(data.email).then(
      () => this.showAlert()
    );
 }
}
