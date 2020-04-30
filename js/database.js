// Inizializzazione dei paragrafi
var paragraphs = {};

// Impostazione dei vari paragrafi
// Alcune note riguardo alle chiavi: sono sempre MAIUSCOLE

paragraphs["0000"] = prdBadge() + smmBadge() + "-p-Le Seychelles sono un arcipelago di 115 isole nell'oceano Indiano. La bandiera è composta da 5 bande oblique che convergono verso sinistra, simbolo di una nazione giovane che si muove verso il futuro. Il blu rappresenta il mare e il cielo, il giallo il sole, il rosso il popolo, il bianco la giustizia sociale e il verde l'armonia con la natura. Pensate, il piatto tipico è il pipistrello.\n\nOk ora digita il codice <code>0012</code>";

paragraphs["0012"] = "Ecco qui un bel paragrafo interessante.\nPosso fare il <b>grassetto</b> e anche il <i>corsivo</i>.\n\nImmagina che ci sia una storiella e che stia parlando del rubino. Il collezionista lo raccoglie e scopre il codice <code>RUBY</code>.\n\nAltrimenti risolvendo la prova puoi ottenere il codice del capitolo <code>1784</code>.";

paragraphs["RUBY"] = scnBadge() + "-p-Questo è il paragrafo che sblocchi trovando il rubino.\nEvviva.\nGrazie ad esso, scopri che la strada più breve per risolvere la prova è digitare il codice <code>2903</code>.\n\nOra torna pure al paragrafo <code>0012</code>";

paragraphs["1784"] = "Bla bla tante parole bla bla.\nEcco, l'ultima cosa carina che ti faccio vedere:-p-<img src=\"https://i0.wp.com/frasissime.com/wp-content/uploads/2019/09/immagini-con-frasi-sul-karma.jpg?fit=1024%2C576&ssl=1\" class=\"img-thumbnail img-responsive\" width=\"300\">-p-Bene, ora divertiti pure a scoprire quali altri codici di quattro lettere ho già preparato.";

paragraphs["2903"] = "Trovi degli strani simboli runici...-p-<img class=\"img-thumbnail img-responsive\" src=\"https://simoneverabath.files.wordpress.com/2014/01/runen_gross11.jpg\">";

paragraphs["DUSI"] = "<marquee direction='right'><a alt='' class='btn btn-danger' href='https://i.kym-cdn.com/entries/icons/original/000/000/260/youjustlost.jpg' style='width: 300px; font-size: 30px;'>NON CLICCARMI</a></marquee>";

paragraphs["PENE"] = "Vergognati.";

paragraphs["1234"] = "Banale, non trovi anche tu?\nUn codice così semplice, così comune, non ti rende onore. Perché mai avresti dovuto digitarlo? Perché cedere alla tentazione?-p-Eppure, qualcosa di utile lo si trova lo stesso. Prova, così per dire, a digitare il codice <code>9241</code>.";

paragraphs["9241"] = "Ora il codice <code>9213</code>.";
paragraphs["9213"] = "Ora il codice <code>9231</code>.";
paragraphs["9231"] = "Ora il codice <code>9124</code>.";
paragraphs["9124"] = "Ora il codice <code>9324</code>.";
paragraphs["9324"] = "Ora il codice <code>9432</code>.";
paragraphs["9432"] = "Ora il codice <code>9142</code>.";
paragraphs["9142"] = "Scusa, eh, ma fai tutto quello che ti viene detto?";


// Funzioni di utilità

function unknownCode(code) {
    return (paragraphs[code] == null);
}
