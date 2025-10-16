import {Component} from '@angular/core';
import {HostConsumerComponent} from '../lab/templateRef/host-consumer/host-consumer.component';

@Component({
  selector: 'app-home',
  imports: [HostConsumerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
