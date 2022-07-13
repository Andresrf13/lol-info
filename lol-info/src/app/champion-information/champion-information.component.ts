import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Champion } from 'src/models/Champion';
import { imageChampion } from 'src/models/image-champion';
import { ChampionInfoService } from '../services/champion-info.service';
import { LanguagesService } from '../services/languages.service';

@Component({
  selector: 'app-champion-information',
  templateUrl: './champion-information.component.html',
  styleUrls: ['./champion-information.component.scss']
})
export class ChampionInformationComponent implements OnInit {

  champion: Champion = new Champion();

  constructor(private languageService: LanguagesService, private activetedRoute: ActivatedRoute, private championInfoService: ChampionInfoService) {
    this.activetedRoute.params.subscribe(params => {
      const id = params['id'];
      this.championInfoService.getChampionInfo(id).subscribe(data => {
        data = data.data;
        for (const key in data) {
          if (Object.prototype.hasOwnProperty.call(data, key)) {
            const element = data[key];
            this.champion = new Champion(element);
          }
        }
      });
    });
  }

  /**
   * If the selectedIndex is stored in localStorage, then use that value, otherwise use 0
   */
  ngOnInit(): void {
    this._selectedIndex = Number(localStorage.getItem('selectedIndex')) || 0;
  }

  _selectedIndex = 0;

  /**
   * The function returns the value of the private variable _selectedIndex
   * @returns The selectedIndex property is being returned.
   */
  get selectedIndex(): number {
    return this._selectedIndex;
  }

  /**
   * The function sets the value of the selectedIndex property to the value passed in, and then stores
   * the value in local storage
   * @param {number} value - The value of the selected index.
   */
  set selectedIndex(value: number) {
    this._selectedIndex = value;
    localStorage.setItem('selectedIndex', value.toString());
  }

}
