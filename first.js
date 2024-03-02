let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector(".reset");
let newGameBtn = document.querySelector(".new_btn");
let container = document.querySelector(".msg-container");
let msg =  document.querySelector("#msg");
let count =0;
let turnX = true;//player1 = X, player2= O
const winPatterns = [
     [0,1,2],
     [0,3,6],
     [0,4,8],
     [1,4,7],
     [2,5,8],
     [2,4,6],
     [3,4,5],
     [6,7,8],
];
boxes.forEach((box)=>{
     box.addEventListener("click",()=>{
      if(turnX == true){
          box.innerText = "X";
          turnX = false;
      }   
      else{
          box.innerText = "O";
          turnX =  true;
      }
      count++;
      box.disabled =  true;
      let isWinner = checkWinner();
if (count === 9 && !isWinner){
    gameDraw(); 
}
     });
});
const gameDraw=()=>{
     msg.innerText = "Game Draw!!!";
     msg-container.classList.remove("hide");
     disabbleBoxes();
}

const disabbleBoxes = () =>{
     for(box of boxes){
          box.disabled = true;
     }
}
const enableBoxes = () =>{
     for(box of boxes){
          box.disabled = false;
          box.innerText ="";
     }
}
const showWinner=(winner)=>{
     msg.innerText = `Congratulation Winner is ${winner}`;
     msg-container.classList.remove("hide");
    disabbleBoxes();
}
const checkWinner = () =>{
     for(patterns of winPatterns){
          let pos1 = boxes[patterns[0]].innerText;
          let pos2 = boxes[patterns[1]].innerText;
          let pos3 = boxes[patterns[2]].innerText;
          if(pos1 !="" && pos2 !="" && pos3 != ""){
               if(pos1 == pos2 && pos2==pos3){
                    showWinner(pos1);
                    return true;
               }
          }
     }
}
const resetGame=()=>{
     turnX = true;
     enableBoxes();
     msg-container.classList.add("hide");
     count =0;
}
newGameBtn.addEventListener("click", resetGame);
reset_btn.addEventListener("click", resetGame);
