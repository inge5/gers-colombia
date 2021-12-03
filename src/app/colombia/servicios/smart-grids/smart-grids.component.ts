import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { PagesService } from '../../../services/pages.service';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import { SeoService } from '../../../services/seo.service';

@Pipe({ name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}
  public transform(value: any, type: string): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
    // return this.sanitized.bypassSecurityTrustHtml(value);
    switch (type) {
      case 'html': return this.sanitized.bypassSecurityTrustHtml(value);
      case 'style': return this.sanitized.bypassSecurityTrustStyle(value);
      case 'script': return this.sanitized.bypassSecurityTrustScript(value);
      case 'url': return this.sanitized.bypassSecurityTrustUrl(value);
      case 'resourceUrl': return this.sanitized.bypassSecurityTrustResourceUrl(value);
      default: throw new Error(`Invalid safe type specified: ${type}`);
    }
  }
}

@Component({
  selector: 'app-smart-grids',
  templateUrl: './smart-grids.component.html',
  styleUrls: ['./smart-grids.component.css']
})
export class SmartGridsComponent implements OnInit {
  loader = true;
  seccion_1_data: any = {};
  seccion_iconos_data: any[] = [];
  item_tab_data: any[] = [];
  public activePillIndex:number = 0;

  constructor(private _sanitizer: DomSanitizer, private _smartgrid:PagesService, private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.paginaSmartGrid();
    this._smartgrid.getSmartGrids()
      .subscribe((res:any) => {
        this.loader = false;
        //this.seccion_1_data = res.acf.seccion_1;

        this.seccion_1_data = this._sanitizer.bypassSecurityTrustHtml(res);
        this.seccion_1_data = this.seccion_1_data.changingThisBreaksApplicationSecurity;

        this.seccion_iconos_data = res.acf.seccion_iconos;
        this.item_tab_data = res.acf.item_tab;
        
      });
  }

  public selectPill(index:number) {
    this.activePillIndex = index;
    // do some other stuff if necessary...
   }

}
