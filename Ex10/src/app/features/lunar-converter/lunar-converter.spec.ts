import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LunarConverter } from './lunar-converter';

describe('LunarConverter', () => {
  let component: LunarConverter;
  let fixture: ComponentFixture<LunarConverter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LunarConverter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LunarConverter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
