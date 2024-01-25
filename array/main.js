//7.Write a function called 
//subtractReverse that takes 
//an array of numbers as a parameter and returns the subtraction of every number beginning at the last element of the input array and ending at the first element 
//of the input array (in reverse).



// let subtractReverse = (array) => {
//     let output = array.at(-1)
//     for( let i = array.length-2;i>=0;i-- ) {
//         output -= array[i]
//     }
//     return output
// }
let subtractReverse = (array) => {
    let result = 0
for (let i = 0; i < array.length; i++) {
    if (i === array.length - 1) {
            result += array[i]
        }
    else result -= array[i]
    }
    return result
}


//11.Write a function called isArray that takes one parameter and returns 
//true if the input is array otherwise returns false.

function isArray(array) {
    return Array.isArray(array)
 } 

 //
//  EXTENTED
// 1.Write a function called min that takes an array as a parameter 
//and returns the smallest number from the array.

let min = (array) => {
    let smallest = array[0]
    for(let i =1;i<array.length;i++){
        if(array[i] < smallest) {
            smallest = array[i]
        }
    }
    return smallest

}


// 7.Write a function called multiplyBy that takes an array and number as parameters and returns a new array with each of the elements from the 
// array multiplied by the given number.
let multiplyBy = (array,number) => {
    let output = []
for(let i =0;i<array.length;i++) {
    output.push(array[i]*number)
}
    return output
}
//8.Write a function called multiplyByIndex that takes an array as a parameter, and multiplies each element with their corresponding 
//index values then returns that array.

let multiplyByIndex = (array) => {
    let output = []
for(let index =0;index<array.length;index++) {
    output.push(array[index]*index)
}
    return output
}


//IMERSIVE 


// 7.Write a function called 
//sumOddEven that takes an array
// as a parameter, and returns an array containing the sum of the odd numbers as the first element and the sum of the even numbers as the second element.

let sumOddEven = (array) => {
    debugger
    let output = []
    let sumEven = 0 
    let sumOdd = 0 
    for(let i = 0;i<array.length;i++){
        if(array[i]%2 === 0) {
            sumEven += array[i]
        }
        else sumOdd+= array[i]
    }
    output.push(sumOdd,sumEven)
    return output
}

//8.Write a function called shortestOfMixed that takes an array of mixed elements as a parameter, and returns the 
//shortest string within the given array.
//!! [1,3,"hi",2,"pizza","j"] => "j"
let shortestOfMixed = (array)=> {
    let str = ""
    let minArray = []
    let minLength = 10
    for(let element of array) {
        if(typeof element === 'string') {
            if(minLength > element.length) {
                minLength = element.length
                minArray.push(element)
            }
        }

    }
    if(minArray.length > 1) {
        return minArray[1]
    }
    else return minArray[0]

}