import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialThreeComponent } from './material-three.component';

describe('MaterialThreeComponent', () => {
  let component: MaterialThreeComponent;
  let fixture: ComponentFixture<MaterialThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
