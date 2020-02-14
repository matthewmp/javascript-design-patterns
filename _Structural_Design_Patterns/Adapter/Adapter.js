import '../structural.css';

// Spedometer that exelerates and shows speed in MPH
export class MPH_Spedometer{
    constructor(){
        this.speed = 0;
        // store interval # for setinterval
        this.interval = 0;
        this.accelerating = false;
    }

    accelerate(){
        // Flag Object that the gas is being pressed to accelerate
        this.accelerating = true;
        // Clear any intervals that may already been set
        clearInterval(this.interval);
        // While holding down the accelerator
        this.interval = setInterval(() => {
            this.incrementSpeed();
        },200);
    }

    incrementSpeed(){
        if(this.speed < 89){
            this.speed++;
            let currentSpeed = this.speed;
        }
    }

    decrementSpeed(){
        if(this.speed > 0){
            this.speed--;
            let currentSpeed = this.speed;
        }
    }

    releaseGas(){
        // Flag Object that the gas has been released
        this.accelerating = false;
        // Clear any intervals that may already been set
        clearInterval(this.interval);
        // While releasing the gas
        if(this.accelerating === false && this.speed > 0){
            setTimeout(() => {
                if(this.accelerating === false && this.speed > 0){
                    this.decrementSpeed();
                    this.releaseGas();
                }
            },300);
        }
    }

    get currentSpeed(){
        return this.speed;
    }
}

// Adapter for MPH_Spedometer

export class KPH_Adapter {
    constructor(){
        this.vehicle = new MPH_Spedometer();
        this.mph = document.getElementById('mph');
        this.kph = document.getElementById('kph');
        this.inerval = null;
    }

    accelerate(){
        this.vehicle.accelerate();
        this.inerval = setInterval(()=> {
            this.showSpeeds();
        },200);
    }

    incrementSpeed(){
        this.vehicle.incrementSpeed();   
    }

    decrementSpeed(){
        this.vehicle.decrementSpeed();
        
    }

    releaseGas(){
        clearInterval(this.inerval);
        this.vehicle.releaseGas();
        this.inerval = setInterval(() => {
            this.showSpeeds();
            if(this.vehicle.currentSpeed <= 0){
                clearInterval(this.inerval);
            }
        })
    }

    getMPH(){
        return this.vehicle.currentSpeed;
    }

    getKPH(){
        return parseInt(this.vehicle.currentSpeed * 1.609);
    }

    showSpeeds(){
        this.mph.innerText = this.getMPH();
        this.kph.innerText = this.getKPH();
    }
}

const btnAccelerate = document.getElementById('btnAccelerate');

const kphAdapter = new KPH_Adapter();
btnAccelerate.addEventListener('mousedown', () => {
    kphAdapter.accelerate();    
})

btnAccelerate.addEventListener('mouseup', () => {
    kphAdapter.releaseGas();
})