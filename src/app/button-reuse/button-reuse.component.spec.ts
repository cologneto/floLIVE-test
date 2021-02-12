import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonReuseComponent } from './button-reuse.component';

describe('ButtonReuseComponent', () => {
  let component: ButtonReuseComponent;
  let fixture: ComponentFixture<ButtonReuseComponent>;
  let btn: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonReuseComponent ],
    });
    fixture = TestBed.createComponent(ButtonReuseComponent);
    component = fixture.componentInstance; // ButtonReuseComponent test instance
    btn = fixture.nativeElement.querySelector('button');
    component.size = 'MEDIUM';
  });

  it('should display original title', () => {
    fixture.detectChanges();
    expect(btn.textContent).toContain(component.size);
  });

  it('raises the selected event when clicked', () => {
    const size = 'medium';
    component.size = size;
    fixture.detectChanges();
    component.click.subscribe((selectedSize: string) => expect(selectedSize).toBe(size));
    component.onClickButton();
  });
});
