let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");
//Winning Pattern Array
let winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],
];
//player 'X' player first
let xTurn = true;
let count = 0;

//Disabl all buttons

const disableButtons = () => {
    btnRef.forEach((element) => (element.disabled = true));
    //enable popup
    popupRef.classList.remove("hide");
};

//Enalbe All Button (For new game and restart)
const enableButtons = () => {
    btnRef.forEach((element) => {
        element.innerText = "";
        element.disabled = false;
    });

    //disable popup
    popupRef.classList.add("hide");
};

//This function is executed when a palyer wins
const winFunction = (letter) => {
    disableButtons();
    if (letter == "X") {
        msgRef.innerHTML = "&#x1F389; <br> 'X' Wins";
    } else {
        msgRef.innerHTML = "&#x1F389; <br> 'O' Wins";
    }
};
//Function for draw
const drawFunction = () => {
    disableButtons();
    msgRef.innerHTML = "&#x1F60E; <br> It's a Draw";
};

// New Game

newgameBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
});
restartBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
});


//Win  logic
const winChecker = () => {
    //loop through all win patterns
    for (let i of winningPattern) {
        let [element1, element2, element3] = [
            btnRef[i[0]].innerText,
            btnRef[i[1]].innerText,
            btnRef[i[2]].innerText,
        ];
        //cheak if elements are filled
        //1f 3 empty elements are same and would give win as would
        if (element1 != "" && (element2 != "") & (element3 != "")) {
            if (element1 == element2 && element2 == element3) {
                //If all 3 buttons have same value then pass the value to win function

                winFunction(element1);
            }
        }
    }
};


//Dispaly X/O on click

btnRef.forEach((element) => {
    element.addEventListener("click", () => {
        if (xTurn) {
            xTurn = false;
            //Dispaly X
            element.innerText = "X";
            element.disable = true;
        } else {
            xTurn = true;
            //display Y
            element.innerText = "0";
            element.disabled = true;
        }
        //Increase count on each click
        count += 1;
        if (count === 9) {
            drawFunction();
        }
        // Cheak for win on every click
        winChecker();
    })
})

window.onload = enableButtons;