import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { AuthService } from '../services/auth.service';

import { TabsPage } from '../pages/tabs/tabs';
import { Slides } from '../pages/slides/slides';
import { Login } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, private auth: AuthService, splashScreen: SplashScreen,
  public storage: Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      this.storage.get('introShown').then((result) => {

        if(result) {
          this.auth.afAuth.authState
              .subscribe(
                user => {
                  if (user) {
                    this.rootPage = TabsPage;
                  } else {
                    this.rootPage = Login;
                  }
                },
                () => {
                  this.rootPage = Login;
                }
              );
        } else {
          this.rootPage = Slides;
          this.storage.set('introShown', true);
        }
      })
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


  login() {
  this.auth.signOut();
  this.nav.setRoot(Login);
  }

  logout() {
	this.auth.signOut();
	this.nav.setRoot(TabsPage);
  }
}
