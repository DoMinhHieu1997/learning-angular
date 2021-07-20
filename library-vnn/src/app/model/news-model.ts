export class News {
    constructor (
        public aid: number,
        public cateid: number, 
        public catelink: string,
        public catename: string,
        public atype: number,
        public title: string,
        public image: string,
        public publishdate: string,
        public publishtime: string,
        public lead: string,
        public link: string 
    ) {}
}