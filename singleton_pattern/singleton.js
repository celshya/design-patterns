class Configurationmanager{

    static instance = null;

    constructor(){
            if(Configurationmanager.instance){
                return Configurationmanager.instance
            }

        this.config = {
            apiurl:"https//example.com",
            apiKey:"98u439nb",
            db:"mongoDB"

        }
        //Assigning to first instance
        Configurationmanager.instance = this

    }

    getkey(key){
        return this.config[key]
    }
    setValue(key,value){
        this.config[key] = value
    }
    print(){
        console.log(this.config)
    }

}

const configuationManager1 = new Configurationmanager()
const configuationManager2 = new Configurationmanager()


console.log(configuationManager1.getkey("apiurl"))
configuationManager2.setValue("apiurl","http://dummy.com")

configuationManager2.print()
configuationManager1.print()

console.log(configuationManager1===configuationManager2)

/*

The Singleton pattern ensures that a class has only one instance and provides a global
 point of access to it. In this pattern, a static instance is created and returned upon the 
 first request, and subsequent requests return the same instance. This is useful for centralized 
 management of resources, like configuration settings or logging. You can modify properties of 
 the Singleton instance through methods if needed, ensuring the state is shared and consistent 
 across the application.

*/


/*  why static instance = null?  lazy initialization

The static instance variable belongs to the class itself, not to any specific object. 
This means it is shared globally across all parts of the application, and all calls to the
 class will reference the same instance, ensuring there is only one shared instance throughout
  the program.


*/