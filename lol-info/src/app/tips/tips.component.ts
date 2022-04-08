import { Component, Input, OnInit } from '@angular/core';
import { Champion } from 'src/models/Champion';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.scss']
})
export class TipsComponent implements OnInit {
  private _champion: Champion = new Champion();

  get champion(): Champion {
    return this._champion;
  }

  @Input() set champion(value: Champion) {
    this._champion = value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
