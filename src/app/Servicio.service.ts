import { Injectable } from '@angular/core';
import { Post } from './Post';

@Injectable({
  providedIn: 'root',
})
export class ServicioService {
  articles: Post[];

  constructor() {
    this.articles = [
      {
        titulo:
          'Primer tráiler de Cruella, la precuela en imagen real de 101 Dálmatas con Emma Stone',
        texto:
          'Tal y como se había anticipado ayer al publicar el primer póster, Disney por fin ha revelado el primer tráiler de Cruella, la precuela en imagen real de 101 Dálmatas con la ganadora de un Oscar por La La Land Emma Stone recogiendo el testigo de Glenn Close como la villana obsesionada con los preciosos perritos de manchas.',
        autor: 'David Soriano',
        imagen:
          'https://oyster.ignimgs.com/wordpress/stg.ign.com/2021/02/Disney-Cruella-Poster.jpg?fit=bounds&width=640&height=480',
        fecha: new Date('2021/11/02 14:35'),
        categoria: 'cine',
      },

      {
        titulo: "Los 10 mejores videojuegos 'soulslike'",
        texto:
          'El legado de la serie Souls de FromSoftware no se define solo por los asombrosos juegos que la componen, sino también por el subgénero al que se le ha dado vida gracias a su propia existencia: los soulslike. Para celebrar este subgénero (y para abrir boca hasta el próximo Elden Ring, por supuesto) hemos reunido nuestros 10 soulslike favoritos de todos los tiempos.',
        autor: 'Ign Staff',
        imagen:
          'https://sm.ign.com/t/ign_es/feature/t/the-best-s/the-best-soulslike-games_dc6v.1280.jpg',
        fecha: new Date('2021/11/02 09:30'),
        categoria: 'gaming',
      },

      {
        titulo: 'Lucasfilm despide a Gina Carano de The Mandalorian',
        texto:
          'Las aguas están revueltas en Lucasfilm, donde la actriz de The Mandalorian Gina Carano ha sido despedida por la controversia generada tras una serie de publicaciones en las redes sociales realizadas por ella misma. UTA la ha rechazado también como cliente.',
        autor: 'Jose A. Rodríguez',
        imagen:
          'https://oyster.ignimgs.com/wordpress/stg.ign.com/2020/12/best-series-the-mandalorian.jpeg',
        fecha: new Date('2021/11/02 09:30'),
        categoria: 'tv',
      },
    ];
  }

  // SHOW ALL ARTICLES
  getAllArticles(): Promise<Post[]> {
    return new Promise<Post[]>((resolve, reject) => {
      resolve(this.articles);
      // console.log(this.articles);
    });
  }

  agregarPost(post) {
    return new Promise((resolve, reject) => {
      this.articles.push(post);
      resolve(this.articles);
      localStorage.setItem('arr_articles', JSON.stringify(this.articles));
    });
  }

  getPostByCategory(category): Promise<Post[]> {
    return new Promise<Post[]>((resolve, reject) => {
      const categoryArray = [];

      for (let article of this.articles) {
        if (article.categoria === category) {
          categoryArray.push(article);
        }
      }
      resolve(categoryArray);

      // console.log(categoryArray);
    });
  }

  getAllCategories(): string[] {
    const newArray = this.articles.map(
      (categoryArray) => categoryArray.categoria
    );

    return [...new Set(newArray)];
  }
}
