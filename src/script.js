let game = document.getElementsByClassName("pacman")[0];
console.log(game);

let isDisplayed = false;

function playPacman() {
    
    isDisplayed = !isDisplayed;
    console.log(isDisplayed);
}

if (isDisplayed) {

    game.style.display = "block";

} else {

    game.style.display = "none";

}
