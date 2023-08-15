function randomDex() {
    return (Math.floor(Math.random() * 914) + 1);
}

function gibPokemon() {
    partySelector = document.querySelector('#party');
    partySize = partySelector.value;
    console.log(randomDex())

    document.getElementById("dex1").src = "shiny/" + randomDex() + ".png";

    if (partySize > 1){
        document.getElementById("dex2").src = "shiny/" + randomDex() + ".png";
    }
    else{
        document.getElementById("dex2").src = " ";
    }

    if (partySize > 2){
        document.getElementById("dex3").src = "shiny/" + randomDex() + ".png";
    }
    else{
        document.getElementById("dex3").src = " ";
    }

    if (partySize > 3){
        document.getElementById("dex4").src = "shiny/" + randomDex() + ".png";
    }
    else{
        document.getElementById("dex4").src = " ";
    }

    if (partySize > 4){
        document.getElementById("dex5").src = "shiny/" + randomDex() + ".png";
    }
    else{
        document.getElementById("dex5").src = " ";
    }

    if (partySize > 5){
        document.getElementById("dex6").src = "shiny/" + randomDex() + ".png";
    }
    else{
        document.getElementById("dex6").src = " ";
    }
}