import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForClrComponent } from './for-clr.component';

describe('ForClrComponent', () => {
  let component: ForClrComponent;
  let fixture: ComponentFixture<ForClrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForClrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForClrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
