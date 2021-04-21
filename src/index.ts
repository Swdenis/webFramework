import { User } from "./models/User";

const testData = {id: 1, name: 'Alex', age: 24}
const testData2 = {name: 'NewUser', age: 12}
const updateData = {age: 81}
const user = new User(testData2)

user.save()