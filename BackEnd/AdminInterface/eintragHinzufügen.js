function buttonPressed(){
    const name = document.getElementById("Name").value;

    var radios = document.getElementsByName('gridRadios');

    for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
        // do whatever you want with the checked radio
        const kategorie = radios[i].value;

        break;
        }
    }

    const strasse = document.getElementById("Strasse").value;
    const hausnummer = document.getElementById("Hausnummer").value;
    const plz = document.getElementById("PLZ").value;
    const long = document.getElementById("Long").value;
    const lat = document.getElementById("Lat").value;
    const beschreibung = document.getElementById("Beschreibung").value;
    const link = document.getElementById("Link").value;
    const datum = document.getElementById("Datum").value;

    
}