import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComollegarComponent } from './comollegar.component';

describe('ComollegarComponent', () => {
  let component: ComollegarComponent;
  let fixture: ComponentFixture<ComollegarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComollegarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComollegarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
