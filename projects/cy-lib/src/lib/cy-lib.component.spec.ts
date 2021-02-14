import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyLibComponent } from './cy-lib.component';

describe('CyLibComponent', () => {
  let component: CyLibComponent;
  let fixture: ComponentFixture<CyLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CyLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
