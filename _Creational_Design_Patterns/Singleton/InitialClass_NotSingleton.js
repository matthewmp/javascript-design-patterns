// Starting with a LoggerUtility class that is not a singleton

export default class LoggerUtility_NotSingleton {
    constructor(){
        this.logs = [];
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