import { Routes } from '@angular/router';
import { Routes as RoutesConstants } from 'src/app/app.constants';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
export const routes: Routes = [
  { path: '', redirectTo: RoutesConstants.LAYOUT, pathMatch: 'full' },
  {
    path: RoutesConstants.LAYOUT,
    component: HomeComponent,
    children: [
      { path: '', redirectTo: RoutesConstants.USERS, pathMatch: 'full' },
      { path: RoutesConstants.USERS, component: UsersComponent },
    ],
  },
];
