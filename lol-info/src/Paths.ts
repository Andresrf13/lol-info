import { imageChampion } from "./models/image-champion";

export class Paths {
    static getLoadingImage(championId: string) {
        return `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championId}_0.jpg`;
    }
    
    /**
     * It takes a championId and a number, and returns a string that is the url of the champion's
     * splash art
     * @param {string} championId - The champion's name in lowercase.
     * @param {number} num - The number of the splash art you want to get.
     * @returns A string
     */
    static getSplash(championId: string, num: number): string {
        return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_${num}.jpg`;
    }
    static gitHubUrl = '/assets/logos/GitHub-Mark-Light-120px-plus.png';

    static gitHubAuthor = 'https://github.com/Andresrf13/lol-info/tree/main/lol-info';
}