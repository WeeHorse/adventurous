import Place from "../engine/concepts/place.js"

export default class Start extends Place{

    #commands = {}

    get commands(){        
        for(let exit of this.exits){            
            let command = {}
            command[exit.direction] = direction => console.log(exit.place)
            this.#commands.push(command)
        }
        return this.#commands
    }

}