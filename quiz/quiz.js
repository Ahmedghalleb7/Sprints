const quizQuestions = [
    {
      description:
        "A ninja with a dream of becoming the strongest ninja and leader of his village.",
      answer: "Naruto",
      point: 5,
      coverImg : "https://i.pinimg.com/564x/85/31/7b/85317b621555591cfdc1daebd40f399d.jpg",
      character : "https://photos.tf1.fr/780/780/perso-showpage-8efac4-fe1481-0@1x.png"
    },
    {
      description:
        "A high school student who gains the powers of a death god and uses them to bring justice.",
      answer: "Death Note",
      point: 10,
      coverImg : "https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
      character : "/assets/img/death.png"
    },
    {
      description:
        "A group of friends embark on an adventure to find a mysterious treasure.",
      answer: "One Piece",
      point: 2,
      coverImg:"https://www.manga-news.com/public/images/pix/dvd/690/One-piece-anime-east-blue.jpg",
      character : "/assets/img/onePiece.png"
    },
  ];

// console.log(document.getElementById("question"));  
// console.log(document.getElementsByClassName("btn"));
// console.log(document.getElementsByTagName("p"));
// console.log(document.querySelector("#answer"));
var myelement = document.getElementsByClassName("btn")[0]
// myelement.classList.remove("btn");
myelement.classList.add("btn-dark");

// create a new <h1> element 
let i = 0 
let userscore=0
let displayquestiontime=()=>{
  if (i<quizQuestions.length){
    i++
    displayquestion() 
  }
  else alert("Game Over")
  

}

document.getElementById("score").innerText=userscore
let displayquestion=()=>{
  document.getElementById("question").innerText = quizQuestions[i].description
  document.getElementById("cover").src=quizQuestions[i].coverImg
  document.getElementById("character").src=quizQuestions[i].character
  }
  displayquestion()

let answerfunc=()=>{
 let useranswer=document.getElementById("answer").value
  if (useranswer.toUpperCase()===quizQuestions[i].answer.toUpperCase()){
  alert("Great!!!")
  userscore+=quizQuestions[i].point
  let scoreshow=document.getElementById("score")
    scoreshow.innerText=userscore
}

else alert("Wrong..Try again")

}



