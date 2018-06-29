import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RecordVoiceComponent } from './record-voice/record-voice.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { EntityExtractComponent } from './entity-extract/entity-extract.component';
@NgModule({
  declarations: [
    AppComponent,
    RecordVoiceComponent,
    EntityExtractComponent,
   
  ],
  imports: [
    BrowserModule, HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
