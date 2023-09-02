import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRepasComponent } from './edit-repas.component';

describe('EditRepasComponent', () => {
  let component: EditRepasComponent;
  let fixture: ComponentFixture<EditRepasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRepasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRepasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
