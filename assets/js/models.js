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
    this.generatedIncome = 1;
    this.incomemultiplier = 1;
    this.amount = 1;
    
    this.getGeneratedIncome = function(){
        return this.generatedIncome * this.incomemultiplier * this.amount;
    }
    
    this.income = function(){
        bitcount.addBit(this.getGeneratedIncome());
    }
}

var discette = new function(){
    this.costs = 100;
    this.generatedIncome = 5;
    this.incomemultiplier = 1;
    this.amount = 0;
    
    this.getGeneratedIncome = function(){
        return this.generatedIncome * this.incomemultiplier * this.amount;
    }
    
    this.income = function(){
        bitcount.addBit(this.getGeneratedIncome());
    }
}