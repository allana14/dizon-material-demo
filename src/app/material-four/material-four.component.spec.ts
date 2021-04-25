import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialFourComponent } from './material-four.component';

describe('MaterialFourComponent', () => {
  let component: MaterialFourComponent;
  let fixture: ComponentFixture<MaterialFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
