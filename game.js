import { createRequire } from "module"
const require = createRequire(import.meta.url)

import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'
const rl = readline.createInterface({ input, output })

import Player from "./engine/concepts/player.js"
import Log from "./engine/system/log.js"
import Objective from "./engine/concepts/objective.js"
import map from "./game/map.js"

export default class Game{

    player = new Player()
    log = new Log()
    objectives = []
    achievements = []
    currentPlace

    constructor(playerName){
        this.player.name = playerName
        this.startTime = new Date()
        this.loadMap()
        this.loadObjectives("./game/objectives.json")        
        this.waitForInput()
    }    

    move(direction){

    }

    loadMap(){
        this.currentPlace = map.start
        this.currentPlace.onEnter()
    }

    loadObjectives(jsonFile){
        this.objectives = require(jsonFile) 
        for(let objective of this.objectives){
            objective = new Objective(objective)
        }
    }

    #dictionary = [
        {
            key: "i",
            synomyms: ["inventory", "invent"] 
        }
    ]

    #commands = {
        quit: quit => process.exit(),
        i: inventory => console.log(this.player.inventory),
        l: look => console.log(this.currentPlace),
        tell: answer => {
            let char = answer.split(' ')[0]
            let say = answer.split(' ')[1] 
            this.currentPlace.getCharacter(char).say(say)
        },
        go: direction => {
            this.currentPlace = this.currentPlace.exits.direction
            this.currentPlace.onEnter()
        }
    }
    

    showCommands(){
        
    }

    async waitForInput(){
        const answer = await rl.question('What do you want to do? ')
        console.log(`Ok.  ${answer}`)
        // this.#commands[answer](answer)
        this.waitForInput()
    }
}
