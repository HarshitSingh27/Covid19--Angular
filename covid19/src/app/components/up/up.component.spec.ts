import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpComponent } from './up.component';

describe('UpComponent', () => {
  let component: UpComponent;
  let fixture: ComponentFixture<UpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
