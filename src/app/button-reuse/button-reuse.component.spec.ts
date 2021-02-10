import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonReuseComponent } from './button-reuse.component';

describe('ButtonReuseComponent', () => {
  let component: ButtonReuseComponent;
  let fixture: ComponentFixture<ButtonReuseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonReuseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonReuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
