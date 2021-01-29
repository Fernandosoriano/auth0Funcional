import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor( private auth: AuthService ) {}

  ngOnInit() {
    this.auth.localAuthSetup(); // este método es para que la sesión se mantanga iniciada auqnue le demos un refresh a la página 
  }


}
