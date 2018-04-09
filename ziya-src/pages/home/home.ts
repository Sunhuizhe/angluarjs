import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  iconString:'information';

  constructor(public navCtrl: NavController) {
      // this.isAndroid=platform.is('android');
      // for (let i = 0; i < 30; i++) {
      //   this.infoitems.push( {title:'资产包转让',region:'上海',source:'银行',type:'个人',url:'../../assets/imgs/images/list04.png',price:'700万'} );
      // }
    }

  infoitems=[
  {title:'资产包转让',region:'北京',source:'银行',type:'抵押',url:'../../assets/imgs/icon-11.png',price:'500万'},
  {title:'资产包转让',region:'北京',source:'银行',type:'抵押',url:'../../assets/imgs/icon-11.png',price:'500万'},
  {title:'资产包转让',region:'北京',source:'银行',type:'抵押',url:'../../assets/imgs/icon-11.png',price:'500万'}
  ]

}
