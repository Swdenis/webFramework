import { UserProps } from "./User"

export class Attributes<T> {

    constructor(private data: T) {}

    get<K extends keyof T>(key: K): T[K] {
        return this.data[key]
    }

    set(userProps: T): void {
        Object.assign(this.data, userProps)
    }
}

const attrs = new Attributes<UserProps>({
    id: 5,age:20,name:'Stephen'
})