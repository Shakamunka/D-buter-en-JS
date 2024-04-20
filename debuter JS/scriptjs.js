var essaisRestants = 3;

function validerLeFormulaire() {
    var guess = document.forms["TakeAGuess"]["guess"].value;
    
    if (guess === "" || isNaN(guess)) {
        alert("Veuillez entrer un nombre valide.");
        return false;
    }

    jouerLeJeu(parseInt(guess));
    return false;
}
alert ("Voici un mini-jeux simple : \n un nombre aléatoire compris entre 0 et 100 est généré. \n Vos avez trois essais pour le trouver. \n Bonne chance.")

function genererNombre() {
    return Math.floor(Math.random() * 101);
}

function jouerLeJeu(userGuess) {
    var numb = genererNombre();

    if (numb > userGuess) {
        alert("Plus grand, il vous reste " + (essaisRestants - 1) + " essai(s).");
    } else if (numb < userGuess) {
        alert("Plus petit, il vous reste " + (essaisRestants - 1) + " essai(s).");
    } else if (numb === userGuess) {
        alert("Vous avez gagné !\nFélicitations !");
        resetGame();
        return;
    }

    essaisRestants--;

    if (essaisRestants === 0) {
        alert("Vous avez perdu...\nEssayez à nouveau.\nLa réponse était : " + numb + ".");
        resetGame();
    }
}

function resetGame() {
    essaisRestants = 3;
    document.forms["TakeAGuess"]["guess"].value = "";
}
