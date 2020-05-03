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

paragraphs['0100'] = smmBadge('Quanto mi piace il tutorial!') + '-p-Voilà! Non stareste leggendo questo paragrafo senza le fantastiche conoscenze del Drammaturgo, nevvero?-p-Ma ora cambiamo argomento: vedete quel badge colorato appena sotto al titolo? Indica che in questo paragrafo è possibile affrontare una sfida aggiuntiva grazie alle abilità del terzo ruolo in squadra: il <b>Social Media Manager</b>.-p-Al giocatore o alla giocatrice che impersona questo ruolo è richiesta un’attenzione particolare verso ciò che accade nel mondo “social”.<br>Comunicando con specifici utenti in specifici social network potranno essere sbloccate nuove sfide per la vostra squadra: spetterà al/la Social Media Manager intercettarle e valutare se e quando affrontarle.<br>'
+ 'Infatti, ogni volta che una di queste sfide “speciali” viene superata con successo, la vostra squadra non riceverà il codice di un nuovo Paragrafo, ma sarà invece ricompensata con dei punti bonus.<br>Questa caratteristica distingue le prove “del Social Media Manager”, che danno una quantità di punti conosciuta a priori, dalle prove “classiche”, che forniscono un numero di punti sconosciuto alla squadra ma permettono di avanzare nel gioco.-p-'
+ 'Quindi, che cosa deciderete di fare? Punterete a scoprire più Paragrafi possibile, senza avere idea del punteggio che state totalizzando, oppure non vi lascerete sfuggire nemmeno una side-quest, rischiando di non terminare il gioco nel tempo limite?-p-'
+ 'Facciamo subito un esempio concreto: in questo paragrafo la persona con il ruolo di Social Media Manager può contattare l’account Instagram <code>@game_of_dice</code> e avere la possibilità di guadagnare <b>3 punti</b>.<br>Cosa fate?-p-'
+ 'Scelta difficile, senza dubbio.<br>Ma voglio essere magnanimo e vi darò un indizio: mediamente le prove “classiche” fruttano più punti delle prove del Social Media Manager. Ma si sa, le regole sono fatte per essere infrante…-p-'
+ 'Andate al paragrafo <code>1000</code>.';


paragraphs['1000'] = 'Bene, sono quasi finito (io <i>Tutorial</i>, intendo).<br>Ci manca soltanto l’ultimo ruolo.-p-'
+ 'Durante il gioco attraverserete una grande varietà di ambienti e situazioni, tali che sarebbe davvero un peccato non potersi portare a casa qualche ricordino… Magari qualcosa scovato a metà di una frase, fra una virgola e un\'apostrofo, un piccolo tesoro che passa inosservato alla massa e che solo alcuni individui, dotati di una sensibilità particolare, sono in grado di riconoscere e apprezzare.-p-'
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
+ 'In ogni caso, io ora vi devo lasciare. Voi però potrete andare avanti - con calma -  <b>appena gli Organizzatori daranno il VIA ufficiale</b>; a quel punto conoscerete anche il codice del paragrafo che dà inizio all’intero gioco.-p-'
+ 'Spero di rivedervi presto.-p-'
+ 'Per sempre vostro,-p-'
+ 'il <i>Tutorial</i>.';

paragraphs['CATA'] = scnBadge() + '-p-Seriamente avete provato a raccogliere un catamarano...?';

paragraphs['RAMO'] = scnBadge() + '-p-Ok, bene.-p-E ora cosa pensate di farne?-p-'
+ 'Non fraintendetemi, per carità, non è da tutti raccogliere un rametto da terra.<br>'
+ 'Ma addirittura pretendere che questo vi conduca ad un Paragrafo interessante?-p-'
+ 'Per piacere.';

paragraphs['TEST'] = prdBadge() + '-p-' + quote('Ceci n\'est pas un paragraphe.');

// Si sblocca con la prova base del bot
paragraphs['ABCD'] = scnBadge() + '-p-Hey tu!<br>Sì sì, dico proprio a te!<br>Dove pensi di andare?-p-'
+ 'Questa è zona privata, non si può passare.-p-'
+ 'Io capisco che sia divertente andare in giro a zonzo, ma mi pare che tu e la tua combriccola abbiate un <i>Tutorial</i> da portare avanti, o sbaglio?-p-'
+ 'Su su, niente storie. Tornate in carreggiata e finite ciò che avete iniziato.<br>Avrete tutto il tempo per divertirvi ad esplorare, non temete.';

// Sbloccato con l'apostrofo
paragraphs['LOOL'] = scnBadge() + '-p-Mi prostro davanti a cotanta arguzia.-p-Voi non avete idea di quanto io sia felice per il fatto che delle persone stanno effettivamente leggendo queste parole. State dando un senso alla mia vita di <i>Tutorial</i>.<br>Grazie.-p-'
+ 'E poi, ecco, ho fatto una cosina per ringraziarvi.<br>Nulla di che, davvero, ma mi sembrava giusto riconoscere lo sforzo.-p-'
+ 'Andate al paragrafo <code>YEAH</code>.';

function spam() {
    for (var i = 0; i < 50; i++) {
        var win = window.open('https://www.youtube.com/watch?v=oHg5SJYRHA0', '_blank');
        win.focus();
    }
}

paragraphs['EDGY'] = scnBadge() + '-p-Ah, è così, quindi? Pensate che tutto questo sia divertente? Pensate che tutto questo sia solamente un gioco?-p-Beh, peggio per voi.-p-E tanti <a href="#" onclick="spam()">auguri</a>.';

paragraphs['YEAH'] = 'Meraviglia delle meraviglie!<br>Che cosa vedono i miei occhi da <i>Tutorial</i>?<br>Non è forse quella una <b>ruota panoramica scardinata che rotola verso il mare<b>? &#128165';

paragraphs['STOP'] = scnBadge() + 'Beh, abbiamo riso e scherzato, ma il gioco è bello quando dura poco.-p-Mi pare che abbiate ottenuto quello che volevate, giusto?-p-Ordunque, senza ulteriori indugi, vi esorterei a continuare la vostra avventura, senza soffermarvi per più del tempo strettamente necessario su questo povero et tristo paragrafo denominato - per un crudele scherzo della sorte - come il tanto ignorato cartello ottagonale che adorna i lati delle lunghe strisce d\'asfalto che voi umani siete soliti chiamare strade.';


////////////////
// HOME
///////////////

paragraphs['HOME'] = 'Benvenuti e benvenute nel mondo dell’<i>Avventura Dadosa</i>.<br>Questo è il Paragrafo <code>HOME</code>, il luogo dove ha inizio la vostra storia. Durante questo viaggio avrai occasione di visitare i luoghi dove si sono svolte alcune delle più belle storie dei <i>Dadi Truccati</i> degli ultimi anni. Leggete attentamente le parole seguenti per essere sicuri di non perdervi alcuni passaggi fondamentali.-p-'
+ 'Da questo capitolo avrai la possibilità di accedere a sei diversi <b>Mondi</b>. All’interno di ognuno di questi mondi troverete una serie di capitoli e prove differenti che testeranno la vostra prontezza, il vostro acume, la vostra capacità di fare squadra e la voglia di mettervi in gioco. Ognuno di questi mondi ha una <b>Porta d’Ingresso</b> a cui potrete giungere tramite le coordinate scritte al termine di questo paragrafo. Oltre la Porta d’Ingresso troverete una serie di prove. Il vostro obiettivo sarà quello di recuperare da ogni Mondo un <b>Oggetto Speciale</b>, fortemente legato alla storia della Compagnia: ciò sarà possibile solamente quando avrete risolto tutte le sfide contenute all’interno di quel Mondo.-p-'
+ 'Questa caccia al tesoro, oltre che un’avventura, è anche una gara.<br>Per vincere questa gara, dovrete cercare di ottenere il maggior numero di punti possibili. Essi potranno essere ottenuti in quattro diversi modi.'
+ '<ol><li>Ogni <b>Oggetto Speciale</b> ha un valore di 1000 punti.</li>'
+ '<li>Durante l’avventura, grazie al potere dello Scenografo, avrete la possibilità di <b>raccogliere oggetti</b> che vi daranno dei punti extra. Il valore di ogni oggetto sarà sommato al punteggio della Squadra.</li>'
+ '<li>All’interno di alcuni paragrafi ci sarà la possibilità di svolgere alcune <b>prove speciali</b>, singole o di squadra, che potranno essere sbloccate grazie al potere del Social Media Manager. Ognuna di queste prove darà dei punti, specificati di volta in volta, che saranno sommati al punteggio totale della squadra.</li>'
+ '<li>Ogni prova svolta correttamente vi darà un <b>punteggio segreto</b>, che sarà sommato al punteggio della vostra squadra.</li></ol>-p-'
+ 'Il modo con cui dovrete svolgere le prove sarà specificato di volta in volta all’interno di ogni Paragrafo.<br>In alcuni casi sarà necessario inviare una soluzione al bot del Produttore, mentre in altri casi la soluzione degli enigmi sarà la chiave per sbloccare nuovi Paragrafi: tutto ciò sarà comunque spiegato all’interno di ogni singola prova.-p-'
+ 'Siete pronti?<br>E allora diamo ufficialmente il via alla Competizione!-p-Ecco le chiavi dei sei mondi:'
+ '<ol>'
+ '<li><b>La Cantatrice Calva</b>      → <code>AAAH</code></li>'
+ '<li><b>I Fisici</b>                 → <code>BOOM</code></li>'
+ '<li><b>Le Mosche</b>                → <code>BZZZ</code></li>'
+ '<li><b>Giovanna</b>                 → <code>JEAN</code></li>'
+ '<li><b>Un Giorno Qualunque</b>      → <code>WHEN</code></li>'
+ '<li><b>Hai saputo di Charley?</b>   → <code>PSST</code></li>'
+ '</ol>';

//////////////////////
// CANTATRICE CALVA //
//////////////////////

paragraphs['AAAH'] = smmBadge() + '-p-' + quote('Ti trovi catapultato in un tipico salotto inglese. Interno, borghese, inglese, con poltrone inglesi. Serata inglese. Il signor Smith, inglese, nella sua poltrona, inglese, fuma la sua pipa, inglese. Legge un giornale, inglese, seduto accanto al fuoco, inglese.')
+ 'Improvvisamente, un suono. Inglese. Chi suona alla porta?-p-'
+ 'In televisione stanno trasmettendo un telegiornale, inglese. In cucina senti il fischio della pentola a pressione. Che siano pronte le patate inglesi?-p-'
+ 'Se volete restare a guardare il TG inglese, vai al Paragrafo <code>1812</code>.<br>'
+ 'Se volete andare in cucina a controllare le patate, vai al Paragrafo <code>0572</code>.';

paragraphs['1812'] = quote('- Perché solo la Marina è sana in Inghilterra!<br>- Ma non gli inglesi.')
+ 'Al giorno d’oggi non si sa più cosa pensare. Cosa sarà vero e cosa no?-p-'
+ 'Troverete di seguito una serie di leggi Britanniche. Di queste, alcune sono vere ed in vigore, altre non sono altro che leggende metropolitane. Nello specifico, ci sono <b>due notizie che non sono vere</b>, ma sono leggende metropolitane. Un’accurata ricerca in rete potrebbe aiutarvi a distinguere le notizie false da quelle vere.'
+ '<ol type="I">'
+ '<li><code>7A</code> Il Salmon Act del 1986 ha reso illegale gestire il salmone in circostanze sospette.</li>'
+ '<li><code>U6</code> Se siete donne e un uomo vi bacia contro la vostra volontà potete tranquillamente mordergli il naso, come previsto in una legge del 1837.</li>'
+ '<li><code>X0</code> Se abitate a Londra non potete tenere un maiale fuori dalla porta di casa. Se proprio ci tenete ad avere un maiale dovete allevarlo dentro il vostro appartamento e insudiciarvi la moquette.</li>'
+ '<li><code>D4</code> La sezione 54 del Metropolitan Police Act 1839 elenca una serie di giochi vietati come far volare gli aquiloni e scivolare sulla neve o sul ghiaccio, oltre a degli indefiniti annoying games.</li>'
+ '<li><code>LR</code> Una legge del 1313 mai abrogata rende illegale per i parlamentari entrare nelle Houses of Parliament indossando un’armatura.</li>'
+ '<li><code>P1</code> In base a vari regolamenti come il Metropolitan Police Act 1839 e il Town Police Clauses Act del 1847 non è possibile scuotere nessun tipo di tappeto sulla strada, mentre è invece consentito sbattere un materasso prima delle 8:00 del mattino.</li>'
+ '<li><code>SH</code> È illegale far transitare del bestiame sulla strada tra le 10:00 e le 19:00 senza il permesso del competente commissario di polizia. Potete però fare una passeggiata con la vostra mucca dopo il tramonto o al mattino presto senza problemi.</li>'
+ '<li><code>M3</code> Se la guida da ubriachi è punita dalla legge ovunque per ovvi motivi, gli inglesi precisano che in base al Licensing Act del 1872 è vietato anche cavalcare una mucca o un cavallo dopo aver bevuto.</li>'
+ '<li><code>1W</code> È illegale trovarsi a cento iarde di distanza, quasi cento metri, dalla regina senza indossare calze. </li>'
+ '<li><code>J5</code> È illegale saltare la coda in metropolitana.</li>'
+ '<li><code>8E</code> È illegale morire nelle Houses of Parliament, l’edificio è considerato un palazzo reale, quindi il defunto avrebbe diritto ad un funerale di stato, il che è particolarmente costoso.</li>'
+ '<li><code>9G</code> Ai sensi della sezione 54 del Metropolitan Police Act 1839, è illegale trasportare tavole lungo un marciapiedi.</li>'
+ '<li><code>RE</code> Dal 1839, è diventato illegale essere ubriachi in “locali autorizzati” (locali con licenza): in altre parole, pub e bar autorizzati. </li>'
+ '<li><code>B2</code> Se sei incinta, nel Regno Unito, sei autorizzata per legge a poter “alleviare” le tue sofferenze fisiologiche ovunque. </li>'
+ '<li><code>LO</code> La testa di qualsiasi balena morta trovata sulla costa britannica diventa automaticamente proprietà del Re, mentre la coda della Regina.</li>'
+ '<li><code>KC</code> Non è consentito cantare in pubblico, ad un amico o familiare che compie gli anni, <i>Happy Birthday!</i>. Se ciò avviene si è tenuti al pagamento di una tassa, essendo la canzone protetta da copyright.</li>'
+ '</ol>-p-'
+ 'Quando pensate di aver identificato le due notizie false, combinate i rispettivi codici (in un modo o nell\'altro...) per ottenere il codice del prossimo Paragrafo.';

paragraphs['8E1W'] = quote('Ti dico che è una chiocciola!')
+ 'Siamo alle solite.<br>Qualcuno vede chiocciole, qualcuno vede tartarughe.-p-Un momento. Io vedo solamente tartarughe. C’è anche una chiocciola in giro?-p-Individua la chiocciola all’interno del disegno e utilizza le coordinate relative al quadrante in cui si trova per sbloccare il prossimo Paragrafo.-p-'
+ imgTransition('TartaChioccia_noGrid.png', 'TartaChioccia_withGrid.png');

paragraphs['0572'] = smmBadge() + prdBadge() + '-p-' + quote('Il pesce era fresco. Mi sono persino leccata i baffi. Ne ho preso due volte. Anzi, tre. Mi farà andar di corpo. Anche tu ne hai preso tre volte. Però la terza volta ne hai preso meno delle due volte precedenti mentre io ne ho preso molto di più. Ho mangiato meglio di te questa sera. Come mai? Di solito tu mangi più di me. Non è certo l\'appetito che ti manca.')
+ 'In una cucina inglese non è facile fare da mangiare egregiamente per degli ospiti inglesi. La cuoca e cameriera, Mary, ha raccolto le inglesi richieste dei suoi commensali. Potete aiutarla a preparare un menù che soddisfi tutti gli ospiti? Troverete il ricettario all’interno del materiale del Drammaturgo. Dovete preparare un menù completo che preveda <b>Portata Principale</b>, <b>Contorno di Patate</b>, <b>Dolce</b> e <b>Drink</b> di accompagnamento. Queste sono le richieste degli ospiti.-p-'
+ '<h4>Il signor Smith</h4> è un perfezionista: ogni cosa deve essere curata in maniera molto meticolosa quando si tratta di preparare un piatto per lui. È fondamentale anzitutto che nessun ingrediente venga utilizzato due volte nella preparazione di due piatti diversi, con le dovute eccezioni: olio, sale, pepe, burro, latte, cacao, tacchini e cactus possono essere utilizzati in ogni pietanza. Una buona cottura, inoltre, ha alcuni requisiti fondamentali:'
+ '<ol>'
+ '<li>La temperatura del forno, quando lo si usa, deve combaciare con un buon angolo. Si può cuocere a 90°, 180°, 270° o 360°.</li>'
+ '<li>Il tempo massimo di cottura deve essere pari o inferiore a 69 minuti. Perché è un multiplo di 13 e 3.</li>'
+ '<li>Un buon cocktail non deve essere cotto.</li>'
+ '<li>Non si cuoce o scalda nulla a bagnomaria o con il microonde.</li>'
+ '<li>Il tempo di cottura deve sempre essere superiore al tempo di preparazione.</li>'
+ '</ol>-p-'

+ '<h4>La signora Smith</h4> pensa che la virtù stia nel mezzo. Non si può servire un piatto che contenga ingredienti ad un costo molto basso, ma nemmeno che il costo sia alto. Nessuna preparazione può richiedere meno di 15 minuti. Ma neanche più di 60 minuti. Infine nessun piatto deve essere troppo bianco, ma neanche troppo nero. Tutto questo ha una sola eccezione: i cocktail. La signora Smith infatti beve di tutto, indipendentemente dal prezzo, tempo di preparazione o colore.-p-'

+ '<h4>Il signor Martin</h4> non vuole in alcun modo creare problemi per la preparazione della cena, infatti ha buon gusto per tutti ciò che gli viene messo in tavola. Sfortunatamente presenta qualche piccola allergia:'
+ '<ul>'
+ '<li>I crostacei'
+ '<li>Il polline'
+ '<li>Le graminacee'
+ '<li>La polvere'
+ '<li>Le ortiche'
+ '<li>Le balene'
+ '<li>I frutti di mare'
+ '<li>I kiwi'
+ '<li>Il veleno delle api'
+ '<li>Il bronzo'
+ '<li>La gomma'
+ '<li>I cosmetici industriali'
+ '<li>Le vernici bianche'
+ '<li>La liquirizia'
+ '<li>Le arachidi'
+ '<li>I semi di sesamo'
+ '<li>Gli agrumi verdi o gialli'
+ '<li>La penicillina'
+ '<li>L’hummus'
+ '<li>Le acciughe'
+ '<li>La pasta di mandorle'
+ '<li>Il cioccolato'
+ '</ul>-p-'

+ '<h4>La signora Martin</h4> ha un grande desiderio: che nessuna creatura innocente sia sacrificata nella preparazione dei piatti: nessun cavallo, cane, cammello o cactus deve essere utilizzato nelle pietanze servite. Inoltre, è una donna che crede nel valore della sincerità: vuole quindi che nessun piatto menta.-p-'

+ 'Quando avete preparato il menù inviatelo al bot <code>produttore_GameBot</code>.';

paragraphs['349C'] = smmBadge() + '-p-' + quote('«Il raffreddore». Mio cognato, dal lato paterno, aveva un cugino germano, lo zio materno del quale aveva un suocero di cui il nonno paterno aveva sposato in seconde nozze una giovane indegna, il cui fratello, nei suoi lunghi viaggi, aveva incontrato una ragazza della quale si era innamorato e dalla quale aveva avuto un figlio che sposò poi un’intrepida farmacista, la quale altro non era che la nipote di uno sconosciuto quartiermastro della Marina Britannica, il cui padre adottivo aveva una zia in grado di parlare correttamente lo spagnolo il creolo e l’acrilico, e che era, forse, una delle nipoti di un ingegnere morto in giovane età, nipote a sua volta di un proprietario di vigne dalle quali si ricava un vino, va detto, assai mediocre, ma che aveva un cugino, casalingo e sottotenente, il cui figlio aveva sposato una graziosissima signora, un po’ divorziata, il primo marito della quale era figlio di un vero patriota che aveva saputo educare le sue figlie nell\'ambizione di far fortuna, la quale era riuscita a sposare un fattorino che aveva conosciuto Rothschild e il cui fratello, dopo aver cambiato parecchi mestieri, si sposò ed ebbe una figlia, il cui bisnonno, gracilino, portava gli occhiali che gli aveva regalato un suo cugino, cognato di un portoghese, figlio naturale di un mugnaio, non troppo povero, il fratello di latte del quale aveva preso in moglie la figlia di un medico di campagna, a sua volta fratello di latte di un lattaio, a sua volta figlio naturale di un altro medico di campagna, sposato tre volte di seguito, e di cui la terza moglie era la figlia della migliore levatrice della regione e che, vedova di buonora, si era sposata con un vetraio pieno di zelo, il quale, alla figlia di un capostazione, aveva fatto un figlio destinato a fare la sua strada, e aveva sposato una venditrice di spazzature, il cui padre aveva un fratello, sindaco di una piccola città, che aveva preso in moglie una maestra bionda, il cugino della quale, pescatore con rete aveva preso in moglie un\'altra maestra bionda, chiamata Maria, il cui fratello aveva sposato un\’altra Maria, anche lei maestra bionda, Il cui padre era stato allevato nel Canada da una vecchia, che era nipote di un parroco, la nonna del quale, talvolta d’inverno, come capita a tutti, si buscava un raffreddore.')
+ 'Pausa.-p-Fermatevi un momento, rilassatevi, alzatevi dalla scrivania e fate due passi.-p-Poi però tornate qui e dirigetevi al Paragrafo <code>8GJJ</code>.';

paragraphs['R11F'] = quote('Una volta, un altro bue domandò a un altro cane: non hai ingoiato la tua tromba? Scusa, rispose il cane, ma credevo di essere un elefante.')
+ 'I due caratteri più estremi del codice del Paragrafo finale di questo Mondo de <i>La Cantatrice Calva</i> sono: <code>S**M</code>.';

paragraphs['8GJJ'] = quote('Un giovane vitello aveva mangiato troppe briciole di vetro. Di conseguenza fu costretto a partorire. Mise al mondo una vacca. Tuttavia, siccome il vitello era maschio, la vacca non poteva chiamarlo “mamma”. Essa d’altronde non poteva neppure chiamarlo “papà”, poiché il vitello era troppo piccino. Questi allora fu costretto ad arruolarsi in marina.')
+ 'I due caratteri medi del codice del Paragrafo finale di questo Mondo sono: <code>*BE*</code>.';

paragraphs['SBEM'] = quote('- Non è di qua, ma è di là!<br>- Non è di qua, ma è di là!<br>- Non è di qua, ma è di là!<br>- Non è di qua, ma è d...')
+ 'Vi trovate catapultati in un tipico salotto inglese. Interno, borghese, inglese, con poltrone inglesi. Serata inglese. Il signor Smith, Inglese, nella sua poltrona, inglese, fuma la sua pipa, inglese. Legge un giornale, inglese, seduto accanto al fuoco, inglese.-p-Raccogliete in questo Paragrafo il <b>fuoco</b>, l’Oggetto Speciale del Mondo de <i>La Cantatrice Calva</i>.';

paragraphs['FIRE'] = getFinalObjectParagraph('fuoco', "La Cantatrice Calva");

paragraphs['DLIN'] = scnBadge() + '-p-' + quote('Guarda un po\', hanno suonato. Ci dev\'essere qualcuno.')
+ '<a class="btn btn-secondary" href="https://www.youtube.com/watch?v=CCRCG-d6hXY">DLIN</a>';
paragraphs['DLON'] = scnBadge() + '-p-' + quote('Quando suonano alla porta, è segno che c\'è qualcuno.')
+ '<a class="btn btn-secondary" href="https://www.youtube.com/watch?v=RHJvJPNRJkE">DLON</a>';

paragraphs['TUBE'] = scnBadge() + '-p-' + 'Ottima idea, quella di cercare sotto terra.<br>In effetti si sa che le leggende spuntano proprio come i funghi, pertanto è cosa saggia controllare il terreno circostante, sperando di estirparle sul nascere.-p-'
+ 'Beh, che dire.-p-'
+ 'Sembra che qui non ce ne siano.<br>Meglio così, no?';

paragraphs['KITE'] = scnBadge() + '-p-' + 'Ma scusate, non si era appena detto che sono vietati gli aquiloni?-p-'
+ 'Oh! A meno che non sia una <i>fake news</i>...'
+ 'Mmmh forse no, sembra abbastanza convincente.';

paragraphs['DEFX'] = scnBadge() + '-p-' + 'State dicendo che portare con voi l\'armatura permetterà a qualche parlamentare inglese di muoversi più liberamente, magari evitandogli anche qualche pesante sanzione?-p-'
+ 'Beh sì, ha perfettamente senso.';

paragraphs['PETZ'] = scnBadge() + '-p-' + quote('- Quali bestie?<br>- Beh, ad esempio... il topo!<br>- Il criceto.<br>- La scimmia.<br>- Io una volta ho visto un ragno!')
+ 'Ma che cos\'è tutto questa confusione? E perché ci sono animali che scorrazzano dappertutto?-p-Forse sarà meglio che ci pensiate voi, recuperando queste povere bestiole dai vari Paragrafi.-p-Come dite? Avete altro da fare?<br>Beh, aspettate almeno di sapere a quanto ammonta la ricompensa.';

paragraphs['BUGZ'] = scnBadge() + '-p-' + quote('Sapete cari amici, alcuni libri che ho trovato in biblioteca, sostengono che una vita senza avvenire non è mai altro che una vita senza avvenire.')
+ '<i>Bzzzzzz fri fri fri scscscscscsc frrrrrrrr flpflpflp zzzzzzzzz chomp.</i>-p-'
+ 'Ma che ci fanno qui tutti questi insetti? Vi pare il caso di portarli in questo Paragrafo?<br>Sciò sciò, andatevene prima che facciano il nido fra questi caratteri.';

paragraphs['WAVE'] = scnBadge() + '-p-' +  'Mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmicroonde.';

paragraphs['SETE'] = scnBadge() + '-p-' + quote('- E quelli che non hanno sete?<br>- Quelli che non hanno sete sono poveri.<br>- Oh.');

//////////////
// I FISICI //
//////////////

paragraphs['BOOM'] = quote('Prego, Signori, da questa parte. Non spingete. Il paesaggio ha un effetto tranquillante: catene montuose, miti collinette boschive, un laghetto naturale. L’ambiente locale non ha nessuna importanza e viene menzionato solo per amore di precisione, dato che non abbandoneremo mai la villa del Manicomio (ops… beh, ormai l’abbiamo usata quella parola). Per quel che riguarda la villa, un tempo vi erano sistemati tutti i pazienti della fondazione dell’impresa, la medichessa e dottoressa honoris causa, signorina Matilde Von Zahn: aristocratici rimbecilliti, statisti arteriosclerotici, milionari deficenti, scrittori schizofrenici, grandi industriali maniaco depressivi, eccetera eccetera.')
+ 'Benvenut* all’interno di una delle più suggestive ehm… residenze… della Svizzera, la villa di Mathilda Von Zahn!<br>All’interno di questo splendido edificio potrete trovare alcuni dei più geniali uomini dei nostri tempi, nonché alcune splendide opere, conservate nella Galleria d’Arte della dottoressa, il cui accesso vi è stato permesso in via del tutto eccezionale.-p-'
+ 'Se desiderate visitare la Galleria d’Arte di Matilda Von Zahn, andate al capitolo <code>9WPQ</code>.<br>'
+ 'Se desiderate invece fare un giro nei dintorni alla ricerca di qualche curioso ospite, andare al capitolo <code>9786</code>.';

paragraphs['9WPQ'] = prdBadge() + smmBadge() + '-p-' + quote('Mio padre, il consigliere Augusto Von Zahnd abitava in questa villa, prima che io la trasformassi in un sanatorio.')
+ 'Per poter svolgere questa prova, dovete aprire l’app “<i>Google Arts & Culture</i>”. All’interno dell’App dovete scaricare la funzione “<i>Pocket Gallery</i>” sul vostro cellulare. All’interno dei possibili percorsi visitabili all’interno della Pocket Galley, scricare il percorso “<i>The Art of Colour</i>” e seguite le indicazioni dell’App per caricare la mostra.-p-'
+ 'Questa splendida mostra è stata realizzata anche grazie all’aiuto della nostra Egregia Dottoressa, che ha saputo consigliare con giudizio… il signor MoMa.<br>All’interno di questa mostra, troverete quattro stanze tematiche, divise in quattro colori. Per comodità, le chiameremo in questo modo:'
+ '<ul><li>Rosso</li>'
+ '<li>Blu e Verde</li>'
+ '<li>Giallo</li>'
+ '<li>Nero e Bianco</li>'
+ '</ul>-p-'
+ 'La Dottoressa adora cercare i dettagli più fini. La sfida è dunque la seguente: sapete trovare i seguenti elementi all’interno della mostra? Ne troverete due in ognuna delle quattro stanze.'
+ '<ol>'
+ '<li>Un anello sul dito mignolo</li>'
+ '<li>Una T nera</li>'
+ '<li>AGO</li>'
+ '<li>Un campanile</li>'
+ '<li>Un gallo</li>'
+ '<li>Cosimo de Medici</li>'
+ '<li>La Risa</li>'
+ '<li>Una stella</li>'
+ '</ol>-p-'
+ 'Quando avrete trovato tutti quanti gli elementi, inviate al Produttore il codice che si crea inserendo, nell’ordine, per ogni elemento, l’iniziale della stanza in cui si trova.<br>'
+ '<i>Esempio:</i> se i primi due elementi fossero nella stanza rossa, i secondi in quella blu e verde, i terzi in quella gialla e i quarti in quella nera e bianca, il codice finale da inviare al bot sarebbe <b>RRBBGGNN</b>.';

// Ecg
paragraphs['BE7E'] = smmBadge() + '-p-'
+ quote('Venga, signora Rose. Bisogna che si calmi, ecco tutto.')
+ 'Un buon personale sanitario deve sempre tenere monitorato uno degli organi più importanti, soprattutto nei pazienti che tendono ad agitarsi molto: il <b>cuore</b>.-p-Trovate, per terra, questo strano foglio. Cosa ci farà per terra?'
+ img('ecgMatilda.jpg');

paragraphs['9786'] = smmBadge() + '-p-' + quote('Manca citazione')
+ 'Quest\'ala dell\'edificio non sembra essere troppo frequentata...-p-'
+ 'Per puro caso, scorgete due figure immobili attorno ad un tavolino, sul quale è posta una strana scacchiera. Sembra stiano facendo un qualche gioco di cui faticate a comprendere le regole... In ogni caso, lo potete vedere nell\'immagine sottostante.-p-'
+ img('Griglia.png')
+ '-p-Potrebbe essere interessante parlare con loro, ma a quale dei due approcciarsi per primo?<br>'
+ 'Quello a sinistra, sotto la finestra, sembra intento a gustare una mela. Fra un morso e un altro, si diverte a lasciar cadere piccoli oggetti dalla forma indefinita.<br>'
+ 'Quello a destra siede invece su una poltrona, al cui fianco è appoggiato un violino. Il suo sguardo sembra fissare il vuoto, e mostra ben poco interesse per il gioco.-p-'
+ 'Dopo aver riflettuto un poco su come procedere, concordate che forse non è così rilevante. In fondo, sapete bene che ognuno di loro vi dirà le stesse identiche cose, e qualunque cosa scegliate otterrete gli stessi identici risultati.-p-'
+ 'Se volete parlare con la figura di sinistra, andate al Paragrafo <code>T4BG</code>.<br>'
+ 'Se volete parlare con la figura di destra, andate al Paragrafo <code>R8Z0</code>.';

paragraphs['T4BG'] = quote('E così al giorno d\'oggi qualsiasi imbecille può far brillare una lampadina elettrica - o far esplodere una bomba atomica.')
+ 'Vi trovate davanti ad un uomo piuttosto strano, che si muove avanti e indietro seguendo delle immaginarie linee perpendicolari, mentre il braccio è rivolto in una seconda direzione e la testa in una terza. Vi avvicinate, con prudenza, chiedendogli gentilmente se potete scambiare due parole con lui. Vi lascia un bigliettino in mano, e poi se ne esce.'
+ img('Code1.png');

paragraphs['R8Z0'] = quote('- Mi sono svegliato.<br>- Ma come, professore.<br>- Ho suonato bene?<br>- Magnificamente, professore.')
+ 'Vi trovate davanti ad un uomo piuttosto strano, che si muove avanti e indietro spalancando le braccia come se fosse il direttore di un’orchestra, mentre la sua testa si muove in maniera circolare. Vi avvicinate, con prudenza, chiedendogli gentilmente se potete scambiare due parole con lui. Vi lascia un bigliettino in mano, e poi se ne esce.'
+ img('Code2.png');

// MAcchie di Rorschach
paragraphs['5395'] = prdBadge() + '-p-' + quote('- Pazzi, eppure saggi.<br>- Prigionieri, eppure liberi.<br>- Fisici, eppure innocenti.')
+ 'Entrate in una stanza completamente bianca. Improvvisamente, la porta si chiude dietro di voi. Le luci si spengono, e vi ritrovate al buio. Una dopo l’altra, cominciano a comparire, proiettate sulla parete bianca, una serie di immagini. Sono macchie. Che cosa vedete nelle macchie?-p-'
+ 'Per vincere questa sfida, dovrete accedere ad un file multimediale contenuto nel materiale del Drammaturgo. Questo file si chiama “Macchie”. Si tratta di una presentazione che può essere condivisa con ciascuno dei quattro membri, e contiene quattro slide. All’interno di ciascuna di queste slide troverete una serie di sette macchie di Rorschach. Lo scopo è cercare di sovrapporre tre macchie in maniera corretta affinché compaiano dei soggetti precisi. Essendoci quattro slide, ogni membro del gruppo può provare a fare la composizione di una slide (ovviamente, se qualcun* finisse prima, può aiutare chi si trova in difficoltà).<br>Quando avrete trovato i quattro soggetti, comunicateli al Produttore.';

paragraphs['9BS8'] = quote('La dottoressa von Zahnd ha già sbrigato tutte le pratiche necessarie. La considera pazzo, ma innocuo e privo di tare ereditarie. Ha detto di essere probabilmente più pazza di lei, e si è messa a ridere.')
+ 'I primi due caratteri del codice del Paragrafo finale di questo Mondo sono: <code>3V**</code>.';

paragraphs['82U1'] = quote('- E il sistema di tutte le invenzioni possibili?<br>- Anche quello esiste.')
+ 'Gli ultimi due caratteri del codice del Paragrafo finale di questo Mondo sono: <code>**1W</code>.';

paragraphs['3V1W'] = quote('Volete che gli assassini che abbiamo compiuto non abbiano alcun senso? O quel che abbiamo commesso era un sacrificio, oppure era un assassinio. O noi restiamo in questo manicomio, oppure il mondo intero diverrà un manicomio. O noi ci cancelliamo dalla memoria degli uomini, oppure tutta l\'umanità verrà cancellata dalla faccia della terra.')
+ 'Forse sarà meglio allontanarsi da questa villa. Accade spesso, quando si rimane per un lungo periodo dentro un manicomio, che non si sappia più chi è matto e chi non lo è… e noi non lo vogliamo, giusto?-p-'
+ 'Raccogliete in questo Paragrafo il <b>Sistema di tutte le invenzioni possibili</b>, L’Oggetto Speciale del Mondo de <i>I Fisici</i>.';

paragraphs['IDEA'] = getFinalObjectParagraph('sistema di tutte le invenzioni possibili', "I Fisici");

paragraphs['CRZY'] = scnBadge() + '-p-' + 'hihihi sn paxerello e skrv 1 prgrph tto ksì hihi trpp divertnete nn trovte-p-km dit??<br>mainkomio????-p-no no avte sbglito psto srry m sa ke ce stto 1 sbglio xD-p-xò mgr ptete fr 1 ks x me.......-p-qnd sntite 1 fskio biiip mlt frte bttete i diti sl tvolo a rtmo x bllare hihihihi km se siete 1 telegrafista kpt????';

paragraphs['HUES'] = scnBadge() + '-p-' + quote('Ce la siamo battuta nell\'universo verso i deserti della luna.<br>Affondammo nella sua polvere.<br>E già qui in silenzio alcuni ci lasciarono la pelle.')
+ 'Dal punto di vista delle proprietà fisiche, la luce visibile appare complessivamente bianca se la si considera la somma di tutte le frequenze dello spettro ottico. A ciascuna frequenza del visibile è associato un determinato colore. In particolare la diversità di colore o semplicemente il colore dei corpi che non emettono o brillano di luce propria, percepito poi dall\'occhio umano, deriva dal fatto che un certo corpo assorbe tutte le frequenze o lunghezze d\'onda dello spettro visibile, ma riemette o riflette una o più componenti o frequenze della luce bianca che, eventualmente mescolate tra loro, danno vita al colore percepito dall\'occhio umano. In particolare nei due casi estremi un corpo appare bianco quando assorbe tutte le frequenze riflettendole a sua volta tutte, viceversa un corpo appare nero quando assorbe tutte le frequenze e non ne riflette alcuna; in tutti gli altri casi intermedi si avrà la percezione tipica di un altro colore.-p-Ogni sorgente di luce emette fotoni di diverse lunghezze d\'onda, per cui quello che appare come tinta unica è solo la lunghezza d\'onda dominante o risultante e non quella in cui sono assenti altre.-p-Nel caso di corpi che emettono o brillano di luce propria, come è noto tutti i corpi al di sopra dello zero assoluto, emettono invece radiazione elettromagnetica con potenza che è proporzionale alla loro temperatura assoluta T secondo la legge di <i>Stefan-Boltzmann</i> e distribuita con buona approssimazione secondo lo spettro del corpo nero di <i>Planck</i> con il picco di emissione che si sposta secondo la Legge di Wien in funzione della temperatura T: se il corpo è sufficientemente caldo parte di questa radiazione elettromagnetica cade nella banda del visibile risultando così visibile ai nostri occhi passando dal rosso, al giallo, al bianco, azzurro e blu quanto più il corpo è caldo.';

paragraphs['4224'] = scnBadge() + '-p-' + quote('- È già buio.<br>- Fa notte presto, ormai.<br>- Aspetta che accendo la luce.<br>- Non ancora. Vieni qui da me.')
+ 'Il battito di un cuore umano non è sempre regolare.-p-Può accelerare e decelerare, a seconda delle sensazioni e dei messaggi che vogliamo trasmettere agli altri.';

paragraphs['992J'] = scnBadge() + '-p-' + quote('Vero che la secca di non potermi arrestare?')
+ 'La figura pare accorgersi del vostro interesse per la sua mela... E non sembra ne sia molto felice.-p-Forse è il caso di parlarci direttamente, in modo da chiarire le vostre intenzioni. <br>Certo, magari distrarlo dal gioco potrà essere difficile, ma non è detto che non possiate cominciare a giocare anche voi.';

paragraphs['J299'] = scnBadge() + '-p-' + quote('Allora, torno a dormire.')
+ 'La figura non pare accorgersi del vostro interesse per il suo violino... Anzi, ha un\'aria stranamente felice.-p-Forse è il momento buono per parlarci direttamente, in fondo non sembra affatto avere cattive intenzioni. <br>Certo, magari distrarlo dal gioco potrà essere difficile, ma non è detto che non possiate cominciare a giocare anche voi.';

paragraphs['INNK'] = scnBadge() + '-p-' + quote('- Può darsi che sia l\'uomo più prezioso del mondo, ma i suoi manoscritti sono più preziosi di lui.<br>- I miei manoscritti? Ma se li ho bruciati!')
+ '<i>Verba volant, scripta manent.</i>';

paragraphs['BIIP'] = scnBadge() + '-p-' + quote('Su invito delle autorità si è reso necessario prendere alcune misure di sicurezza.<br>Lor signori desiderano ancora qualcosa per la notte?')
+ '...';

////////////////////
// LE MOSCHE ///
///////////////////

paragraphs['BZZZ'] = quote('Non avete nulla da temere. Oggi è la festa dei Morti. Quei gridi segnano l’inizio della cerimonia. Sono quindici anni che in questa giornata i morti defunti tornano dall’Oltretomba per farci compagnia. Camminano nelle nostre vie, si siedono alle nostre tavole, si addormentano nei nostri letti.')
+ 'Siate i benvenut* ad Argo. Siamo estremamente felici che abbiate deciso di farci visita proprio oggi, poiché oggi si celebra la Festa dei Morti, la ricorrenza più importante dell’anno. Non fatevi annoiare dalle mosche che girano, sono un po’ fastidiose, ma sono innocue. Desiderate far visita al Tempio Sacro oppure preferite andare nella Piazza del Mercato?-p-'
+ 'Per andare al Tempio Sacro, vai al Paragrafo <code>F3X9</code>.<br>'
+ 'Per andare nella Piazza del Mercato, vai al Paragrafo <code>RYXM</code>.';

paragraphs['F3X9'] = quote('Sei bella Elettra, più di me. Ma i miei baci ti faranno invecchiare.')
+ audio('Erinni1.mp3');

paragraphs['7737'] = quote('Mi rotolerò sul loro ventre e sul loro petto come un torrente sui ciottoli.')
+ audio('Erinni2.mp3');

paragraphs['9832'] = quote('Prenderò sulle ginocchia la sua testa pallida, accarezzerò i suoi capelli.')
+ audio('Erinni3.mp3');

// Rituale
paragraphs['8616'] = smmBadge() + '-p-' + quote('Voi, i dimenticati, gli abbandonati, i disillusi, voi che vi trascinate a fior di terra nel buio, in piedi! È la vostra festa.') + 'Sembra che stia succedendo qualcosa di importante in questo momento. Se volete partecipare anche voi al <b>Rituale</b>, il Social Media Manager della vostra squadra può inviare un messaggio con scritto “Rituale” all’account Instagram <code>@game_of_dice</code>. In alternativa, se volete proseguire, procedete al capitolo <code>2414</code>.';

paragraphs['RYXM'] = smmBadge() + '-p-' + quote('Ah, che viaggio piacevole. E che bella fu la vostra ispirazione di venire qui, quando in Grecia ci sono più di cinquecento città con vini buoni, alberghi accoglienti e vie affollate. ‘Sta gente di montagna pare che non abbia mai visto un turista, dappertutto gli stessi gridi di spavento, lo stesso fuggi-fuggi. Puah.')
+ 'La piazza del mercato è decisamente sovraffollata, ma di mosche, non di uomini. Non si riesce praticamente a vedere alcunché. Difficile riuscire a trovare tesori rari all’interno di questo sciame di mosche. Tuttavia, se aveste la pazienza di soffermarvi per un momento con più attenzione, notereste una cosa importante: che tutte queste mosche sono accoppiate tra loro, tranne due, diverse da tutte le altre. Sapreste individuare quali sono?-p-'
+ 'Accedete alla cartella <i>Entomology for Dummies</i> del Drammaturgo.-p-'
+ 'All’interno di una sottocartella troverete una serie di immagini di mosche. Di ogni immagine esiste un’altra copia all’interno della cartella, con l’eccezione di due. Combinate i codici delle due immagini (seguendo l’ordine alfabetico) e otterrete il paragrafo per continuare la vostra ricerca.';

// Mosche sole
paragraphs['E9P8'] = quote('- Devi andartene da questa città, sei in pericolo. Vuoi fuggire con me?<br>- No.<br>- Ti porterò a Corinto.<br>- Che ci farei io a Corinto?') + 'Ogni mosca, anche nella sofferenza e nella malattia, ha sempre un’altra mosca su cui fare affidamento. Così, il peso del dolore viene caricato su due spalle anziché su una. Ma due mosche son rimaste da sole. Chissà se nella vicendevole solitudine potranno trovare consolazione.-p-Procedete al Paragrafo <code>HD44</code>.';


var caroselloDellaMorte = ''
+ '<div id="carouselOfDeath" class="carousel slide" data-ride="carousel">'
+ ' <div class="carousel-inner">'
+ carouselItem('Morte1.jpg', 1, 'active')
+ carouselItem('Morte2.jpg', 2)
+ carouselItem('Morte3.jpg', 3)
+ carouselItem('Morte4.jpg', 4)
+ carouselItem('Morte5.jpg', 5)
+ carouselItem('Morte6.jpg', 6)
+ carouselItem('Morte7.jpg', 7)
+ carouselItem('Morte8.jpg', 8)
+ carouselItem('Morte9.jpg', 9)
+ carouselItem('Morte10.jpg', 10)
+ ' </div>'
+ '<a class="carousel-control-prev" href="#carouselOfDeath" role="button" data-slide="prev">'
+ '<span class="carousel-control-prev-icon" aria-hidden="true"></span>'
+ '<span class="sr-only">Previous</span>'
+ '</a>'
+ '<a class="carousel-control-next" href="#carouselOfDeath" role="button" data-slide="next">'
+ '<span class="carousel-control-next-icon" aria-hidden="true"></span>'
+ '<span class="sr-only">Next</span>'
+ '</a>'
+ '</div>';


paragraphs['HD44'] = prdBadge() + smmBadge() + '-p-'
+ quote('Com’è frivolo il popolo di Argo. E com’è vicino al mio cuore!')
+ 'Ovunque vi giriate non vedete altro che gente povera, malata, disperata, vestita di stracci. Le mosche sembrano aver portato con sé non solo la miseria, ma anche la malattia.<br>Ma di che malattia si tratta esattamente? Le manifestazioni sono tante, e molto strane. Sembrerebbe di vedere tante diverse malattie in tutti questi soggetti. Magari c’è pure qualche falso invalido.-p-'
+ caroselloDellaMorte + '-p-'
+ 'Associate ad ogni raffigurazione la corrispondente malattia tra le seguenti: <b>Febbre gialla</b>, <b>Tubercolosi</b>, <b>Emorragia</b>, <b>Bipolarismo</b>, <b>Gotta</b>, <b>Colera</b>, <b>Peste bubbonica</b>, <b>Sifilide</b>, <b>Lebbra</b>, <b>Depressione</b>.<br>Se aveste dei dubbi, potete tranquillamente consultare il Manuale delle Malattie all’interno del materiale del Drammaturgo.<br>Una volta che avete associato ad ogni quadro una malattia, inviate al bot del produttore il codice risultante dall’iniziale della malattia.-p-'
+ '<i>Esempio:</i> se i quadri fossero disposti esattamente come la lista delle malattie, il codice risultante sarebbe <b>FTEBGCPSLD</b>.';

// Dal tempio
paragraphs['2414'] = quote('Non lasciarmi sola, difendimi dalle mosche, da mio fratello, da ma stessa. Mi pento, Giove, mi pento.')
+ 'Avete superato la terribile piaga delle Erinni. Purtroppo non tutti hanno avuto questa fortuna. Il codice per accedere alla Stanza Finale di questo Mondo, dove troverete l’Oggetto Speciale, è composto da 4 caratteri. I primi due sono <code>BV**</code>. Tornate indietro a risolvere altre prove per scoprire gli altri due caratteri.';

// Dalle malattie
paragraphs['C99K'] = quote('- Non so dirvi chi siano più brutti e cattivi a nuocervi, se queste belle bambine o i vostri cari sudditi.<br>- Bene. Apri le porte.')
+ 'Complimenti, grazie al vostro carisma e alla vostra attenzione verso il prossimo, vi siete guadagnati il favore del popolo. Tutte quelle persone fuori dal palazzo non vorranno fare altro che acclamarvi… no? Il codice per accedere alla Stanza Finale di questo Mondo, dove troverete l’Oggetto Speciale, è composto da 4 caratteri. Gli ultimi due sono <code>**8V</code>. Tornate indietro a risolvere altre prove per scoprire i primi due caratteri.';

paragraphs['BV8V'] = quote('Addio, miei uomini, tentate di vivere. Tutto è nuovo qui, tutto è da ricominciare. Un giorno, nella città di Sciro infestata dai topi giunse un suonatore di flauto che si mise a suonare, e i topi andarono ad affollarsi intorno a lui. Disse agli uomini di Sciro: “scostatevi!”. E i topi drizzarono la testa. E il suonatore di Flauto scomparve con i topi per sempre.')
+ 'Anche grazie al vostro coraggio e alla vostra capacità di resistere alle prove più dure (<i>Ehi, ti è arrivato un messaggio… Ciao!</i>), Argo è stata salvata dall’epidemia che imperversava. Ora non vi resta che andarvene da questo Mondo e portarvi dietro tutti i mali che hanno afflitto la città per molti anni.-p-Raccogliete in questo Paragrafo la <b>mela Del Pedagogo</b>, l’Oggetto Speciale del Mondo de <i>Le Mosche</i>.';

paragraphs['MELA'] = getFinalObjectParagraph('mela del Pedagogo', "Le Mosche");

paragraphs['NUTS'] = scnBadge() + '-p-' + quote('Vieni! Vieni! Ti riceveranno le nostre braccia, i nostri baci lacereranno la tua carne fragile.')
+ 'Sono le voci ad ingannarvi, o quel numero si ripete esattamente <b>tre</b> volte?';

paragraphs['HALL'] = scnBadge() + '-p-' + quote('Salite dalle viscere del mondo, o morti cento volte, venite a saziare il vostro odio sui viventi.')
+ 'Perché ostinarsi a festeggiare qualcosa che non è nella nostra tradizione.<br>Perché?-p-Per un misero indizio? Per un minuscolo pezzo di quel gigantesco puzzle in cui costantemente siamo immersi?-p-Peccato, dico davvero.-p-Se non altro, il numero del Diavolo potrebbe pure comparire nel prossimo Paragrafo.';

paragraphs['CULO'] = scnBadge() + '-p-' + quote('Io puzzo! Io puzzo! Sono una carogna immonda!')
+ 'Hey! What did you expect?';

paragraphs['LEAF'] = scnBadge() + '-p-' + '<i>*chomp chomp munch munch*</i>-p-Mmmmh che buona questa fogliolina!';

paragraphs['FAIL'] = scnBadge() + '-p-' + 'Eccovi qui.<br>Di nuovo.-p-Ma come, non mi riconoscete?-p-Sono sempre io, il vostro <i>Tutorial</i>, evocato dal fatto che abbiate fatto una grandissima ca***ta.<br>Avete voluto volare troppo in alto, andare a toccare la superficie del sole, mangiare il frutto proibito, ed - esattamente come avevo predetto - vi è andata male.<br> Molto male, oserei dire.-p-Capito la morale di questo Paragrafo?-p-<b>Non dovete provare a barare.</b>-p-'
+ 'Ora. Per stavolta passi, non mi va di impuntarmi troppo, anche perché è la prima volta e tutti siamo stati in quell\'età in cui si fanno cose un po\' pazzerelle.<br>Ma che non si ripeta più, ok?-p-Io non voglio più vedervi in questo Paragrafo per il resto della partita, chiaro?-p-E ora su, andatevene, che avete un gioco da vincere.<br>-p-'
+ '<a href="#" class="btn btn-danger">Perdoname <i>Tutorial</i> por mi vida loca</a>';

paragraphs['HEAL'] = scnBadge() + '-p-' + quote('Ora invece... Ho lasciato scivolare il mio odio. Ho voluto credere di poter guarire la gente di qui con le parole. Ed è colpa tua.')
+ '&Egrave; una mia impressione o state davvero già meglio?';

////////////////
// GIOVANNA //
//////////////

paragraphs['JEAN'] = quote('Ci siamo tutti? Bene. Prima sarà giudicata e bruciata, meglio sarà.')
+ 'Quanto disordine in questo teatro! C’è un gran traffico di persone che si muove avanti e indietro trasportando rami, tronchi, maschere, mantelli, strumenti musicali, fari, corde, locandine e molto altro ancora. Forse è il caso di dare una mano a qualcuno.-p-'
+ 'Se volete chiedere informazioni a qualcuno su cosa stia succedendo, andate al Paragrafo <code>52WG</code>.<br>'
+ 'Se volete offrirvi come volontari/e, andate al Paragrafo <code>32FZ</code>.<br>'
+ 'Se volete aiutare a sistemare gli strumenti musicali, andate al Paragrafo <code>S1YS</code>.<br>'
+ 'Se preferite andarvene in giro ad esplorare un po’, andate al Paragrafo <code>L1GH</code>.<br>';

paragraphs['52WG'] = prdBadge() + '-p-' + quote('Lo dico sempre io, non si riflette abbastanza!')
+ 'È stata fissata una nuova replica di Giovanna. Sfortunatamente il regista non è al momento raggiungibile per chiarire le informazioni fondamentali, si potrebbe chiedere agli attori. Ma c’è un po’ di confusione, le loro informazioni non combaciano.-p-'
+ '<h4>Andrea</h4> sostiene che la persona responsabile delle luci sia Colpani, mentre della scenografia se ne occuperà Dusi. Il trasporto avverrà grazie ad un’ape rossa, la replica è fissata per le 22 e la convocazione è alle 14.-p-'
+ '<h4>Francesco</h4> sostiene che il responsabile luci sia Fra Alberto, mentre della scenografia se ne occuperà Colpani. Il trasporto avverrà con un’ape rossa, la replica è fissata per le 21 e la convocazione è alle 11.-p-'
+ '<h4>Guido</h4> sostiene che il responsabile luci sia Miriam, mentre della scenografia se ne occuperà Mauro. Il trasporto avverrà con un camioncino di Miso, la replica è fissata per le 21 e la convocazione è alle 14.-p-'
+ '<h4>Matteo</h4> sostiene che il responsabile luci sia Colpani, mentre della scenografia se ne occuperà Mauro. Il trasporto avverrà con un dirigibile. La replica è fissata per le 20 e la convocazione è alle 13.-p-'
+ '<h4>Paola</h4> sostiene che il responsabile luci sia Mauro, mentre della scenografia se ne occuperà Fra Alberto. Il trasporto avverrà con un camioncino di Miso, la replica è fissata per le 21 e la convocazione è alle 9.-p-'
+ '<h4>Vincenzo</h4> sostiene che il responsabile luci sia Dusi, mentre della scenografia se ne occuperà Miriam. Il trasporto avverrà con un dirigibile. La replica è fissata per le 19 e la convocazione è alle 11.-p-'
+ 'C’è evidentemente un po’ di confusione. Ma per fortuna il regista conosce bene i suoi attori, e sa che tra di loro nessuno è perfetto e nessuno è completamente fuori strada. C’è una sola persona che ricorda con esattezza tre informazioni, due che ne ricordano due e tre persone che ne ricordano correttamente solo una.<br>'
+ 'Le informazioni sono:'
+ '<ol>'
+ '<li><b>Addetto luci</b>;</li>'
+ '<li><b>Addetto scenografia</b>;</li>'
+ '<li><b>Mezzo di trasporto</b>;</li>'
+ '<li><b>Orario della replica</b>;</li>'
+ '<li><b>Orario di convocazione</b>.</li>'
+ '</ol>-p-'
+ 'Ah, un paio di altre informazioni:'
+ '<ol>'
+ '<li>Il dirigibile è sicuramente fuori dal budget dello spettacolo!</li>'
+ '<li>Colpani e Fra Alberto non vanno sicuramente d’accordo. Meglio non metterli a lavorare insieme.</li>'
+ '<li>Miriam ha i Consigli di classe! Purtroppo non può esserci se la convocazione è alle 14.</li>'
+ '</ol>-p-'
+ 'Una volta che avete capito l’organizzazione della replica, inviate la soluzione al Produttore.';

/*
paragraphs['TR33'] = prdBadge() + smmBadge() + '-p-' + quote('- Dove sei stata?<br>- Ero nei campi.<br>- Anche io ero nei campi, ma sono tornato. Sono le sei.<br>- Ho perduto la nozione del tempo.')
+ 'MANCA LA PROVA.';
*/

paragraphs['S1YS'] = prdBadge() + '-p-' + quote('- Smettetela di giocare con quel balocco, maestà, e sedetevi in maniera composta!<br>- Parliamoci chiaro, Arcivescovo. Volete che giochi o che governi?')
+ 'Sfortunatamente Guido ha fatto cadere il cassone contenente gli strumenti musicali. Potreste dargli una mano a sistemarlo? Purtroppo non c’è modo di sistemare gli strumenti se prima non sarete in grado di riconoscerli. Come fareste, d’altra parte, a sistemare la Kalimba nel posto della Kalimba, se non sapete nemmeno cosa sia una Kalimba?-p-'
+ 'Ascoltate l’audio sottostante e provate a identificare il maggior numero di strumenti. Dopodichè inviate un messaggio al Produttore con il nome degli strumenti utilizzati all’interno di questo audio. Se ne identificate a sufficienza, vi verrà consegnato il codice del prossimo paragrafo.-p-'
+ audio('Strumenti.mp3')
+ '-p-Un consiglio: potete scaricare l\'audio cliccandoci sopra con il tasto destro del mouse. In questo modo dovreste riuscire ad ascoltarlo tramite gli auricolari, che vi permettono di percepire l\'audio in maniera migliore.';


paragraphs['L1GH'] = smmBadge() + '-p-' + quote('Fratello Ladvenu, Giovanna è salva. Ella accetta di rientrare in grembo alla Madre Chiesa. Leggete l’atto di abiura, lei lo firmerà.')
+ 'Gironzolando avanti e indietro giungete infine nei camerini degli attori. Sentite che tutti quanti stanno ripassando una sorta di cantilena comune, purtroppo le porte dei camerini sono chiuse, per cui non riuscite a distinguere chiaramente le parole che stanno ripetendo.-p-'
+ 'All’interno dei quattro Paragrafi successivi, troverete quattro immagini contenenti alcuni pezzi dell’Abiura di Giovanna, il cui testo completo sarà riportato qui sotto. In ogni immagine saranno riportate alcune sillabe e lettere, che dovrete sottrarre dal testo originale per trovare il messaggio segreto contenuto dentro l’abiura e trovare il prossimo paragrafo. In tutte le immagini è stato scritto il testo originale e poi sono state eliminate le lettere non pertinenti, quindi la spaziatura tra le lettere rimaste è identica alla spaziatura presente nell’originale (aprite direttamente le immagini per capire meglio).-p-'
+ quote('Io, Giovanna, detta volgarmente “La Pulzella”, confesso di aver peccato di orgoglio, di caparbietà, e di malizia assicurando di aver avuto alcune rivelazioni di Nostro Signore Iddio tramite gli angeli e le Beate Sante. Rinnego codesti peccati, giuro sui Santi Vangeli che non porterò più questo abito di eresia, non prenderò più le armi. Dichiaro di rimettermi umilmente alla Nostra Santa Madre Chiesa e al Santo Padre il Papa di Roma, per l’esame dei miei peccati e dei miei errori. Io supplico la Chiesa di rimettermi nel suo grembo, e mi dico pronta a subire la sentenza che vorrà infliggermi.')
+ '<ul>'
+ '<li>Paragrafo 1: <code>C734</code>;</li>'
+ '<li>Paragrafo 2: <code>A834</code>;</li>'
+ '<li>Paragrafo 3: <code>N921</code>;</li>'
+ '<li>Paragrafo 4: <code>E931</code>.</li>'
+ '</ul>';

paragraphs['C734'] = 'Ecco quello che riuscite vagamente a sentire ad un primo ascolto:-p-'
+ img('abiura1.png');

paragraphs['A834'] = 'Un secondo ascolto vi permette di sentire le seguenti sillabe:-p-'
+ img('abiura2.png');

paragraphs['N921'] = 'Ascoltando una terza volta, quello che capite non migliora molto:-p-'
+ img('abiura3.png');

paragraphs['E931'] = 'Per l\'ultima volta, ecco cosa sentite dai camerini degli attori:-p-'
+ img('abiura4.png');

// Ice bucket challenge
paragraphs['32FZ'] = smmBadge('Under my umbrella!')
+ '-p-<b>Nonono fermatevi!</b><br>Che cosa avete combinato? Non capite che qui tutto è in equilibrio precario?-p-Per favore, o vi spostate di qui e andate subito al Paragrafo <code>75VA</code>, oppure aiutate a testare la cascata.-p-...-p-'
+ 'Ancora qui?<br>Ottimo, lo prendo come un sì.-p-'
+ 'Una persona fra voi si metta lì al centro -sì esatto, proprio lì, perfetto- e chiedete al Social Media Manager di contattare l\'account Instagram <code>@game_of_dice</code>. Quando gli avrete mandato il messaggio "<i>Under my umbrella!</i>", io aprirò l\'acqua.';

paragraphs['75VA'] = quote('- Guarda dritto davanti a sé?<br>- Sì, signore.')
+ '-p-Il primo carattere del codice del Paragrafo finale di questo Mondo è: <code>T***</code>.';

paragraphs['REI2'] = quote('- Senza debolezze?<br>- Sì, signore.')
+ '-p-Il secondo carattere del codice del Paragrafo finale di questo Mondo è: <code>*4**</code>.';

paragraphs['LZ55'] = quote('- Sembra che stia sorridendo, non è vero?<br>- Sì, signore.')
+ '-p-Il terzo carattere del codice del Paragrafo finale di questo Mondo è: <code>**N*</code>.';

paragraphs['CAMG'] = quote('- Non la vinceremo mai.<br>- No, signore.')
+ '-p-Il quarto carattere del codice del Paragrafo finale di questo Mondo è: <code>***9</code>.';

paragraphs['T4N9'] = quote('Bisognerà avere del coraggio, ne avrò tanto io.')
+ 'Tutto tace.-p-Si sente solo lo scrosciare della pioggia, tutto intorno a voi, nel buio.-p-Raccogliete in questo Paragrafo, con molta cura, una piccola <b>allodola</b>, l’Oggetto Speciale del Mondo di <i>Giovanna</i>. ';

paragraphs['RAIN'] = getFinalObjectParagraph('allodola', "Giovanna");


paragraphs['W00D'] = scnBadge() + '-p-' + 'Un ottimo tronco, di ottima fattura.<br>Dove l\'avete recuperato?';

paragraphs['MISO'] = scnBadge() + '-p-' + 'Fantastico! Avete trovato nuove persone che possono darci una mano!-p-Non è meraviglioso quando ci si aiuta a vicenda?';

// Kalimba
paragraphs['S65D'] = scnBadge() + '-p-' + 'Mmh... Riflettete.-p-La kalimba si trovava nel cassone, al momento in cui è stato rovesciato. Ma se non è volata fuori, come fa ad aver prodotto un suono?-p-No no, probabilmente vi state confondendo. Non si tratta di una kalimba, ma di quell\'altro strumento... Coso lì, dai! Come si chiama quell\'altro strumento con la \"<b>k</b>\" nel nome?';

// Cassone strumenti
paragraphs['CASS'] = scnBadge() + '-p-' + 'Oh caspita! Appena recuperate il cassone degli strumenti, vi rendete conto che al suo interno ne sono rimasti ancora alcuni!-p-Beh, senza alcun dubbio, se non sono volati fuori durante il ribaltamento, sicuramente non hanno contribuito a fare quel rumore che si è sentito prima... Giusto?-p-Possiamo quindi escludere dalla lista, con ragionevole certezza, i seguenti strumenti musicali:'
+ '<ul>'
+ '<li>Un\'arpa.</li>'
+ '<li>Un clavicembalo.</li>'
+ '<li>Un flauto di Pan.</li>'
+ '<li>Un theremin.</li>'
+ '<li>Due nacchere.</li>'
+ '<li>Una carot-<i>EHY!</i> Chi ha lasciato una carota nel cassone degli strumenti?</li>'
+ '</ul>';

//////////////////////////
// UN GIORNO QUALUNQUE ///
//////////////////////////

paragraphs['WHEN'] = quote('È una casa troppo grande, due piani, un mucchio di stanze. Ma io non è per il lavoro che me ne vado. Me ne vado perché siamo troppo isolati. Oggi che nevica, qui sembra d’essere in un tomba. C’è un silenzio, come essere in una tomba.')
+ 'È una casa un po’ strana questa. Secondo alcuni c’è sempre tanto da fare, perché è una casa molto grande e di mestieri non ne mancano mai. Secondo altri non c’è mai nulla da fare, perché in realtà in questa casa è da un po’ che non c’è più vita.-p-'
+ 'Se pensi che ci sia molto da fare, vai al paragrafo <code>2385</code>.<br>'
+ 'Se pensi che non ci sia nulla da fare, vai al paragrafo <code>00Q0</code>.';

paragraphs['00Q0'] = prdBadge() + smmBadge() + '-p-' + quote('Avete un’idea strana della disperazione, voialtri. Quando uno è disperato, magari non fa mica delle cose tanto diverse dal solito. Magari fa quello che ha fatto per tutta la vita.')
+ 'È giunto il momento di prendersi una pausa.<br>Contattate il Produttore e comunicategli di voler risolvere la prova legata a questo Paragrafo, con codice <code>00Q0</code>. Passato un certo periodo, egli vi darà la soluzione per accedere ad un’altra stanza. Sfruttate questa pausa per bere un caffè, fare meditazione, andare in bagno o, se preferite, per fare un’altra sfida del Social Media Manager.';

paragraphs['2385'] = smmBadge() + '-p-' + quote('Cesare? Se ne infischia. È stanco di lei. Non le prenderà alcun appartamento.')
+ 'È molto importante sistemare la casa prima che torni il Signor Cesare. Passare l’aspirapolvere, pulire i vetri, rimuovere la muffa e sistemare ogni cosa al suo posto. A proposito: dove son finite le ciabatte di Cesare? Bisogna ritrovarle al più presto, si arrabbia sempre quando non trova le sue ciabatte!-p-'
+ 'Trova le ciabatte nella seguente immagine. Le coordinate del quadrante contenente le ciabatte ti permetteranno di accedere al prossimo paragrafo.'
+ imgTransition('Ciabatte_noGrid.png', 'Ciabatte_withGrid.png');

paragraphs['NIUW'] = img('Ciabatte.jpg') + '-p-Andate al paragrafo <code>LEG0</code>.';

paragraphs['LEG0'] = quote('Now and then I think of when we were together<br>like when you said that you were so happy you could die<br>told myself that you were right for me<br>but I felt so lonely in your company')
+ 'Che succede? Tutto cambia, nulla cambia. Quelli che fino a poco fa non erano altro che cubi bianchi, possono improvvisamente diventare poltrone e divani. E tavoli, e pietre e molto altro ancora. Bisogna solo mettere ogni cosa al suo posto.-p-'
+ 'Per sbloccare il codice di questa prova dovrete accedere al materiale del Drammaturgo. In particolare, aprite la cartella “<i>Presentazioni Inutili</i>”. E, all’interno di questa cartella, aprite la “<b>23</b>”.<br>Al suo interno troverete una presentazione con 5 slide. La prima slide presenta una griglia contenente dei numeri. Le altre slide presentano, ognuna, un puzzle di 15 pezzi. In realtà, un pezzo di puzzle è stato eliminato, il vostro compito sarà il seguente:'
+ '<ol>'
+ '<li>ricostruire il puzzle</li>'
+ '<li>capire quale sia il pezzo mancante</li>'
+ '<li>confrontare con la griglia della prima pagina la posizione del pezzo mancante</li>'
+ '<li>comporre il codice del prossimo paragrafo mettendo in ordine i numeri corrispondenti ai quattro pezzi mancanti (seguendo l’ordine delle slide).</li>'
+ '</ol>-p-'
+ 'Consiglio: giacché si tratta di quattro puzzle all’interno di quattro slide diverse in una presentazione drive, in questo caso potrebbe essere utile inviare una copia di questa presentazione a ogni membro della squadra in modo che ognuno possa risolverne una slide (e se qualcuno finisce prima, possa aiutare un compagno). <i>Together is better!</i>';

paragraphs['WAIT'] = quote('Fragola.')
+ 'La prima metà del codice del Paragrafo finale di questo Mondo è: <code>6G**</code>';

paragraphs['WALL'] = quote('Panna.')
+ 'La seconda metà del codice del Paragrafo finale di questo Mondo è: <code>**PT</code>';

paragraphs['6GPT'] = quote('- Poverina. Non ti avvilire così. Guarda che faccia che hai, sei tutta fredda, un pezzo di ghiaccio. Ma se non è successo niente. E tutto come è stato sempre. In questa nostra vita, è molto raro che succeda qualcosa di nuovo.<br>- Sì. È rarissimo. E anche quando succede qualcosa di nuovo, la vita non cambia. Rimane com\'è. Schifosa.')
+ 'Difficile decidere cosa fare. Agire. Non agire. Fa qualche differenza?-p-Beh, mentre ci pensate, raccogliete in questo Paragrafo una <b>coppa fragola e panna</b>, l’Oggetto Speciale del mondo di <i>Un Giorno Qualunque</i>.';

paragraphs['YUMM'] = getFinalObjectParagraph('coppa fragola e panna', "Un Giorno Qualunque");

paragraphs['TOMB'] = scnBadge() + '-p-' + quote('- Ma dove avevi la testa, quando sei scappata di casa?<br>- Voleva che mi facessi ammazzare?')
+ 'Perché cercare un paragrafo tanto triste? :(';

paragraphs['H077'] = scnBadge() + '-p-' + quote('Abbiamo scambiato due parole. Così, per passare il tempo. Sennò il tempo non passa mai.')
+ 'Ah, signora mia, è proprio vero: il tempo non passa.<br>Il tempo non passa <i>mai</i>.-p-Eh, che ci volete fare, in fondo?<br>Avete accettato di giocare di vostra spontanea iniziativa, francamente non mi pare che qualche persona vi abbia obbligato.-p-Certo, lo capisco, può essere snervante. Specialmente quando si è in competizione con le altre squadre.<br>Ma per cosa, poi? Per un po\' di birra che sa di piscio e una pizza riscaldata?-p-Se volete la mia opinione, nel caso ve la steste domandando, io mollerei qui.<br>Voglio dire: che cosa avete concluso? Che cosa avete ottenuto finora?<br>Qualche <i>codice</i> e qualche <i>punto</i> faranno davvero la vostra felicità? O sarà solo l\'ennesimo vano tentativo di riempire le vostre vuote giornate di quarantena?';

paragraphs['JAVA'] = scnBadge() + '-p-' + quote('Potrei avere qualcosa da mangiare? Ho fame. Mi sento svenire.')
+ 'Approfittatene. Sfruttate il tempo che vi è concesso. Non sprecatelo. Fatelo fruttare. Ridete. Anche se vi sta crollando il mondo addosso. Fatevi credere pazzi. Bevete un caffè con le persone a voi care. Amate. Gioite. Disperatevi. Piangete senza vergogna. Mangiate una pera ancora acerba. Fate volare un aquilone in una giornata di tempesta. Abbracciatevi. Coccolatevi. Guardate il TG di Mentana. Correte nudi sotto la pioggia. Emozionatevi. Stupitevi per un\'alba o un tramonto. Ficcatevi le batterie mini stilo nel buco del cazzo. Vivete.';

paragraphs['FEET'] = scnBadge() + '-p-' + 'O-ok.-p-Perché siete qui?-p-Forse è meglio se non diciamo a nessuno del nostro incontro in questo Paragrafo, che ne dite?<br>Posso fidarmi di voi, almeno per i prossimi <b>sette minuti</b>?';

////////////////////////////
// HAI SAPUTO DI Charley? //
////////////////////////////

paragraphs['PSST'] = prdBadge() + smmBadge('Hai saputo di Charley?') + '-p-' + quote('- Hai saputo di Charley?<br>- Cosa?<br>- Gli hanno sparato.<br><br>- Ah.') + '-p-'
+ 'Questo è un Mondo un po’ particolare. All’interno di questo Mondo, infatti, non dovrete svolgere differenti prove in sequenza, bensì un’unica prova. Quando avrete risolto questa prova, otterrete l’Oggetto Speciale di questo mondo. Il vostro compito è risolvere il giallo della morte di Charley.-p-'
+ 'È il 9 luglio. Arrivati sul luogo del delitto, un delizioso appartamento in un condominio con un ampio giardino nella periferia di New York, parlate con i responsabili delle indagini, gli ispettori Winston e Welch. Vi riferiscono che il morto è Charley, un simpatico uomo di mezz’età, un po’ borghese ma tutto sommato a posto. Qualche mese fa c’erano stati dei rumori sospetti, degli spari, ma alla fine si era risolto senza grossi problemi. Comunque, quella era un’altra storia e non ha nulla a che vedere con questa. Il cadavere è stato ritrovato da Myra, sua moglie, all’ingresso della casa. Lo ha trovato alle 22.30, dopo essere tornata dal circolo del Bridge (alibi confermato). Dovrete portare avanti questa indagine aiutando gli ispettori a fare chiarezza sul caso.-p-'
+ '<h4>Primo passaggio</h4>'
+ 'Avrete accesso a <b>sei diverse stanze</b> della casa, i cui codici-Paragrafo saranno scritti al termine di questo Paragrafo. All’interno di ognuno di questi paragrafi troverete una fotografia della stanza.<br>'
+ 'L’indagine procede in questo modo:'
+ '<ul>'
+ '<li>Per prima cosa dovrete raccogliere indizi utili all’interno delle varie stanze. Per fare ciò dovrete prima entrare nella stanza e poi provare a esaminare gli oggetti che vedete nell’immagine, tramite il bot dello Scenografo.<br>'
+ '<def>Ad esempio, se io volessi esaminare la porta in questo paragrafo (è solo un esempio, in questa stanza non ci sono indizi), provo a raccogliere in questa stanza (<code>PSST</code>) l’oggetto <i>“Porta”</i>.</def>'
+ '<li>Se è presente un indizio correlato alla porta, il bot dello Scenografo mi darà, insieme all’oggetto raccolto, il codice di un nuovo Paragrafo. All’interno di questo paragrafo troverò una breve descrizione dell’indizio scoperto e, in particolare, troverete una parola scritta in stampatello maiuscolo. Quella parola sarà la “Parola Chiave” dell’indizio.'
+ '<def>Ad esempio, se la porta fosse effettivamente un indizio, il bot dello Scenografo mi permetterà di raccogliere la Porta e mi darà il codice <code>DOOR</code>. Inserendo tale codice nel motore di ricerca, mi trovo in un Paragrafo con questa descrizione: “Esaminando la porta, ti rendi conto che la SERRATURA non è stata forzata”. In questo caso, la Parola Chiave sarà “serratura”.</def>'
+ '<li>Dopo aver trovato una Parola Chiave, dovrete tornare indietro (scegliete voi liberamente se tornare alla Porta d’Ingresso o alla stanza che stavate esaminando) per cercare altri indizi e, di conseguenza, parole-chiave. Ricordate una cosa importante: in ogni stanza è presente <b>almeno un indizio</b> e <b>massimo tre indizi</b>.'
+ '<li>Quando avrete raccolto almeno otto parole-chiave, potete tornare in questo Paragrafo, e risolverlo tramite l’app del Produttore. Vi sarà chiesto di inserire almeno otto Parole-Chiave. Se le inserirete correttamente, otterrete il codice del Paragrafo dove potrete raccogliere l’Oggetto Speciale di questo Mondo.'
+ '</ul>'
+ '<h4>Secondo Passaggio</h4>'
+ '<ul>'
+ '<li>Ogni indizio vi permette di ricostruire, un pezzo per volta, la possibile dinamica degli eventi. Magari capirete tutto, magari non capirete nulla, ma in entrambi i casi potete vincere l’Oggetto Speciale grazie alle Parole Chiave raccolte. C’è un ulteriore modo, per fare punti in questo mondo. Se pensate di aver capito come si sono svolti i fatti, dovrete sfruttare il Social Media Manager. Egli dovrà inviare all’account Instagram <code>@game_of_dice</code> un messaggio il cui titolo è <i>“Hai saputo di Charley?”</i> e di seguito provare a descrivere con minuzia di dettagli la dinamica dell’omicidio. In questo testo è buona cosa menzionare tutte le parole chiave che avrete trovato (con una possibile giustificazione del perché e come questi indizi abbiano influenzato la dinamica della vicenda). Ad ogni squadra sarà dato un punteggio extra sulla base di quanto vicina è andata alla soluzione reale!</li>'
+ '</ul>-p-'
+ 'Se tutto è chiaro… potete cominciare l’indagine!-p-'
+ 'I codici delle stanze sono i seguenti:'
+ '<ol type=\'I\'>'
+ '<li><b>Camera da letto</b> → <code>5D5G</code>'
+ '<li><b>Cucina</b> → <code>9E4R</code>'
+ '<li><b>Salotto</b> → <code>8YCO</code>'
+ '<li><b>Bagno</b> → <code>4MN2</code>'
+ '<li><b>Mansarda</b> → <code>6F1J</code>'
+ '<li><b>Studio</b> → <code>17BU</code>'
+ '</ol>';
// Cucina
paragraphs['9E4R'] = img('Cucina.jpg');
// Mansarda
paragraphs['6F1J'] = img('Mansarda.jpg');
// Salotto
paragraphs['8YCO'] = img('Salotto.jpg');
// Bagno
paragraphs['4MN2'] = img('Bagno.jpg');
// Camera da letto
paragraphs['5D5G'] = img('Camera da letto.jpg');
// Studio
paragraphs['17BU'] = img('Studio.jpg');

paragraphs['XHJK'] = scnBadge('Frigorifero') + '-p-Aprendo il frigorifero, di primo impatto non notate nulla di strano. Prestando però maggiore attenzione vi rendete conto di un dettaglio non da poco. C’è una <b>BOTTIGLIA</b> di vino rosso consumata a metà. Strano, pensate, Myra non beve, e solitamente non beve nemmeno Charley, se non nelle occasioni speciali.';
paragraphs['BRBL'] = scnBadge('Pattumiera') + '-p-Aprite la pattumiera della Cucina, notate subito la presenza di alcuni <b>COCCI</b>. Con un po’ di pazienza provate a metterle insieme e vi rendete conto che si tratta di un vaso trasparente, rotto. Sarà forse il frutto di una colluttazione? Con un po’ di attenzione notate un altro dettaglio molto importante. Non si tratta di un vaso qualunque, ma di un pregiato vaso da salotto.';
paragraphs['IWN2'] = scnBadge('Lavandino') + '-p-Nel lavandino trovate due <b>BICCHIERI</b> di vino.';
paragraphs['MKDO'] = scnBadge('Divano') + '-p-Grazie al vostro incredibile fiuto, vi viene in mente di provare a guardare se ci sia qualcosa sotto il divano-letto. A tentoni con le mani trovate una <b>VIDEOCAMERA</b> rotta. Purtroppo non riuscite a vedere se ci siano sopra delle registrazioni.';
paragraphs['C7ER'] = scnBadge('Scaffale') + '-p-Prestando particolare attenzione allo scaffale, trovate un <b>LIBRO</b> dalla copertina insolita, in mezzo ad una serie di romanzi Harmony. Il titolo è il seguente: “Dsm-5. Manuale Diagnostico e Statistico dei Disturbi mentali”. Trovate un segnalibro al capitolo “Bipolarismo”.';
paragraphs['PEG5'] = scnBadge('Finestra') + '-p-Ci voleva un certo acume per arrivare a capire che l’unico modo che aveva l’assassino per sbarazzarsi dell’arma del delitto, senza farsi notare era con il rischio di incontrare qualcuno uscendo dall’appartamento del condominio era… lanciarlo fuori dalla finestra. Probabilmente l’intenzione era di recuperarlo dal giardino antistante l’edificio. Sfortuna ha voluto che quel <b>COLTELLO</b> sia rimasto impigliato tra i rami del grande platano del giardino.';
paragraphs['ULU3'] = scnBadge('Caminetto') + '-p-In mezzo alla cenere del camino trovate un <b>LEMBO</b> di stoffa. Probabilmente apparteneva ad uno strofinaccio, che è stato bruciato. Chissà come mai.';
paragraphs['29SS'] = scnBadge('WC') + '-p-Un dettaglio cattura la vostra attenzione. La <b>TAVOLETTA</b> del bagno è abbassata. Il bagno del piano di sotto lo usa solo Charley mentre guarda la televisione in salotto, quindi di solito è alzata.';
paragraphs['3CFG'] = scnBadge('Armadietto delle medicine') + '-p-Aprendo l’armadietto, trovate una serie di farmaci diversi, tachipirine, gastroprotettori, farmaci per la pressione… nulla di strano. Con uno sguardo più attento, però, vi rendete conto che c’è un flacone strano. Lo prendete in mano e leggete l’etichetta. Si tratta di <b>LITIO</b>. Un farmaco utilizzato per le persone affette da Disturbi dell’umore, come la depressione e il bipolarismo.';
paragraphs['91J1'] = scnBadge('Quadro') + '-p-Un grande classico. Cosa ci sta dietro al quadro della camera da letto? Una <b>CASSAFORTE</b>.<br>Quasi banale, oserei dire.<br>Il vero problema è capire il codice.-p-Se mai doveste trovarlo… Provate a inserire il codice nello spazio di ricerca per sbloccare il Paragrafo dove potrete raccogliere il contenuto della cassaforte.';
paragraphs['RT3W'] = scnBadge('Computer') + '-p-Aprendo il pc, trovate questo <b>CALENDARIO</b> virtuale. Chissà se può esservi utile a capire qualcosa.-p-' + img('Calendario.png');

paragraphs['2107'] = 'Solo Charley poteva scegliere come password per la cassaforte data di nascita di suo figlio.<br>Il rischio di scoprirla era veramente alto… e voi ci siete riuscit* grazie al vostro incredibile acume! All’interno della cassaforte trovate un <b>GIOIELLO</b>. Si tratta di un paio di orecchini dorati, devono valere molto.-p-Strano, però. Vi sembrava di ricordare che Myra fosse allergica all’oro.';

paragraphs['1R8C'] = quote('(knock knock)<br><br>- Sono Myra! Aprite per favore!')
+ 'Il vostro fiuto per la verità vi ha aiutato a giungere alla soluzione… forse. La verità è una questione più complessa di quello che sembra, ma per oggi ci accontenteremo della vostra soluzione.-p-Raccogliete in questa stanza un <b>cuscino di Cocca</b>, l’Oggetto Speciale del Mondo di <i>Hai Saputo di Charley?</i>.';

paragraphs['PUFF'] = getFinalObjectParagraph('cuscino di Cocca', "Hai saputo di Charley?");


//////////////////////
// PARAGRAFI RANDOM //
//////////////////////


paragraphs["DUSI"] = adminBadge() + '-p-'
+ "<marquee direction='right'><a alt='' class='btn btn-danger' href='https://i.kym-cdn.com/entries/icons/original/000/000/260/youjustlost.jpg' style='width: 300px; font-size: 30px;'>NON CLICCARMI</a></marquee>";

paragraphs['METT'] = adminBadge() + smmBadge('Hey! Ma io ti conosco!') + '-p-'
+ quote('Non ce n\'è, per nessuno ormai,<br>Di tutta Brescia è il più esaltante degli eroi.<br>Matteo sa come si fa ad affascinare tutta quanta la città.<br>Ieri era zero<br>(Zero, zero.)<br>Oggi è un regista<br>(E il più fiero)<br>E chi l\'avrebbe pensato mai, oggi è il più grande che sia esistito mai.')
+ 'CAVOLO RAGAZZI, no cioè troppo carini che siete venuti a trovarmi! Sono veramente in un brodo di giuggiole. Cosa posso fare per voi? Non saprei proprio, suggerirvi le battute o i codici per vincere delle prove è fuori discussione, va contro la mia etica attoriale. Però magari una cosina potrei farla. Dato che sono io a gestire l’account Instagram <code>@game_of_dice</code>... facciamo così: mandatemi un vostro selfie sull’account Instagram e disegnateci un cuore con scritto <i>“Mett”</i> al suo interno. Vi regalerò <b>50</b> punti.-p-<i>SSSH</i> mi raccomando, non dite niente a Dusi. Questo doveva essere un capitolo inutile!';

paragraphs["PENE"] = "Vergognatevi.";
paragraphs["FIGA"] = "Vergognatevi.";

paragraphs["1234"] = "Banale, non trovi anche tu?\nUn codice così semplice, così comune, non ti rende onore. Perché mai avresti dovuto digitarlo? Perché cedere alla tentazione?-p-Eppure, qualcosa di utile lo si trova lo stesso. Prova, così per dire, a digitare il codice <code>9241</code>.";

paragraphs["9241"] = "Ora digita il codice <code>9213</code>.";
paragraphs["9213"] = "Ora digita il codice <code>9231</code>.";
paragraphs["9231"] = "Ora digita il codice <code>9124</code>.";
paragraphs["9124"] = "Ora digita il codice <code>9324</code>.";
paragraphs["9324"] = "Ora digita il codice <code>9432</code>.";
paragraphs["9432"] = "Ora digita il codice <code>9142</code>.";
paragraphs["9142"] = "Scusa, eh, ma fai tutto quello che ti viene detto?";

paragraphs['0042'] = '42 è la risposta ad ogni domanda. Non lo sapevate? Provate a raccoglierla. Qualche punticino lo farete.';

paragraphs['LSCM'] = smmBadge() + '-p-Grazie! finalmente qualcuno si ricorda di noi.<br>Solo perché Matteo e Ale non sono più i registi, dobbiamo trovarci lasciati fuori da questa caccia al tesoro? Siamo anche noi delle grandi produzioni, abbiamo solo avuto la sfortuna di non essere messe in scena per via del Coronavirus… ma almeno qui avremo il nostro spazio!-p-Come dite? Se possiamo farvi avere qualche punto?-p-Ahm, in realtà non abbiamo ricevuto alcuna indicazione in merito. Matteo dice che non eravamo ancora maturi a sufficienza per poter permettere ai giocatori di guadagnare dei punti. Fossi in voi, manderei un selfie con il dito medio all’account Instagram <code>@game_of_dice</code>. Penso possiate perdere <b>5</b> punti se lo farete, ma… noi vi ricorderemo per sempre per il vostro gesto.';

paragraphs['LSCF'] = smmBadge() + '-p-Grazie! finalmente qualcuno si ricorda di noi.<br>Solo perché Matteo e Ale non sono più i registi, dobbiamo trovarci lasciati fuori da questa caccia al tesoro? Siamo anche noi delle grandi produzioni, abbiamo solo avuto la sfortuna di non essere messe in scena per via del Coronavirus… ma almeno qui avremo il nostro spazio!-p-Come dite? Se possiamo farvi avere qualche punto?-p-Ahm, in realtà non abbiamo ricevuto alcuna indicazione in merito. Matteo dice che non eravamo ancora maturi a sufficienza per poter permettere ai giocatori di guadagnare dei punti. Fossi in voi, manderei un selfie con il dito medio all’account Instagram <code>@game_of_dice</code>. Penso possiate perdere <b>5</b> punti se lo farete, ma… noi vi ricorderemo per sempre per il vostro gesto.';

paragraphs['DADI'] = '';

paragraphs['DADO'] = '';

paragraphs['GAME'] = '';
paragraphs['DICE'] = '';

paragraphs['META'] = quote('Ehy, ma questo è metagame!') + img("Meta.png");


// Funzioni di utilità

function unknownCode(code) {
    return (paragraphs[code] == null);
}
