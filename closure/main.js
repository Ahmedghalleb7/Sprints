function createCounter() {
    let count = 0;
    return function counter(num) {
        
        return count++
    
      return count;
    }
  }


  let ahmedcounter =createCounter()
  let sabrinecounter= createCounter()
  

//OOP : objext oriented program
  function makeAccount(initial) {
    // & State
    var balance = initial;
   return {
    //& Behavior
   withdraw:function(amount) {
        if (balance - amount >= 0) {
        balance = balance - amount;
        return 'Here is your money: $' + amount + "your balance is"+ balance;
        }
   return 'Insufficient funds.';
   },
   deposit: function(amount) {balance+=amount}
}
}




function makeAccount1(initial) {
    let obj= {}
    obj.balance=initial
    obj.withdraw=withdraw,
    obj.deposit=deposit
    return obj
}


let withdraw=function(amount){
    if (this.balance - amount>=0){
        this.balance-=amount
        return 'here is your money'
    }
    return "not enough money"
}
let deposit=function(amount){
    this.balance+=amount
    return obj.balance
}


// Advanced exercises

// The Cat 
// Write yourself a virtual cat - animals with a CLI are so much nicer than ones with fur.

// Create an object that represents a cat. It should have properties for tiredness, hunger, lonliness and happiness
// Next, write methods that increase and decrease those properties. Call them something that actually represents what would increase or decrease these things, like "feed", "sleep", or "pet".
// Last, write a method that prints out the cat's status in each area. (Be creative e.g. Paws is really hungry, Paws is VERY happy.)
// Bonus: Make the functions take arguments that increase or decrease arbitrary amounts
// Bonus: Make the functions as arbitrary as cats are - sometimes make it so the cat doesn't want to be petted.

function makeCat (){
  let cat ={
    tiredness:10,
    hunger:10,
    
  }

    cat.tiredness = sleep,
    cat.hunger=feed,
    cat.lonliness=play,
    cat.hapiness=pet
    return cat
}
let sleep = function (time) {
  if (this.tiredness-time>0){
    this.tiredness-=time
    return "Azouz is tired , Azouz want to sleep"
   
  }
 
}
let feed = function (amount)  {
  if (this.hunger-amount>0){
     this.hunger-=amount 
    return "Azouz is hungry"
  }
  else "Azouz is full"
  
}
let play = function (time)  {
  
  if (this.lonliness<0){
    this.lonliness -= time
    return "Azouz Loneny"
  }
  else "Azouz love being with you "
  
}
let pet = function ()  {
 this.hapiness+= 2
 return "^u^"
}
