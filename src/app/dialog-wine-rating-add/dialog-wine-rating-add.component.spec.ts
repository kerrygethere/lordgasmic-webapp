import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogWineRatingAddComponent } from './dialog-wine-rating-add.component';

describe('DialogWineRatingAddComponent', () => {
  let component: DialogWineRatingAddComponent;
  let fixture: ComponentFixture<DialogWineRatingAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogWineRatingAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogWineRatingAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
