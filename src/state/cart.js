import { makeObservable, observable, action } from "mobx"

class Cart {
    items = []
    constructor() {
        makeObservable(this, {
            items: observable,
            addItem: action,
        })
    }
    addItem(item) {
        this.items = [...this.items, item]
        console.log(this.items)
    }
}

export const cart = new Cart()