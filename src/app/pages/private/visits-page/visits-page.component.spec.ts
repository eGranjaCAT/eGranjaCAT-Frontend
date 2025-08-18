import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitsPageComponent } from './visits-page.component';

describe('VisitsPageComponent', () => {
  let component: VisitsPageComponent;
  let fixture: ComponentFixture<VisitsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
