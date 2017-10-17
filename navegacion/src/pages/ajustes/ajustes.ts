import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { ModalPage } from "../index.paginas";

/**
 * Generated class for the AjustesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
	selector: 'page-ajustes',
	templateUrl: 'ajustes.html',
})
export class AjustesPage {

	constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad AjustesPage');
	}

	activarPrincipal() {
		this.navCtrl.parent.select(0);
	}

	mostrarModal() {
		let modal = this.modalCtrl.create(ModalPage, { nombre: "pablo", edad: 24 });

		modal.present();
		modal.onDidDismiss(parametros => {
			if (parametros) {
				console.log("datosmodal");
				console.log(parametros);
			}
		})
	}

}
