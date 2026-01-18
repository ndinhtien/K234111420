import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listcustomer2 } from './listcustomer2';

describe('Listcustomer2', () => {
  let component: Listcustomer2;
  let fixture: ComponentFixture<Listcustomer2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Listcustomer2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listcustomer2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
