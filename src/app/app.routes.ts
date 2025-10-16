import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ClientsComponent} from './clients/clients.component';

export const routes: Routes = [
  {title: 'Home', path: '', data: {displayInMenu: false, icon: 'home'}, component: HomeComponent},
  {
    title: 'Clients',
    path: 'clients',
    data: {displayInMenu: true, icon: 'people', displayOrder: 1},
    component: ClientsComponent,
  },
  {
    title: 'Parameters',
    path: 'parameters',
    data: {displayInMenu: true, icon: 'settings', displayOrder: 10},
    loadChildren: () => import('./parameters/parameters.routes'),
  },
];
