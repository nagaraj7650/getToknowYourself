let Q = document.getElementById("Q")
let btnOne = document.getElementById("btnOne")
let btnTwo = document.getElementById("btnTwo")
let begin = document.getElementById("begin")
let image = document.getElementById("beginImage")
let questionNo = -1
begin.addEventListener("click", ()=> {
    document.getElementById("beginHeading").style.display = "none"
    document.getElementById("beginImage").setAttribute("src", `${images[0]}`)
    document.getElementById("begin").style.display = "none"
    document.getElementById("Q").style.display = "block"
    document.getElementById("btnOne").style.display = "block"
    document.getElementById("btnTwo").style.display = "block"
    questionNo++;
    Q.innerText = question[0]
    btnOne.innerText = optionOne[0]
    btnTwo.innerText = optionTwo[0]
})
question = ["Question No 1: do you like cats or dogs?","Question No 2: Do you like movies or web series?","Question No 3: Do you prefer animated movies/series or live action?","Question No 4 : Messi or Ronaldo","Last Question: Red Sause Pasta or White Sause Pasta"]
optionOne = ["Cats", "Movies", "Animated", "Messi", "Red Sause Pasta"]
optionTwo = ["Dogs", "Web Series", "Live Action", "Ronaldo", "White Sause Pasta"]
images = ["catDog.png", "series.png", "anime.png", "goats.png", "pasta.png"]
function gamePrank() {
    questionNo++
    Q.innerText = question[questionNo]
    btnOne.innerText = optionOne[questionNo]
    btnTwo.innerText = optionTwo[questionNo]
    image.setAttribute("src", `${images[questionNo]}`)
    console.log(questionNo)
    if (questionNo === 5) {
        document.getElementById("rickroll").style.display = "block"
        document.getElementById("video").setAttribute("src", "video.mp4")
        document.getElementById("beginFather").style.display = "none"
        Q.style.display = "none"
        btnOne.style.display = "none"
        btnTwo.style.display = "none"
    }
}
btnOne.addEventListener("click", gamePrank)
btnTwo.addEventListener("click", gamePrank)