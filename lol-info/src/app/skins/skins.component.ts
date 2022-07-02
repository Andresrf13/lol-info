import { Component, Input, OnInit } from '@angular/core';
import { Champion } from 'src/models/Champion';
import { Skin } from 'src/models/Skin';

@Component({
  selector: 'app-skins',
  templateUrl: './skins.component.html',
  styleUrls: ['./skins.component.scss']
})
export class SkinsComponent implements OnInit {
  
  public _champion: Champion = new Champion();
  
  selectedSkin: Skin = new Skin();

  @Input() set champion(value: Champion) {
    this._champion = value;
    this.skins = value.skins;
    this.selectedSkin = this.skins[0];
  };

  constructor() { }

  ngOnInit(): void {
  }

  skins: Skin[] = [];

  getURl(num: number): string {
    return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this._champion.id}_${num}.jpg`;
  }

  selectSkin(skin: Skin): void {
    this.selectedSkin = skin;
  }

}
