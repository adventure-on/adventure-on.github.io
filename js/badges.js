/**
 * Restituisce una stringa per un badge generico.
 */
function getBadge(text, type, alertText='') {
    var s = '';
    s += '<a href="#" class="badge badge-pill badge-' + type + '"';
    s += 'title=\"' + alertText + '\"';
    s += '>';
    s += text;
    s += '</a>   ';
    return s;
}

/**
 * Restituisce una stringa che rappresenta il badge per indicare una sfida SMM.
 */
function smmBadge(challengeMessage='') {
    if (challengeMessage == '') {
        return getBadge("Social Media Manager", "info");
    } else {
        var alertText = 'Sfida per il Social Media Manager!\nInvia un messaggio all’account Instagram @game_of_dice con scritto:\n' + challengeMessage;
        return getBadge("Social Media Manager", "info", alertText);
    }
}

/**
 * Restituisce una stringa che rappresenta il badge per indicare che quel paragrafo
 * è stato sbloccato dallo Scenografo.
 */
function scnBadge(objName='') {
    if (objName == '') {
        return getBadge("Scenografo", "success");
    } else {
        var alertText = 'Questo Paragrafo è associato all\'oggetto: ' + objName + '.';
        return getBadge("Scenografo", "success", alertText);
    }
}

/**
 * Restituisce una stringa che rappresenta il badge per indicare che
 * il paragrafo corrisponde ad una sfida per la quale è richiesto l'uso del
 * bot "produttore_GameBot".
 */
function prdBadge() {
    return getBadge("Produttore", "primary");
}
