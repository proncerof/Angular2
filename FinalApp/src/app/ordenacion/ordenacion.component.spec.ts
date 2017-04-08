import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenacionComponent } from './ordenacion.component';

describe('OrdenacionComponent', () => {
  let component: OrdenacionComponent;
  let fixture: ComponentFixture<OrdenacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdenacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
