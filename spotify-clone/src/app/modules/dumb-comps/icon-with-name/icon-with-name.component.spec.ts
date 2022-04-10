import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconWithNameComponent } from './icon-with-name.component';

describe('IconWithNameComponent', () => {
  let component: IconWithNameComponent;
  let fixture: ComponentFixture<IconWithNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconWithNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconWithNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
