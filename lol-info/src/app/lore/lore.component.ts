import { Component, Input, OnInit } from '@angular/core';
import { Champion } from 'src/models/Champion';

@Component({
  selector: 'app-lore',
  templateUrl: './lore.component.html',
  styleUrls: ['./lore.component.scss']
})
export class LoreComponent implements OnInit {

  @Input() champion!: Champion;

  constructor() { }

  ngOnInit(): void {
  }

  get urlImage() {
    return `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.champion.id}_0.jpg`;
  }
}
