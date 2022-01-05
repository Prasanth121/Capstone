import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesearchComponent } from './typesearch.component';

describe('TypesearchComponent', () => {
  let component: TypesearchComponent;
  let fixture: ComponentFixture<TypesearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypesearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
