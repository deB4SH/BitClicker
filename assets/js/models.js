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
 * - follows singleton pattern :)
 */

function incomeEntity(){
    
    this.name = "";
    
    this.costs = parseInt(0);
    this.generatedIncome = parseFloat(0.0);
    this.generatedIncomeMultiplier = parseFloat(0.0);
    this.amount = parseInt(0);
    
    this.construct = function(name,costs,income,incomemultiplier,amount){
        this.name = name;
        this.costs = costs;
        this.generateIncome = income;
        this.generatedIncomeMultiplier = incomemultiplier;
        this.amount = amount;
    }
    
    this.getIncomeString = function(){
        return this.generatedIncome * this.generatedIncomeMultiplier * this.amount;
    }
    
    this.getIncome = function(){
        return parseFloat(this.generatedIncome * this.generatedIncomeMultiplier * this.amount);
    }
    
    this.generateIncome = function(){
        bitcount.addBit(this.getIncome());
    }
    
    //GUI
    this.renderElement = function(){
                
        htmlTempalte =  '<div class="panel panel-success">'+
                        '<div class="panel-heading col-md-3-box-heading">' + 
                        '<h3 class="panel-title">' +
                        this.name + 
                        '</h3>'+
                        '<div class="panel-title-button">' + 
                        '<button type="button" class="btn btn-xs btn-info">'+
                        'Upgrade' + 
                        '</button>' +
                        '</div>' +
                        '</div>' +
                        '<div class="panel-body">' +
                        'Per Secound:' + this.getIncome()+ ' Bits <br/>' +
                        '</div>' +
                        '</div>';
        
        return htmlTempalte;
        
    }
}