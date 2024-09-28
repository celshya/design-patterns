/*

This is particularly useful for implementing features like group messaging,
 where multiple users can be notified of new messages.
*/

class Group{

    constructor(){
        this.users = []
    }

    addusers(user){
        this.users.push(user)
    }

    removeUser(user){
        this.users = this.users.filter(u=>u!=user)
    }

    notifyusers(message){
        this.users.forEach((user)=>user.update(message))
    }
}


class User{
    constructor(name){
        this.name = name
    }
    update(message){
        console.log(`${this.name} received ${message}`)
    }
}


const group1 = new Group()

let user1 = new User("user1")
let user2 = new User("user2")
let user3 = new User("user3")


group1.addusers(user1)
group1.addusers(user2)
group1.addusers(user3)

group1.notifyusers("Hello Message")
group1.removeUser(user2)

group1.notifyusers("New Message")

/*
The Observer pattern is a behavioral design pattern that establishes a one-to-many relationship
 between a subject and its observers, allowing the subject to notify multiple observers of state 
 changes. It promotes loose coupling, enabling the subject and observers to operate
  independently. Common use cases include event handling and messaging systems, where changes 
in one object need to be communicated to many others. Observers can be dynamically added or
 removed at runtime, making the system flexible and adaptable.




*/
