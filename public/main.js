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
    fetch('http://localhost:5000/app/flip/', {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(result) {
        console.log(result);
        document.getElementById("result").innerHTML = result.flip; // change result text
        document.getElementById("quarter").setAttribute("src", "./assets/img/"+result.flip+".png"); // change image
        coin.disabled = true
    })
}



// Flip multiple coins and show coin images in table as well as summary results
// Enter number and press button to activate coin flip series

// Guess a flip by clicking either heads or tails button
