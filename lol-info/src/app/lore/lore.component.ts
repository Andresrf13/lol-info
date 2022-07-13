import { Component, Input, OnInit } from '@angular/core';
import { Champion } from 'src/models/Champion';
import { Paths } from 'src/Paths';

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
    return Paths.getLoadingImage(this.champion.id);
  }
}
