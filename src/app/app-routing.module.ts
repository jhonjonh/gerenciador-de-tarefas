import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const router: Routes = [
  /*aqui estarao as rotas*/
];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
