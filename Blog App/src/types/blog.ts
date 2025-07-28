export interface Blog{
    id:string;
    title:string;
    author:string;
    content:string;
    summary:string;
    date:string;
    image?:string;
    tags?:string[];
}