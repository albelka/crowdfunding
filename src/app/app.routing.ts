import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdeasComponent } from './ideas/ideas.component';

const appRoutes: Routes = [
  {
    path: '',
    component: IdeasComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
