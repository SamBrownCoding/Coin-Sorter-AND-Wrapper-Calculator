let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

/*
//VARIABLE VARIABLE
//*  Define Variables for Coins:
//TODO Create variables to store the number of each type of coin: pennies, nickels, dimes, and quarters.
const pennies = 0.01;
const nickels = 0.05;
const dimes = 0.10;
const quarters = 0.25;

//TOTAL OF COINS
let penniesTotal = 300;
let nickelsTotal = 300;
let dimesTotal = 300;
let quartersTotal = 300;

//ROLLS WRAPPER
let penniesRoll = 0;
let nickelsRoll = 0;
let dimesRoll = 0;
let quartersRoll = 0;




//*  Calculate Total Value of Coins:
//TODO Write code to calculate the total value of each type of coin in dollars.
let totalPenniesValue = pennies * penniesTotal;
let totalNickelsValue = nickels * nickelsTotal;
let totalDimesValue = dimes * dimesTotal;
let totalQuartersValue = quarters * quartersTotal;

//TODO Calculate the combined total value of all coins.
let totalValue = totalPenniesValue + totalNickelsValue + totalDimesValue + totalQuartersValue;
//TEST THE TOTAL
//console.log(`Total of all coins: ${USDollar.format(totalValue)}`);

//*  Sort Coins into Wrappers:
//TODO Use the standard capacity for each type of coin wrapper:
//? Pennies: 50 coins per wrapper
let pWrapper = 50;
//? Nickels: 40 coins per wrapper
let nWrapper = 40;
//? Dimes: 50 coins per wrapper
let dWrapper = 50;
//? Quarters: 40 coins per wrapper
let qWrapper = 40;

//TODO Calculate the number of wrappers needed for each type of coin.
let penWrap = Math.floor(penniesTotal / pWrapper);
let nickWrap = Math.floor(nickelsTotal / nWrapper);
let dimWrap = Math.floor(dimesTotal / dWrapper);
let quartWrapper = Math.floor(quartersTotal / qWrapper);


//TODO Calculate the remaining coins that do not fill a wrapper completely.
let penniesLeft = penniesTotal % pWrapper;
let nickelsLeft = nickelsTotal % nWrapper;
let dimesLeft = dimesTotal % dWrapper;
let quartersLeft = quartersTotal % qWrapper;


//* Output Results:
//TODO Use console.log to display the number of wrappers needed for each type of coin.
console.log(`Wrapper needed for pennies: ${penWrap}`);
console.log(`Total of Pennies: ${USDollar.format(totalPenniesValue)}`);

console.log(`Wrapper needed for Nickels: ${nickWrap}`);
console.log(`Total of Nickels: ${USDollar.format(totalNickelsValue)}`);

console.log(`Wrapper needed for Dimes: ${dimWrap}`);
console.log(`Total of Dimes: ${USDollar.format(totalDimesValue)}`);

console.log(`Wrapper needed for Quarters: ${quartWrapper}`);
console.log(`Total of Quarters: ${USDollar.format(totalQuartersValue)}`);


//TODO Use console.log to display the total amount in dollars.
console.log(`Total of all coins: ${USDollar.format(totalValue)}`);
*/


//ARRAY and For LOOPS
/*
const coins = ["pennies", "nickels", "dimes", "quarters"];
const coinValue = [0.01, 0.05, 0.10, 0.25];
const coinTotal = [300, 300, 300, 300];
const coinWrapper = [50, 40, 50, 40];
let totalValue = 0;

for (let i = 0; i < coins.length; i++) {
    totalValue += coinValue[i] * coinTotal[i];

    let needWrapper = Math.floor(coinTotal[i] / coinWrapper[i]);
    let coinLeft = coinTotal[i] % coinWrapper[i];
    let totalCoinValue = coinValue[i] * coinTotal[i];


    console.log(`${coins[i]} wrapper: ${needWrapper}`);
    console.log(`Remaining of ${coins[i]}: ${coinLeft}`);
    console.log(`${coins[i]} value of total: ${USDollar.format(totalCoinValue)}`);

}

console.log(`Total value of Coins: ${USDollar.format(totalValue)}`);
*/


var challengeData = ['dime', 'dime', 'dime', 'penny', 'nickel', 'penny', 'dime', 'quarter', 'dime', 'nickel', 'nickel', 'dime', 'quarter', 'nickel', 'penny', 'dime', 'nickel', 'dime', 'dime', 'dime', 'quarter', 'nickel', 'quarter', 'dime', 'nickel', 'penny', 'dime', 'penny', 'nickel', 'quarter', 'quarter', 'quarter', 'dime', 'nickel', 'dime', 'quarter', 'dime', 'penny', 'penny', 'nickel', 'penny', 'penny', 'dime', 'nickel', 'penny', 'penny', 'quarter', 'quarter', 'nickel', 'nickel', 'penny', 'dime', 'nickel', 'quarter', 'nickel', 'nickel', 'quarter', 'quarter', 'dime', 'nickel', 'penny', 'dime', 'dime', 'nickel', 'penny', 'quarter', 'quarter', 'quarter', 'dime', 'nickel', 'nickel', 'dime', 'quarter', 'quarter', 'nickel', 'penny', 'quarter', 'penny', 'quarter', 'nickel', 'dime', 'quarter', 'dime', 'penny', 'quarter', 'nickel', 'nickel', 'nickel', 'quarter', 'penny', 'nickel', 'nickel', 'dime', 'dime', 'dime', 'quarter', 'quarter', 'quarter', 'penny', 'penny', 'dime', 'dime', 'dime', 'penny', 'quarter', 'nickel', 'quarter', 'quarter', 'penny', 'nickel', 'penny', 'nickel', 'nickel', 'penny', 'quarter', 'nickel', 'dime', 'quarter', 'nickel', 'dime', 'penny', 'nickel', 'nickel', 'penny', 'penny', 'penny', 'dime', 'quarter', 'quarter', 'quarter', 'penny', 'dime', 'nickel', 'dime', 'dime', 'penny', 'quarter', 'penny', 'quarter', 'penny', 'dime', 'dime', 'nickel', 'dime', 'penny', 'penny', 'nickel', 'penny', 'nickel', 'quarter', 'dime', 'dime', 'nickel', 'nickel', 'nickel', 'dime', 'dime', 'dime', 'quarter', 'penny', 'dime', 'nickel', 'quarter', 'nickel', 'penny', 'nickel', 'penny', 'nickel', 'penny', 'nickel', 'nickel', 'penny', 'dime', 'nickel', 'dime', 'dime', 'quarter', 'quarter', 'quarter', 'penny', 'dime', 'penny', 'dime', 'dime', 'penny', 'penny', 'nickel', 'nickel', 'penny', 'quarter', 'nickel', 'quarter', 'dime', 'nickel', 'quarter', 'nickel', 'penny', 'dime', 'quarter', 'nickel', 'penny', 'quarter', 'quarter', 'penny', 'quarter', 'dime', 'penny', 'dime', 'nickel', 'penny', 'dime', 'quarter', 'nickel', 'quarter', 'quarter', 'quarter', 'dime', 'quarter', 'dime', 'quarter', 'nickel', 'penny', 'penny', 'quarter', 'quarter', 'penny', 'dime', 'penny', 'dime', 'penny', 'nickel', 'nickel', 'dime', 'penny', 'quarter', 'penny', 'quarter', 'nickel', 'quarter', 'penny', 'nickel', 'quarter', 'dime', 'quarter', 'dime', 'penny', 'dime', 'dime', 'quarter', 'penny', 'penny', 'nickel', 'nickel', 'quarter', 'nickel', 'quarter', 'dime', 'quarter', 'penny', 'penny', 'penny', 'nickel', 'nickel', 'quarter', 'penny', 'quarter', 'quarter', 'penny', 'nickel', 'dime', 'penny', 'quarter', 'nickel', 'dime', 'penny', 'penny', 'quarter', 'penny', 'penny', 'dime', 'nickel', 'dime', 'penny', 'dime', 'nickel', 'nickel', 'dime', 'dime', 'penny', 'nickel', 'penny', 'dime', 'dime', 'nickel', 'dime', 'dime', 'penny', 'penny', 'dime', 'penny', 'nickel', 'quarter', 'nickel', 'quarter', 'quarter', 'penny', 'nickel', 'penny', 'quarter', 'nickel', 'nickel', 'quarter', 'penny', 'penny', 'nickel', 'nickel', 'penny', 'penny', 'nickel', 'quarter', 'nickel', 'dime', 'nickel', 'nickel', 'penny', 'quarter', 'dime', 'dime', 'nickel', 'dime', 'nickel', 'nickel', 'dime', 'quarter', 'quarter', 'nickel', 'penny', 'dime', 'dime', 'dime', 'dime', 'quarter', 'nickel', 'nickel', 'dime', 'nickel', 'quarter', 'nickel', 'dime', 'quarter', 'nickel', 'dime', 'quarter', 'quarter', 'penny', 'quarter', 'nickel', 'dime', 'quarter', 'penny', 'penny', 'nickel', 'nickel', 'quarter', 'dime', 'penny', 'dime', 'dime', 'quarter', 'dime', 'penny', 'quarter', 'penny', 'penny', 'nickel', 'nickel', 'nickel', 'penny', 'penny', 'quarter', 'penny', 'penny', 'quarter', 'dime', 'quarter', 'nickel', 'quarter', 'nickel', 'penny', 'penny', 'penny', 'dime', 'dime', 'dime', 'dime', 'nickel', 'dime', 'quarter', 'nickel', 'dime', 'nickel', 'dime', 'dime', 'penny', 'dime', 'quarter', 'nickel', 'penny', 'nickel', 'penny', 'penny', 'quarter', 'dime', 'nickel', 'nickel', 'nickel', 'penny', 'nickel', 'dime', 'penny', 'quarter', 'quarter', 'dime', 'quarter', 'penny', 'nickel', 'nickel', 'penny', 'dime', 'dime', 'nickel', 'nickel', 'dime', 'penny', 'nickel', 'penny', 'quarter', 'dime', 'nickel', 'dime', 'penny', 'penny', 'quarter', 'dime', 'quarter', 'penny', 'penny', 'nickel', 'quarter', 'quarter', 'quarter', 'dime', 'penny', 'dime', 'dime', 'dime', 'quarter', 'penny', 'penny', 'dime', 'quarter', 'dime', 'penny', 'quarter', 'dime', 'dime', 'dime']

//? Give me the total amount of each coin;
// ex. dime = 234;
//? Convert the total amount of coins into dollars (USD currency)
// ex. dimeCurrencyTotal = $20.20
//? Total amount Currency all together (PenniesCurrencyTotal + QuartersCurrencyTotal... .etc)

let penny = 0;
let nickel = 0;
let dime = 0;
let quarter = 0;

for (let i = 0; i < challengeData.length; i++) {

    switch (true) {
        case challengeData[i] == "penny":
            penny++;
            break;
        case challengeData[i] == "nickel":
            nickel++;
            break;
        case challengeData[i] == "dime":
            dime++;
            break;
        case challengeData[i] == "quarter":
            quarter++;
            break;
            default: 
            console.log("UnReadable coin!");
            break;
    }

}

console.log(`Penny: ${penny}`);
console.log(`Nickel: ${nickel}`);
console.log(`Dime: ${dime}`);
console.log(`Quarter: ${quarter}`);

let PenniesCurrencyTotal = penny * 0.01;
console.log(`Penny Value Total = ${USDollar.format(PenniesCurrencyTotal)}`);

let NickelsCurrencyTotal = nickel * 0.05;
console.log(`Nickel Value Total = ${USDollar.format(NickelsCurrencyTotal)}`);

let DimesCurrencyTotal = dime * 0.10;
console.log(`Dime Value Total = ${USDollar.format(DimesCurrencyTotal)}`);

let QuartersCurrencyTotal = quarter * 0.25;
console.log(`Quarter Value Total = ${USDollar.format(QuartersCurrencyTotal)}`);

let totalCurrencies = PenniesCurrencyTotal + NickelsCurrencyTotal + DimesCurrencyTotal + QuartersCurrencyTotal;

console.log(`Total Amount of Currency: ${USDollar.format(totalCurrencies)}`);



