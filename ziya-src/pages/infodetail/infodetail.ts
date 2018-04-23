import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
/**
 * Generated class for the InfodetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-infodetail',
  templateUrl: 'infodetail.html',
})
export class InfodetailPage {

  username:'唐教授';

  constructor(private statusBar: StatusBar,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfodetailPage');
  }

  info=[
    {usertype:'others',imgURL:'assets/imgs/QQ2.jpg',information:'您好，什么是不良资产'},
    {usertype:'self',imgURL:'assets/imgs/QQ4.jpg',information:'您好，不良资产是指企业的资产尚未处理清楚'},
    {usertype:'others',imgURL:'assets/imgs/QQ2.jpg',information:'您好，我暂时不在电脑前，稍后回复您，给您造成的不便十分抱歉！'},
    {usertype:'others',imgURL:'assets/imgs/QQ2.jpg',information:'好的，谢谢'},
    {usertype:'self',imgURL:'assets/imgs/QQ4.jpg',information:'不客气！'},
    {usertype:'others',imgURL:'assets/imgs/QQ2.jpg',information:'好的，谢谢'},
    {usertype:'others',imgURL:'assets/imgs/QQ2.jpg',information:'好的，谢谢'}
  ]
}
