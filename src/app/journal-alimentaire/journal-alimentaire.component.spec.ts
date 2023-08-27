import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalAlimentaireComponent } from './journal-alimentaire.component';

describe('JournalAlimentaireComponent', () => {
  let component: JournalAlimentaireComponent;
  let fixture: ComponentFixture<JournalAlimentaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JournalAlimentaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JournalAlimentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
