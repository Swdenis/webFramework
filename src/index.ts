import { User } from "./models/User";

const testData = {name: 'Alex', age: 24}
const updateData = {age: 81}
const user = new User(testData)


user.on('change', ()=>{
    console.log('change1')
})
user.on('change', ()=>{
    console.log('change2')
})
user.on('save', ()=>{
    console.log('save1')
})

user.trigger('change')
user.trigger('save')
user.trigger('hey')