import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listcustomer3 } from './listcustomer3';

describe('Listcustomer3', () => {
  let component: Listcustomer3;
  let fixture: ComponentFixture<Listcustomer3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Listcustomer3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listcustomer3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
