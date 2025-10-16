import {Component, Input, TemplateRef} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {NgTemplateOutlet} from '@angular/common';

@Component({
  selector: 'app-template-ref-consumer',
  imports: [NgTemplateOutlet, ReactiveFormsModule],
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
  get formControlEmail(): FormControl {
    return this.formGroup.get('email') as FormControl;
  }

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
