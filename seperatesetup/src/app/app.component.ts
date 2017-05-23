import { Component,Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 })
export class AppComponent {
 //this is the  model containing a arry of objects with one column titled description
  manyrows:Object[]=[
{"slno":1,"description":"This is the story of Minnie the Moocher who was a regular hootchie koocher. Hee dee "},
{"slno":2,"description":"Bertie"},
{"slno":3,"description":"Wooster is the man Friday of Jeeves"},
{"slno":4,"description":"ccv"},
{"slno":5,"description":"01234567890123456789012345678901234567890123456789"}
  ];


  constructor (){ 
  	
  }

  
}
