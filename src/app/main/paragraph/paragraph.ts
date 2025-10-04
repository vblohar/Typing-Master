import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { paragraphType, timeFrame } from '../../model/common.model';
import { TimeInterval } from 'rxjs';


@Component({
  selector: 'paragraph',
  imports: [CommonModule, FormsModule],
  templateUrl: './paragraph.html',
  styleUrl: './paragraph.css'
})
export class Paragraph {

  @ViewChild('scrollContainer') scrollContainer!: ElementRef

  paragraph = paragraphType.easy;
  typingTime = timeFrame;
  textType: String = 'Easy';
  countdownInterval: any;   // for setInterval reference
  countdownDisplay = '';    // for formatted time
  remainingTime = 60;        // seconds
  timeForTyping = 1;

  difficulty = [
    { type: "Easy" },
    { type: "Medium" },
    { type: "Hard" }
  ];

  updateCountdownDisplay() {
    const seconds = this.remainingTime % 60;
    const minutes = Math.floor(this.remainingTime / 60);
    this.countdownDisplay = `${this.pad(minutes)}:${this.pad(seconds)}`;
  }

  pad(num: number) {
    return num.toString().padStart(2, '0');
  }

  startCountdown() {
    if(!this.countdownDisplay){
    this.updateCountdownDisplay();
    
    this.countdownInterval = setInterval(() => {
      this.remainingTime--;
      this.updateCountdownDisplay();
      if (this.remainingTime <= 0) {
        clearInterval(this.countdownInterval);
        this.countdownDisplay = '';
      }
    }, 1000);}
  }

  reset() {
    this.countdownDisplay = '';
    clearInterval(this.countdownInterval);
    this.changeTime();
  }

  changePara(event: Event) {
    if (this.textType === "Easy") {
      this.paragraph = paragraphType.easy;
    } else if (this.textType === "Medium") {
      this.paragraph = paragraphType.medium;
    } else {
      this.paragraph = paragraphType.hard;
    }

    if (this.scrollContainer) {
      this.scrollContainer.nativeElement.scrollTop = 0;
    }
  }

  changeTime() {
    this.remainingTime = this.timeForTyping * 60;
  }

}
