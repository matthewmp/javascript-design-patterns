/*
    The LoggerUtility can be imported across multiple files/modules and endless
    amounts of instances can be created that will be completely unique unto themselves
*/

/*  
    
        *** Implementing Singleton Pattern On LoggerUtility Class ***

 1. Start by simply not exporting the class since we do not want
    the ability for multiple instances to be created

 2 . Check to see if there is an instance property on the LoggerUtility
     If there is not, set the value of the instance property to "this".
     This is done on the class itself and not on an instance.

 3.  Return that instance property which will now be the class itself.

 4.  Create a new instance of the logger utility at the bottom  of the file

 5.  Freeze the instance so that no properties or methods can be added to it

 6.  Export default that instance

 */

class LoggerUtility { // 1
    constructor(){
        if(LoggerUtility.instance == null){  // 2
            this.logs = [];
            LoggerUtility.instance = this;
        }
        return LoggerUtility.instance;  // 3
    }

    log(message){
        this.logs.push(message);
        console.log(`Logger: ${message}`);
        this.printLogCount();
    }

    printLogCount(){
        console.log(`There are ${this.logs.length} logs.`);
    }
}

const singleton1 = new LoggerUtility(); // 4
Object.freeze(singleton1); // 5
export default singleton1;  // 6