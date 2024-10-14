let container = document.getElementById("container");
let newgame = document.getElementById("n-game");
let boxes = document.querySelectorAll(".box");
let reset = document.getElementById("reset");
let gover = document.getElementById("gover");
let win = document.getElementById("h2");
let player1 = true;
//winning patterns.....
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (player1) {
            box.innerText = "O";
            player1 = false;
        }
        else {
            box.innerHTML = "&#10008;";
            player1 = true;
        }
        box.disabled = "true";
        check();
    });
});
//checking patterns...
const check = () => {
    for (let pattern of winPatterns) {
        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;
        if (p1 != "" && p2 != "" && p3 != "") {
            if (p1 === p2 && p2 === p3) {
                console.log("winner is ", p1);
                boxes.forEach((box) => {
                    box.disabled = true;
                })
                win.innerHTML = `Winner is ${p1}   <span id="rot">&#127988;</span>`;
                setTimeout("wait()", 300);
            }
        }
    }
}
//wait....
function wait() {
    container.classList.add("hide");
    gover.classList.remove("hide");
    reset.classList.add("hide");
}
//reset button....
let rset = () => {
    player1 = true;
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    })
}
//new game button....
let ngame = () => {
    player1 = true;
    gover.classList.add("hide");
    container.classList.remove("hide");
    reset.classList.remove("hide");

    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    })
}
//event listener...
reset.addEventListener("click", rset);
newgame.addEventListener("click", ngame);