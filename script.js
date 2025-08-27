// Part 1 Mastering JavaScript Basics

// EA Capitals Quiz
// A quiz where the user is asked to enter the capital of countries in East Africa


const eastAfricanCapitals = [
    {country: "Kenya", capital: "Nairobi"},
    {country: "Uganda", capital: "Kampala"},
    {country: "South Sudan", capital: "Juba"},
    {country: "Tanzania", capital: "Dodoma"},
    {country: "Burundi", capital: "Gitega"},
    {country: "Rwanda", capital: "Kigali"},
    {country: "Somalia", capital: "Mogadishu"},
    {country: "Democratic Republic of the Congo (DRC)", capital: "Kinshasa"}
]; // Array containing data on East Afican countries and their capitals


// Code to pick a country randomly for the quiz question
const numberOfCapitals = eastAfricanCapitals.length; 
let randomIndex = Math.floor(Math.random() * numberOfCapitals);
let pickedCountry = eastAfricanCapitals[randomIndex].country;
let pickedCountryCapital = eastAfricanCapitals[randomIndex].capital;

// Access the elements in DOM for interactivity
const pickedCountrySpans = document.getElementsByClassName("picked-country"); // Spans for displaying randomly picked country
const userAnswerInput = document.getElementById("capital-answer-input"); // Input element for accessing user answer
const userAnswerSubmitButton = document.getElementById("submit-capital"); // Button element for submitting user answer
const responseDiv = document.getElementById("response"); // The div element for displaying result messages
const trialFeedBackSpan = document.getElementById("result"); // Span element for showing result
const correctAnswerSpan = document.getElementById("answer"); // Span element for showing correct answer
const attemptAnotherButton = document.getElementById("attempt-another"); // Button for generating new question

pickedCountrySpans[0].textContent = pickedCountry;  // Add country to question text
pickedCountrySpans[1].textContent = pickedCountry; // Add country to answer text 


// Disable submit button only until the text in input is more than 2 characters
userAnswerInput.addEventListener('keyup', (e) => {        
    if (e.originalTarget.value.length > 2) {
        userAnswerSubmitButton.disabled = false;
    } else {
        userAnswerSubmitButton.disabled = true;
    }
});

// Obtain user answer after submission
userAnswerSubmitButton.addEventListener("click", () => {
    let userAnswer = userAnswerInput.value;
    responseDiv.classList = "visible"; // make response section visible

    // Check if user answer is correct
    if (userAnswer.trim().toLowerCase() !== pickedCountryCapital.toLowerCase()) {  // If answer is wrong
        trialFeedBackSpan.innerText = "wrong"; // Indicate the user is wrong in text
        trialFeedBackSpan.style.color = "red"; // show 'wrong' text in red        
        
    } else {        
        trialFeedBackSpan.innerText = "correct";  // Indicate that the user's answer is correct
        trialFeedBackSpan.style.color = "green";  // show the 'correct' text in green        
        userAnswerInput.value = "";   // Empty the input field
    }
    correctAnswerSpan.innerText = pickedCountryCapital.toUpperCase(); // Show correct answer in capital letters
});

// When user clicks for another attempt, pick another random country
attemptAnotherButton.onclick = () => {    
    randomIndex = Math.floor(Math.random() * numberOfCapitals); // randmoly select an index
    pickedCountry = eastAfricanCapitals[randomIndex].country;  // access the country
    pickedCountryCapital = eastAfricanCapitals[randomIndex].capital; // access the capital

    pickedCountrySpans[0].textContent = pickedCountry; // Add country to question text
    pickedCountrySpans[1].textContent = pickedCountry; // Add country to answer text
    responseDiv.classList = "hidden"; // hide the response section
};




// Part 2: JavaScript Functions 

// function to perform addition
function add(a, b) {
    return a + b;
}

console.log(`Sum of 3 and 5 is ${add(3, 5)}`); // example addition operation


// function to perform subtraction
function subtract(a, b) {
    return a - b;
}

console.log(`Difference between 7 and 3 is ${subtract(7, 3)}`); // example subtraction operation

// function to perform division
function division(a, b) {
    return a / b;
}

console.log(`5 divided by 2 is ${division(5, 2)}`); // example division operation

// function to perform multiplication
function multiplication(a, b){
    return a * b;
}

console.log(`Product of 4 and 7 is ${multiplication(4, 7)}`); // example mulitplication operation

// function to perform exponentiation
function exponentiate(a, b) {
    return a ** b;
}

console.log(`4 to the power 2 is ${exponentiate(4, 2)}`) // example exponentiation operation

// function to perform exponentiation with power 2
function toPowerTwo(a) {
    return exponentiate(a, 2); // Reuse the exponentiate function
}

console.log(`Eight squared is ${toPowerTwo(8)}`)  // example exponentiation to power 2

// function to perform exponentiation with power 2
function toPowerThree(a) {
    return exponentiate(a, 3); // Reuse the exponentiate function
}

console.log(`4 cubed is ${toPowerThree(4)}`); // example exponentiation to power 2


// function that cleans text by trimming beginning and trailing spaces and 
// transforms text to lowercase
function cleanText(text, lower=false) {
    text = text.trim()
    if (lower) text = text.toLowerCase();
    return text;
}

// function that checks for palindromes (text that spells the same when reversed)
function isPalindrome(text) {     
    text = cleanText(text, lower=true);   // clean text
    let splitText = text.split("") // split the text into an array of characters
    let reversedText = splitText.reverse().join(""); // reverse the array of characters and join to form text
    return text === reversedText; // check for strict equality between the original and reversed text
}

console.log("The word 'civic' is a palindrome: ", isPalindrome('civic')); // palindrome check: Passes
console.log("The word 'honour' is a palindrome: ", isPalindrome('honour')); // palindrome check: Fails

// function that checks for anagrams (two meaningful texts that are made from the same set of characters)
function areAnagrams(firstText, secondText) {
    // clean the text, remove any non-trailing spaces, and split into an array of characters
    let splitFirstText = cleanText(firstText, lower=true).replaceAll(" ", "").split(""); 
    let splitSecondText = cleanText(secondText, lower=true).replaceAll(" ", "").split("");
    // sort the array of characters in ascending order
    let sortedArray1 = splitFirstText.sort();
    let sortedArray2 = splitSecondText.sort();
    // join the two arrays and compare the resulting texts
    return sortedArray1.join("") === sortedArray2.join("");
}

// Check for anagrams: Passes
console.log("The statements 'Emperor Octavian' and 'Captain over Rome' are anagrams:", areAnagrams('Emperor Octavian', 'Captain over Rome'));




// Part 3: JavaScript Loops


// Create a simulation involving 7 bars with colors found in a rainbow

let rainbow = ["red", "orange", "yellow", "green", "blue", 
    "indigo", "violet"]; // An array containing all colors of the rainbow

let rainbowBars = document.getElementsByClassName('rainbow-color'); // Access the rainbow bars in the DOM, returns a NodeList.


// Animate the 7 colors symmetrically within 4.2 seconds
setInterval(() => {
    // Iterate through the rainbow bars and rainbow colors, then assign the color to each bar
    
    for (i = 0; i < rainbow.length; i++) {
        let bar = rainbowBars[i];    // access node (bar)
        let color = rainbow[i];      //  access rainbow color
        
        setTimeout(() => {
            bar.style.backgroundColor = color; // assign background color to bar
        }, (i+1) * 300);    // Color assignment, from red to violet, happens and different intervals of 300 ms
    }

    // Iterate through each color in the rainbow, but assign colors in reverse order
    // to make the animated colors symmetrical
   rainbow.forEach((color, index) => {
        setTimeout(() => {            
            rainbowBars[6 - index].style.backgroundColor=color; // assign background color to each node (bar)
        }, (index + 1) * 300); // Color assignment, from red to violet, happens and different intervals of 300 ms
        
    })
}, 4200)




// Part 4: Javascript DOM

// This section accesses the elements in the DOM to simulate a ball bouncing 
// inside the walls of a box. It uses the buttons to control some simulation 
// parameters and change ball color



let ballContainer = document.getElementById("ball-container"); // Access the box that contains the ball
let ball = document.getElementById("ball");   // Access the ball 

// Buttons
let simulationStartBtn = document.querySelector("#simulation-start-btn"); // Access button that starts the simulation
let simulationStopBtn = document.querySelector("#simulation-stop-btn"); // Access button that stops the simulation
let changeBallColorBtn = document.querySelector("#change-ball-color-btn"); // Access the button that changes ball color
let speedUpBtn = document.querySelector("#speed-up-btn");   // Access the button that speeds up the bouncing simulation
let slowDownBtn = document.querySelector("#slow-down-btn"); // Access the button that slows down the bouncing simulation

// Access the box
let ballContainerRect = ballContainer.getBoundingClientRect(); // Access the box dimension and position information
let containerStyles = window.getComputedStyle(ballContainer); // Access the style properties and values used for the box
let ballContainerBorderThickness = Number(containerStyles.borderWidth.replace("px", "")); // Obtain the thickness of the box walls,
// perform type conversion into a Number


// Access the positions of each  side of the box relative to the viewport
let ballContainerLeft = ballContainerRect.left; // Left side
let ballContainerRight = ballContainerRect.right;  // right side
let ballContainerTop = ballContainerRect.top;  // top side
let ballContainerBottom = ballContainerRect.bottom; // bottom side

// Calculate the inner sides of the box after accounting for wall thickness
let ballContainerInnerLeft = ballContainerLeft + ballContainerBorderThickness; // left side
let ballContainerInnerRight = ballContainerRight - ballContainerBorderThickness; // right side
let ballContainerInnerTop = ballContainerTop + ballContainerBorderThickness; // top side
let ballContainerInnerBottom = ballContainerBottom - ballContainerBorderThickness; // bottom side

// Access the ball
let ballRect = ball.getBoundingClientRect(); // Access the ball position and dimensions
let ballWidth = ballRect.width; // width of the ball
let ballHeight = ballRect.height; // height of the ball

// Assign the position of the ball relative to the box
let ballX = ball.offsetLeft; // left position of the ball
let ballY = ball.offsetTop; // top postion of the ball


let ballColors = ["red", "green", "blue", "orange", "yellow", "purple", 
    "pink", "brown", "black", "grey", "cyan", "magenta", "lime", "teal", 
    "maroon"]; // The different colors the ball can switch to


let movedDistanceX = 2; // the distance the ball moves per interval in the x axis
let movedDistanceY = Math.ceil(Math.random() * 4); // Randomly select the distance the ball moves per interval in the y axis
let directionX = 1; // the direction the ball moves in the x axis where default is positive (towards the right)
let directionY = 1; // the direction the ball moves in the y axis where default is positive (towards the bottom)

let simulationRunning = false; // Declaration that indicates the status of the simulation. Default is false (not running)
let timerId; // declare an unassigned timerId variable to be assigned the setInterval timer id.

let timeInterval = 15; // The time interval between moved distances in millisecs (moveDistanceX and moveDistanceY)

// Button that starts the simulation
simulationStartBtn.addEventListener('click', (e) => {    
    timerId = runBallSimulation(timeInterval); // Assign timer id from the setInterval timer running the simulation
    e.target.disabled = true;  // disable button once simulation starts 
    simulationStopBtn.disabled = false; // enable the stop simulation button once simulation starts
    speedUpBtn.disabled = false; // enable speeding up of ball motion once simulation starts
    slowDownBtn.disabled = false; // enable slowing down of ball motion once simulation starts
})

// Button that stops the simulation
simulationStopBtn.addEventListener('click', (e) => {        
    clearInterval(timerId); // stop the setInterval timer for the simulation
    e.target.disabled = true; // disable button once simulation stops
    simulationStartBtn.disabled = false; // enable the start simulation button once simulation stops
    speedUpBtn.disabled = true; // enable speeding up of ball motion once simulation stops
    slowDownBtn.disabled = true; // enable slowing down of ball motion once simulation stops
})

// Button that speeds up ball movement
speedUpBtn.addEventListener('click', (e) => {
    timeInterval = timeInterval - 1;  // reduce the speed of the ball
    clearInterval(timerId); // stop the setInterval timer for the simulation
    timerId = runBallSimulation(timeInterval); // start the setInterval timer with the new speed
    if (timeInterval === 1) {          
        e.target.disabled = true; // if timeInterval is 1  disable speeding up to avoid a timeInterval = 0    
    }    
    if (timeInterval === 19) {
        slowDownBtn.disabled = false; // enable slow down button if default speed is not at its slowest limit.
    }
})

slowDownBtn.addEventListener('click', (e) => {
    timeInterval = timeInterval + 1;  // increase the speed of the ball
    clearInterval(timerId); // stop the setInterval timer for the simulation
    timerId = runBallSimulation(timeInterval); // start the setInterval timer with the new speed
    if (timeInterval == 2) {
        speedUpBtn.disabled = false; // if timeInterval is 2  enable speeding up 
    }
    if (timeInterval == 20) {
        e.target.disabled = true; // disable slowing down if default speed is at its slowest limit.
    }
})


changeBallColorBtn.addEventListener('click', () => {   // Change the color of the ball upon clicking
    let ballColor = ballColors[Math.floor(Math.random() * ballColors.length)]; // Pick a color randomly fromavailable ball colors
    ball.style.backgroundColor = ballColor;  // Assign the color to the ball
})


// Declare function  that begins the simulation
function runBallSimulation(speed) {
    return setInterval(() => {        // Set the intervals between the ball movements in both axes
            // if the ball is almost at or past the box wall, reverse direction              

            // Check the position of the ball relative to the inside walls of the box in the x axis
            
            if (ballX + ballContainerInnerLeft + (2 * movedDistanceX * directionX) + ballWidth >= ballContainerInnerRight) {        
                directionX = -1; // reverse ball direction to the left
            } else if (ballX + ballContainerInnerLeft <= ballContainerInnerLeft) {
                directionX  = 1; // reverse ball direction to the right
            }    

            // Check the position of the ball relative to the inside walls of the box in the y axis
            if (ballY + ballContainerInnerTop + (2 * movedDistanceY * directionY) + ballHeight >= ballContainerInnerBottom) {        
                directionY = -1; // reverse ball direction to the top
            } else if (ballY + ballContainerInnerTop <= ballContainerInnerTop) {
                directionY  = 1; // reverse ball direction to the bottom               
            }    

            // Update new ball position
            newBallX = ballX + movedDistanceX * directionX;  // update in the x axis
            newBallY = ballY + movedDistanceY * directionY;  // update in the y axis  

            ball.style.left = newBallX + "px";   // assign position to the left property of ball css style
            ball.style.top = newBallY + "px";// assign position to the top property of ball css style
            
            ballX = ball.offsetLeft  // Access new ball position in x axis relative to box
            ballY = ball.offsetTop // Access new ball position in y axis relative to box
        }, speed);
}

