import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { RegistePage } from '../pages/registe/registe';
import { LoginPage } from '../pages/login/login';
import { InfoPage } from '../pages/info/info';
import { InfodetailPage } from '../pages/infodetail/infodetail';
import { ChangepwdPage } from '../pages/changepwd/changepwd';
import { ReleasetypePage } from '../pages/releasetype/releasetype';
import { ReleaseinfoPage } from '../pages/releaseinfo/releaseinfo';
import { RegisteagreePage } from '../pages/registeagree/registeagree';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = ReleaseinfoPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
