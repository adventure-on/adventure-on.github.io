/** Nome della pagina **/
const pageName = "parPage.html";
/** Nome del parametro che viene utilizzato per i link fra paragrafi */
const parameterCode = "code";

/**
 * Funzione che costruisce l'URL della pagina a cui puntare.
 */
function buildPageURL(codeValue) {
	return pageName + "?" + parameterCode + "=" + codeValue;
}
