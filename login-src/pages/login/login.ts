import { Component, Input } from '@angular/core';
import { Http,Jsonp } from '@angular/http';
import { AlertController } from 'ionic-angular';
// import { Input } from '@angular/'


import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  // @Input() username;
  // @Input() password;


  errmessage = '';
  username = '';
  pword = '';

  constructor(public http:Http,public jsonp:Jsonp,private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  checkData(){
    console.log(this.username,this.pword);
    var data = this.http.post("http://datainfo.duapp.com/shopdata/userinfo.php",{
      status:"login",
      userID:this.username,
      password:this.pword
    }
  );
  console.log(JSON.stringify(data));

    // this.presentAlert();    
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      subTitle: this.errmessage,
      buttons: ['知道了！']
    });
    alert.present();
  }

 

}
