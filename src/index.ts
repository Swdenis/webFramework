import { User } from "./models/User";

const testData = {id: 1, name: 'New name', age: 24}

const user = User.buildUser(testData)

user.on('change', ()=>{console.log(user)})
user.fetch()
