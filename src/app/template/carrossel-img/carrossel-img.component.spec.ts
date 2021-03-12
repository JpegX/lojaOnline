import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroselImgComponent } from './carrossel-img.component';

describe('CarroselImgComponent', () => {
  let component: CarroselImgComponent;
  let fixture: ComponentFixture<CarroselImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarroselImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarroselImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
