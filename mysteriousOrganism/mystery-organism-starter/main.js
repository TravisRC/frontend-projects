//Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

//Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//Generates a new species with a unique dna sequence
const pAequorFactory = (specimenNum, dna) => {
  return {
    //Object properties
    specimenNum: specimenNum,
    dna: dna,
    //A method that changes on random value in the dna array
    //Generates a random number and a random dna base
    //Compares the random dna base with the dna array value at the random number index
    //If they match it generates a new random base. If they don't match the new value is saved to the array
    mutate() {
      const index = Math.floor(Math.random()*15);
      let newBase = returnRandBase();
      while (dna[index] === newBase) {
          newBase = returnRandBase();
      }
      dna[index] = newBase;
      return dna;
    },
    //A method that compares the values of a dna array passed against the object's dna array values and calculates the percent of matching values
    //Then logs a string containing that percentage: `These two species have xx.x% matching DNA pairs`
    compareDNA(possibleMatch) {
      let matchingPair = 0;
      for(let i = 0; i < dna.length; i++){
        if (dna[i] === possibleMatch.dna[i]){
          matchingPair++;
        }
      }
      const percentMatch = (matchingPair / dna.length) * 100;
      console.log(`These two species have ${percentMatch.toFixed(1)}% matching DNA pairs`);
    },
    //Method loops through dna array for each value and incrments for each 'C' or 'G' value in the array 
    //Then calculates percent of these values that make up the array
    //If the percent of values is over 60 it returns a value of true
    willLikelySurvive() {
      let goodGenes = 0;
      for(let i = 0; i < dna.length; i++){
        if (dna[i] === 'C' || dna[i] === 'G'){
          goodGenes++;
        }
      }

      const survivorPercent = ((goodGenes / dna.length) * 100);

      if( survivorPercent >= 60 ) {
        return true;
      } else {
        return false;
      }
    },
    //Method to loop through each array value and push the complementary value into a new array
    complementStrand() {
      const newStrand = [];
      for(let i = 0; i < dna.length; i++) {
        if(dna[i] === 'A') {
          newStrand.push('T');
        }
        if(dna[i] === 'T') {
          newStrand.push('A');
        }
        if(dna[i] === 'C') {
          newStrand.push('G');
        }
        if(dna[i] === 'G') {
          newStrand.push('C');
        }
      };
      return newStrand;
    }
  }
};

//Function to populate an array with species objects that meet the survivability condition
const speciesPop = (num) => {
  //Create array for species that will survive
  const menagerie = [];
  let i = 0;
  //Create a test species
  while (menagerie.length < num) {
    const speciesTest = pAequorFactory(i, mockUpStrand());
    //Test if it will survive and save to an array
    if(speciesTest.willLikelySurvive()){
      menagerie.push(speciesTest);
    }
    i++;
  }
  //Return array of species
  return menagerie;
};

//Function that compares how much an array of different specimens match each other
const findMatch = (speciesCol) => {
  for(let i = 0; i < speciesCol.length; i++){
    for(let j = i + 1; j < speciesCol.length; j++){
      console.log(`Species ${speciesCol[i].specimenNum} and species ${speciesCol[j].specimenNum}:`)
      speciesCol[i].compareDNA(speciesCol[j]);
    }; 
  };
};












