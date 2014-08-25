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
                            new incomeEntity(), //0
                            new incomeEntity(), //1
                            new incomeEntity(), //2
                            new incomeEntity(), //3
                            new incomeEntity(), //4
                            new incomeEntity(), //5
                            new incomeEntity(), //6
                            new incomeEntity() //7
                         );

incomeObjects[0].construct("User",1,0.1,1,1);
incomeObjects[1].construct("Webserver",1,0.1,1,1);
incomeObjects[2].construct("Mailserver",1,0.1,1,1);
incomeObjects[3].construct("VPN Socket",1,0.1,1,1);
incomeObjects[4].construct("Myhnecraft Server",1,0.1,1,1);
incomeObjects[5].construct("Versus-Strike 1.6",1,0.1,1,1);
incomeObjects[6].construct("Fume-Content Server",1,0.1,1,1);
incomeObjects[7].construct("Social Network",1,0.1,1,1);

/*
 * Bootstrap GUI Features
 */

saveTooltipOptions = new Array();
saveTooltipOptions['placement'] = "bottom";
saveTooltipOptions['delay'] = { show:100, hide: 500};



console.log(incomeObjects);
console.log("init done");