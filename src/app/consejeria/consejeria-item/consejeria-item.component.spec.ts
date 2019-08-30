import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsejeriaItemComponent } from './consejeria-item.component';

describe('ConsejeriaItemComponent', () => {
  let component: ConsejeriaItemComponent;
  let fixture: ComponentFixture<ConsejeriaItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsejeriaItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsejeriaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
