import { Component, OnInit } from '@angular/core';
import { PlantouneService } from 'src/app/service/plantoune.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  likeCounter: number;

  constructor(private plantouneService : PlantouneService) {

    this.likeCounter =0;

  }

  ngOnInit(): void {
    this.plantouneService.plantLiked$.subscribe(
      () => {
        console.log('get new event from Subject');
        this.likeCounter ++;

      }
    )
  }

}
