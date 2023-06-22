import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteThoughtsComponent } from './delete-thoughts.component';

describe('DeleteThoughtsComponent', () => {
  let component: DeleteThoughtsComponent;
  let fixture: ComponentFixture<DeleteThoughtsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteThoughtsComponent]
    });
    fixture = TestBed.createComponent(DeleteThoughtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
