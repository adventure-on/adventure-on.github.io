
/**
 * Funzione che scrive l'header con il titolo e il numero del paragrafo.
 */
function writeTitleHeader(paragraphNumber) {
    document.write(
        '<div class="row">'
        + '<div class="col-12">'
        + '<h1 class="display-3">Paragrafo ' + paragraphNumber + '.</h1>'
        + '</div>'
        + '</div>'

    );
}

function writeErrorHeader() {
    document.write(
        '<div class="row">'
        + '<div class="col-12">'
        + '<h1 class="display-3">Pagina non trovata.</h1>'
        + '</div>'
        + '</div>'
    );
}
