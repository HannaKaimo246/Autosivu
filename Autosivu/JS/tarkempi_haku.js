const proxy = 'https://cors-anywhere.herokuapp.com/';

function fillInfo(form) {
    console.log(form.maakunta.value);
    let maakunta_haku = form.maakunta.value;
    let merkki_haku = form.merkki.value;
    let malli_haku = form.malli.value;
    let vari_haku = form.vari.value;
    const art3 = document.getElementById("art3");
    art3.innerHTML = `<h4>
            Etsitään autoja, Odota hetki...
         </h4>`;
    const tarkka_haku_tulos = document.createElement("article");
    tarkka_haku_tulos.setAttribute("id", "tarkka_haku_tulos");
    const xhttp2 = new XMLHttpRequest();
    xhttp2.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            art3.innerHTML = xhttp2.responseText;
            console.log(xhttp2.responseText);
        }
    };
    xhttp2.open("GET", proxy+"http://users.metropolia.fi/~kenertml/tarkempi_haku.php?maakunta="+maakunta_haku+"&merkki="+merkki_haku+"&malli="+malli_haku+"&vari="+vari_haku, true);
    xhttp2.send();
}