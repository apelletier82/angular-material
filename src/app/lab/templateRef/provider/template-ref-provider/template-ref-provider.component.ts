import {Component, TemplateRef, ViewChild} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormField} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';

@Component({
  selector: 'app-template-ref-provider',
  imports: [ReactiveFormsModule, MatFormField, MatInput],
  templateUrl: './template-ref-provider.component.html',
  styleUrl: './template-ref-provider.component.scss',
})
export class TemplateRefProviderComponent {
  @ViewChild('templateRefProvider', {static: true})
  public templateRefProvider!: TemplateRef<never>;
}
