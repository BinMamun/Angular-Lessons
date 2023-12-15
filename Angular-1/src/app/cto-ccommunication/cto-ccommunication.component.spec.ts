import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtoCCommunicationComponent } from './cto-ccommunication.component';

describe('CtoCCommunicationComponent', () => {
  let component: CtoCCommunicationComponent;
  let fixture: ComponentFixture<CtoCCommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtoCCommunicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CtoCCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
