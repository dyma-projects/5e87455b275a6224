import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Input() result: number
  @Output() compteurChange = new EventEmitter();
  valueCompteur: number = 0;

  constructor() { }

  ngOnInit() {
  }

  more() {
    this.valueCompteur++;
    this.compteurChange.emit({
      value: this.valueCompteur
    });
  }

  less() {
    this.valueCompteur--;
    this.compteurChange.emit({
      value: this.valueCompteur
    });
  }

}
