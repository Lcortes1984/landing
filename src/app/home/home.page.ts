import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';
import { PagesService } from './../services/pages.service';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserI } from '../models/user.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public text = 'Soy cliente del Banco de Bogotá y quiero recibir ayuda de como realizar el pagopor aval Pay';
  public pages: any[];
  public clienteNombre: any;
  public token: any;
  public sliderOpts = {
    slidesPerView: 1.2,
    freeMode: true,
    initialSlide: 0
  };

  constructor(
    private modalCtrl: ModalController,
    private pageServi: PagesService,
    private router: Router,
    private rutaActiva: ActivatedRoute,
    private authSvc: AuthService ) {
      this.token = this.rutaActiva.snapshot.paramMap.get('token');
    }

  ngOnInit() {
    const user: UserI = {
      email: 'email@email.com',
      password: 'I2e456O'
    };

    this.authSvc.loginByEmail( user );
    this.pages = this.pageServi.getListPages();
    this.clienteNombre = this.pageServi.getCliente(this.token);
    if (this.clienteNombre) {
      this.verDetalle(0);
    } else {
      this.router.navigate(['landing/']);
    }
  }

  async verDetalle(idPage: any) {

    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        idPage,
        datos: this.clienteNombre
      }
    });

    modal.present();
  }
}
