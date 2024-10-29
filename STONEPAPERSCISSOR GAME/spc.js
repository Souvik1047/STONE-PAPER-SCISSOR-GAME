let choices = document.querySelectorAll(".choice");
let yourpoint = 0;
let comppoint = 0;
const compwin = document.querySelector("#cwin");
const youwin = document.querySelector("#ywin");
let pick = document.querySelector(".pick");
const getcompchoice = () => {
    const comparray = ["stone", "paper", "scissor"];
    const compchoice = Math.floor(Math.random()*3);
    return (comparray[compchoice]);
}

const checkwinner = (userchoice) => {
    console.log("The Item is clicked is =", userchoice);
    const compelement = getcompchoice();
    console.log("the item computer choose is=", compelement);
    if (userchoice === compelement) {
        console.log("IT IS A DRAW GAME");
        drawprint();
    }
    else if ((userchoice === "stone" && compelement === "scissor") || (userchoice === "scissor" && compelement === "paper")) {
        console.log("YOU ARE A WINNER CONGRATS");
        winprint();
    }
    else {
        console.log("LOOSER");
        looseprint();
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        checkwinner(userchoice);
    });
});
const looseprint = () => {
    comppoint++;
    compwin.innerText= comppoint;
    pick.innerText = "LOSE";
    pick.style.backgroundColor ="red";
}
const winprint = () => {
    yourpoint++;
    youwin.innerText= yourpoint;
    pick.innerText = "WINNER";
    pick.style.backgroundColor ="yellow";
}
const drawprint = () => {
    pick.innerText = "PLAY AGAIN";
    pick.style.backgroundColor ="blue";
}