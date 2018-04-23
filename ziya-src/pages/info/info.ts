import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

  infolist = [
    {imgsURL:'assets/imgs/QQ4.jpg',username:'资芽小助手',information:'请问有什么可以帮助您的吗？',time:'1小时前'},
    {imgsURL:'assets/imgs/QQ2.jpg',username:'系统消息',information:'根据您发布的消息，我们',time:'2小时前'},
    {imgsURL:'assets/imgs/QQ3.jpg',username:'张先生',information:'根据您发布的消息，我们',time:'3小时前'},
    {imgsURL:'assets/imgs/QQ4.jpg',username:'东方资产管理',information:'我对您的资产有一些兴趣',time:'8小时前'},
    {imgsURL:'assets/imgs/QQ5.jpg',username:'张扬',information:'根据您发布的消息，我们',time:'昨天'},
    {imgsURL:'assets/imgs/QQ2.jpg',username:'系统消息',information:'根据您发布的消息，我们',time:'2小时前'},
    {imgsURL:'assets/imgs/QQ4.jpg',username:'东方资产管理',information:'我对您的资产有一些兴趣',time:'8小时前'},
    {imgsURL:'assets/imgs/QQ1.jpg',username:'张先生',information:'根据您发布的消息，我们',time:'3小时前'}
  ]

}
