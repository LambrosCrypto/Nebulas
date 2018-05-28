// RANDOM NUMBER GENERATOR
// The blockchain selets a random number between 0 and a maximum the user selects.

var HoroscopeContract = function() {
  LocalContractStorage.defineMapProperty(this, "hash_to_hor") // Day, Month, Horoscope, Date
}

HoroscopeContract.prototype = {
  init: function() { },

requestHoroscope: function(day, month) {

  if(Blockchain.transaction.value != 0){
    throw new Error("I don't want your money.");
  }
  if(day<1 || day>31){
    throw new Error("Day is out of range (1-31)");
  }
  if(month<1 || month>12){
    throw new Error("Month is out of range (1-31)");
  }

  var horoscope;

  if((month == 1 && day <= 20) || (month == 12 && day >=22)) {
    horoscope = "capricorn";
  } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
    horoscope = "aquarius";
  } else if((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    horoscope = "pisces";
  } else if((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
    horoscope = "aries";
  } else if((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
    horoscope = "taurus";
  } else if((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
    horoscope = "gemini";
  } else if((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
    horoscope = "cancer";
  } else if((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
    horoscope = "leo";
  } else if((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
    horoscope = "virgo";
  } else if((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
    horoscope = "libra";
  } else if((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
    horoscope = "scorpio";
  } else if((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
    horoscope = "sagittarius";
  }
  this.hash_to_hor.put(Blockchain.transaction.hash, {horoscope, day, month, date: Date.now()});

},

  getHoroscope: function (hash) {
    return this.hash_to_hor.get(hash);
  },
}

module.exports = HoroscopeContract
