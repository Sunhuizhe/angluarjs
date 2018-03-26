import { Component, OnInit } from '@angular/core';
import { Http,Jsonp} from '@angular/http';  

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    dataArr = [];

  constructor(public http:Http,public jsonp:Jsonp) {
    
   }

  ngOnInit() {
    this.jsonp.get( 'http://datainfo.duapp.com/shopdata/getGoods.php?callback=JSONP_CALLBACK' ).subscribe( data=>{ 
      this.dataArr = data['_body'];
      console.log(this.dataArr);
     },err=>{
      console.log(err);
     } )
  }

}
