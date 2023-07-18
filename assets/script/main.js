


const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");
const text_div = document.querySelector(".text");
const user_points = document.getElementById("user-points");
const sistem_points = document.getElementById("sistem-points")
let user_score = 0;
let sistem_score = 0;

function valuation(user) {
    var sistem = sistemchoose();
    switch(user + sistem) {
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
        //console.log("win. us: "+User+"sis: "+sistem);
        win(user, sistem);
        break;
            case "rockrock":
            case "paperpaper":
            case "scissorscissor":
            //console.log("draw. us: "+User+"sis: "+sistem);
            draw(user, sistem);
            break;
                 case "scissorrock":
                 case "rockpaper":
                 case "paperscissor":
                 //console.log("lost. us: "+User+"sis: "+sistem);
                 lost(user, sistem);
                 break;
    }
}

function choose(value){
    if (value === "rock") {
        valuation("rock")
        //console.log("ROCK")
    }
    else if (value === "paper") {
        valuation("paper")
        //console.log("PAPER")
    }
    else if(value === "scissor") {
        valuation("scissor")
        //console.log("SCISSOR")
    }

}
function win(user, sistem) {
    user_score++;
    text_div.innerHTML = user= " win "+sistem+" lose"
    user_points.innerHTM = user_score;

}
function win(user, sistem) {
    text_div.innerHTML = user= " and "+sistem+" same, draw!!"
   

}

function lose(user, sistem) {
    sistem_score++;
    text_div.innerHTML = user= " lose "+sistem+" win"
    sistem_points.innerHTM = sistem_score;

}


function sistemchoose() {
    let number = Math.floor(Math.random() * 3);
    let answer = ["rock", "paper", "scissor"];
    return answer[number];
}

function load(){
    rock_div.addEventListener("click",() => choose("rock"));
    paper_div.addEventListener("click", () => choose("paper"));
    scissor_div.addEventListener("click", () => choose("scissor"));

}
