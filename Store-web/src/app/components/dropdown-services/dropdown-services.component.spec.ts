import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownServicesComponent } from './dropdown-services.component';

describe('DropdownServicesComponent', () => {
  let component: DropdownServicesComponent;
  let fixture: ComponentFixture<DropdownServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
