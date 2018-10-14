const extractOddNumbers = function(numbers){
  let oddnumbers=[];
  for(let number of numbers){
    if(isOdd(number)){
      oddnumbers.push(number);
    }
  }
  return oddnumbers;
}

const extractEvenNumbers = function(numbers){
  let evenNumbers=[];
  for(let number of numbers){
    if(isEven(number)){
      evenNumbers.push(number);
    }
  }
  return evenNumbers;
}

const sumOfNumbers=function(numbers){
  let totalSum = 0
  for(let number of numbers){
    totalSum = totalSum + number;
  }
  return totalSum;
}

const isEven = function(number){
  return (number%2==0);
} 

const isOdd=function(number){
  return (number%2==1);
}

const reverseArray = function(numbers){
  let reversedNumbers=[];
  for(let index=numbers.length-1;index>=0;index--){
    reversedNumbers.push(numbers[index]);
  }
  return reversedNumbers;
}

const extractAlternateElements = function(numbers){
  let alternateElements = [];
  for(let index=1;index<numbers.length;index+=2){
    alternateElements.push(numbers[index]);
  }
  return alternateElements;
}

const fibonacciSeries= function(limit){
  let firstNumber = 0;
  let secondNumber = 1;
  let fibonacciSeries = [];
  while(fibonacciSeries.length<limit){
    fibonacciSeries.push(firstNumber);
    let copyVariable = secondNumber;
    secondNumber += firstNumber;
    firstNumber = secondNumber;
  }
  return fibonacciSeries;
}

const fiboReverse=function(limit){
  return reverseArray(fibonacciSeries(limit));
}

const greatestNumber = function(numbers){
  let greatestNumber=0;
  for(let number of numbers){
    if(number > greatestNumber){
      greatestNumber = number;
    }
  }
  return greatestNumber;
}

const lowestNumber = function(numbers){
  let lowestNumber=numbers[0];
  for(let number of numbers){
    if(number < lowestNumber){
      lowestNumber = number;
    }
  }
  return lowestNumber;
}

const averageOfNumbers = function(numbers){
  return sumOfNumbers(numbers)/numbers.length; 
}

const mapLengthOfElements = function(names){
  lengthOfNames=[];
  for(let name of names){
    lengthOfNames.push(name.length);
  }
  return lengthOfNames;
}

const countOfOddNumber = function(numbers){
  let countOfOddNums = 0;
  for(let number of numbers){
    if(isOdd(number)){
      countOfOddNums++;
    }
  }
  return countOfOddNums;
}

const countOfEvenNumber = function(numbers){
  let countOfEvenNums = 0;
  for(let number of numbers){
    if(isEven(number)){
      countOfEvenNums++;
    }
  }
  return countOfEvenNums;
}

const frequencyAboveThreshold = function(numbers,threshold){
  let numberCount = 0;
  for(let number of numbers){
    if(number > threshold){
      numberCount++;
    }
  }
  return numberCount;
}

const frequencyBelowThreshold = function(numbers,threshold){
  let numberCount = 0;
  for(let number of numbers){
    if(number < threshold){
      numberCount++;
    }
  }
  return numberCount;
}

exports.frequencyBelowThreshold=frequencyBelowThreshold;
exports.frequencyAboveThreshold =frequencyAboveThreshold;
exports.countOfEvenNumber=countOfEvenNumber;
exports.countOfOddNumber=countOfOddNumber;
exports.mapLengthOfElements=mapLengthOfElements;
exports.extractEvenNumbers=extractEvenNumbers;
exports.extractOddNumbers=extractOddNumbers;
exports.sumOfNumbers = sumOfNumbers;
exports.reverseArray = reverseArray;
exports.fiboReverse = fiboReverse;
exports.extractAlternateElements =extractAlternateElements;
exports.greatestNumber=greatestNumber;
exports.lowestNumber=lowestNumber;
exports.averageOfNumbers = averageOfNumbers;
