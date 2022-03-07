import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleEmpModifyShowComponent } from './single-emp-modify-show.component';

describe('SingleEmpModifyShowComponent', () => {
  let component: SingleEmpModifyShowComponent;
  let fixture: ComponentFixture<SingleEmpModifyShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleEmpModifyShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleEmpModifyShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
