/*
    Below is another implementation of the Singleton pattern.
*/

export default class LoggerUtility2 { 
    constructor(){
        if(LoggerUtility2.instance instanceof LoggerUtility2){  
            return LoggerUtility2.instance;  
        }

        this.logs = [];

        Object.freeze(this);
        LoggerUtility2.instance = this;
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