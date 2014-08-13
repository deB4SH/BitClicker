/*
 * Basic JQuery Calls
 */
$('.bitbutton').click(function(){
   bitcount.addBit(1);
});

/*
 * GameLoop Related
 */
incomeObjects = new Array(hand,discette);

setInterval(gameLoop,100);
function gameLoop(){
    
    //Income
    bitcountps = parseFloat(0);
    bitcountpsStr = parseFloat(0);
    for(var i=0; i < incomeObjects.length; i++){
        this.bitcountps = parseFloat(this.bitcountps + incomeObjects[i].getGeneratedIncome());
        this.bitcountpsStr = parseFloat(this.bitcountpsStr + incomeObjects[i].getGeneratedIncomeStr());
        
    }
    bitcount.addBit(roundNumber(bitcountps,2));
    
    $('#bitcountps').text(roundNumber(this.bitcountpsStr,2) + " Bits per secound");
    $('#bitcount').text(roundNumber(bitcount.getBit(),2) + " Bits");
}

setInterval(saveLoop, 1000)
function saveLoop(){
    localStorage['bitcount'] = roundNumber(bitcount.getBit(),2);
    localStorage['incomeObjects'] = incomeObjects;
}
