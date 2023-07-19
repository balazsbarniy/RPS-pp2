const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");
const result_div = document.querySelector(".text");
const user_points = document.getElementById("user-points");
const system_points = document.getElementById("system-points");
const restart_div = document.getElementById("restart-div");
const restart_button =document.getElementById("restart");
let user_score = 0;
let system_score = 0;

function valuation(user) {
    var system = systemchoose();
    switch(user + system) {
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
        win(user, system);
        break;
            case "rockrock":
            case "paperpaper":
            case "scissorscissor":
            draw(user, system);
            break;
                 case "scissorrock":
                 case "rockpaper":
                 case "paperscissor":
                 lose(user, system);
                 break;
    }
}

function choose(value){
    if (value === "rock") {
        valuation("rock");
        
    }
    else if (value === "paper") {
        valuation("paper");
        
    }
    else if(value === "scissor") {
        valuation("scissor");
        
    }
load(choose);
}



function nameconvert(value) {
    if (value === "rock") {
        return "Rock";
    }
    else if (value === "paper") {
        return "Paper";
    }
    else  {
        return "Scissor";
    }
}
function win(user, system) {
    user_score++;
    result_div.innerHTML = nameconvert(user) + " win , " + nameconvert(system) + " lose";
    user_points.innerHTML = user_score;
    
}

function draw(user, system) {
    result_div.innerHTML = nameconvert(user) + " and  "+ nameconvert(system) + " same, draw!!";
   

}

function lose(user, system) {
    system_score++;
    result_div.innerHTML = nameconvert(user) + " lose , "+ nameconvert(system) + " win";
    system_points.innerHTML = system_score;

}
function scoreCheck() {
    if (user_score >= 10){
        result_div.innerHTML = "U WIN!!   to restart click to 'Restart' button!"
        rock_div.removeEventListener("click", () => choose("rock"));
        paper_div.removeEventListener("click", () => choose("paper"));
        scissor_div.removeEventListener("click", () => choose("scissor"));
        restart_div.classList.remove("invisible");
        restart_div.classList.add("visible");
        restart_button.addEventListener("click", () => location.reload());
    }else if (system_score >=10){
        result_div.innerHTML = "SYSTEM WIN!!   to restart click to 'Restart' button!"
        rock_div.removeEventListener("click", () => choose("rock"));
        paper_div.removeEventListener("click", () => choose("paper"));
        scissor_div.removeEventListener("click", () => choose("scissor"));
        restart_div.classList.remove("invisible");
        restart_div.classList.add("visible");
        restart_button.addEventListener("click", () => location.reload());

    }
}
setInterval(scoreCheck, 100);


function systemchoose() {
    let number = Math.floor(Math.random() * 3);
    let answer = ["rock", "paper", "scissor"];
    return answer[number];
}



function load(){
    rock_div.addEventListener("click",() => choose("rock"));
    paper_div.addEventListener("click", () => choose("paper"));
    scissor_div.addEventListener("click", () => choose("scissor"));

}
load(rock_div);
load(paper_div);
load(scissor_div);