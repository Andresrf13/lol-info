
import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Champion } from 'src/models/Champion';
import { words } from '../constants';
import { ChampionService } from './services/champion.service';
import { LanguagesService } from './services/languages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  AfterContentChecked {
  title = words.AppName;

  champions: Champion[] = [];

  constructor(private championService: ChampionService, private languageService: LanguagesService) {
    this.championService.subject.subscribe(data => {
      this.champions = data;
    });
    this.languageService.subject.subscribe(data => {
      this.championService.getData();
    });
  }


  ngAfterContentChecked() { 
  }
}
