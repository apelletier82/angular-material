import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRefProviderComponent } from './template-ref-provider.component';

describe('TemplateRefProviderComponent', () => {
  let component: TemplateRefProviderComponent;
  let fixture: ComponentFixture<TemplateRefProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateRefProviderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateRefProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
