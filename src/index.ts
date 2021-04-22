import { User } from "./models/User";

const testData = {id: 1, name: 'New name', age: 24}

const user = new User(testData)

user.on('save', ()=>{console.log(user)})
user.save()