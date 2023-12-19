document.addEventListener("DOMContentLoaded", function(){
    
    createBoard(16);
    
    console.log('hi');
})

function createBoard(size) {
    let board = document.querySelector(".board");
    
    board.style.gridTemplateColumns =`repeat(${size}, 1fr)`;
    board.style.gridTemplateRows =`repeat(${size}, 1fr)`;
    

    board.innerHTML = " ";
    let numDivs = size * size;
    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        board.appendChild(div);
        div.style.backgroundColor = "yellow";
    }

}


function getSize () {
    let input = prompt("Enter a size of the board");
    let message = document.querySelector("#message");
    if (input == "") {
        message.innerHTML = "Please provid a number";
    }
    else if (input < 0 || input > 100) {
        message.innerHTML = "Provide a between 1 and 100";
    }
    else{
        message.innerHTML = "Now you play";
    }
}
 
