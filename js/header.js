
/**
 * Funzione che scrive l'header con il titolo e il numero del paragrafo.
 */
function writeTitleHeader(paragraphNumber) {
    document.write(
        '<div class="row">'
        + '<div class="col-12">'
        + '<h1 class="display-1">Paragrafo ' + paragraphNumber + '.</h1>'
        + '</div>'
        + '</div>'

    );
}

function writeErrorHeader() {
    document.write(
        '<div class="row">'
        + '<div class="col-12">'
        + '<h1 class="display-1">Pagina non trovata.</h1>'
        + '</div>'
        + '</div>'
    );
}
