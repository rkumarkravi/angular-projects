/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VideosNavComponent } from './videos-nav.component';

describe('VideosNavComponent', () => {
  let component: VideosNavComponent;
  let fixture: ComponentFixture<VideosNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
