export class Skin {
    id: string = '';
    num: number = -1;
    name: string = '';
    chromas: boolean = false;

    constructor(data: any = null) {
        if (data != null) {
            this.id = data.id;
            this.num = data.num;
            this.name = data.name;
            this.chromas = data.chromas;
        }
    }

}