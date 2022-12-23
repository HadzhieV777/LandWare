import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { PageComponent } from './landing/page/page.component';

// guard
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'main',
    loadChildren: () => import('./core/core.module').then((m) => m.CoreModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'properties',
    loadChildren: () => import('./estate/estate.module').then((m) => m.EstateModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'expenses',
    loadChildren: () => import('./expenses/expenses.module').then((m) => m.ExpensesModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'leases',
    loadChildren: () => import('./leases/leases.module').then((m) => m.LeasesModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
