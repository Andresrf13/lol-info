import { imageChampion } from "./image-champion";
import { Skin } from "./Skin";

export class Champion {
    version: string = '';
    id: string = '';
    key: string = '';
    name: string = '';
    title: string = '';
    blurb: string = '';
    lore: string = '';
    image: imageChampion = new imageChampion(null);
    skins: Skin[] = [];
    allyTips: string[] = [];
    enemyTips: string[] = [];

    constructor(data: any = null) {
        if (data != null) {
            this.version = data.version;
            this.id = data.id;
            this.key = data.key;
            this.name = data.name;
            this.title = data.title;
            this.blurb = data.blurb;
            this.image = new imageChampion(data.image);
            this.lore = data.lore;
            this.skins = data.skins?.map((skin: any) => new Skin(skin));
            this.allyTips = data.allytips;
            this.enemyTips = data.enemytips;
        }        
    }

    get loadingImage() {
        return `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${this.id}_0.jpg`;
    }

    get imageUrl() {
        return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.id}_0.jpg`;
    } 
}