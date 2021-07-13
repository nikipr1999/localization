import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringTableComponent } from './string-table.component';

describe('StringTableComponent', () => {
  let component: StringTableComponent;
  let fixture: ComponentFixture<StringTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
