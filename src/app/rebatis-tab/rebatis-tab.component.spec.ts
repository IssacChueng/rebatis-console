import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RebatisTabComponent } from './rebatis-tab.component';

describe('RebatisTabComponent', () => {
  let component: RebatisTabComponent;
  let fixture: ComponentFixture<RebatisTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RebatisTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RebatisTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
