
//?? factory function 

let makeStudent = (name,age,phase,point,personality) => {
    let obj = {}
    // states
    obj.name = name
    obj.age = age 
    obj.phase = phase 
    obj.points = point 
    obj.personality = personality
    return obj 
}

//!! make student 

let ahmed = makeStudent("ahmed",26,"backBridge",7,"ENFJ-A")
let nassim = makeStudent("nassim",25,"frontTower",1.5,"INTJ-A")
let sabrine = makeStudent("sabrine",27,"basic",-24.5,"ESFJ-A")


// ?? List of students 

let family_I = [ahmed,nassim,sabrine]

// ?? Behaviours 

//!! display student 

let displayStudent = (student) => {
    return `the student name is ${student.name}.His age is ${student.age}yo.he is on phase ${student.phase} and his personality is ${student.personality}. He got ${student.points}points`
}

let updatePoints = (sfectorian,newPoint)=> {
    sfectorian.points = newPoint 
}

let addProprety = (sfectorian,proprety,value)=>{
    sfectorian[proprety] = value
}




