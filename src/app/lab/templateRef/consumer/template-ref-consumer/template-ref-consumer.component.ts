import {Component, Input, TemplateRef} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {NgTemplateOutlet} from '@angular/common';
import {MatDivider} from '@angular/material/divider';

@Component({
  selector: 'app-template-ref-consumer',
  imports: [NgTemplateOutlet, ReactiveFormsModule, MatDivider],
  templateUrl: './template-ref-consumer.component.html',
  styleUrl: './template-ref-consumer.component.scss',
})
export class TemplateRefConsumerComponent {
  private _templateRefProvider!: TemplateRef<never>;

  get templateRefProvider(): TemplateRef<never> {
    return this._templateRefProvider;
  }

  @Input()
  set templateRefProvider(templateRef: TemplateRef<never>) {
    this._templateRefProvider = templateRef;
  }

  formGroup!: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    this.setFormGroup();
  }

  private setFormGroup() {
    this.formGroup = this.formBuilder.group({
      name: [''],
      email: [''],
    });
  }
}
