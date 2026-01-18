import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex14catelog } from './ex14catelog';

describe('Ex14catelog', () => {
  let component: Ex14catelog;
  let fixture: ComponentFixture<Ex14catelog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex14catelog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex14catelog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
