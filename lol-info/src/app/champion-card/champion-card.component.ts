import { Component, Input, OnInit } from '@angular/core';
import { Champion } from '../../models/Champion';

@Component({
  selector: 'app-champion-card',
  templateUrl: './champion-card.component.html',
  styleUrls: ['./champion-card.component.scss']
})
export class ChampionCardComponent implements OnInit {

   @Input()
  champion!: Champion;

  constructor() { }

  ngOnInit(): void {
  }

}
