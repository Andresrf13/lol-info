import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable, ObservableLike, Subject } from 'rxjs';
import { Language } from 'src/models/language';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

  subject$ = new Subject<string>();

  itemsSubject$ = new Subject<Language[]>();

  items: Language[] = [];

  private _languages: any[] = [];

  mapper = new Map<string, string>();
  defaultLanguage: any = 'en_US';
  get currentLanguage(): string {
    return this.defaultLanguage;
  }

  set currentLanguage(language: string) {
    this.defaultLanguage = language;
    this.subject$.next(this.defaultLanguage);
  }

  get subject(): Observable<string> {
    return this.subject$.asObservable();
  }

  get itemsSubject(): Observable<Language[]> {
    return this.itemsSubject$.asObservable();
  }

  getData(): any {
    this.languages.subscribe(data => {
      this.processData(data);
      this.itemsSubject$.next(this.items);
    });
  }

  private get url() {
    return 'https://ddragon.leagueoflegends.com/cdn/languages.json';
  }

  constructor(private http: HttpClient) {
    this.mapper.set('es_ES', 'Español');
    this.mapper.set(this.defaultLanguage, 'English');
  }
  
  get languages(): Observable<any> {
    return this.http.get(this.url);
  }

  processData(data: any) {
    let tmp = new Map<string, Language>();
    // default value
    tmp.set('English', new Language(this.defaultLanguage, 'English'));
    let item;
    for (const i of data) {
      item = this.mapper.get(i);
      const language = new Language(i, item ?? 'English');
      if (!tmp.has(item ?? 'English')) {
        tmp.set(item ?? 'English', language);
      }
    }
    this.items = [...tmp.values()];
  }

}
