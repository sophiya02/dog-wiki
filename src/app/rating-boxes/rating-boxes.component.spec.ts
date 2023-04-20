import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingBoxesComponent } from './rating-boxes.component';

describe('RatingBoxesComponent', () => {
  let component: RatingBoxesComponent;
  let fixture: ComponentFixture<RatingBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingBoxesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
