import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VowelComponent } from './vowel.component';

describe('VowelComponent', () => {
  let component: VowelComponent;
  let fixture: ComponentFixture<VowelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VowelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VowelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
