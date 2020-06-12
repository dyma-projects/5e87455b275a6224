import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  public compteur: number = 0; 
  public result: number;
  constructor() { }

  ngOnInit() {
  }

  compteurUpdate(event){
    this.result = event.value;
  }
}
