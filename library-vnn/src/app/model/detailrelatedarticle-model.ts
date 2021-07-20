export class DetailRelatedArticle {
    constructor(
        public id: string,
        public articleId: number,
        public domain: string,
        public ord: number,
        public title: string,
        public lead: string,
        public url: string,
        public image: string,
        public publishDate: string,
        public publishTime: string
    ) {}
}