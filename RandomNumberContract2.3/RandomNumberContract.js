// RandomNumber leverages the blockchain to select a random number.
// When you request a number, you can post any data with the request.
// This way what you are selecting is verifiable as well.
// e.g. If I'm doing a giveaway, post a numbered list with the request so that the list can't be modified after a number was selected.

// Built for Nebulas by HardlyDifficult.  youtube.com/HardlyDifficult
// License: https://github.com/lambroscrypto/Nebulas/RandomNumberContract/master/LICENSE
//
// See also https://github.com/lambroscrypto/Nebulas/RandomNumberContract

var RandonmNumberContract = function() {
  // Data stored by the smart contract
  LocalContractStorage.defineMapProperty(this, "hash_to_rnc") // 0, Max
}

RandonNumberContract.prototype = {
  // init is called once, when the contract is deployed.
  init: function() { },

  requestNumber: function (0, max) {
    if(Blockchain.transaction.value != 0) // Users only pay the gas fee.
        throw new Error("I don't want your money.");

    if(isNaN(max) || max < 1) //Proving max is a number.
      throw new Error("max is not a number.");

    var number = Math.floor(Math.random() * max; //Random number 0 -> max both included.
    this.hash_to_rnc.put(Blockchain.transaction.hash, {max, 0, number, date: Date.now()});
  },

  getNumber: function (hash) {
    return this.hash_to_rnc.get(hash);
  },
}

module.exports = RandonmNumberContract
