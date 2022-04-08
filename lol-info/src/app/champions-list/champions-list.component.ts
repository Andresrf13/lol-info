import { Component, OnInit } from '@angular/core';
import { Champion } from 'src/models/Champion';
import { ChampionService } from '../services/champion.service';
import { LanguagesService } from '../services/languages.service';

@Component({
  selector: 'app-champions-list',
  templateUrl: './champions-list.component.html',
  styleUrls: ['./champions-list.component.scss']
})
export class ChampionsListComponent implements OnInit {

  champions: Champion[] = [];

  constructor(private championService: ChampionService, private languageService: LanguagesService) {
    this.championService.subject.subscribe(data => {
      this.champions = data;
    });
   }

  ngOnInit(): void {
  }

}
