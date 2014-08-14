/*
 * Initialising the game from localStorage
 */

if(localStorage['bitcount'] != "NaN"){
    bitcount.addBit(parseFloat(localStorage['bitcount']));
}
else{
    localStorage['bitcount'] = 0;
    bitcount.addBit(parseFloat(localStorage['bitcount']));
}

//create income-modules
incomeObjects = new Array(
                            incomeEntity.construct("Hand",1,0.1,1,1),
                            incomeEntity.construct("Discette",5,1,5,1)
                         );