import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'add-manufacturer',
    pathMatch: 'full'
  },
  {
    path: 'add-manufacturer',
    loadChildren: () => import('./add-manufacturer/add-manufacturer.module').then( m => m.AddManufacturerPageModule)
  },
  {
    path: 'add-model',
    loadChildren: () => import('./add-model/add-model.module').then( m => m.AddModelPageModule)
  },
  {
    path: 'view-inventory',
    loadChildren: () => import('./view-inventory/view-inventory.module').then( m => m.ViewInventoryPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
