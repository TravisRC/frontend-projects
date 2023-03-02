// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];



// Add your functions below:


const validateCred = cardNum => {
//Store number in new array
  const validateNum = cardNum.map(el => el);
  //console.log(validateNum);
//Pull check value from end of array 
  const checkDigit = validateNum.pop();
  //console.log(validateNum);
  //console.log(checkDigit);
  //console.log(cardNum);
  //console.log(mystery1);
  let sumLuhn = 0;
//Loop over array to run Luhn algorithim of doubling every other number starting with the left most number  
  for(let i = validateNum.length - 1; i >= 0; i--) {
//If else statement to separate every other digit for doubling
    if( i === validateNum.length - 1 || (validateNum.length - 1 - i)%2 === 0  ){
      let doubleNum = validateNum[i] * 2;
      //If else statement to check if the double is a two digit number and if it is to then reduce to a single digit number by subtracting nine
      if( doubleNum > 9) {
        sumLuhn = sumLuhn + (doubleNum - 9);
      } else {
        sumLuhn = sumLuhn + (validateNum[i] * 2)
      }
      //console.log(sumLuhn);
    } else {
      sumLuhn = sumLuhn + validateNum[i]
      //console.log(sumLuhn);
    }
  }
  //console.log (sumLuhn + checkDigit);

  if( (sumLuhn + checkDigit) % 10 === 0 ){
    return true;
  } else {
    return false;
  }
};

//console.log(validateCred(valid1));

const findInvalidCards = deck => {
  //console.log(deck.forEach(validateCred));
  const reviewedDeck = deck.filter(arr => !validateCred(arr));
  return reviewedDeck;
}

console.log(findInvalidCards(batch));

const idInvalidCardCompanies = jokers => {
  const company = []
    if( jokers.find((joker) => joker[0] === 3) ) {
      company.push('Amex')
    }
    if( jokers.find((joker) => joker[0] === 4) ) {
      company.push('Visa')
    }
    if( jokers.find((joker) => joker[0] === 5) ) {
      company.push('Mastercard')
    }
    if( jokers.find((joker) => joker[0] === 6) ) {
      company.push('Discover')
    }
    else {
      console.log('Company not found')
    }
      console.log(company);
};
  
console.log(idInvalidCardCompanies(findInvalidCards(batch)));  

/* If you’d like to challenge yourself further, you could consider the following:

Use different credit card numbers from a credit card number generator and validator site and test if your functions work for all types of credit cards.
To make it easier to test credit card numbers, create a function that accepts a string and converts it into an array of numbers like the initially provided arrays. (Check the hint for a helpful function)
Create a function that will convert invalid numbers into valid numbers. */