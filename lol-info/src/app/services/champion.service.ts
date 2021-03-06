import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { imageChampion } from 'src/models/image-champion';
import { Champion } from '../../models/Champion';
import { LanguagesService } from './languages.service';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {

  subject$ = new Subject<Champion[]>();

  championsMap = new Map<string, Champion>();


  private get url() {
    return `https://ddragon.leagueoflegends.com/cdn/10.10.3208608/data/${this.languageService.currentLanguage}/champion.json`;
  }

  constructor(private http: HttpClient, private languageService: LanguagesService) {
    this.getData();
  }

  getData(): any {
    this.champions.subscribe(data => {
      this.data = data;
      this.subject$.next(this.data);
    });
  }
  
  get champions(): Observable<any> {
    return this.http.get(this.url);
  }

  get subject(): Observable<Champion[]> {
    return this.subject$.asObservable();
  }
  
  set data(data: any) {
    for (const i in data.data) {
      let item;
      const champ = data.data[i];
      item = new Champion(champ);
      this.championsMap.set(champ.key, item);
    }
  }

  get data() {
    return Array.from(this.championsMap.values()); 
  }

  search(text: string): Champion[] {
  return this.data.filter( (champion: Champion) => champion.name.toLowerCase().includes(text.toLowerCase()));
  }
}
