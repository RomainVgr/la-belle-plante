import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-avis',
  templateUrl: './star-avis.component.html',
  styleUrls: ['./star-avis.component.scss']
})
export class StarAvisComponent implements OnInit {

  starState: string[];
  constructor() {
    this.starState = ['star', 'star', 'star', 'star', 'star'];
   }

  ngOnInit(): void {
  }

  onMouseOver(index: number) {

    for (let i = 0; i < this.starState.length ; i++) {
      if(i <= index) {
        this.starState[i] = 'star-fill';
      } else {
        this.starState[i] = 'star';
      }
    }
  }

  onMouseLeave() {
    this.starState = ['star', 'star', 'star', 'star', 'star'];
  }

}
