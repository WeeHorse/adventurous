import Character from "./character.js"
import Inventory from "./inventory.js"

export default class Player extends Character{

    #inventory = new Inventory()
    
    get inventory(){
        return this.#inventory
    }

}