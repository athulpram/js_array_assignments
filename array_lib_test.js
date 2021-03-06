const arrayLib= require("./arrayLib");
const assert = require("assert");
const extractOddNumbers = arrayLib.extractOddNumbers;
const extractEvenNumbers = arrayLib.extractEvenNumbers;
const sumOfNumbers = arrayLib.sumOfNumbers;
const reverseElements = arrayLib.reverseElements;
const extractAlternateElements = arrayLib.extractAlternateElements;
const reverseFibonacci = arrayLib.reverseFibonacci;
const findGreatestNumber=arrayLib.findGreatestNumber;
const findLowestNumber=arrayLib.findLowestNumber;
const findAverage =arrayLib.findAverage;
const mapElements = arrayLib.mapElements;
const countOfOddNumber = arrayLib.countOfOddNumber;
const countOfEvenNumber = arrayLib.countOfEvenNumber;
const countNumbersAboveValue = arrayLib.countNumbersAboveValue;
const countNumbersBelowValue = arrayLib.countNumbersBelowValue;
const indexOfNumber = arrayLib.indexOfNumber;
const isAscending = arrayLib.isAscending;
const isDescending = arrayLib.isDescending;
const extractDigits = arrayLib.extractDigits;
const findUniqueElements = arrayLib.findUniqueElements;
const unionOf = arrayLib.unionOf;
const intersectionOf = arrayLib.intersectionOf;
const differenceOf=arrayLib.differenceOf;
const isSubset = arrayLib.isSubset;
const zip=arrayLib.zip;
const rotate = arrayLib.rotate;
const partitionOf = arrayLib.partitionOf;
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
assert.deepEqual(reverseElements(numbersArray),[1]);

//reverse print two elements 
numbersArray=[1,2];
assert.deepEqual(reverseElements(numbersArray),[2,1]);

//reverse print using 3 elements 
numbersArray=[3,4,2];
assert.deepEqual(reverseElements(numbersArray),[2,4,3]);

numbersArray=[2,9,7,5]
assert.deepEqual(reverseElements(numbersArray),[5,7,9,2]);

//EXTRACTING EVERY SECOND ELEMENTS
//extract altrenate elements of an array with one element
numbersArray=[1];
assert.deepEqual(extractAlternateElements(numbersArray),[]);

//extract alternate elemnents of an array with two elements
numbersArray=[1,2];
assert.deepEqual(extractAlternateElements(numbersArray),[2]);
assert.deepEqual(extractAlternateElements([3,2,5,4]),[2,4]);
assert.deepEqual(extractAlternateElements([3,2,6,3]),[2,3]);

//REVERSE FIBONACCI
//revered fibonacci of one limit
assert.deepEqual(reverseFibonacci(1),[0]);

//reversed fibonacci series of limit 2
assert.deepEqual(reverseFibonacci(2),[1,0]);
assert.deepEqual(reverseFibonacci(3),[1,1,0]);
assert.deepEqual(reverseFibonacci(4),[2,1,1,0]);

//GREATEST NUMBER
//using 1 value
numbersArray=[1];
assert.deepEqual(findGreatestNumber(numbersArray),1);

//using 2 value
numbersArray=[1,2];
assert.deepEqual(findGreatestNumber(numbersArray),2);

//using multiple values
numbersArray=[1,4,8,6];
assert.deepEqual(findGreatestNumber(numbersArray),8);

//using negative values
numbersArray=[1,-6,7,5];
assert.deepEqual(findGreatestNumber(numbersArray),7);

//LOWEST NUMBER
//using 1 value
numbersArray=[1];
assert.deepEqual(findLowestNumber(numbersArray),1);

//using 2 value
numbersArray=[1,2];
assert.deepEqual(findLowestNumber(numbersArray),1);

//using multiple values
numbersArray=[1,4,8,6];
assert.deepEqual(findLowestNumber(numbersArray),1);

//using negative values
numbersArray=[1,-6,7,5];
assert.deepEqual(findLowestNumber(numbersArray),-6);

//AVERAGE
//using 1 value
numbersArray=[1];
assert.deepEqual(findAverage(numbersArray),1);

//using 2 value
numbersArray=[1,2,3];
assert.deepEqual(findAverage(numbersArray),2);

//using multiple values
numbersArray=[1,5,6];
assert.deepEqual(findAverage(numbersArray),4);

//using negative values
numbersArray=[1,-6,6,5];
assert.deepEqual(findAverage(numbersArray),1.5);

//Mapping length
//using one element
let names = ["athul"];
assert.deepEqual(mapElements(names),[5]);

//using 2 names
names = ["steve","bill"];
assert.deepEqual(mapElements(names),[5,4]);

//using empty string
names = ["","bill"];
assert.deepEqual(mapElements(names),[0,4]);

//using multiple values
names = ["athul","moumita","ankon","rahul","rishab"];
assert.deepEqual(mapElements(names),[5,7,5,5,6]);

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
assert.deepEqual(countOfEvenNumber([3,2,5,2,4]),3);

//Count of numbers above threshold
//using 3 values
numbers = [1,2,3];
assert.deepEqual(countNumbersAboveValue(numbers,1),2);

//using multiple values
numbers = [1,2,3,4,5,6,7,8];
assert.deepEqual(countNumbersAboveValue(numbers,3),5);
assert.deepEqual(countNumbersAboveValue([1,4,3,5,3],4),1);
assert.deepEqual(countNumbersAboveValue([1,2,3,4,5,6,7,8],8),0);

//count of numbers below threshold
//using 3 values
numbers = [1,2,3];
assert.deepEqual(countNumbersBelowValue(numbers,2),1);

//using multiple values
numbers = [1,2,3,4,5,6,7,8];
assert.deepEqual(countNumbersBelowValue(numbers,6),5);
assert.deepEqual(countNumbersBelowValue(numbers,3),2);
assert.deepEqual(countNumbersBelowValue([1,6,4,3,6],4),2);

//indexOfNumber 
//using 1 values
number = [1];
assert.deepEqual(indexOfNumber(number,1),0);

//using 3 values
numbers = [1,2,3];
assert.deepEqual(indexOfNumber(numbers,2),1);

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

//extract digits of a number
//using single digit
assert.deepEqual(extractDigits(1),[1]);

//using 2 digits
assert.deepEqual(extractDigits(12),[1,2]);

//using 3 digits
assert.deepEqual(extractDigits(123),[1,2,3]);

//unique elements of array
//using a single element
assert.deepEqual(findUniqueElements([1]),[1]);

//using 2 elemnts no repeat
assert.deepEqual(findUniqueElements([1,2]),[1,2]);
//using 3 elements and a duplication
assert.deepEqual(findUniqueElements([1,2,2]),[1,2]);

//union of two arrays
//using single element arrays
assert.deepEqual(unionOf([1],[2]),[1,2]);
//using two multi element arrays
assert.deepEqual(unionOf([1,2],[3,4]),[1,2,3,4]);
//using duplicated elements
assert.deepEqual(unionOf([1,2,3,5],[2,6,4,5]),[1,2,3,5,6,4]);

//Intersection of two arrays test cases
//using 2 same elements
assert.deepEqual(intersectionOf([1],[1]),[1]);

//using 2 values
assert.deepEqual(intersectionOf([1,2],[1,2]),[1,2]);

//different values
assert.deepEqual(intersectionOf([1],[2]),[]);

//multiple values
assert.deepEqual(intersectionOf([1,2,3,4],[3,4,5,6]),[3,4]);

//Diffrence of two arrays
//using single values
assert.deepEqual(differenceOf([1],[1]),[]);

//using 2 values
assert.deepEqual(differenceOf([1,2],[1]),[2]);

//using multiple values
assert.deepEqual(differenceOf([1,2,4],[3,2,5]),[1,4]);

//isSubset Function
//using single value in array
assert.deepEqual(isSubset([1],[1]),true);

//using two values
assert.deepEqual(isSubset([1,2],[1]),true);

//using empty arrays
assert.deepEqual(isSubset([],[]),true);

//using multiple values
assert.deepEqual(isSubset([1,2,3,4],[4,5]),false);

//zip test cases
//using empty array
assert.deepEqual(zip([],[]),[]);

//using single values
assert.deepEqual(zip([1],[1]),[[1,1]]);

//using multiple values
assert.deepEqual(zip([1,2],[3,4]),[[1,3],[2,4]]);

assert.deepEqual(zip([1,2,3],[3,4,5]),[[1,3],[2,4],[3,5]]);


//rotate an array
//given cases

assert.deepEqual(rotate([1],0),[1]);

assert.deepEqual(rotate([1,2,3,4,5],2),[3,4,5,1,2]);

//given case
assert.deepEqual(rotate([1,2,3,4,5],4),[5,1,2,3,4]);
assert.deepEqual(rotate([1,2,3,4,5,6,7],4),[5,6,7,1,2,3,4]);


//partition
//
assert.deepEqual(partitionOf([],1),[[],[]]);

assert.deepEqual(partitionOf([1],2),[[1],[]]);

assert.deepEqual(partitionOf([1,2,3,4,5,6],3),[[1,2,3],[4,5,6]]);

assert.deepEqual(partitionOf([1,2,3,4,5],4),[[1,2,3,4],[5]]);


console.log("all tests passed");
