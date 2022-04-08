import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LanguagesService } from './languages.service';

@Injectable({
  providedIn: 'root'
})
export class ChampionInfoService {

  constructor(private languageService: LanguagesService, private http: HttpClient) { }
  
  getChampionInfo(championId: string): Observable<any> {
    return this.http.get(`https://ddragon.leagueoflegends.com/cdn/10.8.1/data/${this.languageService.currentLanguage}/champion/${championId}.json`);
  }

}
