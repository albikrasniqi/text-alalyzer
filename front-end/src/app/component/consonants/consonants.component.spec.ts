import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsonantsComponent } from './consonants.component';

describe('ConsonantsComponent', () => {
  let component: ConsonantsComponent;
  let fixture: ComponentFixture<ConsonantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsonantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsonantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
