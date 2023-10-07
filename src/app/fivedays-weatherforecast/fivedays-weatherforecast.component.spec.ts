import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FivedaysWeatherforecastComponent } from './fivedays-weatherforecast.component';

describe('FivedaysWeatherforecastComponent', () => {
  let component: FivedaysWeatherforecastComponent;
  let fixture: ComponentFixture<FivedaysWeatherforecastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FivedaysWeatherforecastComponent]
    });
    fixture = TestBed.createComponent(FivedaysWeatherforecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
