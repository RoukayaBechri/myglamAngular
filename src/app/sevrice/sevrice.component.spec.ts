import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SevriceComponent } from './sevrice.component';

describe('SevriceComponent', () => {
  let component: SevriceComponent;
  let fixture: ComponentFixture<SevriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SevriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SevriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
