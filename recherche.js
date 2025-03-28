function fermer() {
    document.querySelector("dialog").close();
    document.getElementById("myAudio").pause();
}
function rechercher() {
var testlower = document.getElementById("s1").value.toLowerCase();
document.getElementById('iframe').style.display = "none";
document.getElementById("myAudio").pause();
document.getElementById("myAudio").currentTime = 0;
if(testlower=="meleya"){
    document.getElementById('p2').innerHTML = "Créé par Arthur Meley";
    document.getElementById('p1').innerHTML = "Meleya est un moteur de recherche qui permet de rechercher des inventions et des mots dans un dictionnaire.";
    } else if(testlower=="rechargeur automatique") {
        document.getElementById('p2').innerHTML = "Créé par Arthur Meley";
        document.getElementById('p1').innerHTML = "Le rechargeur automatique permet de fabriquer de l'electricité grâce à deux méthodes : en utilisant sa propre électricité pour faire tourner un alternateur, ou avec des pompes des pompes à air tournant avec des pompes à air.";
    } else if(testlower=="test") {
        window.location.href = 'meleya.test.html';
    } else if(testlower=="détente"|testlower=="se détendre") {
        document.getElementById('iframe').style.display = "block";
        document.getElementById('p2').innerHTML = "Détendez-vous !";
        document.getElementById('p1').innerHTML = "Admirez cette animation";
        document.getElementById("myAudio").play();
        document.querySelector("dialog").showModal();
    } else if(testlower=="dico") {
        window.location.href = 'meleya.dico.html';
    } else if(testlower==""|testlower.substr(0,1)=="<") {
        document.getElementById('p2').innerHTML = "Saisissez vos mots-clés dans la barre de recherche 🔺";
    } else {
        document.getElementById('p2').innerText = "Aucune invention s'appelant : " + "\"" + testlower + "\"";
        document.getElementById('p1').innerText = "";
    }
    if(testlower=="") {
        document.getElementById('ti').innerHTML = "Meleya - Inventions";
    } else {
        document.getElementById('ti').innerHTML = "Resultat pour " + testlower;
    }
}
