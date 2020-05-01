/**
 * Restituisce una stringa per un badge generico.
 */
function getBadge(text, type) {
    var s = '';
    s += '<span class="badge badge-' + type + '">';
    s += text;
    s += '</span>  ';
    return s;
}

/**
 * Restituisce una stringa che rappresenta il badge per indicare una sfida SMM.
 */
function smmBadge() {
    return getBadge("Social Media Manager", "info");
}

/**
 * Restituisce una stringa che rappresenta il badge per indicare che quel paragrafo
 * è stato sbloccato dallo Scenografo.
 */
function scnBadge() {
    return getBadge("Scenografo", "success");
}

/**
 * Restituisce una stringa che rappresenta il badge per indicare che
 * il paragrafo corrisponde ad una sfida per la quale è richiesto l'uso del
 * bot "produttore_GameBot".
 */
function prdBadge() {
    return getBadge("Produttore", "primary");
}
