import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateModifyAlbumComponent } from './create-modify-album.component';

describe('CreateModifyAlbumComponent', () => {
  let component: CreateModifyAlbumComponent;
  let fixture: ComponentFixture<CreateModifyAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateModifyAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateModifyAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
