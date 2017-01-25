import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdeasComponent } from './ideas/ideas.component';
import { IdeaDetailComponent } from './idea-detail/idea-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: IdeasComponent
  },
  {
    path: 'ideas/:id',
    component: IdeaDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
