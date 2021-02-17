import { Injectable } from '@angular/core';
import { Post } from './Post';

@Injectable({
  providedIn: 'root',
})
export class ServicioService {
  articles: Post[]
  
  constructor() { this.articles = [

    {
      titulo: 'Primer tráiler de Cruella, la precuela en imagen real de 101 Dálmatas con Emma Stone',
      texto: 'Tal y como se había anticipado ayer al publicar el primer póster, Disney por fin ha revelado el primer tráiler de Cruella, la precuela en imagen real de 101 Dálmatas con la ganadora de un Oscar por La La Land Emma Stone recogiendo el testigo de Glenn Close como la villana obsesionada con los preciosos perritos de manchas.',
      autor: 'David Soriano',
      imagen: 'https://es.ign.com/cruella/171029/news/primer-trailer-de-cruella-la-precuela-en-imagen-real-de-101-dalmatas-con-emma-stone',
      fecha: new Date('17/02/2021 14:35'),
      categoria: 'cine',
    },

    {
      titulo: "Los 10 mejores videojuegos 'soulslike'",
      texto: 'El legado de la serie Souls de FromSoftware no se define solo por los asombrosos juegos que la componen, sino también por el subgénero al que se le ha dado vida gracias a su propia existencia: los soulslike. Para celebrar este subgénero (y para abrir boca hasta el próximo Elden Ring, por supuesto) hemos reunido nuestros 10 soulslike favoritos de todos los tiempos.',
      autor: 'Ign Staff',
      imagen: 'https://es.ign.com/nioh-2-the-complete-edition-ps5/170897/feature/los-10-mejores-videojuegos-soulslike',
      fecha: new Date('15/02/2021 09:30'),
      categoria: 'gaming',
    },

    {
      titulo: 'Lucasfilm despide a Gina Carano de The Mandalorian',
      texto: 'Las aguas están revueltas en Lucasfilm, donde la actriz de The Mandalorian Gina Carano ha sido despedida por la controversia generada tras una serie de publicaciones en las redes sociales realizadas por ella misma. UTA la ha rechazado también como cliente.',
      autor: 'Jose A. Rodríguez',
      imagen: 'https://es.ign.com/star-wars-the-mandalorian/170864/news/lucasfilm-despide-a-gina-carano-de-the-mandalorian',
      fecha: new Date('15/02/2021 09:30'),
      categoria: 'tv',
    },

   


  ]
}
  
  
  agregarPost(Post) {}
  
  getAllPosts() {}
  
  getPostsByCategoria(cat) {}
}
