import { Injectable } from '@angular/core';
import api from "@woocommerce/woocommerce-rest-api";
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class PruebaProductosService {

  url = 'https://gers.com.co/backend';

  por_page: number;
  categoria: any[] = [];


  constructor() {

    this.setPorPagina();
  }

  setPorPagina(cantidad: number = 20){
    this.por_page = cantidad;
  }

  getCategoriesWP(){
    let WooCommerce = new api({
      url: `${this.url}`,
      consumerKey: 'ck_235432cde60974e317bfc4a90c958d258699e923',
      consumerSecret: 'cs_0ce13e2e0258658a91c83022ff35b029df5bf22f',
      wpAPI: true,
      version: 'wc/v3',
      queryStringAuth: true
    });
    axios.interceptors.request.use(function (config) {
      const { headers = {} } = config || {}
      if (headers['User-Agent']) delete config.headers['User-Agent']
    
      return config
    })
    return WooCommerce.get(`products/categories?per_page=100`);
  }

  setCategoria(categoria: any[]){
    this.categoria = categoria;
  }

  getCategoria(){
    return this.categoria;
  }

  getListarProductosWP(){
    let WooCommerce = new api({
      url: `${this.url}`,
      consumerKey: 'ck_235432cde60974e317bfc4a90c958d258699e923',
      consumerSecret: 'cs_0ce13e2e0258658a91c83022ff35b029df5bf22f',
      wpAPI: true,
      version: 'wc/v3',
      queryStringAuth: true
    });
    return WooCommerce.get(`products?per_page=${this.por_page}`);
  }

  getlistarProductoUnicoWP(id: number){
    let WooCommerce = new api({
      url: `${this.url}`,
      consumerKey: 'ck_235432cde60974e317bfc4a90c958d258699e923',
      consumerSecret: 'cs_0ce13e2e0258658a91c83022ff35b029df5bf22f',
      wpAPI: true,
      version: 'wc/v3',
      queryStringAuth: true
    });
    return WooCommerce.get(`products/${id}`);
  }

}
