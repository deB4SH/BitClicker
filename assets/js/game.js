//Values
var bitcount = 0;

$('.bitbutton').click(function(){
   bitcount = bitcount + 1;
});

//GameLoop
setInterval(gameLoop,1);
function gameLoop(){
    $('#bitcount').text(bitcount + " Bits");
}
