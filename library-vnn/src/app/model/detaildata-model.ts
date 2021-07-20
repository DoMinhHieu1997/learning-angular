import { DetailImages } from './detailimages-model';
import { DetailRelatedArticle } from './detailrelatedarticle-model';
import { DetailActivity } from './detailactivity-model';

export class DetailData {
    constructor(
        public images: DetailImages[],
        public videos: string,//im
        public star: string,
        public movie: string,
        public music: string,
        public book: string,
        public television: string,
        public politician: string,//im
        public footballClub: string,
        public sportPlayer: string,
        public histories: string,//im
        public lastName: string,
        public firstName: string,
        public alias: string,
        public nickName: string,
        public avatar: string,
        public facebook: string,
        public googlePlus: string,
        public twitter: string,
        public birthday: string,
        public nationalContinent: string,
        public nationalAlias: string,
        public nationalName: string,
        public placeOfBirth: string,
        public story: string,
        public groupAlias: string,
        public groupName: string,
        public title: string,
        public id: string,
        public type: string,
        public created_At: string,
        public created_By: number,
        public last_Modified_At: string,
        public last_Modified_By: number,
        public status: number,
        public relatedArticle: DetailRelatedArticle[],
        public fullName: string,
        public activity: DetailActivity[],//im
        public jobtitle: string,
        public speaks: string,//im
        public film: string,//im
        public album: string,//im
        public works: string,//im
        public url: string
    ) {}
}
