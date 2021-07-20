import { Character } from './character-model';

export class Data {
    constructor(
        public name: string,
        public alias: string,
        public description: string,
        public objects: Character[],
        public id: string,
        public type: string,
        public created_At: string,
        public created_By: number,
        public last_Modified_At: string,
        public last_Modified_By: number,
        public status: number
    ){}
}
