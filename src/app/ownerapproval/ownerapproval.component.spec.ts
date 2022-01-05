import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerapprovalComponent } from './ownerapproval.component';

describe('OwnerapprovalComponent', () => {
  let component: OwnerapprovalComponent;
  let fixture: ComponentFixture<OwnerapprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerapprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
