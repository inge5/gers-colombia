import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaEticaComponent } from './linea-etica.component';

describe('LineaEticaComponent', () => {
  let component: LineaEticaComponent;
  let fixture: ComponentFixture<LineaEticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineaEticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineaEticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
