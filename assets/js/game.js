/*
 * JQuery Links
 */
$('.bitbutton').click(function(){
   bitcount.addBit(1);
});


Game.render = function(){
    $('#bitcountps').text(roundNumber(Game.bitcountps,2) + " Bits per secound");
    $('#bitcount').text(roundNumber(Game.bitcount,2) + " Bits");
    window.document.title = "[" + roundNumber(Game.bitcount,2) + "]-[Bit] BitClicker";
    
    renderIncomeElements = "";
    for(var i=0; i < incomeObjects.length; i++){
        renderIncomeElements = renderIncomeElements + incomeObjects[i].renderElement();
    }
    $('#incomemodels').replaceWith(renderIncomeElements);
}

Game.update = function() {
    
//    //generate income
//    for(var i=0; i < incomeObjects.length; i++){
//        this.bitcountps = parseFloat(this.bitcountps + incomeObjects[i].getGeneratedIncome());
//        this.bitcountpsStr = parseFloat(this.bitcountpsStr + incomeObjects[i].getGeneratedIncomeStr());
//        
//    }
   // Game.bitcount.addBit(roundNumber(Game.bitcountps,2));
    
}

Game.run = function(){
    Game.update();
    Game.render();
}

Game.saveLoop = function(){
    localStorage['bitcount'] = roundNumber(bitcount.getBit(),2);
    $('.hovermarker').tooltip(saveTooltipOptions).tooltip("toggle");
    sleep(2000,hideSaveTooltip);
}

Game._intervalId = setInterval(Game.run, 1000 / Game.fps);
Game._saveIntervalID = setInterval(Game.saveLoop, 5000000 / Game.fps);

function sleep(millis, callback){
    setTimeout(function(){
        callback();
    }, millis);
}

function hideSaveTooltip(){
    $('.hovermarker').tooltip(saveTooltipOptions).tooltip("toggle");
}