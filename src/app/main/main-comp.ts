import { Component } from '@angular/core';
import { Paragraph } from "./paragraph/paragraph";

@Component({
  selector: 'main',
  imports: [Paragraph],
  templateUrl: './main-comp.html',
  styleUrl: './main-comp.css'
})
export class Main {

}
