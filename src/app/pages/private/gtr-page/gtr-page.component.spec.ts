import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GtrPageComponent } from './gtr-page.component';

describe('GtrPageComponent', () => {
  let component: GtrPageComponent;
  let fixture: ComponentFixture<GtrPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GtrPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GtrPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
