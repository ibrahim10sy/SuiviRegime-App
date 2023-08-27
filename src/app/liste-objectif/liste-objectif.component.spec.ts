import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeObjectifComponent } from './liste-objectif.component';

describe('ListeObjectifComponent', () => {
  let component: ListeObjectifComponent;
  let fixture: ComponentFixture<ListeObjectifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeObjectifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeObjectifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
