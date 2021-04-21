import { User } from "./models/User";

const testData = {id: 1, name: 'Alex', age: 24}
const updateData = {age: 81}
const user = new User(testData)

user.fetch()