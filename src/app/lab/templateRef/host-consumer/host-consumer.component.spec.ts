import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HostConsumerComponent} from './host-consumer.component';

describe('HostConsumerComponent', () => {
  let component: HostConsumerComponent;
  let fixture: ComponentFixture<HostConsumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostConsumerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HostConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
