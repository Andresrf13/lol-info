import { imageChampion } from "./image-champion";

export class Champion {
    version: string;
    id: string;
    key: string;
    name: string;
    title: string;
    blurb: string;
    image: imageChampion;

    constructor(version: string, id: string, key: string, name: string, title: string, blurb: string, image: imageChampion) {
        this.version = version;
        this.id = id;
        this.key = key;
        this.name = name;
        this.title = title;
        this.blurb = blurb;
        this.image = image;
        
    }

    get loadingImage() {
        return `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${this.id}_0.jpg`;
    }

    get imageUrl() {
        return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.id}_0.jpg`;
    } 
}