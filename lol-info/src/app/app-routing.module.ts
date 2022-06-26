import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChampionInformationComponent } from './champion-information/champion-information.component';
import { ChampionsListComponent } from './champions-list/champions-list.component';

const routes: Routes = [
  { path: '', component: ChampionsListComponent },
  { path: 'champion/:id', component: ChampionInformationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
