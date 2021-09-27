import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TarefaRoutes } from './tarefas';

export const router: Routes = [
  /*aqui estarao as rotas*/
  {
    path: '',
    redirectTo: '/tarefas/listar',
    pathMatch: 'full' /*redireciona diretamete da raiz*/
  },
  ...TarefaRoutes /*concatena o array TarefaRoutes ao final do array router*/
];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
