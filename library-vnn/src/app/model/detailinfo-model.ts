import { DetailData } from "./detaildata-model";

export class DetailInfo {
    constructor(
         public objkey: string,
         public message: string,
         public currentpage: number,
         public totalpage: number,
         public totalrecord: number,
         public data: DetailData
    ) {}
}
