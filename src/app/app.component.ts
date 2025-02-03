import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet, Routes} from '@angular/router';
import {MatToolbar} from "@angular/material/toolbar";
import {MatTabLink, MatTabNav} from "@angular/material/tabs";
import {Observable, of} from "rxjs";
import {routes} from "./app.routes";
import {AsyncPipe} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  getNavigationLinks$(): Observable<Routes> {
    return of(
      routes
        .filter(
          (route) => route && route.data && !!route.data?.['displayInMenu'],
        )
        .sort((a, b) => a.data?.['displayOrder'] - b.data?.['displayOrder']),
    );
  }
}
