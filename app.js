let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});


//*  Define Variables for Coins:
//TODO Create variables to store the number of each type of coin: pennies, nickels, dimes, and quarters.
const pennies     = 0.01;
const nickels     = 0.05;
const dimes       = 0.10;
const quarters    = 0.25;

//TOTAL OF COINS
let penniesTotal = 300;
let nickelsTotal = 300;
let dimesTotal = 300;
let quartersTotal = 300;

//ROLLS WRAPPER
let penniesRoll     = 0;
let nickelsRoll     = 0;
let dimesRoll       = 0;
let quartersRoll    = 0;




//*  Calculate Total Value of Coins:
//TODO Write code to calculate the total value of each type of coin in dollars.
let totalPenniesValue    = pennies * penniesTotal;
let totalNickelsValue    = nickels * nickelsTotal;
let totalDimesValue      = dimes * dimesTotal;
let totalQuartersValue   = quarters * quartersTotal;

//TODO Calculate the combined total value of all coins.
let totalValue      = totalPenniesValue + totalNickelsValue + totalDimesValue + totalQuartersValue;
//TEST THE TOTAL
//console.log(`Total of all coins: ${USDollar.format(totalValue)}`);

//*  Sort Coins into Wrappers:
//TODO Use the standard capacity for each type of coin wrapper:
//? Pennies: 50 coins per wrapper
let pWrapper    = 50;
//? Nickels: 40 coins per wrapper
let nWrapper    = 40;
//? Dimes: 50 coins per wrapper
let dWrapper    = 50;
//? Quarters: 40 coins per wrapper
let qWrapper    = 40;

//TODO Calculate the number of wrappers needed for each type of coin.
let penWrap         = Math.floor(penniesTotal / pWrapper);
let nickWrap        = Math.floor(nickelsTotal / nWrapper);
let dimWrap         = Math.floor(dimesTotal / dWrapper);
let quartWrapper    = Math.floor(quartersTotal / qWrapper);


//TODO Calculate the remaining coins that do not fill a wrapper completely.
let penniesLeft     = penniesTotal % pWrapper;
let nickelsLeft     = nickelsTotal % nWrapper;
let dimesLeft       = dimesTotal % dWrapper;
let quartersLeft    = quartersTotal % qWrapper;


//* Output Results:
//TODO Use console.log to display the number of wrappers needed for each type of coin.
console.log(`Wrapper needed for pennies: ${penniesLeft}`);
console.log(`Wrapper needed for Nickels: ${nickelsLeft}`);
console.log(`Wrapper needed for Dimes: ${dimesLeft}`);
console.log(`Wrapper needed for Quarters: ${quartersLeft}`);

//TODO Use console.log to display the total amount in dollars.
console.log(`Total of all coins: ${USDollar.format(totalValue)}`);
