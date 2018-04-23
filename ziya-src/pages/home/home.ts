import { Component } from '@angular/core';
import {Camera,CameraOptions} from '@ionic-native/camera';
import { NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  iconString:'information';

  constructor(private camera:Camera,public statusBar: StatusBar,public navCtrl: NavController) {

      // this.statusBar.overlaysWebView(true);
      // this.statusBar.styleLightContent();
      // this.statusBar.backgroundColorByName('red');
    }

  infoitems=[
  {title:'资产包转让',region:'北京',source:'银行',type:'抵押',url:'../../assets/imgs/icon-11.png',price:'500万'},
  {title:'资产包转让',region:'北京',source:'银行',type:'抵押',url:'../../assets/imgs/icon-11.png',price:'500万'},
  {title:'资产包转让',region:'北京',source:'银行',type:'抵押',url:'../../assets/imgs/icon-11.png',price:'500万'}
  ]

  // takePhoto(){
  //   console.log(1);
  //   const options: CameraOptions = {
  //     quality: 100,
  //     destinationType: this.camera.DestinationType.DATA_URL,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE,
  //     sourceType:this.camera.PictureSourceType.PHOTOLIBRARY
  //   }
    
  //   this.camera.getPicture(options).then((imageData) => {
  //    // imageData is either a base64 encoded string or a file URI
  //    // If it's base64:
  //    let base64Image = 'data:image/jpeg;base64,' + imageData;
  //    console.log(base64Image);
  //   }, (err) => {
  //    // Handle error
  //    console.log(err);
  //   });
  // }

}
