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


paragraphs['1000'] = 'Bene, sono quasi finito (io <i>Tutorial</i>, intendo).<br>Ci manca soltanto l’ultimo ruolo.-p-'
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
+ 'il <i>Tutorial</i>.';

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
+ '<li><b>La Cantatrice Calva</b>   <code>AAAH</code></li>'
+ '<li><b>I Fisici</b>              <code>BOOM</code></li>'
+ '<li><b>Le Mosche</b>             <code>BZZZ</code></li>'
+ '<li><b>Giovanna</b>              <code>JEAN</code></li>'
+ '<li><b>Un Giorno Qualunque</b>   <code>WHEN</code></li>'
+ '<li><b>Rumors</b>                <code>PSST</code></li>'
+ '</ol>';
// TODO Chiavi dei sei mondi

//////////////////////
// CANTATRICE CALVA //
//////////////////////

paragraphs['AAAH'] = smmBadge() + '-p-' + quote('Ti trovi catapultato in un tipico salotto inglese. Interno, borghese, inglese, con poltrone inglesi. Serata inglese. Il signor Smith, inglese, nella sua poltrona, inglese, fuma la sua pipa, inglese. Legge un giornale, inglese, seduto accanto al fuoco, inglese.')
+ 'Improvvisamente, un suono. Inglese. Chi suona alla porta?-p-'
+ 'In televisione stanno trasmettendo un telegiornale, inglese. In cucina senti il fischio della pentola a pressione. Che siano pronte le patate inglesi?-p-'
+ 'Se volete restare a guardare il TG inglese, vai al Paragrafo <code>1812</code>.<br>'
+ 'Se volete andare in cucina a controllare le patate, vai al Paragrafo <code>0572</code>.';

paragraphs['1812'] = quote('Guarda un po’. È morto Bobby Watson.')
+ 'Al giorno d’oggi non si sa più cosa pensare. Cosa sarà vero e cosa no? All’interno di tutte queste notizie ci sono DUE SOLE Fake News. Individua le notizie false e inserisci i codici corrispondenti per sbloccare due nuovi paragrafi.';
// TODO ELENCO Fake News

paragraphs['57S2'] = quote('Ti dico che è una chiocciola!')
+ 'Siamo alle solite. Qualcuno vede chiocciole, qualcuno vede tartarughe. Un momento. Io vedo solamente tartarughe. C’è anche una chiocciola in giro? Individua la chiocciola all’interno del disegno e inserisci le coordinate relative al quadrante in cui si trova per sbloccare il prossimo Paragrafo.';
// TODO Immagine chiocciola

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

//////////////
// I FISICI //
//////////////

paragraphs['BOOM'] = quote('Prego, Signori, da questa parte. Non spingete. Il paesaggio ha un effetto tranquillante: catene montuose, miti collinette boschive, un laghetto naturale. L’ambiente locale non ha nessuna importanza e viene menzionato solo per amore di precisione, dato che non abbandoneremo mai la villa del Manicomio (ops… beh, ormai l’abbiamo usata quella parola). Per quel che riguarda la villa, un tempo vi erano sistemati tutti i pazienti della fondazione dell’impresa, la medichessa e dottoressa honoris causa, signorina Matilde Von Zahn: aristocratici rimbecilliti, statisti arteriosclerotici, milionari deficenti, scrittori schizofrenici, grandi industriali maniaco depressivi, eccetera eccetera.')
+ 'Benvenut* all’interno di una delle più suggestive ehm… residenze… della Svizzera, la villa di Mathilda Von Zahn!<br>All’interno di questo splendido edificio potrete trovare alcuni dei più geniali uomini dei nostri tempi, nonché alcune splendide opere, conservate nella Galleria d’Arte della dottoressa, il cui accesso vi è stato permesso in via del tutto eccezionale.-p-'
+ 'Se desiderate visitare la Galleria d’Arte di Matilda Von Zahn, andate al capitolo <code>9WPQ</code>.<br>'
+ 'Se desiderate invece fare un giro nei dintorni alla ricerca di qualche curioso ospite, andare al capitolo <code>9786</code>.';

paragraphs['9WPQ'] = prdBadge() + smmBadge() + '-p-' + quote('Mio padre, il consigliere Augusto Von Zahnd abitava in questa villa, prima che io lo trasformassi in un sanatorio.')
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
+ '<i>Esempio:</i> se i primi due elementi fossero nella stanza rossa, i secondi in quella blu e verde, i terzi in quella gialla e i quarti in quella nera e bianca, il codice finale da inviare al bot sarebbe <b>RRBBGGNN</b>';

paragraphs['BE7E'] = smmBadge() + '-p-'
+ quote('Venga, signora Rose. Bisogna che si calmi, ecco tutto.')
+ 'Un buon personale sanitario deve sempre tenere monitorato uno degli organi più importanti, soprattutto nei pazienti che tendono ad agitarsi molto: il CUORE.<br>Trovate, per terra, questo strano foglio. Cosa ci farà per terra?';
// TODO Immagine ECG

paragraphs['9786'] = smmBadge() + '-p-' + quote('Manca citazione')
+ 'Quest\'ala dell\'edificio non sembra essere troppo frequentata...-p-'
+ 'Per puro caso, scorgete due figure immobili attorno ad un tavolino, sul quale è posta una strana scacchiera. Sembra stiano facendo un qualche gioco di cui faticate a comprendere le regole... In ogni caso, lo potete vedere nell\'immagine sottostante.-p-'
+ 'Potrebbe essere interessante parlare con loro, ma a quale dei due approcciarsi per primo?<br>'
+ 'Quello a sinistra, sotto la finestra, sembra intento a gustare una mela. Fra un morso e un altro, si diverte a lasciar cadere piccoli oggetti dalla forma indefinita.<br>'
+ 'Quello a destra siede invece su una poltrona, al cui fianco è appoggiato un violino. Il suo sguardo sembra fissare il vuoto, e mostra ben poco interesse per il gioco.-p-'
+ 'Dopo aver riflettuto un poco su come procedere, concordate che forse non è così rilevante. In fondo, sapete bene che ognuno di loro vi dirà le stesse identiche cose, e qualunque cosa scegliate otterrete gli stessi identici risultati.-p-'
+ 'Se volete parlare con la figura di sinistra, andate al Paragrafo <code>T4BG</code>.<br>'
+ 'Se volete parlare con la figura di destra, andate al Paragrafo <code>R8Z0</code>.';
// TODO Immagine griglia

paragraphs['T4BG'] = 'Newton';
// TODO Immagine USA

paragraphs['R8Z0'] = 'Einstein';
// TODO Immagine URSS

paragraphs['5395'] = quote('- È già buio.<br>- Fa notte presto, ormai.<br>- Aspetta che accendo la luce.</br>- Non ancora. Vieni qui da me.')
+ '';
// TODO Prova

////////////////////
// LE MOSCHE ///
///////////////////

paragraphs['BZZZ'] = '';


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
