export interface CharactersInterface{
    id: number;
    name: string;
    img: string;
    age: number;
    gender: string;
    house: {
        name: string;
        member: string,
    }
}