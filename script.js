let boxes=document.querySelectorAll(".box");
let winner=document.querySelector(".winner");
let topText=document.querySelector(".topText");
let newGame=document.querySelector("#newGame");
let reset=document.querySelector("#reset");
let draw=document.querySelector(".draw");

let turn=true;
let count=0;

let winPatterns=[[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]];

let gameDraw=()=>{
    topText.classList.remove("hide");
    winner.innerText="Game Draw"
    

}

let resetGame=()=>{
    turn=true;
    enableBoxes();
    topText.classList.add("hide");
    count=0;
}
    


const showWinner=(win)=>{  

    topText.classList.remove("hide");
    disableBoxes();
    winnerText=`Winner is ${win}`;
    winner.innerText=winnerText;
};
    
let disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

let enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }

};
let checkWinner=()=>{
    
    for(let pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        let pos2=boxes[pattern[1]].innerText;


        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1 === pos2 && pos2===pos3){
                showWinner(pos1);
                return true;
            }
        }

    }
    };

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn){
            box.innerHTML="X";
            turn=false;
        }else{
            box.innerHTML="O";
            turn=true;
        }
        count++;
        console.log(count)
        box.disabled = true;
        let isWinner= checkWinner();

        if(count==9 && !isWinner){
            gameDraw();
        }

    });

    
});


newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);

