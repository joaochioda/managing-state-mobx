import { makeObservable, observable, action } from "mobx"

class Person {
    name
    constructor() {
        makeObservable(this, {
            name: observable,
            setName: action,
        })
    }
    setName(name) {
        this.name = name
    }
}

export const person = new Person()