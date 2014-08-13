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

setInterval(gameLoop,1);
function gameLoop(){
    
    var bitcountps = 0 + 0;
    for(var i=0; i < incomeObjects.length; i++){
        //console.log("moew");
        this.bitcountps = this.bitcountps + incomeObjects[i].getGeneratedIncome();
        //console.log(incomeObjects[i].getGeneratedIncome());
    }
    
    //console.log(this.bitcountps);
    $('bitcountps').text(this.bitcountps + " Bits per secound");
    $('#bitcount').text(bitcount.getBit() + " Bits");
}
