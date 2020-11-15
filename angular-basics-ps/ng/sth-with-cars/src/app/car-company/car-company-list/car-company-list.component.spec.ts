import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarCompanyListComponent } from './car-company-list.component';

describe('CarCompanyListComponent', () => {
  let component: CarCompanyListComponent;
  let fixture: ComponentFixture<CarCompanyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarCompanyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarCompanyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
