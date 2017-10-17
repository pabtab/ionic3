import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
	selector: 'page-modal',
	templateUrl: 'modal.html',
})
export class ModalPage {

	nombre:string = "";
	edad:number = 0;

	constructor(public viewCtrl: ViewController, public navParams: NavParams) {
		this.nombre = this.navParams.get('nombre');
		this.edad = this.navParams.get('edad');
		console.log(this.nombre + this.edad);
	}

	cerrarConParams(){
		let data = {
			nombre: "goku",
			edad: "30",
			coords: {
				lat:10,
				lng: -10
			}
		};
		
		this.viewCtrl.dismiss(data);
	}

	cerrarSinParams(){
		this.viewCtrl.dismiss();
	}

}
