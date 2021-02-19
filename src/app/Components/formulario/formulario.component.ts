import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/Post';
import { ServicioService } from 'src/app/Servicio.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  articles: Post[];
  categories: string[];
  form: FormGroup;

  constructor(private petitions: ServicioService) {
    this.articles = [];
    this.form = new FormGroup({
      titulo: new FormControl(),
      texto: new FormControl(),
      autor: new FormControl(),
      imagen: new FormControl(),
      fecha: new FormControl(),
      categoria: new FormControl(),
    });
  }

  async ngOnInit() {
    this.categories = this.petitions.getAllCategories();
  }

  async onSubmit() {
    const newArticles = await this.petitions.agregarPost(this.form.value);
    console.log(newArticles);
    this.form.reset();
  }
}
