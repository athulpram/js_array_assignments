const { indexOfNumber,
  findUniqueElements,
  joinArrays,
  differenceOf,
  unionOf,
  intersectionOf,
  isSubset} = require('./setFunctionLibrary.js');
const extractOddNumbers = function(numbers){
  return numbers.filter(isOdd);
}

const extractEvenNumbers = function(numbers){
  return numbers.filter(isEven);
}
const sum = function(num1,num2){
  return num1+num2;
}
const sumOfNumbers=function(numbers){
  let totalSum = 0
  totalSum=numbers.reduce(sum);
   return totalSum;
}

const isEven = function(number){
  return (number%2==0);
} 

const isOdd=function(number){
  return (number%2==1);
}

const insertAtBegin = function(storeArray,element){
  storeArray.unshift(element);
  return storeArray;
}

const reverseElements = function(numbers){
  let reversedNumbers=[];  
  reversedNumbers = numbers.reduce(insertAtBegin,[]);
  return reversedNumbers;
}

const extractAlternateElements = function(numbers){
  let alternateElements = [];
  for(let index=1;index<numbers.length;index+=2){
    alternateElements.push(numbers[index]);
  }
  return alternateElements;
}

const generateFibonacciSeries= function(limit){
  let firstNumber = 0;
  let secondNumber = 1;
  let generateFibonacciSeries = [0];
  while(generateFibonacciSeries.length<limit){
    let swapVariable = secondNumber;
    secondNumber += firstNumber;
    firstNumber = swapVariable;
    generateFibonacciSeries.push(firstNumber);
  }
  return generateFibonacciSeries;
}

const reverseFibonacci=function(limit){
  return reverseElements(generateFibonacciSeries(limit));
}

const findGreater = function(num1,num2){
  return (num1>num2)?num1:num2;
}

const findSmaller = function(num1,num2){
  return (num1<num2)?num1:num2;
}

const findGreatestNumber = function(numbers){
  return numbers.reduce(findGreater);
}

const findLowestNumber = function(numbers){
  return numbers.reduce(findSmaller);
}

const findAverage = function(numbers){
  return sumOfNumbers(numbers)/numbers.length; 
}

const findLength = function(name){
  return name.length;
}

const mapElements = function(names){
  return names.map(findLength);
}

const countOfOddNumber = function(numbers){
  return numbers.filter(isOdd).length;
}

const countOfEvenNumber = function(numbers){
  return numbers.filter(isEven).length;
}

const countNumbersAboveValue = function(numbers,threshold){
  let numberCount = 0;
  for(let number of numbers){
    if(number > threshold){
      numberCount++;
    }
  }
  return numberCount;
}

const countNumbersBelowValue = function(numbers,threshold){
  let numberCount = 0;
  for(let number of numbers){
    if(number < threshold){
      numberCount++;
    }
  }
  return numberCount;
}

const isAscending = function(numbers){
  for(index=1;index<numbers.length;index++){
    if(numbers[index-1]>numbers[index]){
      return false;
    }
  }
  return true;
}

const isDescending = function(numbers){
  for(index=1;index<numbers.length;index++){
    if(numbers[index-1]>numbers[index]){
      return false;
    }
  }
  return true;
}

const extractDigits=function(number){
  digitsOfNumber = [];
  while(number!=0){
    digitsOfNumber.push(number%10);
    number = Math.floor(Math.abs(number/10));
  }
  return reverseElements(digitsOfNumber);
}

const zip = function(firstSet,secondSet){
  let zippedArray = [];
  for(index=0;index<firstSet.length;index++){
    zippedArray[index] = [firstSet[index],secondSet[index]]; 
  }
  return zippedArray;
}

const rotate = function(numbers,strtingIndex){
  let rotatedElements = [];
  let revNumbers = reverseElements(numbers);
  for(index=0;index<strtingIndex;index++){
    rotatedElements.push(revNumbers.pop());
  }
  return joinArrays(reverseElements(revNumbers),rotatedElements);
}

const partitionOf=function(numbers,threshold){
  let partitionedArray=[[],[]];
  for(number of numbers){
    partitionedArray[0].push(number);
    if(number>threshold){
      partitionedArray[1].push(number);
      partitionedArray[0].pop();
    }
  }
  return partitionedArray;
}

exports.partitionOf = partitionOf;
exports.rotate=rotate;
exports.zip = zip;
exports.isSubset=isSubset;
exports.differenceOf=differenceOf;
exports.intersectionOf=intersectionOf;
exports.unionOf=unionOf;
exports.findUniqueElements=findUniqueElements;
exports.extractDigits=extractDigits;
exports.isDescending=isDescending;
exports.isAscending=isAscending;
exports.indexOfNumber = indexOfNumber;
exports.countNumbersBelowValue=countNumbersBelowValue;
exports.countNumbersAboveValue =countNumbersAboveValue;
exports.countOfEvenNumber=countOfEvenNumber;
exports.countOfOddNumber=countOfOddNumber;
exports.mapElements=mapElements;
exports.extractEvenNumbers=extractEvenNumbers;
exports.extractOddNumbers=extractOddNumbers;
exports.sumOfNumbers = sumOfNumbers;
exports.reverseElements = reverseElements;
exports.reverseFibonacci = reverseFibonacci;
exports.extractAlternateElements =extractAlternateElements;
exports.findGreatestNumber=findGreatestNumber;
exports.findLowestNumber=findLowestNumber;
exports.findAverage = findAverage;
