import { Component } from '@angular/core';
import { Champion } from 'src/models/Champion';
import { ChampionService } from '../services/champion.service';
import { LanguagesService } from '../services/languages.service';

@Component({
  selector: 'app-champions-list',
  templateUrl: './champions-list.component.html',
  styleUrls: ['./champions-list.component.scss']
})
export class ChampionsListComponent {

  
  /**
   * List of champions to be rendered in the view.
   *
   * @type {Champion[]}
   * @memberof ChampionsListComponent
   */
  champions: Champion[] = [];

  /**
   * The constructor function is a special function that is called when a new instance of the class is
   * created. It is used to initialize the instance members of the class.
   * @param {ChampionService} championService - ChampionService - this is the service that is used to
   * get the data from the API
   * @param {LanguagesService} languageService - LanguagesService - this is the service that I'm using
   * to get the language from the user. Used to get the current selected language.
   */
  constructor(private championService: ChampionService, private languageService: LanguagesService) {
    this.champions = this.championService.data;
    this.championService.subject.subscribe(data => {
      this.champions = data;
    });
   }

  /**
   * The doSearch function takes a string as an argument and sets the champions property to the result
   * of the search function in the championService.
   * @param {string} text - string - The text that the user has entered into the search box.
   */
  doSearch(text: string): void {
    this.champions = this.championService.search(text);
  }

}
