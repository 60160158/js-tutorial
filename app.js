class pond{
    constructor(money){
        this.money = money
    }
    getVax(){
        return this.money*(this.money/100*5)
    }
    static whoami(){
        console.log("pond")
    }
}

let minipond= new pond(5)
console.log(minipond.getVax())

pond.whoami()