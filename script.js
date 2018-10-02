function barvičky(){
  $("#čára").css("background", barva);
}

function barva(){
    var r = Math.round, rr = Math.random, x = 255;
    return 'rgba(' + r(rr()*x) + ',' + r(rr()*x) + ',' + r(rr()*x) + ',' + rr().toFixed(1) + ')';
}

setInterval(barvičky, 5)