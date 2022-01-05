import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedhistoryComponent } from './bookedhistory.component';

describe('BookedhistoryComponent', () => {
  let component: BookedhistoryComponent;
  let fixture: ComponentFixture<BookedhistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookedhistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
