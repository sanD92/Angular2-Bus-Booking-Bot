import { Component, OnInit } from '@angular/core';
import { RecordVoiceComponent } from '../record-voice/record-voice.component';
import { SpeechToTextService } from '../record-voice/speech-to-text.service';
import { EntityExtractService } from '../record-voice/entity-extract.service';

@Component({
  selector: 'app-entity-extract',
  templateUrl: './entity-extract.component.html',
  styleUrls: ['./entity-extract.component.css'],
  providers: [SpeechToTextService, EntityExtractService]
})
export class EntityExtractComponent implements OnInit {

  entityExtractResponse: any;
  private sttService: SpeechToTextService;
  private entityExtractService: EntityExtractService;
  //recordVoiceComponent=new RecordVoiceComponent(this.sttService,this.entityExtractService);
  constructor() { }

  ngOnInit() {
    /* this.recordVoiceComponent.getEntityRes().subscribe(
      top => {
          if (top !== null) {
              // me.scrollTopPx = (63 - top);
              this.entityExtractResponse = top;
              console.log("Set entity response",this.entityExtractResponse);
          }
      }); */
      //this.entityExtractResponse=this.recordVoiceComponent.getEntityRes();
      console.log("Second conmpoenent response",this.entityExtractResponse);
  }

}
