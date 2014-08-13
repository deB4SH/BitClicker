/*
 * Initialising the game from localStorage
 */

if(localStorage['bitcount'] != "NaN"){
    incomeObjects = localStorage['incomeObjects'];
    bitcount.addBit(parseFloat(localStorage['bitcount']));
}
else{
    console.log(localStorage['bitcount']);
}