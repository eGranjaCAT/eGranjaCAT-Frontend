import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotsPageComponent } from './lots-page.component';

describe('LotsPageComponent', () => {
  let component: LotsPageComponent;
  let fixture: ComponentFixture<LotsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LotsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LotsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
