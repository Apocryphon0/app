function barvičky(){
  $("#čára").css("background", barva);
}

function barva(){
    var o = Math.round, r = Math.random, x = 255;
    return 'rgba(' + o(r()*x) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

setInterval(barvičky, 5)