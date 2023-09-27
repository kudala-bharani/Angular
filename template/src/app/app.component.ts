import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template';
  jobRole = "Software Developer";
  salary = 2000000;
  display():void{ 
    alert("Congratulations for new job role");
  }

}