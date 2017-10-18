import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';

//providers
import { HistorialServiceProvider } from "../../providers/historial-service/historial-service";

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	constructor(private barcodeScanner: BarcodeScanner, public toastCtrl: ToastController, private _historialService: HistorialServiceProvider) {
	}

	scan() {
		this.barcodeScanner.scan().then((barcodeData) => {
			console.log(barcodeData);
			console.log(barcodeData.text);

			if(!barcodeData.cancelled && barcodeData.text != null){
				this._historialService.agregar_historial(barcodeData.text);
			}

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
