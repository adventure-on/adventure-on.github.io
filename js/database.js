// Inizializzazione dei paragrafi
var paragraphs = {};

// Impostazione dei vari paragrafi
// Alcune note riguardo alle chiavi: sono sempre MAIUSCOLE

paragraphs['0000'] = 'Eccoti qui.<br>'
+ 'Tu dovresti essere il Regista della squadra, vero?<br>'
+ 'Molto piacere, io sono il <i>Tutorial</i>. Ho ricevuto il compito di introdurre te e la tua squadra al funzionamento del gioco.<br>'
+ 'Il mio obiettivo è aiutarvi a prendere familiarità con questo “portale dei Paragrafi” e con i bot che avrete a disposizione. Inoltre cercherò di ricapitolare brevemente i ruoli di ciascun* di voi.<br>'
+ 'Se è tutto chiaro, possiamo cominciare.-p-'
+ 'Quello che vedi ora davanti a te è un <b>Paragrafo</b> di gioco, in particolare il Paragrafo iniziale del tutorial. Questo gioco contiene molti Paragrafi, ciascuno identificato da un codice di 4 caratteri (alfabetici o numerici). Ad esempio questo Paragrafo ha codice <code>0000</code>, come puoi osservare dal titolo a inizio pagina. All\'interno del gioco non esistono due Paragrafi con lo stesso codice: in questo modo, nessuno si confonde. Il mio consiglio è di segnare i codici dei Paragrafi che leggete per tenere traccia della vostra avventura.-p-'
+ 'Il testo che stai leggendo è il contenuto del Paragrafo: ogni Paragrafo contiene qualcosa, sia esso del testo, delle immagini, dei video o della musica. Leggendo, guardando o ascoltando cos\'ha da dire un Paragrafo, potrete avanzare nel gioco.-p-'
+ 'Infine, il rettangolo bianco che vedi in fondo alla pagina serve per viaggiare attraverso i Paragrafi.<br>'
+ 'Ricordate quando ho parlato di codici dei Paragrafi? Ecco: puoi inserire il codice di un qualunque paragrafo all’interno di quel rettangolo e poi premere sul pulsante “Go”. Se all’interno del gioco esiste un Paragrafo identificato esattamente da quel codice, questo portale te lo mostrerà. In caso contrario non succederà nulla.<br>'
+ 'Pensate di poter inserire lettere e numeri casuali sperando di beccarne qualcuno?<br> Oh, mi dispiace deludervi, ma ci sono esattamente 1.679.616 configurazioni possibili. Il che significa, considerata la quantità di paragrafi, che avete il 99,997% di probabilità di prenderlo nel c**o.-p-'
+ 'Ottimo, quindi che si fa?<br>Visto che siamo d’accordo sull’inutilità di qualunque tentativo di baro, direi che ancora per qualche paragrafo potete fidarvi di me. Regista, digita il codice <code>0001</code> nel rettangolo sottostante e poi premi “Go”.';

paragraphs['0001'] = prdBadge() + '-p-Fantastico, avete viaggiato attraverso il vostro primo paragrafo!-p-Bene. In questo e nei prossimi tre paragrafi ripasseremo insieme i ruoli che impersonerete nel gioco, a partire dal/la <b>Regista</b>.-p-Se ti è toccato il ruolo di Regista, sappi che avrai in mano l’intero portale dei Paragrafi.<br>A te spetta l’ingrato compito di guidare il gioco attraverso l’intricata rete di storie e sfide che lo compongono, di coordinare la tua squadra cercando di far emergere le abilità di ciascun componente nel momento più opportuno.-p-Come in questo caso, ti capiterà spesso di dover presentare le prove ai tuoi compagni. Ad esempio, in questo paragrafo vi è richiesto di saper rispondere ad una semplice domanda:-p-'
+ '<strong>Quante facce ha un dado a sei facce?</strong>-p-'
+ 'Se tu o un membro della tua squadra pensate di conoscere la risposta, avete risolto la sfida contenuta in questo Paragrafo. In questo modo (risolvendo le prove) potete ottenere punti e raggiungere nuovi Paragrafi.-p-C’è solo un problema: come fate per inviare la risposta agli Organizzatori del gioco?<br>'
+ 'Oh no, non guardare me, io sono solo un semplice Tutorial e non vengo pagato abbastanza. Tuttavia conosco un tale che potrebbe fare al caso vostro…-p-Aprite Telegram e cercate questo nome: <code>@produttore_GameBot</code>: è un tipo sveglio e di poche parole, che sa fare il suo lavoro, e potrebbe fornirvi il codice per il prossimo Paragrafo.-p-'
+ 'Dopo esservi presentati correttamente attraverso la procedura di iscrizione (mi raccomando: dovete digitare lo stesso nome per partecipare come squadra unica!) e dopo aver ascoltato le spiegazioni sul suo funzionamento, un componente della squadra digiti il comando:-p-'
+ '<code>/risolvi 0001</code>-p-'
+ 'In questo modo comunicate al Produttore che siete intenzionati a risolvere la prova contenuta in questo Paragrafo, che ha codice <code>0001</code>.-p-A quel punto vi verrà chiesta la risposta alla domanda precedente: digitate la risposta e inviate il messaggio.<br>Se la risposta è corretta riceverete il codice del prossimo Paragrafo, che potrete inserire qui sotto. Altrimenti vi verrà chiesto di ritentare.-p-'
+ 'Alcune note a riguardo:'
+ '<ul>'
+ '<li>Tutti i componenti della squadra possono utilizzare questo bot di Telegram, una volta terminata correttamente la procedura di iscrizione. Il bot, in ogni caso, non memorizza alcun dato personale e verrà disattivato al termine del gioco; il suo utilizzo è limitato per ora solamente ai <i>Dadi Truccati</i>.</li>'
+ '<li>Non tutte le prove richiedono di essere confermate attraverso questo bot: alcune forniranno come risposta direttamente il codice del Paragrafo successivo. Quando invece è richiesto l’utilizzo del bot troverete un badge con la scritta “Produttore” a inizio pagina (come in questo caso).</li>'
+ '<li>In caso di malfunzionamenti, contattate personalmente Dusi.</li>'
+ '</ul>';

paragraphs['0010'] = 'Passiamo ora al ruolo di <b>Drammaturgo</b>.<br>La persona con questa alta onorificenza ha ricevuto dagli Organizzatori l’accesso ad una cartella virtuale, all’interno della quale è contenuta un’enorme mole di informazioni. Ricavarne qualcosa di utile non sarà certamente facile, ma sono sicuro che la persona della vostra squadra che ha scelto questo ruolo se la caverà egregiamente… O almeno lo spero.-p-Sentite: mettiamola alla prova, per puro scrupolo personale.-p-<strong>Quale codice è contenuto all’interno della foto con il furetto?</strong>-p-Ecco, una volta recuperato il codice corretto, l’intera squadra non avrà difficoltà ad avanzare al Paragrafo successivo, giusto? :)-p-In ogni caso, il ruolo di Drammaturgo non finisce qui: all’interno dei documenti sono contenuti indizi per le successive prove, consigli sulle modalità per affrontarle, o anche veri e propri “pezzi” indispensabili per risolverle.<br>Il mio consiglio personale è di dare una veloce occhiata a tutto il materiale a disposizione, in modo da farsi un’idea generale. All\’occorrenza, poi, si potrà approfondire i singoli documenti e le numerose informazioni.';

paragraphs['0100'] = smmBadge() + '-p-Voilà! Non stareste leggendo questo paragrafo senza le fantastiche conoscenze del Drammaturgo, nevvero?-p-Ma ora cambiamo argomento: vedete quel badge colorato appena sotto al titolo? Indica che in questo paragrafo è possibile affrontare una sfida aggiuntiva grazie alle abilità del terzo ruolo in squadra: il <b>Social Media Manager</b>.-p-Al giocatore o alla giocatrice che impersona questo ruolo è richiesta un’attenzione particolare verso ciò che accade nel mondo “social”.<br>Comunicando con specifici utenti in specifici social network potranno essere sbloccate nuove sfide per la vostra squadra: spetterà al/la Social Media Manager intercettarle e valutare se e quando affrontarle.<br>'
+ 'Infatti, ogni volta che una di queste sfide “speciali” viene superata con successo, la vostra squadra non riceverà il codice di un nuovo Paragrafo, ma sarà invece ricompensata con dei punti bonus.<br>Questa caratteristica distingue le prove “del Social Media Manager”, che danno una quantità di punti conosciuta a priori, dalle prove “classiche”, che forniscono un numero di punti sconosciuto alla squadra ma permettono di avanzare nel gioco.'
+ 'Quindi, che cosa deciderete di fare? Punterete a scoprire più Paragrafi possibile, senza avere idea del punteggio che state totalizzando, oppure non vi lascerete sfuggire nemmeno una side-quest, rischiando di non terminare il gioco nel tempo limite?'
+ 'Facciamo subito un esempio concreto: in questo paragrafo la persona con il ruolo di Social Media Manager può contattare l’account Instagram <code>@met_h_p</code> e avere la possibilità di guadagnare <b>3 punti</b>.<br>Cosa fate?-p-'
+ 'Scelta difficile, senza dubbio.<br>Ma voglio essere magnanimo e vi darò un indizio: mediamente le prove “classiche” fruttano più punti delle prove del Social Media Manager. Ma si sa, le regole sono fatte per essere infrante…-p-'
+ 'Andate al paragrafo <code>1000</code>.';


paragraphs['1000'] = 'Bene, sono quasi finito (io Tutorial, intendo).<br>Ci manca soltanto l’ultimo ruolo.-p-'
+ 'Durante il gioco attraverserete una grande varietà di ambienti e situazioni, tali che sarebbe davvero un peccato non potersi portare a casa qualche ricordino… Magari qualcosa scovato a metà di una frase, fra una virgola e un apostrofo, un piccolo tesoro che passa inosservato alla massa e che solo alcuni individui, dotati di una sensibilità particolare, sono in grado di riconoscere e apprezzare.-p-'
+ 'Beh, sembra proprio la descrizione del quarto componente della vostra squadra, no? E infatti…-p-'
+ 'Il ruolo di <b>Scenografo</b> richiede una grande attenzione ai dettagli: il giocatore o la giocatrice che lo impersonano hanno la possibilità, in ciascun Paragrafo, di raccogliere gli oggetti citati nella descrizione del Paragrafo. Questi oggetti hanno poi due funzionalità principali:'
+ '<ol><li>Forniscono punti al termine della partita.</li>'
+ '<li>Permettono di sbloccare Paragrafi aggiuntivi.</li></ol>-p-'
+ 'Come fare, quindi, per raccogliere un oggetto?-p-'
+ 'Innanzitutto è necessario che io vi consegni le <b>chiavi del magazzino</b>: in questo modo avrete uno spazio in cui accatastare tutti gli oggetti che saprete afferrare in questa avventura. Inoltre, per evitare il solito caos, ho contattato apposta per voi un simpatico bot di Telegram che vi aiuterà a tenere tutto in ordine: <code>@scenografo_GameBot</code>.-p-'
+ 'La persona con il ruolo di Scenografo (l’unica in grado di contattare questo bot), dopo aver completato correttamente la procedura di iscrizione e seguìto la spiegazione iniziale, potrà inviare un messaggio indicando il codice a quattro caratteri del Paragrafo in cui si trova e l’oggetto che vuole provare a raccogliere, nel seguente modo:-p-'
+ '<code>/raccogli XXXX nome-oggetto</code>-p-'
+ 'Se in quel Paragrafo (<code>XXXX</code>) quell’oggetto (<code>nome-oggetto</code>) può effettivamente essere raccolto, lo Scenografo riceverà il codice di un nuovo Paragrafo sbloccato e il valore (in punti) dell’oggetto stesso.-p-'
+ 'Ad esempio, in questo Paragrafo, che cosa raccoglieresti?-p-'
+ 'Alcune note a riguardo:'
+ '<ul><li>In nessun caso il bot memorizza le vostre informazioni personali, ad eccezione del nickname pubblico che utilizzate su Telegram. Inoltre verrà disattivato al termine del gioco: il suo utilizzo è limitato per ora solamente ai <i>Dadi Truccati</i>.</li>'
+ '<li>In caso di malfunzionamenti, contattate personalmente Dusi.</li></ul>';

paragraphs['1001'] = scnBadge() + '-p-Meraviglioso, sembra che abbia funzionato!-p-Come potete notare, questo Paragrafo è segnato con il badge “Scenografo”, segno che è stato raggiunto grazie alla raccolta di un oggetto.-p-Spero che fin qui sia tutto chiaro, se avete delle domande urgenti potete contattare gli Organizzatori.-p-Vi ricordo il mio consiglio iniziale: segnate da qualche parte i codici dei paragrafi che sbloccate. In qualunque momento potreste voler tornare indietro ad un vecchio paragrafo letto in precedenza: in tal caso, mantenere un diario delle vostre peripezie potrebbe salvarvi preziosi minuti di ricerche.-p-'
+ 'Bene, procediamo per un’ultima volta insieme fino al paragrafo <code>1111</code>.';

paragraphs['1111'] = 'Ecco, qui le n-nostre strade si separano.<br>Come dite?<br>N-no, non sto p-piangendo, è che mi è entrato un catamarano in un occhio.<br>*Sigh*-p-'
+ 'In ogni caso, io ora vi devo lasciare. Voi però non muovetevi da qui: <b>dovete attendere che gli Organizzatori diano il VIA ufficiale</b>; a quel punto conoscerete anche il codice del paragrafo che dà inizio all’intero gioco.-p-'
+ 'Spero di rivedervi presto.-p-'
+ 'Per sempre vostro,-p-'
+ 'Tutorial';




//////////////////

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
