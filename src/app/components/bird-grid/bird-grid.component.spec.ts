import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdGridComponent } from './bird-grid.component';

describe('BirdGridComponent', () => {
  let component: BirdGridComponent;
  let fixture: ComponentFixture<BirdGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BirdGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirdGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
