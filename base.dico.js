var genre = {
    bv:"Masculin",
    se_détendre:"Verbe du 3ème groupe",
    détente:"Nom commun feminin",
    iveco_urbanway:"Nom propre de marque",
};
var definition = {
    bv:"BV, ou Batiment Voyageurs désigne dans une gare de trains le batiment qui acueille les passagers.",
    se_détendre:"Être zen, détendu.</br>D\'ailleurs, regardez cette animation.",
    détente:"Fait d\'être zen, détendu.</br>D\'ailleurs, regardez cette animation.",
    iveco_urbanway:"Bus créé par la marque italienne <strong>IVECO Bus</strong>, très répandu grâce à ses différents modes de fonctionnements écologiques :</br> - Biogaz</br> - Hybride</br> - Biogaz hybride</br> - In-motion charging",
};
iframe1 = {
    iveco_urbanway:"Iframes/urbanway.html",
};
function fermer() {
    document.querySelector("dialog").close();
    document.getElementById("myAudio").pause();
}
function rechercher() {
document.getElementById('iframe').style.display = "none";
var test = document.getElementById("s1").value.toLowerCase();
document.getElementById("myAudio").pause();
document.getElementById("myAudio").currentTime = 0;
document.getElementById('p2').innerHTML = genre[test.replace(" ","_")].replace("undefined","Ce mot n\'existe pas dans ce dictionnaire.");
if(iframe1[test.replace(" ","_")]==undefined) {
    document.getElementById('p1').innerHTML = definition[test.replace(" ","_")];
} else {
    document.getElementById('p1').innerHTML = definition[test.replace(" ","_")];
    document.getElementById('dialogue').innerHTML = '<button onclick="fermer();" style="border-radius: 12px; border:solid; border-color:#0094bd; background-color:#d6f6ff;">❌</button><iframe id="iframe" onload="document.getElementById("iframe").style.display = "none";" title="Animation" src='+ iframe1[test.replace(" ","_")] +' style="border:none; width:808.6px; height:520px; align-items:center;"></iframe>';
    document.getElementById('iframe').style.display = "block";
    document.querySelector("dialog").showModal();
}
if(test=="meleya"){
    document.getElementById('p2').innerHTML = "Nom propre";
    document.getElementById('p1').innerHTML = "Meleya est un moteur de recherche qui permet de rechercher des inventions et des mots dans un dictionnaire.";
} else if(test=="se détendre"|test=="détente") {
    document.getElementById('iframe').style.display = "block";        
    document.getElementById("myAudio").play();
    document.querySelector("dialog").showModal();
    //document.getElementById('iframe').src = animation1.html;
} else if(test=="test") {
    window.location.href = 'meleya.test.html';
} else if(test=="inventions") {
    window.location.href = 'meleya.recherche.html';
} else if(test==""|test.substr(0,1)=="<") {
    document.getElementById('p2').innerHTML = "Saisissez votre mot dans la barre de recherche 🔺";
}
}