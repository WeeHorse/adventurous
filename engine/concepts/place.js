export default class Place{
    id = 999
    name = "The place"
    #desc = ""
    #items = [] // array of items
    
    get description(){
        let d = this.#desc
        let i = []
        for(let item of this.#items){
            i.push(item.name)
        }
        if(i.length > 0){
            d += " You can see " + i.join(", ") + ". "
        }        
        return d
    } 

    #exits = []
    get exits(){
        return this.#exits
    }

    #characters = []
    get characters(){
        return this.#characters
    }

    constructor(config){
        this.#desc = config?.desc
        this.#items = config?.items
        this.#exits = config?.exits
        this.#characters = config?.characters
    }

    onEnter(){
        console.info(this.description)
    }

    onLook(){
        console.info("Place action when player looks")
    }

    onLeave(){
        console.info("Place action when player leaves")
    }
}