export interface ISongs {
    id:number
    title: string
    preview:string
    artist:{
        name:string
        picture:string
    }
    album:{
        cover_small:string
    }
}

export interface ISearch {
    search:string
}

