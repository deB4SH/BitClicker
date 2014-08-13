/*
 * Basic Game Models
 * copyright by b4sh.de
 */
var bitcount = new function(){
    this.bitamount = 0;
    
    this.getBit = function(){
        return this.bitamount;
    }
    
    this.addBit = function(param){
        this.bitamount = this.bitamount + param;
    }
}

/*
 * Income Models
 */
var hand = new function(){
    this.costs = 100;
    this.generatedIncome = 0.1;
    this.incomemultiplier = 1;
    this.amount = 1;
    
    this.call = 0;
    
    this.getGeneratedIncomeStr = function(){
        return this.generatedIncome * this.incomemultiplier * this.amount;
    }
    
    this.getGeneratedIncome = function(){
        this.call = this.call + 1;
        if(this.call == 10)
            { this.call = 0; return this.generatedIncome * this.incomemultiplier * this.amount; }
        else
            { return 0; }
    }
    
    this.income = function(){
        bitcount.addBit(this.getGeneratedIncome());
    }
    
    this.renderElement = function(){
        
    }
}

var discette = new function(){
    this.costs = 100;
    this.generatedIncome = 5;
    this.incomemultiplier = 1;
    this.amount = 0;
    
    this.getGeneratedIncomeStr = function(){
        return this.generatedIncome * this.incomemultiplier * this.amount;
    }
    
    this.getGeneratedIncome = function(){
        return this.generatedIncome * this.incomemultiplier * this.amount;
    }
    
    this.income = function(){
        bitcount.addBit(this.getGeneratedIncome());
    }
}