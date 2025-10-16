import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';

@Component({
  selector: 'app-template-ref-provider',
  imports: [ReactiveFormsModule, MatFormField, MatLabel],
  templateUrl: './template-ref-provider.component.html',
  styleUrl: './template-ref-provider.component.scss',
})
export class TemplateRefProviderComponent {
  @ViewChild('templateRefProvider', { static: true })
  public templateRefProvider!: TemplateRef<any>;
}
