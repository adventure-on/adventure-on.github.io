
/**
 * Scrive il contenuto incasellandolo in una cella che occupa 12 colonne e una riga a sé stante.
 */
function writeRowLarge(content) {
    document.write(
          '<div class="row">'
        + '<div class="col-12">'
	);
	document.write(content);
	document.write(
		  '</div>'
        + '</div>'
	);
}

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
    //text = text.replace(new RegExp('\r?\n','g'), "<br />"); // Sostituisco i NEW LINE con tag html BREAK LINE (<br />)
    text = text.replace(new RegExp('-p-','g'), "</p><p>"); // Nuovo paragrafo

	writeRowLarge("<p>" + text + "</p>");
}

function writeParagraphErrorMessage() {
	writeRowLarge('<p>La pagina che stavi cercando non è stata trovata.</p>');
	writeRowLarge('<a href="../index.html" class="btn btn-primary">Torna all\'inizio</a>');
}
