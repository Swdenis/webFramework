import { User } from "./models/User";

const testData = {id: 1, name: 'Alex', age: 24}
const testData2 = {name: 'NewUser', age: 12}

const user = new User(testData)
user.events.on('change',()=> {
    console.log('change')
})

user.events.trigger('change')