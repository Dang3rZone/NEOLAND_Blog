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
    this.articles = [];
  }

  async ngOnInit() {
    this.articles = await this.petitions.getAllArticles();
    this.categories = await this.petitions.getAllCategories();
  }

  async onChange($event) {
    if ($event.target.value === 'all') {
      this.articles = await this.petitions.getAllArticles();
    } else {
      this.articles = await this.petitions.getPostByCategory(
        $event.target.value
      );
    }
  }
}
