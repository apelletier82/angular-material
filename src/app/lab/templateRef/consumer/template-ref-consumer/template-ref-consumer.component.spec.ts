import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRefConsumerComponent } from './template-ref-consumer.component';

describe('TemplateRefConsumerComponent', () => {
  let component: TemplateRefConsumerComponent;
  let fixture: ComponentFixture<TemplateRefConsumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateRefConsumerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateRefConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
