import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmoreinfoComponent } from './adminmoreinfo.component';

describe('AdminmoreinfoComponent', () => {
  let component: AdminmoreinfoComponent;
  let fixture: ComponentFixture<AdminmoreinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminmoreinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminmoreinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
