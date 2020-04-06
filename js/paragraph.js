
/**
 * Funzione che scrive il testo di un paragrafo, dato il codice.
 * Si suppone ovviamente che il codice esista e sia già stato verificato, e che a tale
 * codice corrisponda un paragrafo dell'array "paragraphs".
 */
function writeParagraphText(code) {
    // Estraggo il testo "crudo"
    var text = paragraphs[code];
    // Formattazione
    text = text.trim();
    text = text.replace(new RegExp('\r?\n','g'), "<br />"); // Sostituisco i NEW LINE con tag html BREAK LINE (<br />)
    text = text.replace(new RegExp('-p-','g'), "</p><p>"); // Nuovo paragrafo

    // Scrivo tutto
    document.write(
        '<div class="row">'
        + '<div class="col-12">'
        + '<p>'
        + text
        + '</p>'
        + '</div>'
        + '</div>'
    );
}

function writeParagraphErrorMessage() {
    document.write(
        '<div class="row">'
        + '<div class="col-12">'
        + '<p>'
        + "La pagina non è stata trovata.<br />Prova a ripartire dal file <code>index.html</code>"
        + '</p>'
        + '</div>'
        + '</div>'
    );
}
