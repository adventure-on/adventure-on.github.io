/**
 * Funzione che considera di avere già un numero ben formato come numero del paragrafo.
 * Se quel paragrafo esiste, ci si sposta alla pagina corrispondente.
 * Se non esiste, viene visualizzato un messaggio informativo.
 */
function goToParagraph(code) {
    window.location.href = (buildPageURL(code));
}

/**
 * Funzione che viene invocata quando si cerca di muoversi ad un altro paragrafo.
 * In generale, viene invocata quando si clicca il bottone.
 */
function onFormGo(originalCode) {
    var form = document.getElementById("inputcode");
    var parCode = form.value + "";
    parCode = parCode.toUpperCase();
    // Verifico se ha lunghezza inferiore
    if (parCode.length < 4) {
        window.alert("Per favore, inserisci un codice di 4 cifre.");
    } else if (unknownCode(parCode)) {
        // Decidere se si vuole avvisare che il codice non funziona
        //window.alert("Mi dispiace, nessun paragrafo corrisponde al codice <" + parCode + ">.");
		// Forzo la pagina a rimanere qui
		window.location.href = (buildPageURL(originalCode));
    } else {
		//window.alert("Ok, sto per invocare\ngoToParagraph(" + parCode + ");");
        goToParagraph(parCode);
    }
}

/**
 * Funzione che disegna il form a fine pagina.
 */
function writeFormFooter(originalCode) {
    // Linea di separazione
    document.write("<hr>");
    // Footer
    document.write(
          "<div class=\"row\">"
            + "<div class=\"col-12 text-center\">"
                + '<div class="form-row align-item-center">'
                    + '<div class="form-group mx-sm-3 mb-2">'
                        + '<input type="text" class="form-control code" id="inputcode" name="inputcode" maxlength="4" placeholder="Prossimo paragrafo" required>'
                    + '</div>'
                    + '<button onClick=\"onFormGo(\'' + originalCode + '\')\" class=\"btn btn-primary ml-2 mb-2\">Go</button>'
                + '</div>'
            + '</div>'
        + '</div>'
    );
}
