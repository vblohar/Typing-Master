import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { paragraphType } from '../../model/common.model';


@Component({
  selector: 'paragraph',
  imports: [CommonModule, FormsModule],
  templateUrl: './paragraph.html',
  styleUrl: './paragraph.css'
})
export class Paragraph {
  
  @ViewChild('scrollContainer') scrollContainer!: ElementRef

  paragraph = paragraphType.easy;
  difficulty = [
    { type: "Easy" },
    { type: "Medium" },
    { type: "Hard" }
  ];
  textType: String = 'Easy';

  changePara(event: Event) {
    if (this.textType === "Easy") {
      this.paragraph = paragraphType.easy;
    } else if (this.textType === "Medium") {
      this.paragraph = paragraphType.medium;
    } else {
      this.paragraph = paragraphType.hard;
    }

    if(this.scrollContainer) {
      this.scrollContainer.nativeElement.scrollTop = 0;
    }
  }

}
