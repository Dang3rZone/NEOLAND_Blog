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
  formulario: FormGroup;

  constructor(private petitions: ServicioService) {
    this.articles = [];
    this.formulario = new FormGroup({
      titulo: new FormControl(),
      descripcion: new FormControl(),
      url: new FormControl(),
    });
  }

  async ngOnInit() {
    this.categories = this.petitions.getArrCategorias();
  }

  async onSubmit() {
    const newArticles = await this.petitions.agregarPost(this.formulario.value);
    console.log(newArticles);
    this.formulario.reset();
  }
}
