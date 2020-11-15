import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarCompanyItemComponent } from './car-company-item.component';

describe('CarCompanyItemComponent', () => {
  let component: CarCompanyItemComponent;
  let fixture: ComponentFixture<CarCompanyItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarCompanyItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarCompanyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
