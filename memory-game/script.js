const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  let num = 1;
  for (let color of colorArray) {
    
    // create a new div
    const newDiv = document.createElement("div");
    

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
    newDiv.setAttribute("id", num);
    num++;

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

let card1 = "";
let card2 = "";
let clickArray = [];
let idArray = [];
let matchInProgress = false;
{
  // TODO: Implement this function!
function handleCardClick(event) {
  if(event.target.classList.contains("matched")) return;
  
  if(matchInProgress === true) return;
  
  let flippedCard = event.target;
  
  
  clickArray.push(event.target.classList.value);
  idArray.push(event.target.id);
  event.target.style.backgroundColor = event.target.classList.value
  
  if(!card1){
    card1 = flippedCard;
  } else if (!card2){
    card2 = flippedCard;
  }

  if(clickArray.length === 2){
    matchinProgress = true;
    if(clickArray[0] === clickArray[1] && idArray[0] !== idArray[1]){
      console.log('match');
      clickArray = [];
      idArray= [];
      matchinProgress = false;
      card1 = "";
      card2 = "";
    } else {
      setTimeout(function(){
        card1.style.backgroundColor = "";
        card2.style.backgroundColor = "";
        card1 = "";
        card2 = "";
        matchinProgress = false;
        clickArray = [];
        idArray= [];
      }, 2000)
    }
  }
  console.log(clickArray);
};

};

// when the DOM loads
createDivsForColors(shuffledColors);












/* console.log(shuffledColors);
  // you can use event.target to see which element was clicked
  //console.log("you just clicked", event.target, event.target.classList.value);
  event.target.style.backgroundColor = event.target.classList.value
  clickArray.push(event.target.classList.value)
  if(clickArray.length === 2){
    if(clickArray[0] === clickArray[1]){
      console.log('match!');
    }




    console.log(shuffledColors)
  event.target.style.backgroundColor = event.target.classList.value
  clickArray.push(event.target.classList.value);
  idArray.push(event.target.id);
  
  
  let val = setInterval(function(){
    
    if(clickArray.length === 2){
      if(clickArray[0] === clickArray[1] && idArray[0] !== idArray[1]){
        console.log('match!');
        clearInterval(val);
      }
    }  else {
      event.target.style.backgroundColor = "";
      
    }
        

  }, 3000)
  
  console.log(clickArray, event.target.id);
  }*/