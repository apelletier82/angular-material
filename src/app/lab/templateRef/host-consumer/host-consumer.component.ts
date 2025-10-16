import {Component, TemplateRef, ViewChild} from '@angular/core';
import {TemplateRefConsumerComponent} from '../consumer/template-ref-consumer/template-ref-consumer.component';
import {TemplateRefProviderComponent} from '../provider/template-ref-provider/template-ref-provider.component';

@Component({
  selector: 'app-host-consumer',
  imports: [TemplateRefConsumerComponent, TemplateRefProviderComponent],
  templateUrl: './host-consumer.component.html',
  styleUrl: './host-consumer.component.scss',
})
export class HostConsumerComponent {
  @ViewChild(TemplateRefProviderComponent, {static: true})
  templateRefProviderComponent!: TemplateRefProviderComponent;

  get templateRefProvider(): TemplateRef<never> {
    return this.templateRefProviderComponent!.templateRefProvider;
  }
}
