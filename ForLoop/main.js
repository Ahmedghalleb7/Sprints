// ESSENTIAL
// 1.Write a function called
//  sumOfN that takes a number 
// as a parameter and returns the sum of 
// that number and all the numbers before it.

function sumOfN(n) {
   let result = 0;
   for(let i = 0;i<=n;i=i+1){
        result += i
   }
   return result 
 } 

 //2.Write a function called factorialOfN 
 //that takes a whole number as a parameter 
 //and returns the factorial of that number.

 function factorialOfN(n) {
    let result = 1;
   for(let i = 1;i<=n;i=i+1){
        result *= i
   }
   return result
 }  


 //?3.Write a function called repeatString
 //that takes two parameters, 
 //as string and a number, and returns 
 //that string the number of times 
 //specified in the second parameter.

 function repeatString(string, num) {
    let result = ""
    for (let index = 1; index <=num; index++) {
        result += string
    }
    return result
 }  

 //4.Write a function called countMinMax 
 //that takes two numbers
 // as parameters and returns the range.

 let countMinMax = (min,max)=> {
    let count = 0 
    for(let i = min ; i<max;i+=1 ){
        count+=1
    }
    return count
 }
 //5.Write a function called sumMinToMax
//   that takes two numbers as parameters and 
//   returns the sum between the two integers 
//  beginning at the num1 and excluding num2.

function sumMinToMax(min, max) {
    let result = 0 
    for(let i =min;i<max;i++){
        result +=i 
    }
    return result
 }  



//  6.Write a function called productMinToMax 
//  that takes two numbers as parameters and 
//  returns the product between the two integers 
//  beginning at the num1 and excluding num2.
 

let productMinToMax = (min,max) => {
    let result = 1 
    for(let i = min ; i < max ; i++){
        result *= i
    }
    return result
}

//7.Write a function called multiplyBy10NTimes
// that takes two numbers as parameters 
//and returns the first number multiplied by 10 
//the amount
//of times indicated by the second number.

function multiplyBy10NTimes(num, n) {
    let result = num 
    if(n === 0){
      return 0
    }
    for(let i =1;i<=n;i++){
        result *= 10
    }
    return result
 } 


 //8.Write a function called countCharAtIndex 
 //that takes three parameters,
 // a string, an index, and another string.
 // This function should use the index to 
 //find the corresponding character in 
 //the first string and loop through
 // the second string and count
  //how many times that character occurs.


function countCharAtIndexWithFor(string1,position,string2) {
   let count = 0
   for(let i = 0;i<string2.length;i++){
    if(string1[position] === string2[i]){
            count++
    }
   }
   return count 
} 


function countCharAtIndexWithWhile(string1,position,string2) {
    let count = 0
   let i = 0 
   while(i<string2.length){
    if(string1[position] === string2[i]){
        count++
    }
    i++
   }
    return count 
 } 


 //EXTENTED
// 1.Write a function called reverseString 
//that takes a string as
 //an input and returns that string in reverse.

 function reverseString(string) {
    let result = ""
    for(let i = string.length-1;i>=0;i--){
        result = result + string.at(i)
    }
    return result 
 } 

