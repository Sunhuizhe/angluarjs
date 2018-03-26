import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule,JsonpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { GoodComponent } from './components/good/good.component'

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    GoodComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot( [
      { path: 'goodslist', component: ListComponent },
      { path: 'good/:id', component: GoodComponent }
] ) 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
