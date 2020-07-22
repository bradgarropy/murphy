import {writable, get} from "svelte/store"

const load = name => {
    const item = localStorage.getItem(name)
    let value

    switch (name) {
        case "runs":
            value = item === "true"
            break

        case "rounds":
            value = parseInt(item)
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

export {runs, rounds, save}
