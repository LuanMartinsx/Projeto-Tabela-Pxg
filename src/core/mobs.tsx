import Hunts from "./hunts";
import Itens from "./itens";

export default class Mobs {
    #id: number;
    #nome: string;


    constructor(id: number, nome: string, ) {
        this.#id = id;
        this.#nome = nome;
        
    }




    get id() {
        return this.#id
    }

    get nome() {
        return this.#nome
    }
   

}