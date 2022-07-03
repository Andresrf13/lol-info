
import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Champion } from 'src/models/Champion';
import { words } from '../constants';
import { ChampionService } from './services/champion.service';
import { LanguagesService } from './services/languages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = words.AppName;


  constructor(private router: Router, private translateService: TranslateService) {
    this.translateService.addLangs(['en', 'es']);
    const language = sessionStorage.getItem('appLanguage');
    this.translateService.setDefaultLang(language ?? 'en');
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}
