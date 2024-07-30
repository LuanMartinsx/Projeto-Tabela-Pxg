import Hunts from "./hunts"
import Mobs from "./mobs"


export default class MobHunts {
    #mob: Mobs[]
    #hunt: Hunts


    constructor(mob: Mobs[], hunt: Hunts) {
        this.#mob = mob;
        this.#hunt = hunt
    }
   
    get mob() {
        return this.#mob
    }

    get hunt() {
        return this.#hunt
    }
}
