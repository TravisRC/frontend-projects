/*If you want to challenge yourself:

-Define a callback function before you use it in a iterator.
-Chain two iteration methods on the same array.
-Use the optional arguments in an iterator to include the index or the entire array. (Check out MDN’s Array iteration methods page for more information)
-Use .reduce() to take a multi-layered array and return a single layer array from scratch.*/

const addSixtyNine = num => {
    return num + 69;
  }
  
  const numArray = [ 1, 2, 3, 4, 5, 6, 7];
  
  const sexAddition = numArray.map(addSixtyNine);
  
  console.log(sexAddition);
  
  const wholeLotta = sexAddition.reduce(( accu, cuma) => {
    return accu + cuma;
  });
  
  console.log(wholeLotta);
  
  const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
  
  // Create the secretMessage array below
  const secretMessage = animals.map(codeLetter => {
    return codeLetter[0];
  });
  
  console.log(secretMessage.join(''));
  
  const bigNumbers = [100, 200, 300, 400, 500];
  
  // Create the smallNumbers array below
  
  const smallNumbers = bigNumbers.map( dividend => {
    return dividend / 100;
  })
  
  console.log(smallNumbers);
  
  const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];
  
  const nums = [1, 50, 75, 200, 350, 525, 1000];
  
  //  Choose a method that will return undefined
  cities.forEach(city => console.log('Have you visited ' + city + '?'));
  
  // Choose a method that will return a new array
  const longCities = cities.filter(city => city.length > 7);
  
  // Choose a method that will return a single value
  const word = cities.reduce((acc, currVal) => {
    return acc + currVal[0]
  }, "C");
  
  console.log(word)
  
  // Choose a method that will return a new array
  const smallerNums = nums.map(num => num - 5);
  
  // Choose a method that will return a boolean value
  nums.some(num => num < 0);