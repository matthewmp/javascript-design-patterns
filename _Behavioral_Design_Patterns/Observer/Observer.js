import '../behavioral.css';

// Model for list of observers

export class ObserverList{
    constructor(){
        // Array to hold list of all current observers
        this.observerList = [];
    }

    // Add new element to observer list
    addObserver(observer){
        if(this.observerList.indexOf(observer) === -1){
            this.observerList.push(observer);
        }
    }

    // Return # of current observers
    count(){
        return this.ObserverList.length;
    }

    // Retrieve specific observer from observerList by index #
    get(index){
        if(index > -1 && index < this.observerList.length )
        {
            return this.observerList[index];
        }
        else {
            throw new Error('Observer index provided is not valid.')
        }
    }

    // Get index # of specific observer in observerList
    indexOf(obj){
        for(let i = 0; i < this.observerList.length; i++){
            if(this.observerList[i] === obj){
                return i;
            }
        }

        return -1;
    }

    // Remove observer from observerList using index #
    removeAt(index){
        this.observerList.splice(index, 1);
    }
}

// Model Subject
export class Subject{
    constructor(){
        this.observers = new ObserverList();
    }
    
    addObserver(observer){
        this.observers.addObserver(observer);
    }

    removeObserver(observer){
        this.observers.removeAt(this.observers.indexOf(observer, 0));
    }

    notify(context){
        this.observers.observerList.forEach((observer) => {
            observer.update(context);
        })
    }
}

// Grab elements and assign to variables
const inp1 = document.getElementById('inp1');
const inp2 = document.getElementById('inp2');
const inp3 = document.getElementById('inp3');

const divScoreBoard = document.getElementById('scoreboard');
const btnIncScoreBoard = document.getElementById('btnIncrementScore');
const scoreBoardScore = document.getElementById('scoreBoard-score');

// Create concrete observer class to instatiate 3 times and assign
// a DOM element to store their content
class inpObserver {
    constructor(DOMElement){
        this.content = '';
        this.element = DOMElement;

        this.update('0');
    }

    update(score){
        this.content = score;
        this.element.textContent = (this.content);
    }
}

// Create a concrete subject to broadcast/notify all observers the subject's score
class ScoreBoard extends Subject {
    constructor(DOMElement){
        super();
        this.score = 10;
        this.element = DOMElement;
        this.btnInc = this.element.querySelector('#btnIncrementScore');
        this.divScore = this.element.querySelector('#scoreBoard-score');

        this.btnInc.addEventListener('click', () => {
            this.incrementScore();
            this.broadCastScore();
        })

        this.render();
    }

    incrementScore(){
        this.score++;
        this.render();
        this.broadCastScore();
    }

    decrementScore(){
        this.score--;
        this.render();
        this.broadCastScore();
    }

    broadCastScore(){
        this.notify(this.score);
    }

    render(){
        this.divScore.innerText = this.score;
    }
}

// Instantiate 3 elements that will be observers
const observer1 = new inpObserver(inp1);
const observer2 = new inpObserver(inp2);
const observer3 = new inpObserver(inp3);

// Instantiate GameScore
const scoreBoard = new ScoreBoard(divScoreBoard);
scoreBoard.addObserver(observer1)
scoreBoard.addObserver(observer2)
scoreBoard.addObserver(observer3)