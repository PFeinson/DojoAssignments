var numCoins = 10;
slots(100, 150);


function slots(numCoins, target) {
  if (typeof target === "undefined") {
    target = 0;
  }
  
  var lottoWin = Math.floor(Math.random()*(100));
  
  do {
    
    do {
        var userEntry = Math.floor(Math.random()*(100));
        
        if (userEntry === lottoWin) {
            numCoins += lottoWin;
            console.log("You won! the prize of", lottoWin, "You now have", numCoins);
        }
        else {
          --numCoins;
        }
        
    } while (userEntry !== lottoWin && numCoins > 0);
    
    lottoWin = Math.floor(Math.random()*100);
    
  } while (numCoins < target && numCoins > 0);

}