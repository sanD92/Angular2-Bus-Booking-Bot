import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordVoiceComponent } from './record-voice.component';

describe('RecordVoiceComponent', () => {
  let component: RecordVoiceComponent;
  let fixture: ComponentFixture<RecordVoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordVoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordVoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
