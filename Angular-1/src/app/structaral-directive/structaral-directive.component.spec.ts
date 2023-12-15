import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructaralDirectiveComponent } from './structaral-directive.component';

describe('StructaralDirectiveComponent', () => {
  let component: StructaralDirectiveComponent;
  let fixture: ComponentFixture<StructaralDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructaralDirectiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StructaralDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
