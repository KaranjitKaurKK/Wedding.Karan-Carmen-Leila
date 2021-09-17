import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IranComponent } from './iran.component';

describe('IranComponent', () => {
  let component: IranComponent;
  let fixture: ComponentFixture<IranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IranComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
