import { Component, OnInit, Input } from '@angular/core';
import { PagesService } from './../../services/pages.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() idPage;
  @Input() datos;
  public page: any;
  public pagePath =  '';
  public pageName = 'Estimado Cliente';
  public pageId = 0;
  constructor(
    private pageServ: PagesService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    if (this.idPage === 0) {
      this.pageName = 'Estimado' + ' ' + this.datos.nombres;
    } else {
      this.page =  this.pageServ.getPage(this.idPage);
      this.pageId = this.page.id;
      this.pageName = `Detalle Paso${this.pageId}`;
      this.pagePath = this.page.path;
    }
  }

  dismissModal() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

}
