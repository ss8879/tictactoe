const cells=document.querySelectorAll(".box");
let turn=document.getElementById("player");
let currentPlayer="player1";
let error=document.getElementById("error");
let player=document.getElementById("player");
let count=0;
let arr=["","","","","","","","",""]
let game=1;
const pattern=[
    [0, 1, 2], 
    [3, 4, 5],
    [6, 7, 8], 
    [0, 3, 6],
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8],
    [2, 4, 6]  
];
function checkwin(){
    for (let i of pattern) {
        const [a, b, c] = i;
        if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
            player.textContent = arr[a] === "X" ? "Player 1 wins" : "Player 2 wins";
            game=0;
            document.getElementById("reset").style.display="block";
            return;
        }
    }
    if (count === 9) {
        player.textContent = "It's a draw";
        game = 0; 
        document.getElementById("reset").style.display = "block"; 
    }
}

function cellclicked(event){
    if (game==0) return;
    let cellid=event.target.getAttribute("id");
    let cell=document.getElementById(cellid);
    if (cell.textContent === "" ) {
        error.style.display="none";
        if (currentPlayer === 'player1') {
            cell.textContent = "X";
            currentPlayer = 'player2';
            player.textContent="Player 2 turn - O";
            arr[parseInt(cellid,10)]="X"
        } 
        else {
            cell.textContent = "O";
            currentPlayer = 'player1';
            player.textContent="Player 1 turn - X";
            arr[parseInt(cellid,10)]="O"
        }
        count++;
        checkwin();
    }
    else{
        error.style.display="block";
    }
}