import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmPageComponent } from './farm-page.component';

describe('FarmPageComponent', () => {
  let component: FarmPageComponent;
  let fixture: ComponentFixture<FarmPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
