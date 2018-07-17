import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: 'submodule', loadChildren: 'app/submodule/submodule.module#SubModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class ProductRoutingModule {}
export const productRoutingComponents: ModuleWithProviders = RouterModule.forRoot(routes);
