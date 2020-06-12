import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  public valeur: string;
  constructor() { }
  @ViewChild('v', {static: true}) public el: ElementRef;

  ngOnInit() {
    console.log(this.el.nativeElement.value)
  }
  inputValue(){
    console.log(this.el.nativeElement.value)
  }
}
