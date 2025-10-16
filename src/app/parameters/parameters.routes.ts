import {Routes} from '@angular/router';
import {ParametersComponent} from './parameters.component';

export default [
  {
    title: 'Parameter',
    path: '',
    data: {displayInMenu: true, icon: 'settings'},
    component: ParametersComponent,
  },
  {
    title: 'Parameter Detail',
    path: ':id',
    data: {displayInMenu: false},
    loadComponent: () =>
      import('./parameter-detail/parameter-detail.component').then(
        (c) => c.ParameterDetailComponent
      ),
  },
] satisfies Routes;
