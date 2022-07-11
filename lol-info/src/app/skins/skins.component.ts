import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { Champion } from 'src/models/Champion';
import { Skin } from 'src/models/Skin';
import { direction } from 'src/direction';
import { Paths } from 'src/Paths';

@Component({
  selector: 'app-skins',
  templateUrl: './skins.component.html',
  styleUrls: ['./skins.component.scss']
})
export class SkinsComponent {

  constructor(private renderer: Renderer2) {

  }

  private interval: any;
  
  public _champion: Champion = new Champion();
  
  selectedSkin: Skin = new Skin();

  @Input() set champion(value: Champion) {
    this._champion = value;
    this.skins = value.skins;
    this.selectedSkin = this.skins[0];
  }

  @ViewChild('container')
  container!: ElementRef;

  @ViewChild('leftDiv')
  leftScroll!: ElementRef;
  
  @ViewChild('rightDiv')
  rightScroll!: ElementRef;

  skins: Skin[] = [];

  getURl(num: number): string {
    return Paths.getSplash(this._champion.id, num);
  }

  /**
   * The function takes a parameter of type Skin and assigns it to the selectedSkin property
   * @param {Skin} skin - The skin object that was selected.
   */
  selectSkin(skin: Skin): void {
    this.selectedSkin = skin;
  }

  showScroll(event: any): void {
    if (this.container?.nativeElement.clientWidth < this.container?.nativeElement.scrollWidth) {
      this.renderer.removeClass(this.leftScroll.nativeElement, 'hide');
      this.renderer.removeClass(this.rightScroll.nativeElement, 'hide');
    }
  }

  hideScroll(event: any): void {
    this.renderer.addClass(this.leftScroll.nativeElement, 'hide');
    this.renderer.addClass(this.rightScroll.nativeElement, 'hide');
  }

  moveLeft(event: any): void {
    clearInterval(this.interval);
    this.interval = setInterval(this.move.bind(this), 3, direction.left);
  }

  moveRight(event: any): void {
    clearInterval(this.interval);
    this.interval = setInterval(this.move.bind(this), 3, direction.right);
  }

  private move(move: direction): void {
    if (move === direction.left) {
      this.container.nativeElement.scrollLeft -= 3;
    } else {
      this.container.nativeElement.scrollLeft += 3;
    }
  }

  clearScroll(): void {
    clearInterval(this.interval);
  }

}
