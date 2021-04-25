import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialTwoComponent } from './material-two.component';

describe('MaterialTwoComponent', () => {
  let component: MaterialTwoComponent;
  let fixture: ComponentFixture<MaterialTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
