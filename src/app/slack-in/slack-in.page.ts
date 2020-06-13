import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProviderService } from '../provider.service' ;
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-slack-in',
  templateUrl: './slack-in.page.html',
  styleUrls: ['./slack-in.page.scss'],
})
export class SlackINPage {
  name:string = 'jey';
  department:string = "ECE";
  section:string = "A"

  private studentlist ;
  private channels ;
  private slckchnelfrommyslack ;
  constructor(private route: Router , private restapi: ProviderService,public http:HttpClient) {

    this.restapi.getStudents().subscribe( (response ) => {
      console.log( response );
      this.studentlist = response;
    });

    this.restapi.getChannelsFromSlack().subscribe( (response ) => {
      console.log( response );
      this.channels = response;
    });

    this.restapi.slackchannel().subscribe( (response ) => {
      console.log( 'data from slack' );

      console.log( response );
      this.slckchnelfrommyslack = response;
    });
    

  }

  navigate(){
    console.log('button clicked');
   this.route.navigate(['/about', {  }]); 
    
  }
  gotnextpage(id){

  }

}
