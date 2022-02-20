import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from './layout/main/pages';
import { modulesRoutes } from './modules/modules-routes';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: modulesRoutes,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
