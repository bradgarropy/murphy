import {get, writable} from "svelte/store"

const load = name => {
    const item = localStorage.getItem(name)
    let value

    switch (name) {
        case "runs":
            value = item ? item === "true" : true
            break

        case "rounds":
            value = item ? parseInt(item) : 20
            break
    }

    return value
}

const save = () => {
    localStorage.setItem("runs", get(runs))
    localStorage.setItem("rounds", get(rounds))
}

const runs = writable(load("runs"))
const rounds = writable(load("rounds"))

export {rounds, runs, save}
