import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutePathEnum } from './shared-module/utilities/enums/route-path.enum';

const routes: Routes = [
  { 
    path: RoutePathEnum.Empty, redirectTo: `/${RoutePathEnum.Stats}/augments`, pathMatch: 'full'
  },
  {
    path: RoutePathEnum.Stats, loadChildren: () => import('./modules/stats/stats.module').then(m => m.StatsModule)
  },
  {
    path: RoutePathEnum.Home, loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: RoutePathEnum.Tools, loadChildren: () => import('./modules/tools/tools.module').then(m => m.ToolsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
