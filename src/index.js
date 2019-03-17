// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
     //validation
    if (currency <= 0) {
        return {}
    } else if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }

    let options ={
        "H":50,
        "Q":25,
        "D":10,
        "N":5,
        "P":1
    };

    let result={};

    Object.keys(options).forEach(coint=>{
        if (Math.trunc(currency/options[coint])> 0 ){
           result[coint]= Math.trunc(currency/options[coint]);
            currency = currency - result[coint]*options[coint]
        }
    });

    return result
    // Return an object containing the minimum number of coins needed to make change
};
