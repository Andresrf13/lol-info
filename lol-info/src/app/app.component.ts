
import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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


  constructor(private router: Router) {
    
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}
