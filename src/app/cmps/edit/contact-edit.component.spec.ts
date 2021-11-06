import { ComponentFixture, TestBed } from '@angular/core/testing';

import { contactEditComponent } from './contact-edit.component';

describe('contactEditComponent', () => {
  let component: contactEditComponent;
  let fixture: ComponentFixture<contactEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ contactEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(contactEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
