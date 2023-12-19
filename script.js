



let color = "black";

let click = false;
document.addEventListener("DOMContentLoaded", function(){
    //default size
    createBoard(16);

     
    
    document.querySelector("body").addEventListener("click", function(e){
        if (e.target.tagName != "BUTTON") {
            click = !click;
            let draw = document.querySelector("#draw");
            if(click) {
                draw.innerHTML = "Draw mode active";
        }
        else {
            draw.innerHTML = "Draw mode inactive";
        }
        }
    })
    

    
    let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener("click", function (){
        let size = getSize();
        createBoard(size);
    })
    
})

function createBoard(size) {
    let board = document.querySelector(".board");
    
    board.style.gridTemplateColumns =`repeat(${size}, 1fr)`;
    board.style.gridTemplateRows =`repeat(${size}, 1fr)`;
    

    board.innerHTML = " ";
    let numDivs = size * size;
    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        //draw hover
        //NOT WORKING 
        div.addEventListener("mouseover", colorDiv)
    
        
        board.appendChild(div);
        
    }

}


function getSize () {
    let input = prompt("What will be the size of the board?");
    let message = document.querySelector("#message");
    if (input == "") {
        message.innerHTML = "Please provide a number";
    }
    else if (input < 0 || input > 100) {
        message.innerHTML = "Provide a number between 1 and 100";
    }
    else{
        message.innerHTML = "Now you play!";
        return input;
    }
}
 

//

function colorDiv () {
   if(click) {
    if (color == "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    } else {
        // Darken the color progressively
        darkness += 0.1;
        this.style.backgroundColor = `rgba(0, 0, 0, ${darkness})`;
    }
}
}



function setColor(colorChoice) {
 color = colorChoice;
 darkness = 0; // Reset darkness when changing color
}

//reset
//get all the divs and make it all white
function resetBoard() {
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white");
    darkness = 0; // Reset darkness when resetting the board
}

