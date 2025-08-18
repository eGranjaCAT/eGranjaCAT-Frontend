import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrancePageComponent } from './entrance-page.component';

describe('EntrancePageComponent', () => {
  let component: EntrancePageComponent;
  let fixture: ComponentFixture<EntrancePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntrancePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrancePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
