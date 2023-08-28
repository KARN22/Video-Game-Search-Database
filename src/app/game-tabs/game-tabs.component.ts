import { Component, Input, OnInit } from '@angular/core';
import { GameDetails } from '../game-model';
import { GameTrailers } from '../game-trailers-model';
import { GameScreenshots } from '../game-screenshots-model';

@Component({
  selector: 'app-game-tabs',
  templateUrl: './game-tabs.component.html',
  styleUrls: ['./game-tabs.component.scss']
})
export class GameTabsComponent implements OnInit{

  @Input() gameInfo: GameDetails;
  @Input() gameScreenShots: GameScreenshots;
  @Input() gameTrailers: GameTrailers;


  constructor( ) { }

  ngOnInit(): void {
    
  }

}
