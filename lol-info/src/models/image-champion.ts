export class imageChampion {
    full: string = '';
    sprite: string = '';
    group: string = '';
    x: number= -1;
    y: number = -1;
    w: number = -1;
    h: number = -1;

    constructor(data: any) {
        if (data != null) {
            this.full = data.full;
            this.sprite = data.sprite;
            this.group = data.group;
            this.x = data.x;
            this.y = data.y;
            this.w = data.w;
            this.h = data.h;
        }
    }
}