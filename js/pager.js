
/**
 * Funzione che scrive un'intera pagina, dato il codice.
 */
function writePage(code) {
    // Funzione che crea il titolo
    writeTitleHeader(code);
    // Funzione che scrive il paragrafo
    writeParagraphText(code);
    // Funzione che scrive il form nel footer
    writeFormFooter(code);
}

/**
 * Funzione che compone una pagina d'errore.
 */
function writeErrorPage() {
    // Creo il titolo d'errore
    writeErrorHeader();
    // Creo il paragrafo con il messaggio d'errore
    writeParagraphErrorMessage();
}
