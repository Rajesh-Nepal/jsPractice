// constructure is run when we create an object of a class


class Student{
    constructor(name,address,roll){
        this.name =name;
        this.address=address;
        this.roll=roll;
    }
    describe(){
        
        console.log(`I am ${this.name}`);
    }
}



student1 = new Student('Ram','Kalanki','33')
// console.log(student1);
student1.describe();