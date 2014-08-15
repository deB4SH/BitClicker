/*
 * Initialising the game from localStorage
 */

var Game = { } ; 
Game.fps = 30;

Game.bitcountps = parseFloat(0);
Game.bitcount = 0; 

//Load Values from LocalStorage
if(localStorage['bitcount'] > 0){
    Game.bitcount.addBit(parseFloat(localStorage['bitcount']));
}

//Create IncomeObjects
incomeObjects = new Array(
                            new incomeEntity(),
                            new incomeEntity()
                         );

incomeObjects[0].construct("Hand",1,0.1,1,1);
incomeObjects[1].construct("Derp",1,0.1,1,1);


/*
 * Bootstrap GUI Features
 */

saveTooltipOptions = new Array();
saveTooltipOptions['placement'] = "bottom";
saveTooltipOptions['delay'] = { show:100, hide: 500};



console.log(incomeObjects);
console.log("init done");