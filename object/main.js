//ESSENTIAL
//1.Fix the syntax 
//& style issues with the three objects below:

let obj1 = { firstName: 'Yan', lastname: 'Fan' }

let obj2 = { a: 1, b: 2, c: 3, d: 4 }
let obj3 = {
  animal: 'dog',
  noise: 'bark',
  age: 3,
  type: 'Golden Retriever',
  color: 'Yellow',
}
// 2. Create an object that represents you. It should contain your first name, last name, age and hometown. Assign it to a variable called person.
let person = {
  firstName: "sabrine",
  lastName: "zouaoui",
  age: 27,
  homeTown: "tabarka",
  favoriteFood: "pizza"

}
// 3.Access the favorite food property in the object using dot notation, and reassign it to a different food.
person.favoriteFood = "lasange"

// 4.Change your object to have a single name key, the value of which is an object – this object should have first, last and middle keys containing your first, last, and middle names respectively.
person.name = person.firstName + " " + person.lastName
// 5.Write a function called emptyObject that takes no parameters and returns an empty object.

function emptyObject() {
  return {}
}
//   6.Write a function called addProperty that takes two parameters, an object, and a key as a string. It then adds the key as a property in the object and gives it the value true.
function addProperty(object, key) {
  object[key] = true
  return object
}
// 7.Write‌ ‌a‌ ‌function‌ ‌called‌ ‌‌deleteProperty‌‌ ‌that‌ ‌takes‌ ‌two parameters an‌ ‌object‌ ‌and‌ a key as a string. It then removes the property with that key from the object.
function deleteProperty(obj, key) {
  delete obj[key]
  return obj
}
const Employee = {
  firstname: 'Maria',
  lastname: 'Sanchez',
};
//   8.Write‌ ‌a‌ ‌function‌ ‌called‌ ‌‌addObjectProperty‌‌ ‌that‌ ‌takes‌ ‌three‌ ‌parameters,‌ ‌an‌ ‌object,‌ ‌a‌ ‌string as a key‌, ‌and‌ ‌a second ‌object. It then adds a new property with the passed key and the second object as its value.
function addObjectProperty(object1, key, object2) {
  object1[key] = object2
  return object1
}
// 9.Write‌ ‌a‌ ‌function‌ ‌called‌ ‌‌addFullNameProperty‌‌ ‌that‌ ‌takes‌ ‌an‌ ‌object‌ ‌as‌ ‌a‌ ‌parameter.‌ ‌If the object has both a firstName and a lastName property, then it adds a new property with the key fullName and the value as a string of the firstName and lastName combined with a space between them.
function addFullNameProp(obj) {
  obj.fullName = obj["firstName"] + " " + obj["lastName"]
  return obj
}
// 10.Write‌ ‌a‌ ‌function‌ ‌called‌ ‌‌addArrayProperty‌‌ ‌that‌ ‌takes‌ ‌three‌ ‌parameters,‌ ‌an‌ ‌object,‌ ‌a‌ ‌string as a key‌ ‌and‌ ‌an‌ ‌array.‌ ‌It then adds a new property to the object with the specified key and its value is the array.
function addArrayProp(obj, key, array) {
  obj[key] = array
  return obj
}
// 11.Write‌ ‌a‌ ‌function‌ ‌called‌ ‌‌printAllProperties‌‌ ‌that‌ takes ‌an‌ ‌object‌ ‌as a parameter. It then prints out to the console the values of all the object’s properties.
function printAllProp(obj) {
  for (const key in obj) {
    console.log(obj[key])
  }
}

// EXTENTED
// 1.Write a function called removeNumbersLargerThan that takes two parameters, a number and an object. 
// It then removes all properties with values larger than the specified number.
function removeNumbersLargerThan(object, number) {
  for (let key in object) {
    if (object[key] > number) {
      delete object[key]
    }
  }
  return object
}
// 2.Write a function called removeAllEvenValues that takes an object as a parameter. 
// It then removes all properties with values that are an even number.
function removeAllEvenValues(object) {
  for (let key in object) {
    if (object[key] % 2 === 0) {
      delete object[key]
    }
  }
  return object
}
// 3.Write a function called removePropertiesNotEqualTo10 that takes an object as a parameter.
//  It then removes all properties that are not equal to 10.
function removePropertiesNotEqualTo10(object) {
  for (let key in object) {
    if (object[key] !== 10) {
      delete object[key]
    }
  }
  return object
}
// 4.Write a function called removeStringsLongerThan that takes two parameters, a number and an object.
//  It then removes all strings with lengths larger than the number parameter.
function removeNumbersLargerThan(object, number) {
  for (let key in object) {
    if (object[key].length > number) {
      delete object[key]
    }
  }
  return object
}
// 5.Write a function called removeAllNumbers that takes an object as a parameter. 
// It then removes all properties in the object that have number values.

function removeAllNumbers2(object) {
  for (let key in object) {
    if (typeof object[key] === 'number') {
      delete object[key]
    }
  }
  return object
}

// 6.Write a function called removeArrays that takes an object as a parameter. It then removes all properties that have
// array values.

// function removeArrays (object) {
//   for (let key in object){
//     if ( object[key] === "object" ){
//       delete object[key]                        it deletes every object and [] is object also {} is object
//     }
//   }
//   return object
// }

function removeArrays(object) {
  for (let key in object) {
    if (Array.isArray(object[key])) {
      delete object[key]
    }
  }
  return object
}


// 7.Write a function called getFirstElementOfProperty that takes an object and a key and returns the first element in
//  the array at the given key. If the array is empty it should return undefined. If the property at the given key is 
// not an array it should return undefined. If there is no property at the key it should return undefined.

function getFirstElementOfProperty(object, key) {
  if (Array.isArray(object[key]) && (object[key].length>0 && key in object.keys )){
    return (object[key][0])}
  else return undefined
}
// 8.Write a function called getNthElementOfProperty that takes three parameters, an object, a key and a number.
//  It then returns the element located at the index equal to the number parameter from the array at the given key.
//  If the array is empty it should return undefined. If the property at the given key is not an array it should return
//  undefined. If there is no property at the key it should return undefined.

function getNthElementOfProperty(object, key,i) {
  for (let i = 0; i < array.length; i++)
  if (Array.isArray(object[key]) && (object[key].length>0 && key in object.keys )){ 
    return (object[key][i])}
  else return undefined
}

// IMMERSIVE
// 1.Write a function called isPropertyPresent that takes two parameters, an object and a key. It then returns true if 
// there is a property at the given key and false otherwise.

function isPropertyPresent(object, key) {
for (let keya in object){
if(keya===key){
  return true
}
}
 return false

}

// 2.Write a function called getAllKeys that takes an object as a parameter and returns an array of keys of all the
//  properties in the object.

function getAllKeys1 (object) {
  let array = []
  for (let key in object){
    array.push(key)
  }
  return array
}

// 3.Write a function called getAllValues that takes an object as a parameter and returns an array of all the values from that object.
function getAllValues2(object) {
  let array = [];
  for (let key in object) {
    array.push(object[key]);
  }
  return array;
}
// 5.Write a function called extend that takes two objects and adds all the properties of the second object to the 
// first object if the property’s key does not already exist.
function extend (obj1,obj2){
  for (let key in obj2){
    if (obj1[key]===undefined ) {
      obj1[key]=obj2[key]
    }
  }
return obj1
}

// 6.Write a function called countAllCharacters that takes a string as a parameter and returns an object with each
//  unique character as a key and the value is the amount of times it appears in the string. If the string is empty 
// it should return an empty object.
function countAllCharacters(string) {
}

// 8.Write a function called convertObjectToList that takes an object as a parameter and returns an array where each 
// element is an array with the key as the first element and the value as the second.

function convertObjectToList(obj) {
  
}
