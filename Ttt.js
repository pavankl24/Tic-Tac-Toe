let boxes = document.querySelectorAll(".btn");
let reset = document.querySelector(".reset");
let newbtnn = document.querySelector(".new-btn");
let winnertag = document.querySelector(".win")
let cont = document.querySelector(".msg-container")
let turno = true;
let count = 0;
let winning = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [3, 6, 8],
    [0, 4, 8],
    [2, 4, 6],
];
const resetgame = () => {
    turno = true;
    count = 0;
    enableBoxes();
    cont.classList.add("hide");
}
boxes.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log("boxes was clicked");
        if (turno) {
            btn.innerText = "O";
            turno = false;
        } else {
            btn.innerText = "X";
            turno = true;
        }
        btn.disabled = "true";
        count++;

        let isWinner = checkWinner();
        if (count === 9 && !isWinner) {
            gameDraw();
        }

    });
});
const gameDraw = () => {
    winnertag.innerText = `Game was a Draw.`;
    cont.classList.remove("hide");
    disableBoxes();
};
const disableBoxes = () => {
    for (let btn of boxes) {
        btn.disabled = true;
    }
};
const enableBoxes = () => {
    for (let btn of boxes) {
        btn.disabled = false;
        btn.innerText = "";
    }
};
const showWinner = (winner) => {
    winnertag.setAttribute("display", "inline")
    winnertag.innerText = `Congratulations you're the winner ${winner}`;
    cont.classList.remove("hide");
    disableBoxes();
};
const checkWinner = () => {
    for (let pattern of winning) {
        let pos1val1 = boxes[pattern[0]].innerText;
        let pos2val2 = boxes[pattern[1]].innerText;
        let pos3val3 = boxes[pattern[2]].innerText;

        if (pos1val1 != "" && pos2val2 != "" && pos3val3 != "") {
            if (pos1val1 === pos2val2 && pos2val2 === pos3val3) {
                showWinner(pos1val1);
                return true;
            }
        }
    }
};
newbtnn.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);
