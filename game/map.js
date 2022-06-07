import characters from "./characters.js"
import Start from "../places/start.js"
import Garden from "../places/garden.js"
import Street from "../places/street.js"
import Flashlight from "../items/flashlight.js"
import Paddle from "../items/paddle.js"

const map = {}

map.garden = map.garden || new Garden()

map.northStreet = map.northStreet || new Street({
    characters: [
        characters.bankerBob
    ],
    exits: {
        west: map.westStreet,
        south: map.start
    }
})

map.westStreet = map.westStreet || new Street({
    exits: {
        east: map.northStreet
    }
})

map.start = map.start || new Start({
    items: [new Flashlight(), new Paddle()],
    desc: "This is the start, you can see ",
    exits: {
        north: map.northStreet,
        south: map.garden
    }
})

export default map