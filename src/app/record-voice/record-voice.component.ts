import { Component, NgZone, OnInit, OnDestroy, AfterContentInit, OnChanges, EventEmitter, Output } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import * as Microm from 'microm';
import * as Recoder from 'recorder-js';
import { SpeechToTextService } from './speech-to-text.service';
import { EntityExtractService } from './entity-extract.service';



//declare var entity:any;
declare var mp3: any;
declare var fileString: any;
@Component({
    selector: 'app-record-voice',
    templateUrl: './record-voice.component.html',
    styleUrls: ['./record-voice.component.css'],
    providers: [SpeechToTextService, EntityExtractService]
})
export class RecordVoiceComponent implements OnInit, OnDestroy, AfterContentInit, OnChanges {

    microm = new Microm();
    mp3 = null;
    entityExtractResponse: any=null;
   
    //isLoginSubject = new BehaviorSubject<boolean>();
    //currentNameSubject = new BehaviorSubject("Sandip ");
    currentNameSubject: BehaviorSubject<any> = <BehaviorSubject<any>>new BehaviorSubject(this.entityExtractResponse); 

    constructor(private _ngZone: NgZone,private sttService: SpeechToTextService, private entityExtractService: EntityExtractService) {

        // console.log("current value", this.currentNameSubject.getValue());
        // this.currentNameSubject.next("sandip");
        // console.log("current value", this.currentNameSubject.getValue());

    }


    ngOnInit() {
        let me = this;

        /*  console.log("Recorder data is: ", Recoder);
         console.log("Microm is working ...Imported in Angular2 ....Microm data is: ", Microm);
         console.log("stt service data is: ", this.sttService); */
        //this.entityExtractResponse=this.entityExtract(this.entityExtractResponse);

        me.getEntityRes().subscribe(
            top => {
                if (top !== null) {
                    // me.scrollTopPx = (63 - top);
                    me.entityExtractResponse = top;
                    console.log("Entity Extract API Response",me.entityExtractResponse);

                   //async call result is outside ngZone thus not triggering the UI update 
                    me._ngZone.run(() => {
                        me.entityExtractResponse =Array.of(me.entityExtractResponse);
                        
                    });
                }
                else{
                    console.log("No subcription");
                }
            }); 
     
       
        

    }
    ngAfterContentInit() {

    }
    ngOnChanges() {
        // changes.prop contains the old and the new value...

    }



    StartRecording() {

        // document.getElementById("speakerOn").style.display = 'block';
        // document.getElementById("speakerOff").style.display = 'none';
        console.log("Start recroding clicked");
        this.microm.record().then(function () {
            console.log('recording...')
        }).catch(function () {
            console.log('error recording');
        });


    }

    StopRecording($event) {
        console.log("event is", $event);
        var base64data;
        // var fileData;
        var mp3File;
        var temp = null;
        //var reader;
        let me = this;
        var text = "";
        //var fileString;
        // document.getElementById("speakerOn").style.display = 'none';
        // document.getElementById("speakerOff").style.display = 'block';
        console.log("Stop recroding clicked");

        me.microm.stop().then(function (file) {
            let reader = new FileReader();
            reader.readAsDataURL(file.blob);
            //console.log("Result after click stop button",result);
            //console.log("calling blob data method..",this.blobData(result));
            // reader.readAsDataURL(result.blob); 
            reader.onloadend = function (e) {

                /* console.log("onloadend : ", e);
                text = e.target.result;
                console.log("e is!!!!!!!", text);
                let bodyEncoded = text.replace('data:audio/mp3;base64,', '');
                console.log("resulted blob is", bodyEncoded);
                base64data = reader.result;
                console.log("base64 data ",base64data);
                let fileData = new File([bodyEncoded], 'temp.mp3', { type: 'audio/mp3' });
                 mp3File=fileData.name;
                console.log("Inside File Data ", fileData);
               
                 var data = new FormData(); 
                
                data.append("audio_file", fileData);
                data.append("language", "EN");

                me.postData(data); */
                var state = reader.readyState;
                if (state == 2) {
                    console.log("state", state)
                    var fileData = new File([file.blob], 'temp.mp3', { type: 'audio/mp3' });
                    console.log("file data in time out function", fileData);
                    var data = new FormData();
                    data.append("language", "EN");
                    data.append("audio_file", fileData);
                   
                    me.postData(data);
                }
                else {
                    console.log("File reading state is not done");
                }




            }

            // reader.readAsText(file.blob);
            /* console.log("blob data is=============>>>.........", file.blob);
            var fileData = new File([file.blob], 'temp.mp3', { type: 'audio/mp3' });
            console.log("file data in time out function", fileData);
            var data = new FormData();
            data.append("language", "EN");
            data.append("audio_file", fileData);
            me.postData(data); */
            //console.log("Service call",this.sttService.postRequest(data));
            /*    me.sttService.postRequest(data).subscribe(res=>{
                  console.log("Api respone data is:",res);  
                  var entityExtractSentence =res.transcriptions["0"].utf_text;
                  console.log("uttered word is :",entityExtractSentence);
                     var entityData = new FormData();
                     entityData.append("project_public_id", "nlp_f81464ab-0c26-4583-b25f-bd180c6bff46");
                     entityData.append("text","book a ticket from pune to mumbai on today");
      
                     
                         me.entityExtractService.extractEntity(entityData).subscribe(res=>{
                         console.log("Entity Extract API response :",res);
                          var entity=res.utterances["0"].entities;
                         console.log("Entity from API",entity);
                       })
                     
               }); */
            /*  setTimeout(function() {
               //console.log("text===========>",text)
               var fileData = new File([text], 'temp.mp3', { type: 'audio/mp3' }); 
               console.log("file data in time out function",fileData);
               mp3File=fileData.name;
               console.log("Outside File Data ",mp3File);
               var data = new FormData();
               data.append("audio_file",fileData);
               data.append("language", "EN");
               
               //console.log("Service call",this.sttService.postRequest(data));
               me.sttService.postRequest(data).subscribe(res=>{
                  console.log("Api respone data is:" +res);   
                });
                
             
             }, 1000); */



        });
        
        console.log("Calling ngOnInit() method.....");
      
       
        
      
         

    }

    postData(x) {
        let me = this;
        me.sttService.postRequest(x).subscribe(res => {
            var statement =res.transcriptions["0"].utf_text
            console.log("Spoken Sentence is", res.transcriptions["0"].utf_text);
            var entityData = new FormData();
            entityData.append("project_public_id", "nlp_f81464ab-0c26-4583-b25f-bd180c6bff46");
            entityData.append("text","Book a ticekt from pune to mumbai today for 3 persons");
            me.entityExtract(entityData);
        });
        // var entityData = new FormData();
        // entityData.append("project_public_id", "nlp_f81464ab-0c26-4583-b25f-bd180c6bff46");
        // entityData.append("text","book a ticket from pune to mumbai on today");
        // this.entityExtract(entityData);

    }
    entityExtract(x) {
        let me = this;
        me.entityExtractService.extractEntity(x).subscribe((res) => {

            //console.log("Status from server",res.status);

            /* me.entityExtractResponse = res;
            // me.entityExtractResponse = Array.of(res); 
            console.log("Entity Extract API response :", me.entityExtractResponse); */
            
            me.setEntityRes(res)
           
            //me.currentNameSubject.next.bind("amar");
       
           /*     me.currentNameSubject.subscribe((val) => {
                // this.entityExtractResponse = this.currentNameSubject.getValue();
                //me.entityExtractResponse = val;
                me.setEntityRes(val);
                //this.currentNameSubject.next(val);	
                //console.log("behaviroal subject value", me.entityExtractResponse);

            }); */

        }, err => console.error(err),
            () => console.log('Entity Extract API Call Completed'));




        //this.entityExtractResponse=this.currentNameSubject.getValue();
        

    }

    setEntityRes(_val) {
        let me=this;
        //console.log("Entity set value",_val);
        me.currentNameSubject.next(_val);
        
    }

    getEntityRes():Observable<any> {
       return this.currentNameSubject.asObservable();
       
    }
    ngOnDestroy() {
        let me=this;
       


    }

}

