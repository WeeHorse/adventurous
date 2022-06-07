export default class Inventory{

    #maxAmount = 5
    #items = []

    get items(){
        return this.#items
    }

    add(item){
        if(this.#items.length < this.#maxAmount && item.constructor === Item){
            this.#items.push(item)   
        }        
    }

    removeItem(name){
        for(let i=o;i<items.length;i++){
            if(items[i].name === name){
                items.splice(i,1)
                return items[i]
            }
        }
    }

}