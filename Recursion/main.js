//while loop iteration

let factoriellewithwile=(n) => {
    let output=1
    while(n>1){
        output*n
        n--
    }
    return output
}

// for loop iteration

let factoriellewithfor=(n)=>{
    let output=1
    for (let i =1 ; i <= n; i++){
    output*=1
}
return output
}

let factoriellewithrecursion = (n)=>{
    // stoping condition|| base base
    if (n===0){
        return 1
    }
    // recusine case
    return n*factoriellewithrecursion(n-1)
}