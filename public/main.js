// Focus div based on nav button click
//add event listener for each navigation button => display hidden div


// Flip one coin and show coin image to match result when button clicked
const coin = document.getElementById("coin") // Add event listener for coin button
coin.addEventListener("click", flipCoin)
function flipCoin() {
    fetch('http://localhost:5000/app/flip/', {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(result) {
        console.log(result);
        document.getElementById("result").innerHTML = result.flip; // change result text
        document.getElementById("quarter").setAttribute("src", result.flip+".jpg"); // change image
        coin.disabled = true
    })
}



// Flip multiple coins and show coin images in table as well as summary results
// Enter number and press button to activate coin flip series

// Guess a flip by clicking either heads or tails button
