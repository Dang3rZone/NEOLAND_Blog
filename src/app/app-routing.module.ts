import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { BlogComponent } from './Components/blog/blog.component';
import { FormularioComponent } from './Components/formulario/formulario.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

const routes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: 'new', component: FormularioComponent },
  { path: '', pathMatch: 'full', redirectTo: '/blog' },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class AppRoutingModule {}
