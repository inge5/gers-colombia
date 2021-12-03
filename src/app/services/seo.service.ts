import { Injectable } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  
  constructor(public titulo: Title, public meta: Meta) {
    }
  paginaInicio(){
    this.paginaMetaData(
      'Gers 40 años de experiencia en el sector eléctrico',
      '40 años brindamos soluciones para el sector eléctrico con proyectos nacionales e internacionales',
      'Generamos soluciones innovadoras en el sector eléctrico. ¡Concoe todos nuestros sevicios!',
      ''
    );
  }

  paginaPruebaAutomatizacion(){
    this.paginaMetaData(
      'Gers-Pruebas automatización y control',
      'Realizamos pruebas y control de puesta en servicio a equipos en sistemas de baja, media y alta tensión',
      'Contamos con un equipo especializado  en pruebas automatizadas y en control en equipos eléctricos. ¡Contactanos ya!',
      ''
    );
  }

  paginaSmartGrid(){
    this.paginaMetaData(
      "Gers-Smart grids - SGMM",
      "El Modelo de Madurez Smart Grid, es una metodología formal para identificar las brechas existentes entre el estado actual y el óptimo de una organización.",
      "Smart grids es un servicio de consultoría enfocado a las redes y ciudades inteligentes. ¡Solicita información!",
      ""
    );
  }

  paginaEstudiosSistemas(){
    this.paginaMetaData(
      'Gers- Estudios de sistemas eléctricos',
      'Realizamos estudios de sistemas eléctricos para electrificadoras, plantas industriales, mineras, centrales de generación y petroleras. / opción 3 Realizamos estudios de sistema eléxtrico y conexión para proyectos con energías convencionales y no convencionales',
      'En GERS realizamos importantes estudios de sistemas eléctricos en redes nacionales e internacionales. ¡Solicita información!',
      ''
    );
  }

  paginaProyectos(){
    this.paginaMetaData(
      'Somos expertos en proyectos nacionales e internacionales.',
      'Creemos en el desarrollo y la innovación para alcanzar el éxito de todos los proyectos que nos han confiado.',
      'Contamos con 40 años de experiencia en proyectos nacioanles e internacionales¡Conocelos aquí!',
      ''
    );
  }

  paginaServiciosEnergeticos(){
    this.paginaMetaData(
      'Gers-Servicios energéticos',
      'En Gers realizamos  inversiones en proyectos de eficiencia energética en la Industria.',
      'La ANDI nos ha cetificado certificada para  realizar servicios energéticos',
      ''
    );
  }

  paginaPlaneacionProyectos(){
    this.paginaMetaData(
      'Gers-Planeación de proyectos',
      'En Gers contamos con un grupo de planeacón y consultoria  para realizar proyectos en sistemas electricos.',
      'Realizamos la planeación de cada uno de nuestros proyecto con los conceptos y últimas tendencias en el sector electrico. ¡Solicita información!',
      ''
    );
  }
  paginaDisenoIng(){
    this.paginaMetaData(
      'Gers-Diseño e ingenieria',
      'Desarrollamos diseño e ingenieria en subestaciones eléctricas, líneas de distribución y transmisión de energía eléctrica, sistemas industriales y comerciales, entre otros. ',
      'En Gers garantizan participamos en importantes proyectos  de diseño e ingenieria para el campo eléctrico.  ¡Solicita información! ',
      ''
    );
  }
  paginaInterventoria(){
    this.paginaMetaData(
      'Gers-Interventoría y asesoría',
      'Realizamos interventorías a diseños, montajes, obras industriales y comerciales brindando asesorias de mejoramiento.',
      'Gers realizamos el desarrollo de  interventorias en ingenieria de   sistemas eléctricos con  las normas nacionales e internacionales',
      ''
    );
  }

  paginaMetaData(titulo: string, descripcion: string, keywords: string, url: string = ""): void{
    this.titulo.setTitle(titulo);
    this.meta.updateTag({
      property: 'og:title',
      content: titulo
    } as MetaDefinition);

    this.meta.updateTag({
      property: 'og:url',
      content: url
    } as MetaDefinition);

    this.meta.updateTag({
      name: 'twitter:title',
      content: titulo
    } as MetaDefinition);

    this.meta.updateTag({
      name: 'DC.title',
      content: titulo
    } as MetaDefinition);

    this.meta.updateTag({
      name: 'description',
      content: descripcion
    } as MetaDefinition);

    this.meta.updateTag({
      property: 'og:description',
      content: descripcion
    } as MetaDefinition);

    this.meta.updateTag({
      name: 'twitter:description',
      content: descripcion
    } as MetaDefinition);

    this.meta.updateTag({
      name: 'DC.description',
      content: descripcion
    } as MetaDefinition);

    this.meta.updateTag({
      name: 'keywords',
      content: keywords
    } as MetaDefinition);

    this.meta.updateTag({
      name: 'DC.subject',
      content: keywords
    } as MetaDefinition);
  }
}
