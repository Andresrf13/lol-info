import { AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { LanguagesService } from '../services/languages.service';
import { Language } from '../../models/language';
import { MatSelect } from '@angular/material/select'
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements  OnInit {
  items: Language[] = [];

  selected: any;

  constructor(private languagesService: LanguagesService, private translateService: TranslateService) { 
    this.languagesService.itemsSubject.subscribe(data => {
      this.items = data;
      this.selected = this.languagesService.currentLanguage;
    });
    this.languagesService.getData();
  }

  ngOnInit(): void {
    
  }

  selectionChanged(event: any) {
    this.languagesService.currentLanguage = this.selected;
    sessionStorage.setItem('language', this.selected);
    let translateLanguage = this.selected === 'en_US' ? 'en' : 'es';
    sessionStorage.setItem('appLanguage', translateLanguage);
    this.translateService.use(translateLanguage);
    window.location.reload();
  }

}
