import { NgModule, ErrorHandler } from '@angular/core';
import { Camera } from '@ionic-native/camera';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { InfoPage } from '../pages/info/info';
import { ReleaseinfoPage } from '../pages/releaseinfo/releaseinfo';
import { RegisteagreePage } from '../pages/registeagree/registeagree';
import { ReleasetypePage } from '../pages/releasetype/releasetype'
import { ChangepwdPage } from '../pages/changepwd/changepwd';
import { RegistePage } from '../pages/registe/registe';
import { LoginPage } from '../pages/login/login';
import { InfodetailPage } from '../pages/infodetail/infodetail';
import { SearchPage } from '../pages/search/search';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SearchPage,
    ChangepwdPage,
    RegistePage,
    ReleasetypePage,
    RegisteagreePage,
    InfoPage,
    InfodetailPage,
    ReleaseinfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SearchPage,
    ChangepwdPage,
    RegistePage,
    ReleasetypePage,
    RegisteagreePage,
    InfoPage,
    InfodetailPage,
    ReleaseinfoPage
  ],
  providers: [
    StatusBar,
    Camera,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
