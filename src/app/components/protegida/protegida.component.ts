import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styles: []
})
export class ProtegidaComponent implements OnInit {

  constructor( public auth: AuthService ) { }

  ngOnInit() {
    console.log('ngOnInit protegida');
    this.auth.userProfile$.subscribe( perfil => { // al ser userProfile$ una subscripción , nos suscribimos a ella e imprimimos l ainformación del perfil, esto esa para ver qué arroja la subscrpción en la consola cada vez que hacemos refresh a la página, y se vió que regresaba null, la manera en como se arreglo esto fue colocando el ngoninit en el applicationCache,component.ts
      console.log(perfil);
    });
  }

}
