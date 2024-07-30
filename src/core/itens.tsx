import Mobs from "./mobs";

export default class Itens {
    #monstros_id: number;
    #monstros_nome: string;
    #item_id: number;
    #item_nome: string;
    #item_preco: number;

    constructor(Monstroid: number, Monstronome: string, ItemId: number, ItemNome: string, preco: number) {
        this.#monstros_id = Monstroid;
        this.#monstros_nome = Monstronome;
        this.#item_id = ItemId;
        this.#item_nome = ItemNome;
        this.#item_preco = preco;
    }


    static itensVazio() {
        return new Itens(0, '', 0, '', 0)
    }

    get monstroId() {
        return  this.#monstros_id
    }

    get monstroNome() {
        return this.#monstros_nome
    }

    get itemId() {
        return this.#item_id
    }

    get itemNome() {
        return this.#item_nome
    }
    
    get preco() {
        return this.#item_preco
    }


}


