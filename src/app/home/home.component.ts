import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { Games, Result } from '../model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  ordering: string = '-metacritic';
  gameList: Result[];
  routeSub: Subscription;
  gameSub: Subscription;


  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService,
    private router: Router,
    public searchBarComponent: SearchBarComponent
  ) { }

  ngOnInit() {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      if (params['game-name']) {
        this.searchGames(this.ordering, params['game-name'])
      } else {
        this.searchGames(this.ordering)
      }
    })
  }

  sortGames() {
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params['game-name']) {
        this.searchGames(this.ordering, params['game-name'])
      } else {
        this.searchGames(this.ordering)
      }
    })
  }

  searchGames(ordering: string, search?: string) {
    this.gameSub = this.httpService.getGameList(ordering, search).subscribe((res: Games) => {
      console.log(res.results)
      this.gameList = res.results
    })
  }

  openGameDetails(id: number): void {
    this.router.navigate(['details', id.toString()]);
  }

  ngOnDestroy() {
    if(this.gameSub){
      this.gameSub.unsubscribe()
    }

    if(this.routeSub){
      this.routeSub.unsubscribe()
    }
  }

}
