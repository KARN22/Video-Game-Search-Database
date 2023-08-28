import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpService } from '../services/http.service';
import { Subscription } from 'rxjs';
import { GameDetails } from '../game-model';
import { GameTrailers } from '../game-trailers-model';
import { GameScreenshots } from '../game-screenshots-model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy{

  gameRating = 0;
  routeSub: Subscription;
  gameSub: Subscription;
  gameScreenShots: GameScreenshots;
  gameTrailerSub: Subscription;
  gameScreenShotsSub: Subscription;
  gameId: string;
  gameInfo: GameDetails;
  gameTrailers: GameTrailers;
  

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params)=>{
      this.gameId = params['id'];
      this.getGameDetails(this.gameId);
    })
  }
  getGameDetails(gameId: string) {
    this.gameSub = this.httpService.getGameDetails(gameId).subscribe((res)=>{
      this.gameInfo = res;

      setTimeout(()=> {
        this.gameRating = this.gameInfo.metacritic
      }, 1000);
    })
    this.gameTrailerSub = this.httpService.getGameTrailers(gameId).subscribe((res)=>{
      this.gameTrailers = res;
    })
    this.gameScreenShotsSub = this.httpService.getGameScreenshots(gameId).subscribe((res)=>{
      this.gameScreenShots = res;
    })
  }

  getColor(value: number): string{
    if(value > 75){
      return '#5ee432';
    } else if(value > 50){
      return '#fffa50';
    } else if(value > 30){
      return '#f7aa38';
    } else {
      return '#ef4655';
    }
  }

  ngOnDestroy(){
    if(this.routeSub){
      this.routeSub.unsubscribe()
    }

    if(this.gameSub){
      this.gameSub.unsubscribe()
    }

    if(this.gameTrailerSub){
      this.gameTrailerSub.unsubscribe()
    }

    if(this.gameScreenShotsSub){
      this.gameScreenShotsSub.unsubscribe()
    }
  }

}
