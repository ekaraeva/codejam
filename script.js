const lol = document.querySelector('.lol'); 
const card = document.querySelector('.card');
const ordinary = document.querySelector('.ordinary');
const mix = document.querySelector('.mix');
const blueCards = ['blue1', 'blue2', 'blue3', 'blue4'];
const brownCards = [ 'brown5', 'brown6', 'brown7', 'brown8'];
const greenCards = ['green9', 'green10', 'green11', 'green12'];

function randomGreen() {
    let i = Math.floor(Math.random() * greenCards.length);
    console.log(greenCards[i]) ;
}
randomGreen()

