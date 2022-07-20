import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { NavbarComponent } from './navbar/navbar.component';
import { LanguagesComponent } from './languages/languages.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { ChampionCardComponent } from './champion-card/champion-card.component';
import { MatCardModule } from '@angular/material/card';
import { ChampionsListComponent } from './champions-list/champions-list.component';
import { ChampionInformationComponent } from './champion-information/champion-information.component';
import { MatTabsModule } from '@angular/material/tabs';
import { LoreComponent } from './lore/lore.component';
import { SkinsComponent } from './skins/skins.component';
import { TipsComponent } from './tips/tips.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FooterComponent } from './footer/footer.component';
import { MatIconModule } from '@angular/material/icon'
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LanguagesComponent,
    ChampionCardComponent,
    ChampionsListComponent,
    ChampionInformationComponent,
    LoreComponent,
    SkinsComponent,
    TipsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateFactory,
        deps: [HttpClient]
      }
    }),
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }


export function translateFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}