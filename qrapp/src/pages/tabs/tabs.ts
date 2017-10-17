import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage, GuardadosPage } from "../index.pages";


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1:any = HomePage;
  tab2:any = GuardadosPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
