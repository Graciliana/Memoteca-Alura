import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarThoughtsComponent } from './editar-thoughts.component';

describe('EditarThoughtsComponent', () => {
  let component: EditarThoughtsComponent;
  let fixture: ComponentFixture<EditarThoughtsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarThoughtsComponent]
    });
    fixture = TestBed.createComponent(EditarThoughtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
