import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet, Routes} from '@angular/router';
import {MatToolbar} from '@angular/material/toolbar';
import {MatTabLink, MatTabNav, MatTabNavPanel} from '@angular/material/tabs';
import {Observable, of} from 'rxjs';
import {routes} from './app.routes';
import {AsyncPipe} from '@angular/common';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatSlideToggle} from '@angular/material/slide-toggle';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbar,
    MatTabNav,
    RouterLink,
    MatTabLink,
    RouterLinkActive,
    AsyncPipe,
    MatButton,
    MatIcon,
    MatTabNavPanel,
    MatIconButton,
    MatMenu,
    MatMenuTrigger,
    MatMenuItem,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  getNavigationLinks$(): Observable<Routes> {
    return of(
      routes
        .filter((route) => route && route.data && !!route.data?.['displayInMenu'])
        .sort((a, b) => a.data?.['displayOrder'] - b.data?.['displayOrder'])
    );
  }

  setTheme(theme: 'light' | 'dark'): void {
    document.body.className = `${theme}-mode`;
  }
}
