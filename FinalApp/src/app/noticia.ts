export class Noticia {

    private time: Date;

    constructor(private id: number, private title: string, private user: string,
        private points: number, time: number, private comments: number, private url: string) {
        this.time = new Date(time);
    }
}
