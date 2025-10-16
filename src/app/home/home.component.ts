import {Component} from '@angular/core';
import {HostConsumerComponent} from '../lab/templateRef/host-consumer/host-consumer.component';
import {MatList, MatListItem} from '@angular/material/list';
import {MatDivider} from '@angular/material/divider';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-home',
  imports: [HostConsumerComponent, MatListItem, MatDivider, MatList, MatButton],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly items = Array.from({length: 50}, (_, i) => `Item #${i + 1}`);
}
