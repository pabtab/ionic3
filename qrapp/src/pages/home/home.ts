import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	constructor(private barcodeScanner: BarcodeScanner, public toastCtrl: ToastController) {
	}

	scan() {
		this.barcodeScanner.scan().then((barcodeData) => {
			console.log(barcodeData);
			console.log(barcodeData.text);
		}, (err) => {
			console.log("error");
			this.mostrar_error("error" + err);
		});
	}

	mostrar_error(mensaje: string) {
		let toast = this.toastCtrl.create({
			message: mensaje,
			duration: 3000
		});
		toast.present();
	}
}
