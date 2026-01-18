import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listcustomer } from './listcustomer';

describe('Listcustomer', () => {
  let component: Listcustomer;
  let fixture: ComponentFixture<Listcustomer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Listcustomer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listcustomer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
