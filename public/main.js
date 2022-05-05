// Focus div based on nav button click
function div(name) { // set active div on click
    var active = Array.from(document.getElementsByClassName("active")) // get collection of active divs
    active.forEach(function (currentdiv) {
        currentdiv.setAttribute("class", "hidden");
    })

    document.getElementById(name).setAttribute("class", "active") // show clicked div
}


// Flip one coin and show coin image to match result when button clicked
function flipCoin() {
    fetch('http://localhost:5000/app/flip/')
    .then(function(response) {
        return response.json();
    })
    .then(function(result) {
        console.log(result);
        document.getElementById("flipCoinResult").innerHTML = result.flip; // change result text
        document.getElementById("quarter").setAttribute("src", "assets/img/"+result.flip+".png"); // change image
    })
}



// Flip multiple coins and show coin images in table as well as summary results
// Enter number and press button to activate coin flip series
function flipCoins() {
    fetch('http://localhost:5000/app/flip/coins', {mode: 'post'})
    .then(function(response) {
        return response.json();
    })
    .then(function(result) {
        console.log(result);

        document.getElementById("headsSummary").innerHTML = result.heads; // update summary paragraphs
        document.getElementById("tailsSummary").innerHTML = result.tails;

        document.getElementById("result").innerHTML = result.flip; // change result text
        document.getElementById("quarter").setAttribute("src", "./assets/img/"+result.flip+".png"); // change image

        for (var i=0; i < result.raw.length; i++) {
            var coin = document.createElement("img")
            coin.setAttribute("src", "assets/img/" + result.raw[i] + ".png");
            coin.setAttribute("class", "smallcoin")
        }
    })
}

// Guess a flip by clicking either heads or tails button
function guessFlip(guess) {
    fetch('http://localhost:5000/app/flip/call')
    .then(function(response) {
        return response.json();
    })
    .then(function(result) {
        console.log(result);

        document.getElementById("guessImage").setAttribute("src", "./assets/img/"+result.call+".png"); // change image
        document.getElementById("actualImage").setAttribute("src", "./assets/img/"+result.flip+".png");
        document.getElementById("guessResult").innerHTML = result.result; // change result text
    })
}