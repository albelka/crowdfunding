import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdeasComponent } from './ideas/ideas.component';
import { IdeaDetailComponent } from './idea-detail/idea-detail.component';
import { AdminComponent } from './admin/admin.component';
import { NewIdeaComponent } from './new-idea/new-idea.component';

const appRoutes: Routes = [
  {
    path: '',
    component: IdeasComponent
  },
  {
    path: 'ideas/:id',
    component: IdeaDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'new',
    component: NewIdeaComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
