export class Todo{
    id:number = Math.random();
    isCompleted:boolean = false;
    description:string;

    constructor(
        description:string
    ){
        this.description = description;
    }
}