export class Noticia {

    public time: Date;

    constructor(public id: number, public title: string, public user: string,
        public points: number, time: number, public comments: number, public url: string) {
        this.time = new Date(time);
    }
}
