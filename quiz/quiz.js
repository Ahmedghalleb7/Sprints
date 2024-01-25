// const quizQuestions = [
//     {
//       description:
//         "A ninja with a dream of becoming the strongest ninja and leader of his village.",
//       answer: "Naruto",
//       point: 5,
//       coverImg : "https://i.pinimg.com/564x/85/31/7b/85317b621555591cfdc1daebd40f399d.jpg",
//       character : "https://photos.tf1.fr/780/780/perso-showpage-8efac4-fe1481-0@1x.png"
//     },
//     {
//       description:
//         "A high school student who gains the powers of a death god and uses them to bring justice.",
//       answer: "Death Note",
//       point: 10,
//       coverImg : "https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
//       character : "/assets/img/death.png"
//     },
//     {
//       description:
//         "A group of friends embark on an adventure to find a mysterious treasure.",
//       answer: "One Piece",
//       point: 2,
//       coverImg:"https://www.manga-news.com/public/images/pix/dvd/690/One-piece-anime-east-blue.jpg",
//       character : "/assets/img/onePiece.png"
//     },
//   ];


  let quizQuestions2= (description,answer,point,coverImg,character)=>{
  let obj={}
  obj.description=description
  obj.answer=answer
  obj.point=point
  obj.coverImg=coverImg
  obj.character=character
  return obj
}
let naruto= quizQuestions2("A ninja with a dream of becoming the strongest ninja and leader of his village.","Naruto",5,"https://i.pinimg.com/564x/85/31/7b/85317b621555591cfdc1daebd40f399d.jpg","https://photos.tf1.fr/780/780/perso-showpage-8efac4-fe1481-0@1x.png")
let deathnote= quizQuestions2( "A high school student who gains the powers of a death god and uses them to bring justice.","Death Note",10,"https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg","/assets/img/death.png")
let onePiece= quizQuestions2("A group of friends embark on an adventure to find a mysterious treasure.","One Piece",2,"https://www.manga-news.com/public/images/pix/dvd/690/One-piece-anime-east-blue.jpg","/assets/img/onePiece.png")

let quizQuestions=[naruto,deathnote,onePiece]
// console.log(document.getElementById("question"));  
// console.log(document.getElementsByClassName("btn"));
// console.log(document.getElementsByTagName("p"));
// console.log(document.querySelector("#answer"));
// & Vanilla JS:
var myelement = document.getElementsByClassName("btn")[0]
// myelement.classList.remove("btn");
myelement.classList.add("btn-dark");

// create a new <h1> element 
let i = 0 
let userscore=0
let useranswer=document.getElementById("answer")
let displayquestiontime=()=>{
  
  if (i<quizQuestions.length){
     
    console.log(useranswer.value,"1");
    if (useranswer.value.toUpperCase()==="one piece".toUpperCase() ) {
      console.log(useranswer.value,"2");
      alert("Game Over")
    }
    useranswer.value=""
    i++
    document.getElementById("next").disabled=true
    displayquestion() 
    
  }
 

}

document.getElementById("score").innerText=userscore
let displayquestion=()=>{
  document.getElementById("question").innerText = quizQuestions[i].description
  document.getElementById("cover").src=quizQuestions[i].coverImg
  document.getElementById("character").src=quizQuestions[i].character
  }
  displayquestion()

let answerfunc=()=>{
  let useranswer=document.getElementById("answer")
  if (useranswer.value.toUpperCase()===quizQuestions[i].answer.toUpperCase()){
    document.getElementById("yes").play()
  alert("Great!!!")
  // verify()
  userscore+=quizQuestions[i].point
  let scoreshow=document.getElementById("score")
    scoreshow.innerText=userscore
    document.getElementById("next").disabled=false
    
}

else {alert("Wrong..Try again")
document.getElementById("gun").play()
document.getElementById("youShD").play()

}

}

document.getElementById("next").addEventListener("click",displayquestiontime)


