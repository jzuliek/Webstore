import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroIComponent } from './hero-i.component';

describe('HeroIComponent', () => {
  let component: HeroIComponent;
  let fixture: ComponentFixture<HeroIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
