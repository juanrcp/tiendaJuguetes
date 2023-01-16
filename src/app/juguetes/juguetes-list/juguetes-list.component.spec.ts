import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuguetesListComponent } from './juguetes-list.component';

describe('JuguetesListComponent', () => {
  let component: JuguetesListComponent;
  let fixture: ComponentFixture<JuguetesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuguetesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuguetesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
