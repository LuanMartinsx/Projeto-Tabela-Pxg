export default class Hunts {
     #id: number;
     #nome: string;
     

    constructor(id: number, nome: string, ) {
        this.#id = id;
        this.#nome = nome;
        

    }

    static vazio() {
        return new Hunts(0, '')
    }


    get id() {
        return this.#id
    }

    get nome(){
        return this.#nome
    }


}