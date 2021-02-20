import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/Post';
import { ServicioService } from 'src/app/Servicio.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    // form validation
    this.form = new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      texto: new FormControl('', [Validators.required]),
      autor: new FormControl('', [Validators.required]),
      imagen: new FormControl('', [Validators.required]),
      fecha: new FormControl('', [Validators.required]),
      categoria: new FormControl('', [Validators.required]),
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
