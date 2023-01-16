import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuguetesEditComponent } from './juguetes-edit.component';

describe('JuguetesEditComponent', () => {
  let component: JuguetesEditComponent;
  let fixture: ComponentFixture<JuguetesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuguetesEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuguetesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
