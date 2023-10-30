import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../../services/pages.service';

@Component({
  selector: 'app-beckwith-electronic',
  templateUrl: './beckwith-electronic.component.html',
  styleUrls: ['./beckwith-electronic.component.css'],
})
export class BeckwithElectronicComponent implements OnInit {
  loader = true;
  banner_data: any = {};
  seccion_1_data: any = {};
  texto_general_data: any = {};
  item_tab_data: any[] = [];
  public activePillIndex: number = 0;

  constructor(private _beckwithelectronic: PagesService) {}

  ngOnInit(): void {
    this._beckwithelectronic.getBeckwithElectronic().subscribe((res: any) => {
      this.loader = false;
      this.banner_data = res.acf.banner;
      this.seccion_1_data = res.acf.seccion_1;
      this.texto_general_data = res.acf.texto_general;
      this.item_tab_data = res.acf.item_tab;
    });
  }
  public selectPill(index: number) {
    this.activePillIndex = index;
    // do some other stuff if necessary...
  }
}
