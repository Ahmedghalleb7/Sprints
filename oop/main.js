// The Cat 
// Write yourself a virtual cat - animals with a CLI are so much nicer than ones with fur.

// Create an object that represents a cat. 
//It should have properties for tiredness, hunger, lonliness and happiness
// Next, write methods that increase and decrease those properties. 
//Call them something that actually represents what would increase or decrease these things,
// like "feed", "sleep", or "pet".
// Last, write a method that prints out the cat's status in each area.
// (Be creative e.g. Paws is really hungry, Paws is VERY happy.)
// Bonus: Make the functions take arguments that increase or decrease arbitrary amounts
// Bonus: Make the functions as arbitrary as cats are - 
//sometimes make it so the cat doesn't want to be petted.


let MakeCat = (name)=> {
    let cat = {}
    // states
    cat.name = name
    cat.happiness = Math.floor(Math.random()*11)
    cat.lonliness = Math.floor(Math.random()*11)
    cat.hunger = Math.floor(Math.random()*11)
    cat.tiredness = Math.floor(Math.random()*11)
    // behaviours 
    cat.pet = pet 
    cat.sleep = sleep
    cat.feed = feed 
    cat.state = state
    return cat
}

let pet = function() {
    if(this.happiness < 10 || this.lonliness < 10 ){
    this.lonliness-=3
    this.happiness+=3
    this.tiredness +=3
    this.hunger +=4
   return  this.state()}
   else return "grrrrrrrrrrr"
}

let sleep = function(){
    if(this.tiredness < 10){
    this.tiredness -= 4 
    this.hunger +=2
    this.happiness += 3
    this.lonliness +=1 
    return this.state()}
    else return "dont wanna sleep"
}

let feed = function() {
    if(this.hunger<10){
    this.hunger -= 4 
    this.happiness +=2 
    this.tiredness +=3 
    this.lonliness -=2
    return this.state()}
    else return "not hungry"
}

let state = function() {
    if(this.happiness<=5) {
        return `${this.name} is not happy`
    }
    else if (this.hunger >=6) {
        return `${this.name} is very hungry`
    }
    else if (this.lonliness >= 7) {
        return `${this.name} is very akon`
    }
    else if (this.tiredness >= 7) {
        return `${this.name} is Garfield`
    }
    else {
        return `${this.name} is good`
    }
}

// instance 

let azouz = MakeCat("azouz")



