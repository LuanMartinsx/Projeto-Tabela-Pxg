import Mobs from "./mobs";
import Itens from "./itens";

export default class MobsItens {
    #mob: Mobs;
    #itens: Itens[];

    constructor(mob: Mobs, itens: Itens[]) {
        this.#mob = mob;
        this.#itens = itens;
    }

    get mob() {
        return this.#mob;
    }

    get itens() {
        return this.#itens;
    }
}