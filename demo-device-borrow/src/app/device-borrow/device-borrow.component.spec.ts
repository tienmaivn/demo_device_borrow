import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceBorrowComponent } from './device-borrow.component';

describe('DeviceBorrowComponent', () => {
  let component: DeviceBorrowComponent;
  let fixture: ComponentFixture<DeviceBorrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceBorrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceBorrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
