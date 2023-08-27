import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRepasComponent } from './add-repas.component';

describe('AddRepasComponent', () => {
  let component: AddRepasComponent;
  let fixture: ComponentFixture<AddRepasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRepasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRepasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
