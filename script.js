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

 
