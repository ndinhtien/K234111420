import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Customerdetail } from './customerdetail';

describe('Customerdetail', () => {
  let component: Customerdetail;
  let fixture: ComponentFixture<Customerdetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Customerdetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Customerdetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
