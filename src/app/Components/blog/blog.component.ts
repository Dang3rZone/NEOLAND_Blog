import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/Post';
import { ServicioService } from 'src/app/Servicio.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  articles: Post[];
  categories: string[];
  fecha: Date;

  constructor(private petitions: ServicioService) {
    // if (localStorage.getItem('arr_articles')) {
    //   const stringArray = localStorage.getItem('arr_articles');
    //   this.articles = JSON.parse(stringArray);
    // } else {
    //   this.articles = [];
    // }
  }

  async ngOnInit() {
    // getting the array fo articles
    try {
      this.articles = await this.petitions.getAllArticles();
    } catch (err) {
      console.log(err);
    }
    this.categories = await this.petitions.getAllCategories();

    // local storage
    try {
      if (localStorage.getItem('arr_articles')) {
        //recupero local storage from array
        const strArr = await localStorage.getItem('arr_articles');
        this.articles = await JSON.parse(strArr);
      } else {
        this.articles = [];
      }
    } catch (error) {
      console.log(error);
    }
  }

  async onChange($event) {
    console.log($event.target.value);

    if ($event.target.value === 'all') {
      this.articles = await this.petitions.getAllArticles();
    } else {
      this.articles = await this.petitions.getPostByCategory(
        $event.target.value
      );
    }
  }
}
