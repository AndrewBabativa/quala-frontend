import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMonedasComponent } from './lista-monedas.component';

describe('ListaMonedasComponent', () => {
  let component: ListaMonedasComponent;
  let fixture: ComponentFixture<ListaMonedasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaMonedasComponent]
    });
    fixture = TestBed.createComponent(ListaMonedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
