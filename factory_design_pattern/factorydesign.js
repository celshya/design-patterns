/*
Deciding the type of objects to be created at run time
*/

class Vehicle{
    drive(){
        throw new Error("This is should be overriden")
    }
}

class Car extends Vehicle{
    drive(){
        console.log("Driving a car")
    }
}
class Bike extends Vehicle{
    drive(){
        console.log("Driving a Bike")
    }
}
class Truck extends Vehicle{
    drive(){
        console.log("Driving a Truck")
    }
}

class VehicleFactory{
    createVehicle(type){
        switch(type){
            case "car":
                return new Car();
          
            case "truck":
                return new Truck();
           
            case "bike":
                return new Bike();
                
            default:
                throw new Error("Invalid type");
                
            
        }
    }
}

const VehicleFactory1 = new VehicleFactory()
const car1 = VehicleFactory1.createVehicle("car")

car1.drive()

const bike = VehicleFactory1.createVehicle("bike")
bike.drive()

const truck = VehicleFactory1.createVehicle("truckie")
truck.drive()
