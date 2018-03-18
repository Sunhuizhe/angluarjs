import { Component, OnInit ,Input} from '@angular/core';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-local-storage',
  templateUrl: './local-storage.component.html',
  styleUrls: ['./local-storage.component.css']
})
export class LocalStorageComponent implements OnInit {

  @Input() strarr;
  donelist = [];

  constructor() {
   }

  ngOnInit() {
  }
  
  change(index){
    this.donelist.push(this.strarr[index]);
    this.strarr.splice(index,1);
  }
  change2(index){
    this.strarr.push(this.donelist[index]);
    this.donelist.splice(index,1);
  }
  delData(index){
    this.strarr.splice(index,1);
  }
  delData2(i){
    this.donelist.splice(i,1);
  }

}
