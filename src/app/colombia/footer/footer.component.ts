import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import {
  DomSanitizer,
  SafeHtml,
  SafeResourceUrl,
  SafeScript,
  SafeStyle,
  SafeUrl,
} from '@angular/platform-browser';
import { MenusService } from 'src/app/services/menus.service';

@Pipe({ name: 'safeHtml' })
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) {}
  public transform(
    value: any,
    type: string
  ): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
    // return this.sanitized.bypassSecurityTrustHtml(value);
    switch (type) {
      case 'html':
        return this.sanitized.bypassSecurityTrustHtml(value);
      case 'style':
        return this.sanitized.bypassSecurityTrustStyle(value);
      case 'script':
        return this.sanitized.bypassSecurityTrustScript(value);
      case 'url':
        return this.sanitized.bypassSecurityTrustUrl(value);
      case 'resourceUrl':
        return this.sanitized.bypassSecurityTrustResourceUrl(value);
      default:
        throw new Error(`Invalid safe type specified: ${type}`);
    }
  }
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  data: any = [];
  dataContacto: any = [];
  dataCertificados: any = [];
  constructor(
    private _sanitizer: DomSanitizer,
    private _menuService: MenusService
  ) {}

  ngOnInit(): void {
    this._menuService.getMenuFooter().subscribe((res: any) => {
      this.data = res;
    });
    this._menuService.getMenuFooterContacto().subscribe((res: any) => {
      this.dataContacto = res;
    });
    this._menuService.getMenuFooterCertificados().subscribe((res: any) => {
      this.dataCertificados = res;
    });
  }
}
