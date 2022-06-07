import Achievement from "./achievement.js"

export default class Objective{

    onComplete(){
        console.info("Objective action when completed")
        new Achievement()
    }

    onBegin(){
        console.info("Objective action when started")
    }

}