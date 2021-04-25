import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialOneComponent } from './material-one.component';

describe('MaterialOneComponent', () => {
  let component: MaterialOneComponent;
  let fixture: ComponentFixture<MaterialOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
