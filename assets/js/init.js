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
                            new incomeEntity(),
                            new incomeEntity()
                         );

incomeObjects[0].construct("Hand",1,0.1,1,1);
incomeObjects[1].construct("Derp",1,0.1,1,1);

console.log(incomeObjects);
console.log("init done");