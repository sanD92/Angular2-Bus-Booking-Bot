import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityExtractComponent } from './entity-extract.component';

describe('EntityExtractComponent', () => {
  let component: EntityExtractComponent;
  let fixture: ComponentFixture<EntityExtractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityExtractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityExtractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
