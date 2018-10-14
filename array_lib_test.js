const arrayLib= require("./arrayLib");
const assert = require("assert");
const extractOddNumbers = arrayLib.extractOddNumbers;
const extractEvenNumbers = arrayLib.extractEvenNumbers;
const sumOfNumbers = arrayLib.sumOfNumbers;
const reverseArray = arrayLib.reverseArray;
const extractAlternateElements = arrayLib.extractAlternateElements;
const fiboReverse = arrayLib.fiboReverse;
const greatestNumber=arrayLib.greatestNumber;
const lowestNumber=arrayLib.lowestNumber;
const averageOfNumbers =arrayLib.averageOfNumbers;
const mapLengthOfElements = arrayLib.mapLengthOfElements;
const countOfOddNumber = arrayLib.countOfOddNumber;
const countOfEvenNumber = arrayLib.countOfEvenNumber;
const frequencyAboveThreshold = arrayLib.frequencyAboveThreshold;
const frequencyBelowThreshold = arrayLib.frequencyBelowThreshold;
const indexOfNumber = arrayLib.indexOfNumber;
const isAscending = arrayLib.isAscending;
const isDescending = arrayLib.isDescending;
//EXTRACTING ODD NUMBERS
//testing with one even number 
let numbersArray=[4];
assert.deepEqual(extractEvenNumbers(numbersArray),[4]);

//testing with even and two odd
numbersArray=[1,4,3,];
assert.deepEqual(extractEvenNumbers(numbersArray),[4]);

//testing with one odd number
numbersArray=[3];
assert.deepEqual(extractEvenNumbers(numbersArray),[]);

//testing with multiple numbers
numbersArray=[1,4,3,5,6,8];
assert.deepEqual(extractEvenNumbers(numbersArray),[4,6,8]);

//testing with positive and negative numbers
numbersArray=[1,4,3,5,-2,-1];
assert.deepEqual(extractEvenNumbers(numbersArray),[4,-2]);

//EXTRACT EVEN NUMBERS
//testing with one odd number
numbersArray=[1];
assert.deepEqual(extractOddNumbers(numbersArray),[1]);

//testing with one odd and one even
numbersArray=[1,4];
assert.deepEqual(extractOddNumbers(numbersArray),[1]);

//testing with multiple values
numbersArray=[1,4,3,5];
assert.deepEqual(extractOddNumbers(numbersArray),[1,3,5]);

//testing with negative and positive
numbersArray=[1,4,3,5,-2];
assert.deepEqual(extractOddNumbers(numbersArray),[1,3,5]);

//SUM OF NUMBERS
//testing sum of array with one value
numbersArray=[1];
assert.deepEqual(sumOfNumbers(numbersArray),1);

//testing sum of array with two values
numbersArray=[2,3];
assert.deepEqual(sumOfNumbers(numbersArray),5);

//testing sum with multiple values
numbersArray=[2,3,1];
assert.deepEqual(sumOfNumbers(numbersArray),6);

//testing with negative values
numbersArray=[1,-1,2,-2,3]
assert.deepEqual(sumOfNumbers(numbersArray),3);

//REVERSE
//reverse print of one element
numbersArray=[1];
assert.deepEqual(reverseArray(numbersArray),[1]);

//reverse print two elements 
numbersArray=[1,2];
assert.deepEqual(reverseArray(numbersArray),[2,1]);

//reverse print using 3 elements 
numbersArray=[3,4,2];
assert.deepEqual(reverseArray(numbersArray),[2,4,3]);

//EXTRACTING EVERY SECOND ELEMENTS
//extract altrenate elements of an array with one element
numbersArray=[1];
assert.deepEqual(extractAlternateElements(numbersArray),[]);

//extract alternate elemnents of an array with two elements
numbersArray=[1,2];
assert.deepEqual(extractAlternateElements(numbersArray),[2]);

//REVERSE FIBONACCI
//revered fibonacci of one limit
assert.deepEqual(fiboReverse(1),[0]);

//reversed fibonacci series of limit 2
assert.deepEqual(fiboReverse(2),[1,0]);

//GREATEST NUMBER
//using 1 value
numbersArray=[1];
assert.deepEqual(greatestNumber(numbersArray),1);

//using 2 value
numbersArray=[1,2];
assert.deepEqual(greatestNumber(numbersArray),2);

//using multiple values
numbersArray=[1,4,8,6];
assert.deepEqual(greatestNumber(numbersArray),8);

//using negative values
numbersArray=[1,-6,7,5];
assert.deepEqual(greatestNumber(numbersArray),7);

//LOWEST NUMBER
//using 1 value
numbersArray=[1];
assert.deepEqual(lowestNumber(numbersArray),1);

//using 2 value
numbersArray=[1,2];
assert.deepEqual(lowestNumber(numbersArray),1);

//using multiple values
numbersArray=[1,4,8,6];
assert.deepEqual(lowestNumber(numbersArray),1);

//using negative values
numbersArray=[1,-6,7,5];
assert.deepEqual(lowestNumber(numbersArray),-6);

//AVERAGE
//using 1 value
numbersArray=[1];
assert.deepEqual(averageOfNumbers(numbersArray),1);

//using 2 value
numbersArray=[1,2,3];
assert.deepEqual(averageOfNumbers(numbersArray),2);

//using multiple values
numbersArray=[1,5,6];
assert.deepEqual(averageOfNumbers(numbersArray),4);

//using negative values
numbersArray=[1,-6,6,5];
assert.deepEqual(averageOfNumbers(numbersArray),1.5);

//Mapping length
//using one element
let names = ["athul"];
assert.deepEqual(mapLengthOfElements(names),[5]);

//using 2 names
names = ["steve","bill"];
assert.deepEqual(mapLengthOfElements(names),[5,4]);

//using empty string
names = ["","bill"];
assert.deepEqual(mapLengthOfElements(names),[0,4]);

//using multiple values
names = ["athul","moumita","ankon","rahul","rishab"];
assert.deepEqual(mapLengthOfElements(names),[5,7,5,5,6]);

//ODD NUMBER COUNT
//using one value
numbers = [1];
assert.deepEqual(countOfOddNumber(numbers),1);

//using 1 even number
numbers = [2];
assert.deepEqual(countOfOddNumber(numbers),0);

//using multiple numbers
numbers = [1,2,3,4,5];
assert.deepEqual(countOfOddNumber(numbers),3);

//EVEN NUMBER COUNT
//using one value
numbers = [1];
assert.deepEqual(countOfEvenNumber(numbers),0);

//using 1 even number
numbers = [2];
assert.deepEqual(countOfEvenNumber(numbers),1);

//using multiple numbers
numbers = [1,2,3,4,5];
assert.deepEqual(countOfEvenNumber(numbers),2);

//Count of numbers above threshold
//using 3 values
numbers = [1,2,3];
assert.deepEqual(frequencyAboveThreshold(numbers,1),2);

//using multiple values
numbers = [1,2,3,4,5,6,7,8];
assert.deepEqual(frequencyAboveThreshold(numbers,3),5);

//count of numbers below threshold
//using 3 values
numbers = [1,2,3];
assert.deepEqual(frequencyBelowThreshold(numbers,2),1);

//using multiple values
numbers = [1,2,3,4,5,6,7,8];
assert.deepEqual(frequencyBelowThreshold(numbers,6),5);

//indexOfNumber 
//using 1 values
number = [1];
assert.deepEqual(indexOfNumber(number,1),0);

//using 3 values
numbers = [1,2,3];
assert.deepEqual(frequencyBelowThreshold(numbers,2),1);

//using multiple values
numbers = [1,2,3,4,5,6,7,8];
assert.deepEqual(indexOfNumber(numbers,6),5);

//checking for a value not in array should return -1
number = [1,2,3,4]
assert.deepEqual(indexOfNumber(number,7),-1);

//ascending order checking
//using 1 values
number = [1];
assert.deepEqual(isAscending(number),true);

//using 3 values
numbers = [1,2,3];
assert.deepEqual(isAscending(numbers),true);

//using multiple values
numbers = [1,2,3,4,5,9,8];
assert.deepEqual(isAscending(numbers),false);

//checking for a value not in array should return -1
numbers= [1,2,3,5,8]
assert.deepEqual(isAscending(numbers),true);

//Descending order checking
//using 1 values
number = [1];
assert.deepEqual(isDescending(number),true);

//using 3 values
numbers = [1,2,3];
assert.deepEqual(isDescending(numbers),true);

//using multiple values
numbers = [1,2,3,4,5,9,8];
assert.deepEqual(isDescending(numbers),false);

//checking for a value not in array should return -1
numbers= [1,2,3,5,8]
assert.deepEqual(isDescending(numbers),true);

