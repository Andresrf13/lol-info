import { AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { LanguagesService } from '../services/languages.service';
import { Language } from '../../models/language';
import { MatSelect } from '@angular/material/select'


@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements  OnInit {
  items: Language[] = [];

  selected: any;

  constructor(private languagesService: LanguagesService) { 
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
    window.location.reload();
  }

}
