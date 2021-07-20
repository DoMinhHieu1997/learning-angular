import {Data} from './data-model';

export class Boxtop {
    constructor(
        public objkey: string,
        public message: string,
        public currentpage: number,
        public totalpage: number,
        public totalrecord: number,
        public data: Data,
    ) {}
}
