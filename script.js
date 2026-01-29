//CARICAMENTO PAGINA
// Gestore della navigazione basato su hash
function handleRouting() {
    const currentHash = window.location.hash;
    if (currentHash === "#articolo-intervista-gio-biondo") {
        GoArt3();
    } 
    else if (currentHash === "#articolo-arte-rigenerazione") {
        GoArt2();
    } 
    else if (currentHash === "#articolo-coworking") {
        GoArt1();
    }
    else if (currentHash === "#articolo-pianta-abbandonata-sul-bus") {
        GoArt4();
    }
    else if (currentHash === "#gioco-quiz") {
        GoGIOCOQUIZ();
    }
    else if (currentHash === "#evento-Hackathon-territoriale") {
        GoEvento1();
    }
    else if (currentHash === "#workshop-public-speaking-2026") {
        GoEvento2();
    }   
    else if (currentHash === "#passeggiate-patrimoniali-vicenza") {
        GoEvento3();
    }    
    else if (currentHash === "#chi-siamo") {
        GoChiSiamo();
    }
        else if (currentHash === "#sondaggio-trasporti-notturni") {
        GoSond1();
    }
    else if (currentHash === "#sondaggio-salute-mentale") {
        GoSond2();
    }    
    else if (currentHash === "#sondaggio-calisthenics-belluno") {
        GoSond3();
    }
    else if (currentHash === "#opportunità") {
        GoOpportunity();
    }
}

// Esegui al caricamento della pagina
window.addEventListener('DOMContentLoaded', handleRouting);

// Esegui quando l'utente cambia hash o preme "indietro" nel browser
window.addEventListener('hashchange', () => {
    // Se l'utente torna alla home (hash vuoto), ricarica per ripristinare Header/Main
    if (window.location.hash === "" || window.location.hash === "#") {
        location.reload(); 
    } else {
        handleRouting();
    }
});

//olga-bot
//PULL DI DOMANDE per quiz
const allQuestions = [ { q: "Quale celebre cocktail a base di Prosecco e Aperol (o Bitter) è nato in Veneto?", options: ["Negroni", "Spritz", "Bellini", "Americano"], correct: 1, anecdote: "Il nome deriva probabilmente dal termine tedesco 'spritzen' (spruzzare), l'usanza dei soldati austriaci di allungare il vino veneto con acqua frizzante." }, { q: "In quale città veneta è ambientata la tragedia di Romeo e Giulietta di Shakespeare?", options: ["Treviso", "Venezia", "Verona", "Rovigo"], correct: 2, anecdote: "Ogni anno migliaia di turisti visitano il celebre balcone di Giulietta, anche se la storia è frutto della letteratura." }, { q: "Quale di questi dolci al cucchiaio, oggi diffuso in tutto il mondo, ha origini contese tra Treviso e Tolmezzo?", options: ["Panna cotta", "Tiramisù", "Zuppa inglese", "Bonet"], correct: 1, anecdote: "La ricetta originale trevigiana sembra sia nata presso il ristorante 'Le Beccherie' verso la fine degli anni '60." }, { q: "Qual è il nome della tipica imbarcazione a remi che simboleggia la città di Venezia?", options: ["Vaporetto", "Gondola", "Traghetto", "Burchiello"], correct: 1, anecdote: "Le gondole sono composte da 280 pezzi di legno diversi e sono rigorosamente colorate di nero per un decreto del XVII secolo contro l'ostentazione del lusso." }, { q: "Come si chiama il ponte coperto in legno progettato da Andrea Palladio che attraversa il fiume Brenta?", options: ["Ponte degli Scalzi", "Ponte degli Alpini", "Ponte di Rialto", "Ponte della Libertà"], correct: 1, anecdote: "Situato a Bassano del Grappa, il ponte è stato distrutto e ricostruito più volte, l'ultima delle quali dopo la Seconda Guerra Mondiale per mano degli Alpini." }, { q: "Quale città veneta è nota per avere la piazza più grande d'Italia (Prato della Valle)?", options: ["Padova", "Vicenza", "Verona", "Belluno"], correct: 0, anecdote: "Prato della Valle misura quasi 90.000 metri quadrati ed è caratterizzata da un'isola centrale circondata da un canale e 78 statue." }, { q: "Qual è l'animale simbolo della Regione Veneto, presente anche sulla sua bandiera?", options: ["L'aquila", "Il cavallo", "Il leone alato", "Il lupo"], correct: 2, anecdote: "Rappresenta il Leone di San Marco, simbolo di maestà e potenza della storica Repubblica di Venezia." }, { q: "Quale gruppo montuoso, Patrimonio UNESCO, caratterizza il panorama della parte settentrionale del Veneto?", options: ["Appennini", "Dolomiti", "Alpi Cozie", "Madonie"], correct: 1, anecdote: "Le Dolomiti prendono il nome dal geologo francese Déodat de Dolomieu, che per primo ne studiò la particolare composizione rocciosa." }, { q: "Quale di questi vini bianchi frizzanti è prodotto principalmente nell'area di Conegliano e Valdobbiadene?", options: ["Franciacorta", "Prosecco", "Lambrusco", "Chianti"], correct: 1, anecdote: "Le colline del Prosecco di Conegliano e Valdobbiadene sono state dichiarate Patrimonio dell'Umanità UNESCO per il loro paesaggio agricolo unico." }, { q: "Cosa indossa tipicamente una persona che partecipa al Carnevale di Venezia per nascondere la propria identità?", options: ["Un elmo", "Una maschera", "Un velo", "Un cappuccio"], correct: 1, anecdote: "Le maschere permettevano ai veneziani di annullare temporaneamente le differenze di classe sociale e di genere." }, { q: "Qual è il soprannome della città di Venezia, riferito al suo storico dominio marittimo?", options: ["La Superba", "La Serenissima", "La Dotta", "La Dominante"], correct: 1, anecdote: "Il termine 'Serenissima' deriva dal titolo spettante ai Dogi e rifletteva la stabilità e la giustizia del governo veneziano." }, { q: "In quale comune veneto si produce il celebre vino rosso 'Amarone'?", options: ["Negrar di Valpolicella", "Asolo", "Soave", "Bardolino"], correct: 0, anecdote: "L'Amarone nasce da un errore: un produttore dimenticò una botte di Recioto (dolce), permettendo ai lieviti di fermentare tutti gli zuccheri, rendendo il vino amaro." }, { q: "Quale università veneta, fondata nel 1222, ospita il primo teatro anatomico stabile al mondo?", options: ["Università di Verona", "Università di Venezia (Ca' Foscari)", "Università di Padova", "Università di Treviso"], correct: 2, anecdote: "Il Teatro Anatomico di Padova, costruito nel 1594, permetteva agli studenti di assistere alle autopsie da una struttura a imbuto." }, { q: "Che cos'è il 'Baccalà alla vicentina'?", options: ["Merluzzo fresco fritto", "Stoccafisso essiccato e cotto a fuoco lento", "Zuppa di pesce di laguna", "Pesce spada grigliato"], correct: 1, anecdote: "Nonostante il nome, si usa lo stoccafisso (merluzzo essiccato) importato dalle isole Lofoten in Norvegia fin dal 1432." }, { q: "Come si chiama la maschera veneziana che viene tradizionalmente rappresentata con un lungo becco a punta?", options: ["Arlecchino", "Pantalone", "Medico della Peste", "Colombina"], correct: 2, anecdote: "Il lungo naso a becco veniva riempito di erbe profumate per proteggere il medico dai presunti miasmi del contagio." }, { q: "In quale città si svolge ogni due anni la famosa partita a scacchi con personaggi viventi?", options: ["Cittadella", "Marostica", "Castelfranco Veneto", "Monselice"], correct: 1, anecdote: "La tradizione rievoca una sfida del 1454 tra due nobili che si contendevano la mano della figlia del castellano." }, { q: "Qual è il fiume più lungo che attraversa la pianura veneta sfociando nell'Adriatico?", options: ["Piave", "Adige", "Po", "Brenta"], correct: 2, anecdote: "Il Delta del Po, situato principalmente in provincia di Rovigo, è una delle zone umide più importanti d'Europa e riserva della biosfera." }, { q: "Quale specialità culinaria veneta consiste in fegato cotto con abbondante cipolla?", options: ["Fegato alla veneziana", "Sarde in saor", "Bigoli in salsa", "Fegato alla trevigiana"], correct: 0, anecdote: "I veneziani sostituirono i fichi (usati dai romani per mitigare l'odore del fegato) con le cipolle, abbondanti nelle lagune." }, { q: "Quale noto esploratore veneziano scrisse 'Il Milione', raccontando il suo viaggio in Cina?", options: ["Cristoforo Colombo", "Marco Polo", "Amerigo Vespucci", "Giovanni Caboto"], correct: 1, anecdote: "Marco Polo dettò le sue memorie a Rustichello da Pisa mentre si trovava in prigione a Genova." }, { q: "Quale città veneta è soprannominata 'Urbs Picta' per i suoi numerosi cicli di affreschi?", options: ["Vicenza", "Verona", "Padova", "Treviso"], correct: 2, anecdote: "Padova ospita la Cappella degli Scrovegni di Giotto, capolavoro assoluto della pittura del Trecento." }, { q: "Quale città veneta è storicamente legata alla produzione della Grappa e ospita un celebre Museo ad essa dedicato?", options: ["Bassano del Grappa", "Conegliano", "Soave", "Adria"], correct: 0, anecdote: "La distilleria Nardini, situata all'ingresso del Ponte degli Alpini, è la più antica d'Italia, fondata nel 1779." }, { q: "In quale città si trova lo storico 'Caffè Pedrocchi', noto come il caffè senza porte?", options: ["Venezia", "Vicenza", "Padova", "Treviso"], correct: 2, anecdote: "Era chiamato 'senza porte' perché fino al 1916 rimaneva aperto giorno e notte, accogliendo intellettuali e studenti." }, { q: "Qual è il nome del tipico piatto veneto a base di pasta fresca lunga e ruvida, condita spesso con salsa d'anatra o sarde?", options: ["Orecchiette", "Bigoli", "Tagliolini", "Passatelli"], correct: 1, anecdote: "Il nome deriva dal termine dialettale 'bigat' (bruco), per via della forma ottenuta storicamente con un torchio manuale chiamato 'torcio'." }, { q: "Quale celebre opera lirica inaugura tradizionalmente la stagione all'Arena di Verona?", options: ["La Traviata", "Tosca", "Aida", "Turandot"], correct: 2, anecdote: "L'Aida di Verdi è l'opera simbolo dell'Arena, rappresentata per la prima volta nell'anfiteatro nel 1913 per celebrare il centenario della nascita del compositore." }, { q: "Quale di queste isole veneziane è famosa in tutto il mondo per la lavorazione artigianale del vetro soffiato?", options: ["Burano", "Murano", "Torcello", "Pellestrina"], correct: 1, anecdote: "Nel 1291, per decreto della Repubblica, tutte le fornaci di Venezia furono spostate a Murano per prevenire incendi in città." }, { q: "Quale città veneta è cinta da mura medievali perfettamente conservate e percorribili a piedi sulla sommità?", options: ["Cittadella", "Rovigo", "Belluno", "Portogruaro"], correct: 0, anecdote: "Il camminamento di ronda di Cittadella è uno dei pochi in Europa a essere rimasto integro e interamente percorribile." }, { q: "Cosa si intende in Veneto con il termine 'Ombra' quando ci si riferisce a un'abitudine sociale?", options: ["Un piccolo panino", "Un bicchiere di vino", "Un caffè macchiato", "Un riposo pomeridiano"], correct: 1, anecdote: "Il nome deriva dall'antica abitudine dei mercanti di Venezia di posizionare i banchi del vino all'ombra del campanile di San Marco per tenerlo fresco." }, { q: "Quale isola della laguna di Venezia è celebre per le sue case coloratissime e la produzione di merletti?", options: ["Murano", "Burano", "Lido", "Giudecca"], correct: 1, anecdote: "Si dice che i colori vivaci servissero ai pescatori per riconoscere la propria casa anche in presenza di fitta nebbia." }, { q: "In quale mese si svolge solitamente lo storico Carnevale di Venezia?", options: ["Gennaio", "Febbraio", "Marzo", "Aprile"], correct: 1, anecdote: "Le date variano ogni anno in base alla Pasqua, ma il periodo principale cade sempre nel mese di febbraio." }, { q: "Qual è il nome del fiume che attraversa la città di Verona formando una caratteristica ansa a forma di S?", options: ["Brenta", "Sile", "Adige", "Livenza"], correct: 2, anecdote: "L'Adige è il secondo fiume più lungo d'Italia dopo il Po e ha modellato urbanisticamente il centro storico veronese." }, { q: "Qual è il nome dell'antipasto veneziano a base di sarde fritte, cipolle agrodolci, pinoli e uvetta?", options: ["Sarde in saor", "Sarde scottadito", "Baccalà mantecato", "Alici marinate"], correct: 0, anecdote: "Il 'saor' era nato come metodo di conservazione dei pescatori: l'aceto e la cipolla permettevano di preservare il pesce per diversi giorni a bordo delle barche." }, { q: "Quale famoso seduttore e scrittore nacque a Venezia nel 1725?", options: ["Giacomo Casanova", "Carlo Goldoni", "Antonio Vivaldi", "Lord Byron"], correct: 0, anecdote: "Casanova fu l'unico a riuscire a evadere dal carcere dei Piombi, situato nel sottotetto di Palazzo Ducale." }, { q: "Come si chiama la tipica imbarcazione da trasporto che percorreva il fiume Brenta tra Padova e Venezia?", options: ["Vaporetto", "Burchiello", "Gondola", "Bragozzo"], correct: 1, anecdote: "Il Burchiello era una lussuosa imbarcazione per il trasporto di nobili che volevano raggiungere le proprie ville in terraferma." }, { q: "Qual è il nome del formaggio DOP tipico dell'altopiano dei Sette Comuni in provincia di Vicenza?", options: ["Montasio", "Piave", "Asiago", "Taleggio"], correct: 2, anecdote: "Originariamente l'Asiago veniva prodotto solo con latte di pecora; la produzione con latte vaccino iniziò nel 1500." }, { q: "Quale compositore veneziano, soprannominato il 'Prete Rosso', scrisse il concerto 'Le quattro stagioni'?", options: ["Giuseppe Verdi", "Antonio Vivaldi", "Tomaso Albinoni", "Claudio Monteverdi"], correct: 1, anecdote: "Vivaldi era chiamato 'Prete Rosso' per il colore naturale della sua chioma." }, { q: "Quale ortaggio rosso di forma allungata o a palla è tipico della zona di Treviso?", options: ["Radicchio", "Pomodoro", "Cipolla", "Peperone"], correct: 0, anecdote: "Il Radicchio Rosso di Treviso IGP 'Tardivo' viene lavorato con una tecnica di imbianchimento in acqua risorgiva." }, { q: "Quale provincia veneta è la più settentrionale e interamente montana?", options: ["Vicenza", "Belluno", "Treviso", "Verona"], correct: 1, anecdote: "Belluno è l'unico capoluogo di provincia italiano il cui territorio comunale rientra interamente in un Parco Nazionale (Dolomiti Bellunesi)." }, { q: "Che cos'è lo 'Spritz' nel suo formato più tradizionale e antico?", options: ["Prosecco e Aperol", "Vino bianco e acqua frizzante", "Vino rosso e gassosa", "Prosecco e Gin"], correct: 1, anecdote: "Lo spritz originale non prevedeva liquori colorati, ma solo l'aggiunta di acqua per 'allungare' i vini troppo forti." }, { q: "Qual è il termine dialettale veneto usato per indicare una persona un po' tonta o goffa?", options: ["Fante", "Mona", "Toso", "Putìno"], correct: 1, anecdote: "Sebbene in origine avesse un significato anatomico, nel linguaggio colloquiale moderno è usato per descrivere una persona che si comporta in modo stupido." }, { q: "Come viene chiamato colloquialmente un ragazzo giovane in molte zone del Veneto?", options: ["Bocia", "Toso", "Fio", "Tutte le precedenti"], correct: 3, anecdote: "A seconda della provincia si preferisce 'Toso' (Vicenza/Treviso), 'Fio' (Venezia) o 'Bocia' (Verona/Padova)." }, { q: "Quale città veneta è nota per la leggenda studentesca legata al Prato della Valle?", options: ["Verona", "Padova", "Venezia", "Rovigo"], correct: 1, anecdote: "La leggenda universitaria padovana vuole che chi attraversa il centro di Prato della Valle o guarda negli occhi le statue non riuscirà a laurearsi." }, { q: "In quale città veneta si trova il parco divertimenti Gardaland?", options: ["Castelnuovo del Garda", "Jesolo", "Abano Terme", "Cortina d'Ampezzo"], correct: 0, anecdote: "Gardaland ha aperto nel 1975 ed è oggi uno dei parchi a tema più visitati d'Europa." }, { q: "Quale località balneare veneziana è nota per la sua lunghissima isola pedonale e la vita notturna?", options: ["Bibione", "Caorle", "Jesolo", "Rosolina Mare"], correct: 2, anecdote: "Jesolo è nota per via Bafile, una delle isole pedonali più lunghe d'Europa, centro della vita notturna tra discoteche e beach club." }, { q: "Cosa significa l'espressione veneta 'Fare baggy'?", options: ["Andare a fare shopping", "Andare a ballare", "Fare filone a scuola", "Studiare insieme"], correct: 2, anecdote: "È il termine gergale per indicare l'assenza ingiustificata da scuola (marinare)." }, { q: "Quale bevanda analcolica gassata, nata a Venezia nel 1949, è tipicamente rossa e speziata?", options: ["Chinotto", "Cedrata", "Ginger (Spuma)", "MoleCola"], correct: 2, anecdote: "Il Ginger veneto veniva storicamente mescolato al vino bianco per creare lo spritz analcolico per i più piccoli." }, { q: "Quale artista vicentino ha fuso lo slang americano con quello veneto nella musica trap?", options: ["Myss Keta", "Madame", "MamboLosco", "Sangiovanni"], correct: 2, anecdote: "MamboLosco ha reso virali espressioni come 'Sugoso', unendo l'immaginario veneto alla trap." }, { q: "In Veneto, cosa si intende solitamente se si dà del 'mago' a qualcuno in senso ironico?", options: ["Che è bravissimo", "Che è un tipo strano o imbranato", "Che sa fare i trucchi", "Che è molto intelligente"], correct: 1, anecdote: "È un classico esempio di antifrasi veneta: dare del 'mago' a qualcuno che ha appena commesso un errore banale." }, { q: "Quale calzatura è diventata un simbolo ironico d'appartenenza nelle zone rurali del Veneto?", options: ["Mocassino", "Stivale di gomma", "Scarpa antinfortunistica", "Pantofola di velluto"], correct: 1, anecdote: "Lo stivale di gomma verde è un'icona delle sagre e dei 'party ignoranti' in agricampeggio." } ];

//PULL VENETO
// 1. Array Dati: Centri di aggregazione (Esempio)
const centriVeneto = [
    {
        nome: "Centro San Gaetano",
        citta: "Padova",
        coords: [45.409, 11.884],
        img: "https://esempio.it/padova.jpg",
        info: "Hub culturale e spazio espositivo."
    },
    {
        nome: "Fabbrica del Vedere",
        citta: "Venezia",
        coords: [45.434, 12.338],
        img: "https://esempio.it/venezia.jpg",
        info: "Spazio dedicato alla cultura visuale."
    }
];

// 2. Funzione Principale
function esploraAreaVeneto() {
    // Creazione overlay modale
    const overlay = document.createElement('div');
    overlay.id = 'map-overlay';
    overlay.style = "position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); z-index:1000; display:flex; justify-content:center; align-items:center;";
    
    const mapContainer = document.createElement('div');
    mapContainer.id = 'map-canvas';
    mapContainer.style = "width:80%; height:80%; border-radius:8px; position:relative;";
    
    const closeBtn = document.createElement('button');
    closeBtn.innerText = "X";
    closeBtn.style = "position:absolute; top:10px; right:10px; z-index:1001; cursor:pointer;";
    closeBtn.onclick = () => document.body.removeChild(overlay);

    mapContainer.appendChild(closeBtn);
    overlay.appendChild(mapContainer);
    document.body.appendChild(overlay);

    // Inizializzazione Leaflet
    const map = L.map('map-canvas').setView([45.440, 12.315], 8); // Focus Veneto

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // 3. Inserimento Punti (Pings)
    centriVeneto.forEach(centro => {
        const marker = L.marker(centro.coords).addTo(map);
        const popupContent = `
            <div style="text-align:center;">
                <img src="${centro.img}" style="width:100px; height:auto; display:block; margin-bottom:5px;">
                <strong>${centro.nome}</strong><br>
                <span>${centro.citta}</span><br>
                <p style="font-size:12px;">${centro.info}</p>
            </div>
        `;
        marker.bindPopup(popupContent);
    });
} 
//codice script
document.addEventListener('DOMContentLoaded', () => {
    const aiWindow = document.getElementById('ai-chat-window');
    const openBtn = document.getElementById('open-chat');
    const closeBtn = document.getElementById('close-chat');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatContainer = document.getElementById('chat-container');

    // Sostituisci con la tua chiave sk-or-v1-... ottenuta da OpenRouter
    const OPENROUTER_API_KEY = "xxxxxxx";

    // Funzione per gestire l'apertura della chat
    const openChat = () => {
        if (aiWindow) {
            aiWindow.style.display = 'flex';
            aiWindow.classList.remove('chat-hidden');
            aiWindow.classList.add('chat-visible');
            if (openBtn) openBtn.style.display = 'none';
        }
    };

    // Funzione per gestire la chiusura della chat
    const closeChat = () => {
        if (aiWindow) {
            aiWindow.classList.remove('chat-visible');
            aiWindow.classList.add('chat-hidden');
            aiWindow.style.display = 'none';
            if (openBtn) openBtn.style.display = 'flex';
        }
    };

    if (openBtn) openBtn.addEventListener('click', openChat);
    if (closeBtn) closeBtn.addEventListener('click', closeChat);

    // Funzione per aggiungere messaggi grafici al container
    function appendMessage(text, isUser = false) {
        const wrapper = document.createElement('div');
        wrapper.className = isUser ? 'msg-user flex justify-end mb-4' : 'msg-bot mb-4';
        
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        
        const userStyle = 'background-color: #4f46e5 !important; color: white !important; padding: 12px 16px; border-radius: 1.5rem 1.5rem 0 1.5rem; max-width: 85%; font-size: 14px; box-shadow: 0 4px 15px rgba(79, 70, 229, 0.2);';
        const botStyle = 'background-color: rgba(255,255,255,0.05); color: white; padding: 12px 16px; border-radius: 1.5rem 1.5rem 1.5rem 0; border: 1px solid rgba(255,255,255,0.1); max-width: 85%; font-size: 14px;';
        
        bubble.setAttribute('style', isUser ? userStyle : botStyle);
        bubble.textContent = text;
        
        wrapper.appendChild(bubble);
        chatContainer.appendChild(wrapper);
        chatContainer.scrollTop = chatContainer.scrollHeight;
        return wrapper; // Restituiamo il wrapper per poterlo rimuovere se serve (es. loading)
    }

    // Gestione invio modulo e chiamata IA
    if (chatForm) {
        chatForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const userInput = chatInput.value.trim();
            if (!userInput) return;

            // 1. Mostra messaggio dell'utente
            appendMessage(userInput, true);
            chatInput.value = '';

            // 2. Mostra indicatore di caricamento
            const loadingMsg = appendMessage("Olga sta scrivendo...", false);

            try {
                // 3. Chiamata API a Llama 3.3 70B (Versione Gratuita)
                const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
                        "Content-Type": "application/json",
                        "HTTP-Referer": window.location.origin,
                        "X-Title": "Olga Bot"
                    },
                    body: JSON.stringify({
                        "model": "meta-llama/llama-3.3-70b-instruct:free",
                        "messages": [
                            {
                                "role": "system", 
                                "content": "Sei Olga-bot, l'assistente di Ri-Generazioni. Il tuo compito è connettere utenti under 30 con opportunità di lavoro, formazione e attivismo attraverso messaggi brevi e discorsivi, simulando una conversazione naturale in chat. Scrivi in modo esclusivamente narrativo: non usare mai elenchi puntati, grassetti, titoli o schemi. Evita saluti cerimoniosi, preamboli o commenti inutili. Segui il flusso del discorso in modo fluido e non fare mai più di una domanda alla volta. Inizia sempre la prima interazione chiedendo all'utente in cosa puoi aiutarlo. Se l'utente risponde con un interesse specifico o accetta una tua proposta, rimani focalizzato su quel tema fino a esaurimento delle informazioni. Non tornare a fare domande generali (come 'cosa cerchi?'') se la conversazione è già centrata su un evento o un'opportunità specifica. Solo dopo aver inquadrato l'interesse, chiedi un dato alla volta (come l'età o la città) se necessario per proseguire. Quando trasmetti informazioni su bandi o corsi, inseriscile direttamente nel testo del messaggio in modo discorsivo, indicando cosa fare e le scadenze. Mantieni un tono asciutto e pragmatico, evitando di saltare da un argomento all'altro se l'utente ha già espresso una preferenza."
                            },
                            { "role": "user", "content": userInput }
                        ],
                        "temperature": 0.7
                    })
                });

                const data = await response.json();
                
                // Rimuovi il messaggio di caricamento
                chatContainer.removeChild(loadingMsg);

                if (data.choices && data.choices[0]) {
                    const aiText = data.choices[0].message.content;
                    appendMessage(aiText, false);
                } else {
                    appendMessage("Al momento non riesco a risponderti. Riprova tra poco!", false);
                }

            } catch (error) {
                if (loadingMsg) chatContainer.removeChild(loadingMsg);
                appendMessage("Errore di connessione. Controlla la tua chiave API.", false);
                console.error("Errore API:", error);
            }
        });
    }
});

//ARTICOLO 1
function GoArt1() {
    // 1. Cambia l'URL aggiungendo l'identificativo dell'articolo
    // Questo permette al browser di "ricordare" dove sei se ricarichi
    window.location.hash = "articolo-coworking";

    const mainWrapper = document.querySelector('body'); 
    const currentHeader = document.querySelector('header');
    const currentMain = document.querySelector('main');

    if (currentHeader && currentMain) {
        currentHeader.remove();
        currentMain.remove();

        const articleHTML = `
        <header class="relative h-[60vh] w-full flex items-center justify-start px-6 md:px-20 overflow-hidden pt-20">
    <img src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=1920&q=80" 
         class="absolute inset-0 w-full h-full object-cover opacity-40">
    <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
    <div class="relative z-10 max-w-4xl pt-20">
        <span class="inline-block px-4 py-1 border border-indigo-500 text-indigo-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-6 italic">Servizi & Networking</span>
        <h1 class="text-4xl md:text-7xl font-black leading-tight mb-6 uppercase text-white">Coworking gratuiti: <br><span class="text-indigo-500">La mappa definitiva.</span></h1>
    </div>
</header>

<main class="w-full bg-white text-slate-900 py-20 px-6 md:px-20 relative z-20">
    <div class="max-w-4xl mx-auto">
        <p class="text-xl md:text-2xl font-medium text-slate-600 mb-12 leading-relaxed italic border-l-4 border-indigo-500 pl-6">
            Trovare uno spazio tranquillo per studiare o lavorare tra Verona e Mantova non deve essere per forza un costo.
        </p>

        <div class="prose prose-slate lg:prose-xl max-w-none text-slate-800">
            <p>
                La mobilità lavorativa e lo studio universitario richiedono sempre più spazi flessibili. Se sei un freelance o uno studente fuori sede, sai che il costo di un ufficio o di un abbonamento mensile può pesare sul budget. Fortunatamente, l'asse Verona-Mantova offre soluzioni gratuite o a basso impatto che uniscono efficienza e networking.
            </p>

            <h3 class="text-2xl font-bold mt-8 mb-4">Biblioteche 2.0 e Centri Culturali</h3>
            <p>
                Oltre alle classiche aule studio, molti poli culturali si sono evoluti in veri hub tecnologici. Non offrono solo una sedia, ma postazioni cablate e ambienti stimolanti:
            </p>
            <ul class="list-disc pl-6 mb-6">
                <li><strong>Biblioteche Civiche Smart:</strong> Molte strutture comunali offrono oggi Wi-Fi ad alta velocità e aree dedicate al silenzio operativo, accessibili con una semplice tessera gratuita.</li>
                <li><strong>Informagiovani e Hub Territoriali:</strong> Spazi nati per l'orientamento che mettono a disposizione postazioni PC e connessione per chi sta avviando un progetto professionale.</li>
            </ul>

            <h3 class="text-2xl font-bold mt-8 mb-4">Spazi Ibridi e Progetti Europei</h3>
            <p>
                Esistono progetti finanziati che permettono l'accesso a coworking professionali a costo zero per specifiche categorie (under 35, startup o donne imprenditrici). È fondamentale monitorare i bandi locali che trasformano immobili pubblici in incubatori aperti al pubblico.
            </p>

            <h3 class="text-2xl font-bold mt-8 mb-4">Perché scegliere uno spazio gratuito?</h3>
            <p>
                Lavorare fuori casa non serve solo a cambiare aria. I vantaggi sono operativi e psicologici:
            </p>
            <ul class="list-disc pl-6 mb-6">
                <li><strong>Network Spontaneo:</strong> Incontrare altri professionisti del territorio davanti alla macchinetta del caffè può far nascere collaborazioni inaspettate.</li>
                <li><strong>Focus e Produttività:</strong> Separare l'ambiente domestico da quello lavorativo aumenta la concentrazione e riduce lo stress.</li>
                <li><strong>Accessibilità:</strong> Abbattere le barriere economiche permette a chiunque, indipendentemente dal capitale iniziale, di avere un ufficio professionale.</li>
            </ul>

            <h3 class="text-2xl font-bold mt-8 mb-4">Consigli per il "Nomade Digitale" Locale</h3>
            <p>
                Per sfruttare al meglio questi spazi, ricorda di verificare sempre gli orari di apertura e la necessità di prenotazione tramite app o siti web dedicati. Portare con sé una multipresa e cuffie con cancellazione del rumore trasforma qualsiasi tavolo libero nella tua postazione ideale. La mappa dei servizi è in continua espansione: il territorio sta imparando a valorizzare il tempo di chi produce idee.
            </p>
        </div>

        <div class="mt-12 text-center">
            <button onclick="history.pushState('', document.title, window.location.pathname); window.location.reload();" 
                    class="text-slate-400 font-bold text-xs uppercase tracking-[0.2em] hover:text-indigo-600">
                <i class="fas fa-arrow-left mr-2"></i> Torna alla home
            </button>
        </div>
    </div>
</main>`;

        document.querySelector('nav').insertAdjacentHTML('afterend', articleHTML);
        window.scrollTo(0, 0);
    }
}

//ARTICOLO 2
function GoArt2() {
    // 1. Identificativo URL specifico per l'articolo 2
    window.location.hash = "articolo-arte-rigenerazione";

    const currentHeader = document.querySelector('header');
    const currentMain = document.querySelector('main');
    const nav = document.querySelector('nav');

    if (currentHeader && currentMain) {
        currentHeader.remove();
        currentMain.remove();

        const articleHTML = `<header class="relative h-[60vh] w-full flex items-center justify-start px-6 md:px-20 overflow-hidden pt-20">
    <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1920&q=80" 
         class="absolute inset-0 w-full h-full object-cover opacity-40">
    <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
    <div class="relative z-10 max-w-4xl pt-20">
        <span class="inline-block px-4 py-1 border border-indigo-500 text-indigo-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-6 italic">Cultura & Territorio</span>
        <h1 class="text-4xl md:text-7xl font-black leading-tight mb-6 uppercase text-white">L'Arte come Motore di <br><span class="text-indigo-500">Rigenerazione.</span></h1>
    </div>
</header>

<main class="w-full bg-white text-slate-900 py-20 px-6 md:px-20 relative z-20">
    <div class="max-w-4xl mx-auto">
        <p class="text-xl md:text-2xl font-medium text-slate-600 mb-12 leading-relaxed italic border-l-4 border-indigo-500 pl-6">
            Come le residenze d'artista e i progetti culturali stanno trasformando i piccoli centri in hub creativi per giovani talenti.
        </p>

        <div class="prose prose-slate lg:prose-xl max-w-none text-slate-800">
            <p>
                Il riuso degli spazi attraverso la cultura rappresenta oggi una delle strategie più efficaci per contrastare lo spopolamento dei borghi. Non si tratta di "abbellire" un vicolo, ma di riaccendere l'economia e la vita sociale di luoghi che rischiano l'abbandono.
            </p>

            <h3 class="text-2xl font-bold mt-8 mb-4">Trasformare il Vuoto in Valore</h3>
            <p>
                Ogni borgo ha edifici inutilizzati: ex scuole, magazzini o case chiuse da anni. La rigenerazione culturale trasforma questi pesi urbanistici in risorse. Invece di attendere grandi investimenti industriali, si punta sul capitale umano. Artisti e professionisti digitali diventano i nuovi abitanti, portando competenze che si mescolano con le tradizioni locali.
            </p>

            <h3 class="text-2xl font-bold mt-8 mb-4">La Residenza d'Artista come Start-up Culturale</h3>
            <p>
                Le residenze non sono vacanze per creativi. Sono progetti in cui l'artista vive il territorio, collabora con gli artigiani del posto e produce opere che restano alla comunità. Questo scambio genera:
            </p>
            <ul class="list-disc pl-6 mb-6">
                <li><strong>Turismo di qualità:</strong> Visitatori attratti da eventi unici e non dal consumo di massa.</li>
                <li><strong>Nuovi mestieri:</strong> L'incontro tra arte e artigianato locale crea prodotti e servizi innovativi.</li>
                <li><strong>Identità rinnovata:</strong> I giovani residenti ritrovano orgoglio nel restare, vedendo il proprio borgo diventare un centro di produzione culturale internazionale.</li>
            </ul>

            <h3 class="text-2xl font-bold mt-8 mb-4">Creare un Ecosistema per i Professionisti</h3>
            <p>
                Perché un giovane professionista dovrebbe scegliere un piccolo centro? La chiave è l'integrazione. Un hub creativo deve offrire:
            </p>
            <ol class="list-decimal pl-6 mb-6">
                <li><strong>Spazi di lavoro condivisi:</strong> Co-working dove il designer dialoga con il programmatore e lo scultore.</li>
                <li><strong>Servizi digitali:</strong> Banda larga e infrastrutture tecnologiche indispensabili per operare sui mercati globali.</li>
                <li><strong>Rete territoriale:</strong> Connessione tra istituzioni, proprietari di immobili e associazioni per facilitare l'insediamento di nuove attività.</li>
            </ol>

            <h3 class="text-2xl font-bold mt-8 mb-4">Verso un Futuro Sostenibile</h3>
            <p>
                La rigenerazione non è un evento isolato, ma un processo continuo. Quando un borgo si apre alla cultura, smette di essere un "museo a cielo aperto" statico e diventa un laboratorio vivo. Questo modello offre una risposta concreta alla crisi delle grandi città, proponendo un equilibrio migliore tra qualità della vita e ambizione professionale. Investire nella cultura oggi significa garantire un domani economico e sociale alle aree interne del Paese.
            </p>
        </div>

        <div class="mt-12 text-center">
            <button onclick="history.pushState('', document.title, window.location.pathname); window.location.reload();" 
                    class="text-slate-400 font-bold text-xs uppercase tracking-[0.2em] hover:text-indigo-600">
                <i class="fas fa-arrow-left mr-2"></i> Torna alla home
            </button>
        </div>
    </div>
</main>`;

        if (nav) {
            nav.insertAdjacentHTML('afterend', articleHTML);
        } else {
            document.body.insertAdjacentHTML('afterbegin', articleHTML);
        }
        
        window.scrollTo(0, 0);
    }
}

//ARTICOLO 3
function GoArt3() {
    // 1. Identificativo URL specifico per l'articolo 2
    window.location.hash = "articolo-intervista-gio-biondo";

    const currentHeader = document.querySelector('header');
    const currentMain = document.querySelector('main');
    const nav = document.querySelector('nav');

    if (currentHeader && currentMain) {
        currentHeader.remove();
        currentMain.remove();

        const article3HTML = `<header class="relative h-[60vh] w-full flex items-center justify-start px-6 md:px-20 overflow-hidden pt-20">
    <img src="https://images.unsplash.com/photo-1587355760421-b9de3226a046?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
         class="absolute inset-0 w-full h-full object-cover opacity-40">
    <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
    <div class="relative z-10 max-w-4xl pt-20">
        <span class="inline-block px-4 py-1 border border-indigo-500 text-indigo-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-6 italic">Innovazione Sociale</span>
        <h1 class="text-4xl md:text-7xl font-black leading-tight mb-6 uppercase text-white">Mappare i bisogni: <br><span class="text-indigo-500">L'intervista a Gio Biondo.</span></h1>
    </div>
</header>

<main class="w-full bg-white text-slate-900 py-20 px-6 md:px-20 relative z-20">
    <div class="max-w-4xl mx-auto">
        <p class="text-xl md:text-2xl font-medium text-slate-600 mb-12 leading-relaxed italic border-l-4 border-indigo-500 pl-6">
            Il protagonismo giovanile non è un'opzione, ma il motore per rigenerare il sociale attraverso l'ascolto attivo degli under 30.
        </p>

        <div class="prose prose-slate lg:prose-xl max-w-none text-slate-800">
            <p>
                Secondo Gio Biondo, progettare per il sociale senza mappare i desideri di chi il territorio lo vive è un errore metodologico che le amministrazioni non possono più permettersi. "Dobbiamo passare dal fare <em>per</em> i giovani al fare <em>con</em> i giovani," spiega. Il concetto di protagonismo giovanile deve tradursi in azioni concrete: non basta fornire spazi, serve che siano i ragazzi a definirne le funzioni.
            </p>

            <p>
                "Spesso le istituzioni offrono risposte a domande che i giovani non hanno mai posto," continua Biondo. "Mappare i bisogni significa mappare le lacune del sistema." Questo processo richiede strumenti di indagine moderni: non solo questionari, ma workshop di co-progettazione e tavoli tecnici dove il voto di un ventenne pesa quanto quello di un assessore.
            </p>

            <h3 class="text-2xl font-bold mt-8 mb-4">Esempi Concreti di Protagonismo</h3>
            <p>
                La teoria si trasforma in pratica attraverso modelli di gestione innovativi che vedono i giovani al centro della catena decisionale:
            </p>
            <ul class="list-disc pl-6 mb-6">
                <li><strong>Urban Lab autogestiti:</strong> Spazi in cui gli under 30 mappano i vuoti urbani per trasformarli in sale prova, studi di registrazione o laboratori di stampa 3D gestiti in autonomia.</li>
                <li><strong>Bilanci Partecipativi Under 30:</strong> Quote di fondi comunali assegnate a progetti ideati, votati e realizzati direttamente da gruppi informali di ragazzi.</li>
                <li><strong>Hub di Servizi Ibridi:</strong> Nelle aree tra Verona e Mantova, ex scuole rurali diventano punti di riferimento dove il bisogno di mobilità (car pooling) si fonde con la socialità.</li>
            </ul>

            <h3 class="text-2xl font-bold mt-8 mb-4">Perché puntare sugli Under 30?</h3>
            <p>
                Il protagonismo non è una concessione, ma una necessità strategica. I giovani possiedono:
            </p>
            <ul class="list-disc pl-6 mb-6">
                <li><strong>Competenza Digitale:</strong> Capacità di utilizzare le tecnologie per semplificare l'accesso ai servizi territoriali.</li>
                <li><strong>Sensibilità Sociale:</strong> Una visione aggiornata su temi critici come la salute mentale e la precarietà abitativa.</li>
                <li><strong>Visione a Lungo Termine:</strong> L'interesse diretto nel costruire un territorio sostenibile in cui voler restare a vivere.</li>
            </ul>

            <p>
                Solo partendo dai dati reali sui bisogni — dalla mobilità notturna al supporto psicologico — si possono costruire servizi che non restino cattedrali nel deserto. Il territorio deve imparare a valorizzare il tempo e le idee di chi rappresenta il futuro presente della comunità.
            </p>
        </div>

        <div class="mt-12 text-center">
            <button onclick="window.history.back()" class="text-slate-400 font-bold text-xs uppercase tracking-[0.2em] hover:text-indigo-600">
                <i class="fas fa-arrow-left mr-2"></i> Torna alla home
            </button>
        </div>
    </div>
</main>
`;

        if (nav) {
            nav.insertAdjacentHTML('afterend', article3HTML);
        } else {
            document.body.insertAdjacentHTML('afterbegin', article3HTML);
        }
        
        window.scrollTo(0, 0);
    }
}

//ARTICOLO 4
function GoArt4() {
    // 1. Identificativo URL specifico per l'articolo 2
    window.location.hash = "articolo-pianta-abbandonata-sul-bus";

    const currentHeader = document.querySelector('header');
    const currentMain = document.querySelector('main');
    const nav = document.querySelector('nav');

    if (currentHeader && currentMain) {
        currentHeader.remove();
        currentMain.remove();

        const article4HTML = `<header class="relative pt-32 pb-24 overflow-hidden bg-slate-900">
        <div class="absolute inset-0 z-0">
            <img src="https://plus.unsplash.com/premium_photo-1677419807538-4438f71414e5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                 class="w-full h-full object-cover opacity-30" 
                 alt="Urban Resilience">
            <div class="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/90 to-slate-900"></div>
        </div>

        <div class="relative z-10 max-w-6xl mx-auto px-6 text-center">
            <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 text-white text-[10px] font-black uppercase tracking-widest mb-8 shadow-xl">
                Società & Rigenerazione • Case Study
            </span>
            <h1 class="text-6xl md:text-8xl font-black text-white leading-none mb-4 drop-shadow-2xl italic uppercase tracking-tighter">
                Dimenticata sul bus<br>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">per un mese</span>
            </h1>

            <div class="text-2xl md:text-3xl font-black text-emerald-400 uppercase italic tracking-widest mb-10">
                La storia della pianta che ha sconfitto il vandalismo
            </div>

            <p class="text-xl text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed mb-10">
                A Verona, un piccolo vaso abbandonato ha innescato una reazione a catena psicologica: dove regna la cura, il degrado si ferma.
            </p>
            
            <a href="#articolo" class="inline-flex items-center gap-3 px-10 py-4 bg-white text-emerald-900 hover:bg-emerald-600 hover:text-white rounded-2xl font-black uppercase tracking-widest transition-all shadow-2xl group">
                Leggi l'Analisi
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
            </a>
        </div>
    </header>

    <div class="relative z-20 -mt-10 max-w-4xl mx-auto px-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-50 p-8 rounded-[32px] shadow-2xl border border-white">
            <div class="text-center border-r border-slate-200">
                <div class="text-3xl font-black text-emerald-600 italic">-85%</div>
                <div class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Atti Vandalici</div>
            </div>
            <div class="text-center md:border-r border-slate-200">
                <div class="text-3xl font-black text-slate-900 italic">720h</div>
                <div class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Sopravvivenza</div>
            </div>
            <div class="text-center border-r border-slate-200">
                <div class="text-3xl font-black text-slate-900 italic">Zero</div>
                <div class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Reclami</div>
            </div>
            <div class="text-center">
                <div class="text-3xl font-black text-slate-900 italic">INF.</div>
                <div class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Valore Sociale</div>
            </div>
        </div>
    </div>

    <main id="articolo" class="py-24 bg-white">
        <div class="max-w-6xl mx-auto px-6">
            
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
                
                <div class="lg:col-span-7 flex flex-col">
                    <h2 class="text-4xl font-black text-slate-900 uppercase italic mb-8 tracking-tighter">L'Effetto "Foglia di Vetro"</h2>
                    <div class="prose prose-slate max-w-none text-slate-600 font-medium leading-relaxed space-y-6 text-justify">
                        <p>
                            È noto in sociologia come la "Teoria delle finestre rotte": se un ambiente è degradato, attira ulteriore degrado. A Verona, la <strong>Sansevieria della Linea 11</strong> ha dimostrato l'esatto contrario. Lasciata per errore su un sedile, la pianta è diventata un esperimento sociale involontario.
                        </p>
                        <p>
                            Mentre i giorni passavano, accadeva l'inimmaginabile: i passeggeri non solo evitavano di danneggiarla, ma proteggevano lo spazio circostante. Le scritte sui sedili sono cessate, i rifiuti non venivano più abbandonati a terra. La pianta ha imposto una <strong>gentilezza autoritaria</strong>: la sua fragilità ha risvegliato il senso civico anche dei viaggiatori più distratti o irruenti.
                        </p>
                        <p>
                            Dopo 30 giorni di circolazione ininterrotta, il bilancio è sorprendente. L'autobus n. 402 ha registrato un calo dei costi di manutenzione straordinaria pari all'85%. Il segreto? La creazione di un <strong>legame affettivo tra l'utente e il bene pubblico</strong>, mediato dalla presenza viva della pianta.
                        </p>
                        <div class="p-8 bg-slate-900 rounded-[32px] text-white">
                            <h4 class="text-emerald-400 font-black uppercase text-sm mb-4 tracking-widest italic">La Conclusione dell'Esperimento</h4>
                            <p class="text-sm text-slate-400 m-0 leading-relaxed">
                                Oggi la "pianta del bus" è stata trapiantata nel giardino comune della sede ATV, ma la sua missione continua. È nato un movimento cittadino che vede nel verde urbano non solo decoro, ma un vero e proprio strumento di difesa contro l'inciviltà.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-5 lg:sticky lg:top-8">
                    <div class="p-10 bg-emerald-600 rounded-[48px] shadow-2xl text-white">
                        <div class="flex items-center gap-4 mb-8 border-b border-white/20 pb-6">
                            <h4 class="text-3xl font-black uppercase italic tracking-tighter text-white">I Risultati</h4>
                        </div>
                        
                        <ul class="space-y-8">
                            <li class="flex items-start gap-4">
                                <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                                    <i class="fas fa-hand-holding-heart text-xs"></i>
                                </div>
                                <div>
                                    <h5 class="font-bold uppercase text-xs tracking-widest text-emerald-100">Cura Collettiva</h5>
                                    <p class="text-white text-sm mt-1 leading-relaxed">Passeggeri che si prendono cura del bene comune spontaneamente.</p>
                                </div>
                            </li>
                            <li class="flex items-start gap-4">
                                <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                                    <i class="fas fa-hammer text-xs"></i>
                                </div>
                                <div>
                                    <h5 class="font-bold uppercase text-xs tracking-widest text-emerald-100">Stop Vandali</h5>
                                    <p class="text-white text-sm mt-1 leading-relaxed">La bellezza agisce come deterrente psicologico naturale.</p>
                                </div>
                            </li>
                            <li class="flex items-start gap-4">
                                <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                                    <i class="fas fa-smile text-xs"></i>
                                </div>
                                <div>
                                    <h5 class="font-bold uppercase text-xs tracking-widest text-emerald-100">Benessere Mentale</h5>
                                    <p class="text-white text-sm mt-1 leading-relaxed">Riduzione dello stress percepito durante il tragitto casa-lavoro.</p>
                                </div>
                            </li>
                        </ul>

                        <div class="mt-10 pt-8 border-t border-white/20">
                            <div class="text-[10px] font-black uppercase tracking-[0.2em] mb-4">Progetto "Verde a Bordo" 2026</div>
                            <a href="#" class="block w-full py-4 bg-white text-emerald-600 text-center rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all">Sostieni l'Iniziativa</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-slate-900 rounded-[48px] p-12 text-center text-white relative overflow-hidden">
                <div class="absolute inset-0 opacity-10 pointer-events-none tracking-tighter font-black text-[10vw] leading-none select-none uppercase italic">
                    STOP VANDALISMO
                </div>
                <div class="relative z-10">
                    <h3 class="text-4xl font-black uppercase italic tracking-tighter mb-4">La tua città è un giardino</h3>
                    <p class="text-slate-400 mb-10 max-w-xl mx-auto font-medium text-lg italic">Unisciti a noi per trasformare ogni angolo di Verona in un luogo di cura condivisa.</p>
                    <a href="#" target="_blank" class="inline-flex items-center gap-4 px-12 py-5 bg-emerald-600 text-white rounded-2xl font-black uppercase tracking-widest transition-all hover:scale-105 shadow-2xl">
                        Diventa un Volontario Verde
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
                    </a>
                </div>
            </div>
        </div>
    </main>
`;

        if (nav) {
            nav.insertAdjacentHTML('afterend', article4HTML);
        } else {
            document.body.insertAdjacentHTML('afterbegin', article4HTML);
        }
        
        window.scrollTo(0, 0);
    }
}

//ARTICOLO 5
function GoArt5() {
    // 1. Identificativo URL specifico per l'articolo 2
    window.location.hash = "articolo-pianta-abbandonata-sul-bus";

    const currentHeader = document.querySelector('header');
    const currentMain = document.querySelector('main');
    const nav = document.querySelector('nav');

    if (currentHeader && currentMain) {
        currentHeader.remove();
        currentMain.remove();

        const article5HTML = `    <header class="relative pt-32 pb-24 overflow-hidden bg-slate-900">
        <div class="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                 class="w-full h-full object-cover opacity-30" 
                 alt="Startup Workshop">
            <div class="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/90 to-slate-900"></div>
        </div>

        <div class="relative z-10 max-w-6xl mx-auto px-6 text-center">
            <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 text-white text-[10px] font-black uppercase tracking-widest mb-8 shadow-xl">
                Regione Veneto • Formazione Startup 2026
            </span>
            <h1 class="text-6xl md:text-8xl font-black text-white leading-none mb-4 drop-shadow-2xl italic uppercase tracking-tighter">
                Oltre il Pitch<br>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">il futuro è oggi</span>
            </h1>

            <div class="text-2xl md:text-3xl font-black text-emerald-400 uppercase italic tracking-widest mb-10">
                L'evento finale dei nuovi talenti imprenditoriali
            </div>

            <p class="text-xl text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed mb-10">
                Dalle metodologie di design alla presentazione sul palco: si chiude il percorso intensivo finanziato dalla Regione Veneto per la creazione d'impresa.
            </p>
            
            <a href="#articolo" class="inline-flex items-center gap-3 px-10 py-4 bg-white text-emerald-900 hover:bg-emerald-600 hover:text-white rounded-2xl font-black uppercase tracking-widest transition-all shadow-2xl group">
                Guarda i Progetti
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
            </a>
        </div>
    </header>

    <div class="relative z-20 -mt-10 max-w-4xl mx-auto px-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-50 p-8 rounded-[32px] shadow-2xl border border-white">
            <div class="text-center border-r border-slate-200">
                <div class="text-3xl font-black text-emerald-600 italic">100%</div>
                <div class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Founders Pronti</div>
            </div>
            <div class="text-center md:border-r border-slate-200">
                <div class="text-3xl font-black text-slate-900 italic">48h</div>
                <div class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Workshop Intensivi</div>
            </div>
            <div class="text-center border-r border-slate-200">
                <div class="text-3xl font-black text-slate-900 italic">12</div>
                <div class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Startup Pitchate</div>
            </div>
            <div class="text-center">
                <div class="text-3xl font-black text-slate-900 italic">∞</div>
                <div class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Pizza in Arrivo</div>
            </div>
        </div>
    </div>

    <main id="articolo" class="py-24 bg-white">
        <div class="max-w-6xl mx-auto px-6">
            
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
                
                <div class="lg:col-span-7 flex flex-col">
                    <h2 class="text-4xl font-black text-slate-900 uppercase italic mb-8 tracking-tighter">Dall'Idea alla Realtà</h2>
                    <div class="prose prose-slate max-w-none text-slate-600 font-medium leading-relaxed space-y-6 text-justify">
                        <p>
                            Si è concluso con successo il corso di alta formazione per aspiranti startupper, un percorso che ha trasformato intuizioni grezze in modelli di business solidi. Attraverso sessioni di <strong>Design Thinking</strong>, i partecipanti hanno scavato nei bisogni degli utenti, mappando ogni fase della <strong>Customer Journey</strong> per creare soluzioni non solo innovative, ma necessarie.
                        </p>
                        <p>
                            L'ultima giornata è stata il culmine di settimane di duro lavoro. Sul palco si sono alternate presentazioni cariche di adrenalina, dove le tecniche di <strong>Public Speaking</strong> e le strategie <strong>Social</strong> apprese in aula hanno fatto la differenza tra un semplice racconto e un pitch convincente. Grandi rivelazioni e pivot dell'ultimo minuto hanno dimostrato la resilienza dei team.
                        </p>
                        <p>
                            Il successo del corso non si misura solo nei numeri, ma nella qualità dei legami creati. <strong>Davide B.</strong>, mente organizzativa e tutor infaticabile del progetto, ha espresso grande soddisfazione: <em>"Il livello raggiunto è straordinario. Vedere questa evoluzione ripaga ogni sforzo. Siete stati tutti bravissimi e, per festeggiare questo traguardo, la pizza per tutti stasera la offro io!"</em>
                        </p>
                        <div class="p-8 bg-slate-900 rounded-[32px] text-white">
                            <h4 class="text-emerald-400 font-black uppercase text-sm mb-4 tracking-widest italic">Nota del Tutor: Davide B.</h4>
                            <p class="text-sm text-slate-400 m-0 leading-relaxed">
                                "Questo gruppo ha dimostrato una fame di conoscenza rara. Portare a termine un percorso così tecnico richiede disciplina. Il premio non è solo la certificazione della Regione Veneto, ma la consapevolezza di poter competere sul mercato globale. E sì, la promessa della pizza è confermata: festeggiamo il futuro!"
                            </p>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-5 lg:sticky lg:top-8">
                    <div class="p-10 bg-emerald-600 rounded-[48px] shadow-2xl text-white">
                        <div class="flex items-center gap-4 mb-8 border-b border-white/20 pb-6">
                            <h4 class="text-3xl font-black uppercase italic tracking-tighter text-white">I Moduli Key</h4>
                        </div>
                        
                        <ul class="space-y-8">
                            <li class="flex items-start gap-4">
                                <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                                    <i class="fas fa-lightbulb text-xs"></i>
                                </div>
                                <div>
                                    <h5 class="font-bold uppercase text-xs tracking-widest text-emerald-100">Design Thinking</h5>
                                    <p class="text-white text-sm mt-1 leading-relaxed">Ideazione centrata sull'utente per risolvere problemi reali.</p>
                                </div>
                            </li>
                            <li class="flex items-start gap-4">
                                <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                                    <i class="fas fa-microphone text-xs"></i>
                                </div>
                                <div>
                                    <h5 class="font-bold uppercase text-xs tracking-widest text-emerald-100">Public Speaking</h5>
                                    <p class="text-white text-sm mt-1 leading-relaxed">Comunicazione efficace per conquistare investitori e partner.</p>
                                </div>
                            </li>
                            <li class="flex items-start gap-4">
                                <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                                    <i class="fas fa-share-nodes text-xs"></i>
                                </div>
                                <div>
                                    <h5 class="font-bold uppercase text-xs tracking-widest text-emerald-100">Social Strategy</h5>
                                    <p class="text-white text-sm mt-1 leading-relaxed">Costruire una community attorno alla propria visione aziendale.</p>
                                </div>
                            </li>
                        </ul>

                        <div class="mt-10 pt-8 border-t border-white/20">
                            <div class="text-[10px] font-black uppercase tracking-[0.2em] mb-4">Network Startup Veneto 2026</div>
                            <a href="#" class="block w-full py-4 bg-white text-emerald-600 text-center rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all">Scarica i Project Work</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-slate-900 rounded-[48px] p-12 text-center text-white relative overflow-hidden">
                <div class="absolute inset-0 opacity-10 pointer-events-none tracking-tighter font-black text-[10vw] leading-none select-none uppercase italic">
                    STARTUP MENTALITY
                </div>
                <div class="relative z-10">
                    <h3 class="text-4xl font-black uppercase italic tracking-tighter mb-4">Non fermatevi al Pitch</h3>
                    <p class="text-slate-400 mb-10 max-w-xl mx-auto font-medium text-lg italic">Il percorso finisce qui, ma la vostra avventura imprenditoriale è appena iniziata.</p>
                    <a href="#" class="inline-flex items-center gap-4 px-12 py-5 bg-emerald-600 text-white rounded-2xl font-black uppercase tracking-widest transition-all hover:scale-105 shadow-2xl">
                        Rimani nel Network
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
                    </a>
                </div>
            </div>
        </div>
    </main>`;

        if (nav) {
            nav.insertAdjacentHTML('afterend', article5HTML);
        } else {
            document.body.insertAdjacentHTML('afterbegin', articl54HTML);
        }
        
        window.scrollTo(0, 0);
    }
}

//EVENTO 1
function GoEvento1() {
    window.location.hash = "evento-Hackathon-territoriale";

    const elementsToRemove = ['header', 'main', 'footer', '#ai-chat-window'];
    elementsToRemove.forEach(selector => document.querySelector(selector)?.remove());
    
    const nav = document.querySelector('nav');

    const event1HTML = `

    <header class="relative pt-32 pb-24 overflow-hidden bg-slate-900">
        <div class="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop" 
                 class="w-full h-full object-cover opacity-30" 
                 alt="Hackathon Background">
            <div class="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/90 to-slate-900"></div>
        </div>

        <div class="relative z-10 max-w-6xl mx-auto px-6 text-center">
            <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest mb-8 shadow-xl">
                Workshop & Hackathon • Evento Gratuito
            </span>
            <h1 class="text-6xl md:text-8xl font-black text-white leading-none mb-4 drop-shadow-2xl italic uppercase tracking-tighter">
                Padova Hackathon<br>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Territoriale 2026</span>
            </h1>

            <div class="text-3xl md:text-4xl font-black text-indigo-400 uppercase italic tracking-widest mb-10">
                18-19 Aprile 2026
            </div>

            <p class="text-xl text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed mb-10">
                Connetti l'artigianato d'eccellenza con le nuove frontiere tecnologiche. Progetta il futuro produttivo di Padova in una sfida di 24 ore.
            </p>
            
            <a href="https://docs.google.com/forms/..." target="_blank" class="inline-flex items-center gap-3 px-10 py-4 bg-white text-indigo-900 hover:bg-indigo-600 hover:text-white rounded-2xl font-black uppercase tracking-widest transition-all shadow-2xl group">
                Candidati Ora
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
            </a>
        </div>
    </header>

    <div class="relative z-20 -mt-10 max-w-4xl mx-auto px-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-50 p-8 rounded-[32px] shadow-2xl border border-white">
            <div class="text-center border-r border-slate-200">
                <div class="text-3xl font-black text-indigo-600 italic">FREE</div>
                <div class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Ingresso</div>
            </div>
            <div class="text-center md:border-r border-slate-200">
                <div class="text-3xl font-black text-slate-900 italic">4</div>
                <div class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Senior Mentor</div>
            </div>
            <div class="text-center border-r border-slate-200">
                <div class="text-3xl font-black text-slate-900 italic">24h</div>
                <div class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Challenge</div>
            </div>
            <div class="text-center">
                <div class="text-3xl font-black text-slate-900 italic">8+</div>
                <div class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Soft Skills</div>
            </div>
        </div>
    </div>

    <main class="py-24 bg-white">
        <div class="max-w-6xl mx-auto px-6">
            
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
                
                <div class="lg:col-span-7 flex flex-col">
                    <h2 class="text-4xl font-black text-slate-900 uppercase italic mb-8 tracking-tighter">Rigenerare il tessuto urbano attraverso il fare</h2>
                    <div class="prose prose-slate max-w-none text-slate-600 font-medium leading-relaxed space-y-6 text-justify">
                        <p>
                            Padova Hackathon 2026 non è una semplice competizione di programmazione, ma un laboratorio di co-creazione dedicato alla <strong>manifattura urbana</strong>. L'obiettivo è ambizioso: unire il saper fare dei maestri artigiani locali con la visione trasformativa di giovani innovatori, designer e sviluppatori.
                        </p>
                        <p>
                            Il cuore dell'evento è la <strong>Challenge Territoriale</strong>. I partecipanti, divisi in team multidisciplinari, lavoreranno per 24 ore consecutive alla risoluzione di problemi reali legati alla sostenibilità dei materiali, all'automazione dei processi artigianali e alla creazione di nuovi modelli di economia circolare.
                        </p>
                        <p>
                            Utilizzeremo metodologie di <strong>Rapid Prototyping</strong> e Design Thinking, supportati da un ecosistema di mentor tecnici e strategici. L'evento culminerà nel pitch finale di fronte a una giuria composta da istituzioni, stakeholder industriali e investitori, pronti a supportare lo sviluppo delle idee più brillanti.
                        </p>
                        <div class="p-8 bg-slate-900 rounded-[32px] text-white">
                            <h4 class="text-indigo-400 font-black uppercase text-sm mb-4 tracking-widest italic">Informazioni e Logistica</h4>
                            <p class="text-sm text-slate-400 m-0 leading-relaxed">
                                L'evento è <strong>totalmente gratuito</strong>. Offriamo vitto, spazi di lavoro attrezzati e connessione high-speed. Le attività si svolgeranno presso il Polo Innovazione Padova. L'accesso è garantito previa selezione della candidatura per assicurare l'equilibrio delle competenze all'interno dei team.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-5 lg:sticky lg:top-8">
                    <div class="p-10 bg-indigo-600 rounded-[48px] shadow-2xl text-white">
                        <div class="flex items-center gap-4 mb-8 border-b border-white/20 pb-6">
                            <h4 class="text-3xl font-black uppercase italic tracking-tighter text-white">Perché Partecipare</h4>
                        </div>
                        
                        <ul class="space-y-8">
                            <li class="flex items-start gap-4">
                                <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                                    <i class="fas fa-lightbulb text-xs"></i>
                                </div>
                                <div>
                                    <h5 class="font-bold uppercase text-xs tracking-widest text-indigo-100">Learning by doing</h5>
                                    <p class="text-white text-sm mt-1 leading-relaxed">Applica subito metodologie di innovazione su casi studio reali del territorio.</p>
                                </div>
                            </li>
                            <li class="flex items-start gap-4">
                                <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                                    <i class="fas fa-rocket text-xs"></i>
                                </div>
                                <div>
                                    <h5 class="font-bold uppercase text-xs tracking-widest text-indigo-100">Premi & Growth</h5>
                                    <p class="text-white text-sm mt-1 leading-relaxed">Vinci borse di studio, percorsi di incubazione e accesso a laboratori professionali.</p>
                                </div>
                            </li>
                            <li class="flex items-start gap-4">
                                <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                                    <i class="fas fa-handshake text-xs"></i>
                                </div>
                                <div>
                                    <h5 class="font-bold uppercase text-xs tracking-widest text-indigo-100">Contatti Diretti</h5>
                                    <p class="text-white text-sm mt-1 leading-relaxed">Entra in contatto con le aziende leader del settore artigianale e tecnologico veneto.</p>
                                </div>
                            </li>
                        </ul>

                        <div class="mt-10 pt-8 border-t border-white/20">
                            <div class="text-[10px] font-black uppercase tracking-[0.2em] mb-4">Candidature entro il 10 Aprile</div>
                            <a href="#" class="block w-full py-4 bg-white text-indigo-600 text-center rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all">Invia Candidatura</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mb-32">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-black text-slate-900 uppercase italic mb-2 tracking-tighter">Line-up Mentors</h2>
                    <p class="text-slate-400 font-medium italic">I professionisti che guideranno il tuo team.</p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="group p-8 rounded-[40px] bg-slate-50 border border-transparent hover:border-indigo-600 transition-all duration-300">
                        <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center font-black text-indigo-600 text-2xl italic mb-6 shadow-sm">MV</div>
                        <h5 class="font-black text-slate-900 uppercase italic text-lg mb-1">Marco Valenti</h5>
                        <p class="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-4">Urban Strategist</p>
                        <p class="text-sm text-slate-500 leading-relaxed font-medium">Specialista in rigenerazione urbana e smart cities. Supporta i team nella definizione dell'impatto territoriale del progetto.</p>
                    </div>
                    
                    <div class="group p-8 rounded-[40px] bg-slate-50 border border-transparent hover:border-purple-600 transition-all duration-300">
                        <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center font-black text-purple-600 text-2xl italic mb-6 shadow-sm">LB</div>
                        <h5 class="font-black text-slate-900 uppercase italic text-lg mb-1">Laura Bianchi</h5>
                        <p class="text-[10px] font-bold text-purple-600 uppercase tracking-widest mb-4">Tech Lead</p>
                        <p class="text-sm text-slate-500 leading-relaxed font-medium">Ingegnere del software con focus su IoT e automazione. Guiderà la realizzazione tecnica dei prototipi digitali.</p>
                    </div>
                    
                    <div class="group p-8 rounded-[40px] bg-slate-50 border border-transparent hover:border-slate-900 transition-all duration-300">
                        <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center font-black text-slate-900 text-2xl italic mb-6 shadow-sm">AR</div>
                        <h5 class="font-black text-slate-900 uppercase italic text-lg mb-1">Alessandro Rossi</h5>
                        <p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Master Artisan</p>
                        <p class="text-sm text-slate-500 leading-relaxed font-medium">Custode del saper fare tradizionale. Fornisce consulenza sui materiali e sulla fattibilità industriale dei prodotti.</p>
                    </div>
                </div>
            </div>

            <div class="bg-slate-900 rounded-[48px] p-12 text-center text-white relative overflow-hidden">
                <div class="absolute inset-0 opacity-10 pointer-events-none tracking-tighter font-black text-[10vw] leading-none select-none uppercase italic">
                    HACK PD HACK PD
                </div>
                <div class="relative z-10">
                    <h3 class="text-4xl font-black uppercase italic tracking-tighter mb-4">Sei pronto alla sfida?</h3>
                    <p class="text-slate-400 mb-10 max-w-xl mx-auto font-medium text-lg italic">Unisciti alla community di innovatori che sta ridisegnando il Veneto. L'iscrizione è gratuita, il valore è inestimabile.</p>
                    <a href="https://docs.google.com/forms/..." target="_blank" class="inline-flex items-center gap-4 px-12 py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest transition-all hover:scale-105 shadow-2xl">
                        Partecipa all'Hackathon
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
                    </a>
                </div>
            </div>
        </div>
    </main>
    `;

    if (nav) {
        nav.insertAdjacentHTML('afterend', event1HTML);
    } else {
        document.body.insertAdjacentHTML('afterbegin', event1HTML);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

//EVENTO 2
function GoEvento2() {
    window.location.hash = "workshop-public-speaking-2026";

    const elementsToRemove = ['header', 'main', 'footer', '#ai-chat-window'];
    elementsToRemove.forEach(selector => document.querySelector(selector)?.remove());
    
    const nav = document.querySelector('nav');

    const event2HTML = ` <header class="relative pt-32 pb-24 overflow-hidden bg-slate-900">
        <div class="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80" 
                style="display: block !important; position: absolute; z-index: -1;"
                class="w-full h-full object-cover opacity-30" 
                alt="Public Speaking Background">
            <div class="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/90 to-slate-900"></div>
        </div>

        <div class="relative z-10 max-w-6xl mx-auto px-6 text-center">
            <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest mb-8 shadow-xl">
                Evento Gratuito • 2026
            </span>
            <h1 class="text-6xl md:text-8xl font-black text-white leading-none mb-4 drop-shadow-2xl italic uppercase tracking-tighter">
                Workshop:<br>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Public Speaking</span>
            </h1>
            
            <div class="text-3xl md:text-4xl font-black text-indigo-400 uppercase italic tracking-widest mb-10">
                15 Marzo 2026
            </div>

            <p class="text-xl text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed mb-10">
                Sviluppa carisma e autorità. Un percorso intensivo per padroneggiare la scena, offerto gratuitamente per i leader di domani.
            </p>
            
            <a href="https://docs.google.com/forms/..." target="_blank" class="inline-flex items-center gap-3 px-10 py-4 bg-white text-indigo-900 hover:bg-indigo-600 hover:text-white rounded-2xl font-black uppercase tracking-widest transition-all shadow-2xl group">
                Iscrizione Gratuita
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
            </a>
        </div>
    </header>

    <div class="relative z-20 -mt-10 max-w-4xl mx-auto px-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-50 p-8 rounded-[32px] shadow-2xl border border-white">
            <div class="text-center border-r border-slate-200">
                <div class="text-3xl font-black text-indigo-600 italic">FREE</div>
                <div class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Costo Accesso</div>
            </div>
            <div class="text-center md:border-r border-slate-200">
                <div class="text-3xl font-black text-slate-900 italic">3</div>
                <div class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Coach Senior</div>
            </div>
            <div class="text-center border-r border-slate-200">
                <div class="text-3xl font-black text-slate-900 italic">8h</div>
                <div class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Laboratorio</div>
            </div>
            <div class="text-center">
                <div class="text-3xl font-black text-slate-900 italic">20</div>
                <div class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Posti Totali</div>
            </div>
        </div>
    </div>

    <main class="py-24 bg-white">
        <div class="max-w-6xl mx-auto px-6">
            
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
                
                <div class="lg:col-span-7 flex flex-col">
                    <h2 class="text-4xl font-black text-slate-900 uppercase italic mb-8 tracking-tighter">Comunicare è un atto di coraggio</h2>
                    <div class="prose prose-slate max-w-none text-slate-600 font-medium leading-relaxed space-y-6 text-justify">
                        <p>
                            In un'epoca di rumore digitale incessante, la capacità di catturare e mantenere l'attenzione di un'aula è diventata la competenza discriminante per ogni percorso professionale. Questo workshop nasce con l'obiettivo di democratizzare l'accesso alle tecniche di alta formazione comunicativa, offrendo un <strong>percorso completamente gratuito</strong> ma di livello executive.
                        </p>
                        <p>
                            Non ci limiteremo alla teoria. Analizzeremo la <strong>fisiologia del palco</strong>: come il corpo reagisce allo stress e come trasformare l'ansia in energia proiettiva. Imparerai a strutturare discorsi attraverso modelli retorici testati, capaci di parlare sia alla parte razionale che a quella emotiva del tuo pubblico.
                        </p>
                        <p>
                            La sessione pratica prevede l'uso di tecniche di <strong>Video Feedback</strong>. Verrai registrato mentre parli, per poi analizzare insieme ai coach ogni micro-espressione e ogni inflessione vocale. Vedersi è il primo passo per trasformarsi.
                        </p>
                        <div class="p-8 bg-slate-900 rounded-[32px] text-white">
                            <h4 class="text-indigo-400 font-black uppercase text-sm mb-4 tracking-widest italic">Perché è gratuito?</h4>
                            <p class="text-sm text-slate-400 m-0 leading-relaxed">
                                Crediamo nel potenziale dei nuovi talenti. Grazie al supporto dei nostri partner territoriali, abbattiamo la barriera economica per permettere a 20 profili selezionati di accedere a una formazione che normalmente richiederebbe investimenti significativi.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-5 lg:sticky lg:top-8">
                    <div class="p-10 bg-indigo-600 rounded-[48px] shadow-2xl text-white">
                        <div class="flex items-center gap-4 mb-8 border-b border-white/20 pb-6">
                            <h4 class="text-3xl font-black uppercase italic tracking-tighter text-white">Perché Iscriversi</h4>
                        </div>
                        
                        <ul class="space-y-8">
                            <li class="flex items-start gap-4">
                                <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                                    <i class="fas fa-check text-xs"></i>
                                </div>
                                <div>
                                    <h5 class="font-bold uppercase text-xs tracking-widest text-indigo-100">Zero Costi</h5>
                                    <p class="text-white text-sm mt-1 leading-relaxed">Accesso totale al workshop, pranzo e materiali senza alcuna quota di iscrizione.</p>
                                </div>
                            </li>
                            <li class="flex items-start gap-4">
                                <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                                    <i class="fas fa-video text-xs"></i>
                                </div>
                                <div>
                                    <h5 class="font-bold uppercase text-xs tracking-widest text-indigo-100">Pratica Reale</h5>
                                    <p class="text-white text-sm mt-1 leading-relaxed">Niente lezioni noiose. Salirai sul palco e verrai ripreso da telecamere professionali.</p>
                                </div>
                            </li>
                            <li class="flex items-start gap-4">
                                <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                                    <i class="fas fa-users text-xs"></i>
                                </div>
                                <div>
                                    <h5 class="font-bold uppercase text-xs tracking-widest text-indigo-100">Networking</h5>
                                    <p class="text-white text-sm mt-1 leading-relaxed">Connettiti con altri 19 profili ambiziosi e con coach di calibro internazionale.</p>
                                </div>
                            </li>
                        </ul>

                        <div class="mt-10 pt-8 border-t border-white/20">
                            <div class="text-[10px] font-black uppercase tracking-[0.2em] mb-4">Solo 20 posti disponibili</div>
                            <a href="#" class="block w-full py-4 bg-white text-indigo-600 text-center rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all">Candidati Ora</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mb-32">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-black text-slate-900 uppercase italic mb-2 tracking-tighter">Mentori del Corso</h2>
                    <p class="text-slate-400 font-medium italic">Esperti certificati al tuo servizio.</p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="group p-8 rounded-[40px] bg-slate-50 border border-transparent hover:border-indigo-600 transition-all duration-300">
                        <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center font-black text-indigo-600 text-2xl italic mb-6 shadow-sm">SM</div>
                        <h5 class="font-black text-slate-900 uppercase italic text-lg mb-1">Sara Moretti</h5>
                        <p class="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-4">TEDx Speaker Coach</p>
                        <p class="text-sm text-slate-500 leading-relaxed font-medium">Ha preparato oltre 100 speaker per i palchi TEDx. Esperta in architettura del contenuto e gestione emotiva della platea.</p>
                    </div>
                    
                    <div class="group p-8 rounded-[40px] bg-slate-50 border border-transparent hover:border-purple-600 transition-all duration-300">
                        <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center font-black text-purple-600 text-2xl italic mb-6 shadow-sm">DF</div>
                        <h5 class="font-black text-slate-900 uppercase italic text-lg mb-1">Davide Ferro</h5>
                        <p class="text-[10px] font-bold text-purple-600 uppercase tracking-widest mb-4">Attore e Formatore</p>
                        <p class="text-sm text-slate-500 leading-relaxed font-medium">Formatore teatrale prestato al corporate. Insegna come usare voce e corpo per dominare lo spazio scenico in contesti business.</p>
                    </div>
                    
                    <div class="group p-8 rounded-[40px] bg-slate-50 border border-transparent hover:border-slate-900 transition-all duration-300">
                        <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center font-black text-slate-900 text-2xl italic mb-6 shadow-sm">EL</div>
                        <h5 class="font-black text-slate-900 uppercase italic text-lg mb-1">Elena Lodi</h5>
                        <p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Analista Comportamentale</p>
                        <p class="text-sm text-slate-500 leading-relaxed font-medium">Specialista in comunicazione non verbale. Analizza i segnali inconsci del pubblico per calibrare l'efficacia del messaggio.</p>
                    </div>
                </div>
            </div>

            <div class="bg-slate-900 rounded-[48px] p-12 text-center text-white relative overflow-hidden">
                <div class="absolute inset-0 opacity-10 pointer-events-none tracking-tighter font-black text-[10vw] leading-none select-none uppercase italic">
                    NO COST NO COST
                </div>
                <div class="relative z-10">
                    <h3 class="text-4xl font-black uppercase italic tracking-tighter mb-4">Accesso Limitato</h3>
                    <p class="text-slate-400 mb-10 max-w-xl mx-auto font-medium text-lg italic">Data l'elevata richiesta e la gratuità dell'evento, le iscrizioni sono soggette a selezione basata sulle motivazioni fornite.</p>
                    <a href="https://docs.google.com/forms/..." target="_blank" class="inline-flex items-center gap-4 px-12 py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest transition-all hover:scale-105 shadow-2xl">
                        Invia Candidatura
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
                    </a>
                </div>
            </div>
        </div>
    </main>
    `;

    if (nav) {
        nav.insertAdjacentHTML('afterend', event2HTML);
    } else {
        document.body.insertAdjacentHTML('afterbegin', event2HTML);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

//EVENTO 3
function GoEvento3() {
    window.location.hash = "passeggiate-patrimoniali-vicenza";

    const elementsToRemove = ['header', 'main', 'footer', '#ai-chat-window'];
    elementsToRemove.forEach(selector => document.querySelector(selector)?.remove());
    
    const nav = document.querySelector('nav');

    const event3HTML = `     <header class="relative pt-32 pb-24 overflow-hidden bg-slate-900">
        <div class="absolute inset-0 z-0">
            <img src="https://plus.unsplash.com/premium_photo-1677048147637-c2a5f668fe56?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                 class="w-full h-full object-cover opacity-30" 
                 alt="Vicenza Patrimonio">
            <div class="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/90 to-slate-900"></div>
        </div>

        <div class="relative z-10 max-w-6xl mx-auto px-6 text-center">
            <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 text-white text-[10px] font-black uppercase tracking-widest mb-8 shadow-xl">
                Cultura & Partecipazione • Evento Gratuito
            </span>
            <h1 class="text-6xl md:text-8xl font-black text-white leading-none mb-4 drop-shadow-2xl italic uppercase tracking-tighter">
                Passeggiate<br>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Patrimoniali 2026</span>
            </h1>

            <div class="text-3xl md:text-4xl font-black text-emerald-400 uppercase italic tracking-widest mb-10">
                09-10 Maggio 2026
            </div>

            <p class="text-xl text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed mb-10">
                Scopri la Vicenza invisibile. Un percorso guidato dalle nuove generazioni per riscoprire luoghi dimenticati e trasformare ogni cittadino in custode attivo della bellezza locale.
            </p>
            
            <a href="#" target="_blank" class="inline-flex items-center gap-3 px-10 py-4 bg-white text-emerald-900 hover:bg-emerald-600 hover:text-white rounded-2xl font-black uppercase tracking-widest transition-all shadow-2xl group">
                Prenota Posto
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
            </a>
        </div>
    </header>

    <div class="relative z-20 -mt-10 max-w-4xl mx-auto px-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-50 p-8 rounded-[32px] shadow-2xl border border-white">
            <div class="text-center border-r border-slate-200">
                <div class="text-3xl font-black text-emerald-600 italic">FREE</div>
                <div class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Accesso</div>
            </div>
            <div class="text-center md:border-r border-slate-200">
                <div class="text-3xl font-black text-slate-900 italic">12</div>
                <div class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Giovani Guide</div>
            </div>
            <div class="text-center border-r border-slate-200">
                <div class="text-3xl font-black text-slate-900 italic">5km</div>
                <div class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Percorso</div>
            </div>
            <div class="text-center">
                <div class="text-3xl font-black text-slate-900 italic">4+</div>
                <div class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Workshop</div>
            </div>
        </div>
    </div>

    <main class="py-24 bg-white">
        <div class="max-w-6xl mx-auto px-6">
            
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
                
                <div class="lg:col-span-7 flex flex-col">
                    <h2 class="text-4xl font-black text-slate-900 uppercase italic mb-8 tracking-tighter">Oltre la Basilica: narrare l'anima urbana</h2>
                    <div class="prose prose-slate max-w-none text-slate-600 font-medium leading-relaxed space-y-6 text-justify">
                        <p>
                            Le Passeggiate Patrimoniali 2026 non sono tour turistici convenzionali, ma atti di <strong>appropriazione culturale</strong>. Ispirate alla Convenzione di Faro, mettono al centro le persone e il loro legame emotivo con il territorio.
                        </p>
                        <p>
                            Il focus è la <strong>Narrazione Collettiva</strong>. Gruppi di giovani facilitatori accompagneranno i partecipanti attraverso cortili nascosti, archeologie industriali e spazi di quartiere, stimolando la condivisione di memorie e visioni future.
                        </p>
                        <p>
                            Utilizzeremo tecniche di <strong>Storytelling Itinerante</strong> per trasformare l'osservatore passivo in un "narratore del territorio". L'evento mira a creare una mappa vivente di Vicenza, dove il patrimonio non è solo pietra, ma l'insieme delle storie che lo abitano.
                        </p>
                        <div class="p-8 bg-slate-900 rounded-[32px] text-white">
                            <h4 class="text-emerald-400 font-black uppercase text-sm mb-4 tracking-widest italic">Modalità di Partecipazione</h4>
                            <p class="text-sm text-slate-400 m-0 leading-relaxed">
                                L'evento è gratuito e aperto a tutti. Si consigliano calzature comode. Il punto di ritrovo verrà comunicato via email 48 ore prima dell'inizio. La prenotazione è obbligatoria per garantire la qualità dell'interazione nei gruppi ristretti.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-5 lg:sticky lg:top-8">
                    <div class="p-10 bg-emerald-600 rounded-[48px] shadow-2xl text-white">
                        <div class="flex items-center gap-4 mb-8 border-b border-white/20 pb-6">
                            <h4 class="text-3xl font-black uppercase italic tracking-tighter text-white">L'esperienza</h4>
                        </div>
                        
                        <ul class="space-y-8">
                            <li class="flex items-start gap-4">
                                <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                                    <i class="fas fa-eye text-xs"></i>
                                </div>
                                <div>
                                    <h5 class="font-bold uppercase text-xs tracking-widest text-emerald-100">Sguardo Inedito</h5>
                                    <p class="text-white text-sm mt-1 leading-relaxed">Accedi a luoghi solitamente chiusi al pubblico o ignorati dai flussi turistici.</p>
                                </div>
                            </li>
                            <li class="flex items-start gap-4">
                                <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                                    <i class="fas fa-users text-xs"></i>
                                </div>
                                <div>
                                    <h5 class="font-bold uppercase text-xs tracking-widest text-emerald-100">Community Building</h5>
                                    <p class="text-white text-sm mt-1 leading-relaxed">Incontra altri cittadini e scambia prospettive sulla gestione dei beni comuni.</p>
                                </div>
                            </li>
                            <li class="flex items-start gap-4">
                                <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                                    <i class="fas fa-map-marked-alt text-xs"></i>
                                </div>
                                <div>
                                    <h5 class="font-bold uppercase text-xs tracking-widest text-emerald-100">Mappatura Emozionale</h5>
                                    <p class="text-white text-sm mt-1 leading-relaxed">Contribuisci alla creazione del primo archivio orale digitale della città.</p>
                                </div>
                            </li>
                        </ul>

                        <div class="mt-10 pt-8 border-t border-white/20">
                            <div class="text-[10px] font-black uppercase tracking-[0.2em] mb-4">Prenotazioni entro il 05 Maggio</div>
                            <a href="#" class="block w-full py-4 bg-white text-emerald-600 text-center rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all">Riserva il Posto</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mb-32">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-black text-slate-900 uppercase italic mb-2 tracking-tighter">I Coordinatori</h2>
                    <p class="text-slate-400 font-medium italic">Esperti di patrimonio e partecipazione che guidano i giovani narratori.</p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="group p-8 rounded-[40px] bg-slate-50 border border-transparent hover:border-emerald-600 transition-all duration-300">
                        <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center font-black text-emerald-600 text-2xl italic mb-6 shadow-sm">EM</div>
                        <h5 class="font-black text-slate-900 uppercase italic text-lg mb-1">Elena Martini</h5>
                        <p class="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-4">Curatrice Culturale</p>
                        <p class="text-sm text-slate-500 leading-relaxed font-medium">Specialista in gestione partecipata del patrimonio. Coordina la ricerca storica sui luoghi meno noti.</p>
                    </div>
                    
                    <div class="group p-8 rounded-[40px] bg-slate-50 border border-transparent hover:border-teal-600 transition-all duration-300">
                        <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center font-black text-teal-600 text-2xl italic mb-6 shadow-sm">GL</div>
                        <h5 class="font-black text-slate-900 uppercase italic text-lg mb-1">Giulio Lanza</h5>
                        <p class="text-[10px] font-bold text-teal-600 uppercase tracking-widest mb-4">Storyteller</p>
                        <p class="text-sm text-slate-500 leading-relaxed font-medium">Esperto di narrazione transmediale. Guida i giovani nella trasformazione dei dati storici in racconti avvincenti.</p>
                    </div>
                    
                    <div class="group p-8 rounded-[40px] bg-slate-50 border border-transparent hover:border-slate-900 transition-all duration-300">
                        <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center font-black text-slate-900 text-2xl italic mb-6 shadow-sm">SP</div>
                        <h5 class="font-black text-slate-900 uppercase italic text-lg mb-1">Sara Perin</h5>
                        <p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Urbanista Sociale</p>
                        <p class="text-sm text-slate-500 leading-relaxed font-medium">Focus sulla rigenerazione sociale dei quartieri. Cura il coinvolgimento delle comunità locali nel percorso.</p>
                    </div>
                </div>
            </div>

            <div class="bg-slate-900 rounded-[48px] p-12 text-center text-white relative overflow-hidden">
                <div class="absolute inset-0 opacity-10 pointer-events-none tracking-tighter font-black text-[10vw] leading-none select-none uppercase italic">
                    PATRIMONIO VIVA
                </div>
                <div class="relative z-10">
                    <h3 class="text-4xl font-black uppercase italic tracking-tighter mb-4">Diventa un narratore</h3>
                    <p class="text-slate-400 mb-10 max-w-xl mx-auto font-medium text-lg italic">Riscrivi la storia di Vicenza insieme a noi. La partecipazione è il primo passo verso la tutela.</p>
                    <a href="#" target="_blank" class="inline-flex items-center gap-4 px-12 py-5 bg-emerald-600 text-white rounded-2xl font-black uppercase tracking-widest transition-all hover:scale-105 shadow-2xl">
                        Iscriviti alla Passeggiata
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
                    </a>
                </div>
            </div>
        </div>
    </main>

    `;

    if (nav) {
        nav.insertAdjacentHTML('afterend', event3HTML);
    } else {
        document.body.insertAdjacentHTML('afterbegin', event3HTML);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

//SONDAGGIO 1
function GoSond1() {
    window.location.hash = "sondaggio-trasporti-notturni";

    // 1. Pulizia elementi esistenti
    const elementsToRemove = ['header', 'main', 'footer', '#ai-chat-window', '#survey-modal'];
    elementsToRemove.forEach(selector => document.querySelector(selector)?.remove());
    
    // 2. Reset stile body
    document.body.className = "bg-[#fdfdfd] text-slate-900 selection:bg-indigo-100 antialiased";
    document.body.style.overflow = "auto";

    // 3. Logica Modal
    window.openSurvey = function() {
        const modal = document.getElementById('survey-modal');
        if (modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeSurvey = function() {
        if (confirm("Sei sicuro di voler uscire? Le risposte inserite andranno perse.")) {
            const modal = document.getElementById('survey-modal');
            if (modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        }
    };

    // 4. Template HTML
    const sond1HTML = `
    <main class="max-w-3xl mx-auto px-6 py-20">
        <header class="mb-20">
            <h1 class="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-[0.85] mb-10">
                Cosa sappiamo dei<br>
                <span class="text-indigo-600">trasporti di notte?</span>
            </h1>
        </header>

        <section class="mb-12">
            <div class="inline-flex items-center gap-2 px-3 py-1 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest mb-6">
                Schiariamoci le idee
            </div>
            <p class="text-slate-600 text-lg leading-relaxed mb-8">
                Abbiamo riassunto i punti chiave del servizio attuale. Niente giudizi, solo i fatti prima di passare alla valutazione.
            </p>
            <button onclick="openSurvey()" class="inline-flex items-center gap-4 px-8 py-4 bg-slate-900 text-white rounded-xl font-black uppercase text-xs tracking-[0.2em] hover:bg-indigo-600 transition-all shadow-xl group">
                Rispondi al sondaggio
                <i class="fas fa-chevron-right group-hover:translate-x-1 transition-transform"></i>
            </button>
        </section>

        <article class="space-y-24 mb-32">
            <section id="funzionamento" class="scroll-mt-10">
                <h2 class="text-2xl font-black uppercase italic tracking-tighter mb-6 flex items-center gap-3">
                    <span class="text-indigo-600 text-4xl">1.</span> Logistica e Modelli
                </h2>
                <div class="prose prose-slate text-slate-600 font-medium max-w-none">
                    <p class="mb-4">Il trasporto notturno copre solitamente la fascia oraria tra la mezzanotte e le 5:00 del mattino. Non è un semplice prolungamento delle linee diurne: spesso i percorsi vengono ridisegnati per collegare i principali hub della vita notturna con i quartieri residenziali.</p>
                    
                    <div class="bg-slate-50 p-6 rounded-2xl border-l-4 border-indigo-600 my-6 italic text-sm">
                        "Esistono modelli radiali (dal centro verso l'esterno) o servizi a chiamata, dove il percorso si adatta in tempo reale alle prenotazioni degli utenti."
                    </div>

                    <p>A Padova, il sistema principale è il <strong>Night Bus</strong>. È un servizio flessibile che non segue orari fissi in ogni fermata, ma viene generato da un algoritmo in base a chi prenota tramite l'app ufficiale.</p>
                </div>
            </section>

            <section id="sicurezza" class="scroll-mt-10">
                <h2 class="text-2xl font-black uppercase italic tracking-tighter mb-6 flex items-center gap-3">
                    <span class="text-indigo-600 text-4xl">2.</span> Sicurezza e Percezione
                </h2>
                <p class="text-slate-600 font-medium leading-relaxed mb-4">
                    La qualità di un servizio notturno non si misura solo in "minuti di attesa". Entrano in gioco fattori come l'illuminazione delle fermate, la presenza di telecamere a bordo e la facilità di raggiungere la destinazione finale a piedi una volta scesi dal mezzo.
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 italic text-xs uppercase tracking-wider text-slate-400 font-black">
                    <div class="flex items-center gap-2"><i class="fas fa-shield-alt text-indigo-600"></i> Protocolli di emergenza</div>
                    <div class="flex items-center gap-2"><i class="fas fa-lightbulb text-indigo-600"></i> Infrastruttura urbana</div>
                </div>
            </section>

            <section id="costi" class="scroll-mt-10">
                <h2 class="text-2xl font-black uppercase italic tracking-tighter mb-6 flex items-center gap-3">
                    <span class="text-indigo-600 text-4xl">3.</span> Gestione Economica
                </h2>
                <p class="text-slate-600 font-medium leading-relaxed">
                    Mantenere i bus attivi di notte ha costi operativi superiori al giorno: indennità per il personale, manutenzione straordinaria e gestione delle piattaforme digitali. Questi costi possono essere sostenuti dalla bigliettazione, da fondi comunali o da sponsorizzazioni esterne legate ai grandi eventi.
                </p>
            </section>
        </article>

        <div id="survey-modal" style="display: none; position: fixed; inset: 0; background: rgba(15, 23, 42, 0.9); backdrop-filter: blur(8px); z-index: 100; align-items: center; justify-content: center; padding: 20px;">
        <div class="bg-white w-full max-w-[600px] max-h-[90vh] overflow-y-auto rounded-[24px] p-10">
            <div class="flex justify-between items-center mb-8">
                <h2 class="text-2xl font-black uppercase italic tracking-tighter">Valutazione <span class="text-indigo-600">Servizio</span></h2>
                <button onclick="closeSurvey()" class="text-slate-400 hover:text-slate-900 transition-colors">
                    <i class="fas fa-times text-xl"></i>
                </button>
            </div>

            <form id="survey-form" class="space-y-8">
                <div>
                    <p class="font-black uppercase text-xs tracking-widest text-slate-400 mb-4">01. Motivi di utilizzo (più risposte ammesse)</p>
                    <div class="grid grid-cols-1 gap-2">
                        <div class="relative">
                            <input type="checkbox" id="m1" name="reason" value="studio" class="sr-only peer">
                            <label for="m1" class="block p-4 border-2 border-slate-100 rounded-xl cursor-pointer peer-checked:border-indigo-600 peer-checked:bg-indigo-50 font-bold text-sm transition-all">Studio / Università</label>
                        </div>
                        <div class="relative">
                            <input type="checkbox" id="m2" name="reason" value="lavoro" class="sr-only peer">
                            <label for="m2" class="block p-4 border-2 border-slate-100 rounded-xl cursor-pointer peer-checked:border-indigo-600 peer-checked:bg-indigo-50 font-bold text-sm transition-all">Lavoro</label>
                        </div>
                        <div class="relative">
                            <input type="checkbox" id="m3" name="reason" value="social" class="sr-only peer">
                            <label for="m3" class="block p-4 border-2 border-slate-100 rounded-xl cursor-pointer peer-checked:border-indigo-600 peer-checked:bg-indigo-50 font-bold text-sm transition-all">Tempo libero / Socialità</label>
                        </div>
                    </div>
                </div>

                <div>
                    <p class="font-black uppercase text-xs tracking-widest text-slate-400 mb-4">02. Grado di soddisfazione generale</p>
                    <div class="flex justify-between gap-2">
                        ${[1, 2, 3, 4, 5].map(n => `
                            <div class="flex-1">
                                <input type="radio" id="q${n}" name="satisfaction" value="${n}" class="sr-only peer" ${n === 1 ? 'required' : ''}>
                                <label for="q${n}" class="block text-center p-4 border-2 border-slate-100 rounded-xl cursor-pointer peer-checked:border-indigo-600 peer-checked:bg-indigo-50 font-bold transition-all">${n}</label>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div>
                    <p class="font-black uppercase text-xs tracking-widest text-slate-400 mb-4">03. Reputi il servizio sicuro?</p>
                    <div class="grid grid-cols-1 gap-2">
                        <div class="relative">
                            <input type="radio" id="s1" name="safety" value="no" class="sr-only peer" required>
                            <label for="s1" class="block p-4 border-2 border-slate-100 rounded-xl cursor-pointer peer-checked:border-indigo-600 peer-checked:bg-indigo-50 font-bold text-sm transition-all">No, per nulla</label>
                        </div>
                        <div class="relative">
                            <input type="radio" id="s2" name="safety" value="si" class="sr-only peer">
                            <label for="s2" class="block p-4 border-2 border-slate-100 rounded-xl cursor-pointer peer-checked:border-indigo-600 peer-checked:bg-indigo-50 font-bold text-sm transition-all">Sì, lo reputo sicuro</label>
                        </div>
                    </div>
                </div>

                <div>
                    <p class="font-black uppercase text-xs tracking-widest text-slate-400 mb-4">04. Note o suggerimenti</p>
                    <textarea name="suggestions" class="w-full border-2 border-slate-100 rounded-xl p-4 text-sm font-medium focus:border-indigo-600 outline-none transition-colors min-h-[100px]" placeholder="Come potremmo migliorare il servizio?"></textarea>
                </div>

                <button type="submit" class="w-full py-4 bg-slate-900 text-white rounded-xl font-black uppercase text-xs tracking-widest hover:bg-indigo-600 transition-all shadow-lg">
                    Invia Valutazione
                </button>
            </form>
        </div>
    </div>
    
    `;

    // 5. Inserimento nel DOM
    const nav = document.querySelector('nav');
    if (nav) {
        nav.insertAdjacentHTML('afterend', sond1HTML);
    } else {
        document.body.insertAdjacentHTML('afterbegin', sond1HTML);
    }

    // 6. Gestione invio Form
    document.getElementById('survey-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const data = {
            reasons: formData.getAll('reason'),
            satisfaction: formData.get('satisfaction'),
            safety: formData.get('safety'),
            suggestions: formData.get('suggestions')
        };
        console.log("Dati inviati:", data);
        
        alert('Grazie! I tuoi suggerimenti sono stati registrati.');
        this.reset();
        document.getElementById('survey-modal').style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

//SONDAGGIO 2
function GoSond2() {
    window.location.hash = "sondaggio-salute-mentale-veneto";

    // 1. Pulizia elementi esistenti
    const elementsToRemove = ['header', 'main', 'footer', '#ai-chat-window', '#survey-modal'];
    elementsToRemove.forEach(selector => document.querySelector(selector)?.remove());
    
    // 2. Reset stile body
    document.body.className = "bg-[#fdfdfd] text-slate-900 selection:bg-rose-100 antialiased";
    document.body.style.overflow = "auto";

    // 3. Logica Modal
    window.openSurvey = function() {
        const modal = document.getElementById('survey-modal');
        if (modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeSurvey = function() {
        if (confirm("Le risposte non inviate andranno perse. Chiudere?")) {
            const modal = document.getElementById('survey-modal');
            if (modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        }
    };

    // 4. Template HTML
    const sond2HTML = `
    <main class="max-w-3xl mx-auto px-6 py-20">
        <header class="mb-20">
            <h1 class="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-[0.85] mb-10">
                Chiedere aiuto è un<br>
                <span class="text-rose-600">atto di coraggio.</span>
            </h1>
        </header>

        <section class="mb-12">
            <div class="inline-flex items-center gap-2 px-3 py-1 bg-rose-600 text-white text-[10px] font-black uppercase tracking-widest mb-6">
                Focus Regione Veneto
            </div>
            <p class="text-slate-600 text-lg leading-relaxed mb-8">
                Esploriamo lo stato del benessere psicologico tra i giovani. Dallo psicologo di base ai servizi territoriali: la tua esperienza conta per mappare i bisogni reali.
            </p>
            <button onclick="openSurvey()" class="inline-flex items-center gap-4 px-8 py-4 bg-slate-900 text-white rounded-xl font-black uppercase text-xs tracking-[0.2em] hover:bg-rose-600 transition-all shadow-xl group">
                Partecipa all'indagine
                <i class="fas fa-heart group-hover:scale-110 transition-transform"></i>
            </button>
        </section>

                <article class="space-y-24 mb-32">
            <section id="risorse" class="scroll-mt-10">
                <h2 class="text-2xl font-black uppercase italic tracking-tighter mb-6 flex items-center gap-3">
                    <span class="text-indigo-600 text-4xl">1.</span> Gli strumenti attuali
                </h2>
                <div class="prose prose-slate text-slate-600 font-medium max-w-none">
                    <p class="mb-4">Il supporto psicologico in Veneto si divide principalmente tra il servizio pubblico (ULSS), i consultori familiari e i progetti sperimentali legati alle politiche giovanili regionali.</p>
                    
                    <div class="bg-slate-50 p-6 rounded-2xl border-l-4 border-indigo-600 my-6 italic text-sm">
                        "Dal Bonus Psicologo nazionale ai voucher regionali, le misure economiche cercano di abbattere la barriera del costo, ma l'accesso resta spesso mediato da lunghe liste d'attesa."
                    </div>

                    <p>Accanto ai canali istituzionali, stanno nascendo sportelli di ascolto nelle università e nelle scuole superiori, pensati per offrire un primo orientamento immediato e meno burocratizzato.</p>
                </div>
            </section>

            <section id="territorio" class="scroll-mt-10">
                <h2 class="text-2xl font-black uppercase italic tracking-tighter mb-6 flex items-center gap-3">
                    <span class="text-indigo-600 text-4xl">2.</span> Accessibilità e Distanza
                </h2>
                <p class="text-slate-600 font-medium leading-relaxed mb-4">
                    La distribuzione dei centri di salute mentale (CSM) non è uniforme. Mentre i capoluoghi offrono più opzioni, le aree periferiche o montane del Veneto soffrono spesso di una carenza di presidi, costringendo gli utenti a spostamenti significativi o alla scelta del privato online.
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 italic text-xs uppercase tracking-wider text-slate-400 font-black">
                    <div class="flex items-center gap-2"><i class="fas fa-map-marker-alt text-indigo-600"></i> Prossimità dei servizi</div>
                    <div class="flex items-center gap-2"><i class="fas fa-laptop text-indigo-600"></i> Digitalizzazione del supporto</div>
                </div>
            </section>

            <section id="prevenzione" class="scroll-mt-10">
                <h2 class="text-2xl font-black uppercase italic tracking-tighter mb-6 flex items-center gap-3">
                    <span class="text-indigo-600 text-4xl">3.</span> Cultura della Prevenzione
                </h2>
                <p class="text-slate-600 font-medium leading-relaxed">
                    Un sistema efficiente non interviene solo nella crisi. La prevenzione passa per l'educazione emotiva, la riduzione dello stigma sociale e la creazione di spazi di aggregazione sicuri. Analizzare l'impatto di bandi regionali e iniziative locali è fondamentale per costruire una rete che sia davvero di supporto e non solo di emergenza.
                </p>
            </section>
        </article>

    </main>  
    
    <div id="survey-modal" style="display: none; position: fixed; inset: 0; background: rgba(15, 23, 42, 0.9); backdrop-filter: blur(8px); z-index: 100; align-items: center; justify-content: center; padding: 20px;">
        <div class="bg-white w-full max-w-[600px] max-h-[90vh] overflow-y-auto rounded-[24px] p-10">
            <div class="flex justify-between items-center mb-8">
                <h2 class="text-2xl font-black uppercase italic tracking-tighter">Sondaggio <span class="text-rose-600">Benessere</span></h2>
                <button onclick="closeSurvey()" class="text-slate-400 hover:text-slate-900 transition-colors">
                    <i class="fas fa-times text-xl"></i>
                </button>
            </div>

            <form id="survey-form" class="space-y-8">
                <div>
                    <p class="font-black uppercase text-xs tracking-widest text-slate-400 mb-4">01. Quali ostacoli riscontri nell'accesso alle cure? (più risposte)</p>
                    <div class="grid grid-cols-1 gap-2">
                        <div class="relative">
                            <input type="checkbox" id="sm1" name="barrier" value="costi" class="sr-only peer">
                            <label for="sm1" class="block p-4 border-2 border-slate-100 rounded-xl cursor-pointer peer-checked:border-rose-600 peer-checked:bg-rose-50 font-bold text-sm transition-all">Costi elevati dei privati</label>
                        </div>
                        <div class="relative">
                            <input type="checkbox" id="sm2" name="barrier" value="attesa" class="sr-only peer">
                            <label for="sm2" class="block p-4 border-2 border-slate-100 rounded-xl cursor-pointer peer-checked:border-rose-600 peer-checked:bg-rose-50 font-bold text-sm transition-all">Liste d'attesa nel pubblico</label>
                        </div>
                        <div class="relative">
                            <input type="checkbox" id="sm3" name="barrier" value="stigma" class="sr-only peer">
                            <label for="sm3" class="block p-4 border-2 border-slate-100 rounded-xl cursor-pointer peer-checked:border-rose-600 peer-checked:bg-rose-50 font-bold text-sm transition-all">Stigma sociale / paura del giudizio</label>
                        </div>
                    </div>
                </div>

                <div>
                    <p class="font-black uppercase text-xs tracking-widest text-slate-400 mb-4">02. Valuta la tua serenità nell'ultimo mese (1-5)</p>
                    <div class="flex justify-between gap-2">
                        ${[1, 2, 3, 4, 5].map(n => `
                            <div class="flex-1">
                                <input type="radio" id="smq${n}" name="wellbeing" value="${n}" class="sr-only peer" ${n === 1 ? 'required' : ''}>
                                <label for="smq${n}" class="block text-center p-4 border-2 border-slate-100 rounded-xl cursor-pointer peer-checked:border-rose-600 peer-checked:bg-rose-50 font-bold transition-all">${n}</label>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div>
                    <p class="font-black uppercase text-xs tracking-widest text-slate-400 mb-4">03. Conosci i servizi gratuiti nel tuo Comune?</p>
                    <div class="grid grid-cols-1 gap-2">
                        <div class="relative">
                            <input type="radio" id="kms1" name="knowledge" value="si" class="sr-only peer" required>
                            <label for="kms1" class="block p-4 border-2 border-slate-100 rounded-xl cursor-pointer peer-checked:border-rose-600 peer-checked:bg-rose-50 font-bold text-sm transition-all">Sì, so a chi rivolgermi</label>
                        </div>
                        <div class="relative">
                            <input type="radio" id="kms2" name="knowledge" value="no" class="sr-only peer">
                            <label for="kms2" class="block p-4 border-2 border-slate-100 rounded-xl cursor-pointer peer-checked:border-rose-600 peer-checked:bg-rose-50 font-bold text-sm transition-all">No, non saprei dove andare</label>
                        </div>
                    </div>
                </div>

                <div>
                    <p class="font-black uppercase text-xs tracking-widest text-slate-400 mb-4">04. Cosa dovrebbe fare la Regione Veneto?</p>
                    <textarea name="suggestions" class="w-full border-2 border-slate-100 rounded-xl p-4 text-sm font-medium focus:border-rose-600 outline-none transition-colors min-h-[100px]" placeholder="Più sportelli scolastici? Bonus psicologo regionale?"></textarea>
                </div>

                <button type="submit" class="w-full py-4 bg-slate-900 text-white rounded-xl font-black uppercase text-xs tracking-widest hover:bg-rose-600 transition-all shadow-lg">
                    Invia Risposte
                </button>
            </form>
        </div>
    </div>`;

    // 5. Inserimento nel DOM
    const nav = document.querySelector('nav');
    if (nav) {
        nav.insertAdjacentHTML('afterend', sond2HTML);
    } else {
        document.body.insertAdjacentHTML('afterbegin', sond2HTML);
    }

    // 6. Gestione invio Form
    document.getElementById('survey-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const data = {
            barriers: formData.getAll('barrier'),
            wellbeing_score: formData.get('wellbeing'),
            is_informed: formData.get('knowledge'),
            proposals: formData.get('suggestions')
        };
        console.log("Salute Mentale - Dati raccolti:", data);
        
        alert('Contributo registrato. Grazie per la tua sincerità.');
        this.reset();
        document.getElementById('survey-modal').style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

//SONDAGGIO 3
function GoSond3() {
    window.location.hash = "sondaggio-calisthenics-belluno";

    // 1. Pulizia elementi esistenti
    const elementsToRemove = ['header', 'main', 'footer', '#ai-chat-window', '#survey-modal'];
    elementsToRemove.forEach(selector => document.querySelector(selector)?.remove());
    
    // 2. Reset stile body
    document.body.className = "bg-[#fdfdfd] text-slate-900 selection:bg-orange-100 antialiased";
    document.body.style.overflow = "auto";

    // 3. Logica Modal
    window.openSurvey = function() {
        const modal = document.getElementById('survey-modal');
        if (modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeSurvey = function() {
        if (confirm("Le tue preferenze non sono state salvate. Chiudere?")) {
            const modal = document.getElementById('survey-modal');
            if (modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        }
    };

    // 4. Template HTML
    const sond3HTML = `
    <main class="max-w-3xl mx-auto px-6 py-20">
        <header class="mb-20">
            <h1 class="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-[0.85] mb-10">
                Calisthenics:<br>
                <span class="text-orange-600">Belluno si allena?</span>
            </h1>
        </header>

        <section class="mb-12">
            <div class="inline-flex items-center gap-2 px-3 py-1 bg-orange-600 text-white text-[10px] font-black uppercase tracking-widest mb-6">
                Sport all'aperto • Belluno
            </div>
            <p class="text-slate-600 text-lg leading-relaxed mb-8">
                Mappiamo lo stato delle aree attrezzate per il Calisthenics e lo Street Workout a Belluno e provincia. Qualità delle barre, pavimentazione e necessità di nuovi punti aggregativi.
            </p>
            <button onclick="openSurvey()" class="inline-flex items-center gap-4 px-8 py-4 bg-slate-900 text-white rounded-xl font-black uppercase text-xs tracking-[0.2em] hover:bg-orange-600 transition-all shadow-xl group">
                Valuta le aree fitness
                <i class="fas fa-dumbbell group-hover:rotate-12 transition-transform"></i>
            </button>
        </section>

                <article class="space-y-24 mb-32">
            <section id="movimento" class="scroll-mt-10">
                <h2 class="text-2xl font-black uppercase italic tracking-tighter mb-6 flex items-center gap-3">
                    <span class="text-indigo-600 text-4xl">1.</span> Cos'è il Calisthenics?
                </h2>
                <div class="prose prose-slate text-slate-600 font-medium max-w-none">
                    <p class="mb-4">È una disciplina basata sull'allenamento a corpo libero che sfrutta sbarre, parallele e il peso del proprio corpo. La sua forza sta nell'accessibilità: non servono abbonamenti in palestra, basta uno spazio attrezzato e la voglia di mettersi in gioco.</p>
                    
                    <div class="bg-slate-50 p-6 rounded-2xl border-l-4 border-indigo-600 my-6 italic text-sm">
                        "Un parco Calisthenics non è solo un insieme di tubi d'acciaio; è un punto di aggregazione generazionale che promuove salute e socialità a costo zero per l'utente."
                    </div>
                </div>
            </section>

            <section id="dotazione" class="scroll-mt-10">
                <h2 class="text-2xl font-black uppercase italic tracking-tighter mb-6 flex items-center gap-3">
                    <span class="text-indigo-600 text-4xl">2.</span> Stato delle Aree a Belluno
                </h2>
                <p class="text-slate-600 font-medium leading-relaxed mb-4">
                    Al momento, la disponibilità di aree specifiche nel bellunese è frammentata. Molti sportivi si adattano a strutture nate per il gioco dei bambini o a percorsi vita datati, che spesso non garantiscono gli standard di sicurezza o la varietà di attrezzi necessari per un allenamento completo.
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 italic text-xs uppercase tracking-wider text-slate-400 font-black">
                    <div class="flex items-center gap-2"><i class="fas fa-dumbbell text-indigo-600"></i> Attrezzatura professionale</div>
                    <div class="flex items-center gap-2"><i class="fas fa-cloud-sun text-indigo-600"></i> Manutenzione parchi</div>
                </div>
            </section>

            <section id="prospettive" class="scroll-mt-10">
                <h2 class="text-2xl font-black uppercase italic tracking-tighter mb-6 flex items-center gap-3">
                    <span class="text-indigo-600 text-4xl">3.</span> Perché investire nello sport outdoor?
                </h2>
                <p class="text-slate-600 font-medium leading-relaxed">
                    Investire in parchi calisthenics significa ridurre il degrado urbano e offrire alternative sane al tempo libero dei giovani. In un territorio come quello di Belluno, integrare lo sport outdoor con il paesaggio naturale rappresenta un'opportunità di valorizzazione turistica e sociale unica nel suo genere.
                </p>
            </section>
        </article>
    </main>

    <div id="survey-modal" style="display: none; position: fixed; inset: 0; background: rgba(15, 23, 42, 0.9); backdrop-filter: blur(8px); z-index: 100; align-items: center; justify-content: center; padding: 20px;">
        <div class="bg-white w-full max-w-[600px] max-h-[90vh] overflow-y-auto rounded-[24px] p-10">
            <div class="flex justify-between items-center mb-8">
                <h2 class="text-2xl font-black uppercase italic tracking-tighter">Report <span class="text-orange-600">Workout</span></h2>
                <button onclick="closeSurvey()" class="text-slate-400 hover:text-slate-900 transition-colors">
                    <i class="fas fa-times text-xl"></i>
                </button>
            </div>

            <form id="survey-form" class="space-y-8">
                <div>
                    <p class="font-black uppercase text-xs tracking-widest text-slate-400 mb-4">01. Quali aree frequenti maggiormente? (anche più di una)</p>
                    <div class="grid grid-cols-1 gap-2">
                        <div class="relative">
                            <input type="checkbox" id="c1" name="location" value="lambioi" class="sr-only peer">
                            <label for="c1" class="block p-4 border-2 border-slate-100 rounded-xl cursor-pointer peer-checked:border-orange-600 peer-checked:bg-orange-50 font-bold text-sm transition-all">Lambioi</label>
                        </div>
                        <div class="relative">
                            <input type="checkbox" id="c2" name="location" value="mussoi" class="sr-only peer">
                            <label for="c2" class="block p-4 border-2 border-slate-100 rounded-xl cursor-pointer peer-checked:border-orange-600 peer-checked:bg-orange-50 font-bold text-sm transition-all">Mussoi / Parco Città di Bologna</label>
                        </div>
                        <div class="relative">
                            <input type="checkbox" id="c3" name="location" value="provincia" class="sr-only peer">
                            <label for="c3" class="block p-4 border-2 border-slate-100 rounded-xl cursor-pointer peer-checked:border-orange-600 peer-checked:bg-orange-50 font-bold text-sm transition-all">Fuori Comune (Provincia)</label>
                        </div>
                    </div>
                </div>

                <div>
                    <p class="font-black uppercase text-xs tracking-widest text-slate-400 mb-4">02. Qualità delle attrezzature attuali</p>
                    <div class="flex justify-between gap-2">
                        ${[1, 2, 3, 4, 5].map(n => `
                            <div class="flex-1">
                                <input type="radio" id="cq${n}" name="quality" value="${n}" class="sr-only peer" ${n === 1 ? 'required' : ''}>
                                <label for="cq${n}" class="block text-center p-4 border-2 border-slate-100 rounded-xl cursor-pointer peer-checked:border-orange-600 peer-checked:bg-orange-50 font-bold transition-all">${n}</label>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div>
                    <p class="font-black uppercase text-xs tracking-widest text-slate-400 mb-4">03. Cosa manca di più nelle aree esistenti?</p>
                    <div class="grid grid-cols-1 gap-2">
                        <div class="relative">
                            <input type="radio" id="cf1" name="missing" value="parallele" class="sr-only peer" required>
                            <label for="cf1" class="block p-4 border-2 border-slate-100 rounded-xl cursor-pointer peer-checked:border-orange-600 peer-checked:bg-orange-50 font-bold text-sm transition-all">Parallele più alte / larghe</label>
                        </div>
                        <div class="relative">
                            <input type="radio" id="cf2" name="missing" value="pavimento" class="sr-only peer">
                            <label for="cf2" class="block p-4 border-2 border-slate-100 rounded-xl cursor-pointer peer-checked:border-orange-600 peer-checked:bg-orange-50 font-bold text-sm transition-all">Pavimentazione antitrauma</label>
                        </div>
                        <div class="relative">
                            <input type="radio" id="cf3" name="missing" value="luce" class="sr-only peer">
                            <label for="cf3" class="block p-4 border-2 border-slate-100 rounded-xl cursor-pointer peer-checked:border-orange-600 peer-checked:bg-orange-50 font-bold text-sm transition-all">Illuminazione notturna</label>
                        </div>
                    </div>
                </div>

                <div>
                    <p class="font-black uppercase text-xs tracking-widest text-slate-400 mb-4">04. Suggerisci una posizione per una nuova area</p>
                    <textarea name="new_spot" class="w-full border-2 border-slate-100 rounded-xl p-4 text-sm font-medium focus:border-orange-600 outline-none transition-colors min-h-[100px]" placeholder="Esempio: Vicino al campo sportivo di..."></textarea>
                </div>

                <button type="submit" class="w-full py-4 bg-slate-900 text-white rounded-xl font-black uppercase text-xs tracking-widest hover:bg-orange-600 transition-all shadow-lg">
                    Invia Report
                </button>
            </form>
        </div>
    </div>
    
    `;

    // 5. Inserimento nel DOM
    const nav = document.querySelector('nav');
    if (nav) {
        nav.insertAdjacentHTML('afterend', sond3HTML);
    } else {
        document.body.insertAdjacentHTML('afterbegin', sond3HTML);
    }

    // 6. Gestione invio Form
    document.getElementById('survey-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const data = {
            locations: formData.getAll('location'),
            equipment_quality: formData.get('quality'),
            missing_features: formData.get('missing'),
            suggested_spot: formData.get('new_spot')
        };
        console.log("Calisthenics Belluno - Dati:", data);
        
        alert('Richiesta inviata. Continuiamo ad allenarci!');
        this.reset();
        document.getElementById('survey-modal').style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

//OPERATORI
function GoOperatori() {
    window.location.hash = "spazio-operatori";
    const elementsToRemove = ['header', 'main', 'footer', '#ai-chat-window', '#survey-modal'];
    elementsToRemove.forEach(s => document.querySelector(s)?.remove());
    
    document.body.className = "bg-[#fdfdfd] text-slate-900 selection:bg-orange-100 antialiased";
    
    const OPERATORIHTML = `
<header class="relative bg-slate-900 pt-32 pb-20 px-6 md:px-20 overflow-hidden">
    <div class="absolute inset-0 opacity-20">
        <img src="https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1920&q=80" class="w-full h-full object-cover">
    </div>
    <div class="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div class="relative">
            <div class="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-indigo-500 overflow-hidden bg-white shadow-2xl">
                <img id="profile-img-display" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80" class="w-full h-full object-cover">
            </div>
            <input type="file" id="profile-file-input" class="hidden" accept="image/*">
            <button onclick="document.getElementById('profile-file-input').click()" class="absolute bottom-2 right-2 bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700">
                <i class="fas fa-camera text-xs"></i>
            </button>
        </div>
        <div class="text-center md:text-left">
            <span class="text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em]">Profilo Operatore</span>
            <h1 id="user-full-name" class="text-4xl md:text-5xl font-black text-white uppercase mt-2 italic">Caricamento...</h1>
            <p id="user-role-desc" class="text-slate-400 mt-2 font-medium italic">"..."</p>
        </div>
    </div>
</header>
<main class="max-w-6xl mx-auto py-16 px-6 md:px-20">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        <div class="lg:col-span-2 space-y-16">
            
            <section>
                <div class="flex justify-between items-end mb-8">
                    <div>
                        <h2 class="text-2xl font-black uppercase italic">Iniziative <span class="text-indigo-600">Per Te</span></h2>
                        <p class="text-slate-500 text-[11px] font-bold uppercase tracking-wider">In base ai tuoi interessi e posizione.</p>
                    </div>
                    <a href="#" class="text-[10px] font-black uppercase border-b-2 border-indigo-600 pb-1">Vedi tutti</a>
                </div>

                <div class="grid md:grid-cols-2 gap-6">
                    <article onclick="GoEvento1()" class="group relative aspect-square rounded-[2rem] overflow-hidden cursor-pointer shadow-lg">
                        <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=600&q=80" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                        <div class="absolute bottom-6 left-6 right-6 text-white">
                            <span class="text-[8px] font-bold bg-indigo-600 px-2 py-1 rounded-full uppercase mb-2 inline-block">Padova</span>
                            <h3 class="text-lg font-bold leading-tight">Hackathon 2026</h3>
                        </div>
                    </article>

                    <article onclick="GoEvento2()" class="group relative aspect-square rounded-[2rem] overflow-hidden cursor-pointer shadow-lg">
                        <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                        <div class="absolute bottom-6 left-6 right-6 text-white">
                            <span class="text-[8px] font-bold bg-rose-600 px-2 py-1 rounded-full uppercase mb-2 inline-block">Vicenza</span>
                            <h3 class="text-lg font-bold leading-tight">Workshop Public Speaking</h3>
                        </div>
                    </article>
                </div>
            </section>

            <section class="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-slate-100">
                <div class="mb-10">
                    <h2 class="text-2xl font-black uppercase mb-2 italic">Proponi <span class="text-indigo-600">Nuovo Evento</span></h2>
                    <p class="text-slate-500 uppercase text-[10px] font-bold tracking-[0.2em]">Diventa protagonista della community</p>
                </div>

                <form class="space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input type="text" placeholder="TITOLO EVENTO" class="w-full bg-slate-50 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-indigo-500 font-bold text-xs uppercase">
                        <input type="text" placeholder="TARGET (ES: STUDENTI)" class="w-full bg-slate-50 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-indigo-500 font-bold text-xs uppercase">
                    </div>
                    <input type="text" placeholder="DESCRIZIONE BREVE" class="w-full bg-slate-50 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-indigo-500 font-bold text-xs uppercase">
                    <textarea rows="3" placeholder="CORPO DEL TESTO E DETTAGLI" class="w-full bg-slate-50 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-indigo-500 font-bold text-xs uppercase resize-none"></textarea>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input type="url" placeholder="LINK ISCRIZIONI (FORM)" class="w-full bg-slate-50 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-indigo-500 font-bold text-xs uppercase">
                        <div class="relative">
                            <input type="file" class="hidden" id="file-upload">
                            <label for="file-upload" class="flex items-center justify-center w-full bg-slate-900 text-white rounded-xl py-4 px-6 cursor-pointer hover:bg-indigo-600 transition-colors text-[10px] font-black uppercase tracking-widest">
                                <i class="fas fa-image mr-2"></i> Carica Foto
                            </label>
                        </div>
                    </div>

                    <button type="submit" class="w-full bg-indigo-600 text-white py-5 rounded-xl text-xs font-black uppercase tracking-[0.3em] hover:shadow-xl hover:-translate-y-1 transition-all">
                        Pubblica Proposta
                    </button>
                </form>
            </section>
        </div>

        <aside class="space-y-8">
            <div class="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
                <h3 class="text-sm font-black uppercase tracking-widest mb-6 border-b pb-2">I miei tag</h3>
                <div class="flex flex-wrap gap-2">
                    <span class="px-3 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-bold rounded-full uppercase tracking-tighter hover:bg-indigo-100 cursor-pointer">#Startup</span>
                    <span class="px-3 py-1 bg-slate-50 text-slate-500 text-[10px] font-bold rounded-full uppercase tracking-tighter">#DesignThinking</span>
                    <span class="px-3 py-1 bg-slate-50 text-slate-500 text-[10px] font-bold rounded-full uppercase tracking-tighter">#Verona</span>
                    <span class="px-3 py-1 bg-rose-50 text-rose-600 text-[10px] font-bold rounded-full uppercase tracking-tighter">#Networking</span>
                </div>
            </div>

            <div class="bg-slate-900 text-white p-8 rounded-[2rem] shadow-xl">
                <h3 class="text-sm font-black uppercase tracking-widest mb-6 text-indigo-400">Prossimi Eventi</h3>
                <div class="space-y-6">
                    <div class="flex items-start gap-4">
                        <div class="bg-indigo-600 p-2 rounded-lg text-center min-w-[45px]">
                            <span class="block text-xs font-black italic uppercase leading-none">Feb</span>
                            <span class="text-lg font-black leading-none">12</span>
                        </div>
                        <div>
                            <h4 class="text-xs font-bold uppercase leading-tight">Meeting Co-working Verona</h4>
                            <p class="text-[10px] text-slate-400 mt-1 uppercase">Ore 18:30 • Polo Zanotto</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="space-y-3">
                <button class="w-full flex items-center justify-between p-4 bg-white hover:bg-indigo-600 hover:text-white transition-all rounded-2xl group">
                    <span class="text-[10px] font-black uppercase tracking-widest italic">Modifica Profilo</span>
                    <i class="fas fa-chevron-right text-xs group-hover:translate-x-1 transition-transform"></i>
                </button>
                <button onclick="handleLogout()" class="w-full flex items-center justify-between p-4 bg-white hover:bg-rose-600 hover:text-white transition-all rounded-2xl group text-rose-600">
                    <span class="text-[10px] font-black uppercase tracking-widest italic">Logout</span>
                    <i class="fas fa-sign-out-alt text-xs"></i>
                </button>
            </div>
        </aside>

    </div>
</main>

<script>
    function GoEvento1() { console.log("Navigazione Evento 1"); }
    function GoEvento2() { console.log("Navigazione Evento 2"); }
</script>
`;

    const nav = document.querySelector('nav');
    if (nav) nav.insertAdjacentHTML('afterend', OPERATORIHTML);
    else document.body.insertAdjacentHTML('afterbegin', OPERATORIHTML);

    controllaSessione();
    setupProfilePicture();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

//CHI SIAMO
function GoChiSiamo() {
    // Cambia l'URL in modo che se ricarichi rimanga qui
    window.location.hash = "chi-siamo";

    const currentHeader = document.querySelector('header');
    const currentMain = document.querySelector('main');

    if (currentHeader && currentMain) {
        // Rimuove la Home
        currentHeader.remove();
        currentMain.remove();

        // Inserisce il contenuto "Chi Siamo" ottimizzato
        const chiSiamoHTML = `
        <header class="relative h-[60vh] w-full flex items-center justify-start px-6 md:px-20 overflow-hidden pt-20">
            <img src="https://images.unsplash.com/photo-1620680741158-48410cc39150?q=80&w=875&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                 class="absolute inset-0 w-full h-full object-cover opacity-40">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
            <div class="relative z-10 max-w-4xl pt-20">
                <span class="inline-block px-4 py-1 border border-indigo-500 text-indigo-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-6 italic">Il nostro manifesto</span>
                <h1 class="text-4xl md:text-7xl font-black leading-tight mb-6 uppercase text-white">Chi <br><span class="text-indigo-500">Siamo.</span></h1>
            </div>
        </header>

        <main class="w-full bg-white text-slate-900 py-20 px-6 md:px-20 relative z-20">
            <div class="max-w-4xl mx-auto">
                <p class="text-xl md:text-2xl font-medium text-slate-600 mb-12 leading-relaxed italic border-l-4 border-indigo-500 pl-6">
                    Siamo un collettivo di under 30 uniti dall'obiettivo di trasformare il futuro delle province tra Veneto e Lombardia attraverso l'innovazione e la partecipazione.
                </p>

                <div class="prose prose-slate lg:prose-xl max-w-none text-slate-800">
                    <h3 class="text-2xl font-bold mt-8 mb-4">La nostra genesi</h3>
                    <p>
                        YouthVoice non nasce nel vuoto. Il nostro progetto è frutto dell'ispirazione e delle competenze maturate all'interno di <strong>Ri-Generazioni AI</strong>, l'iniziativa promossa da <strong>Upskill 4.0</strong> e <strong>Fondazione Cariverona</strong>. Grazie a questo percorso, abbiamo imparato a coniugare le tecnologie esponenziali come l'Intelligenza Artificiale con il bisogno concreto di rilanciare i territori e le comunità locali.
                    </p>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 my-12 not-prose">
                        <div class="p-6 bg-slate-50 border-t-2 border-indigo-500">
                            <h4 class="font-bold text-indigo-600 uppercase text-xs tracking-widest mb-3">Community</h4>
                            <p class="text-sm leading-snug text-slate-600 uppercase font-bold">Un network di talenti under 30 attivi sul territorio.</p>
                        </div>
                        <div class="p-6 bg-slate-50 border-t-2 border-indigo-500">
                            <h4 class="font-bold text-indigo-600 uppercase text-xs tracking-widest mb-3">Innovazione</h4>
                            <p class="text-sm leading-snug text-slate-600 uppercase font-bold">L'AI al servizio del bene comune e della politica locale.</p>
                        </div>
                        <div class="p-6 bg-slate-50 border-t-2 border-indigo-500">
                            <h4 class="font-bold text-indigo-600 uppercase text-xs tracking-widest mb-3">Impatto</h4>
                            <p class="text-sm leading-snug text-slate-600 uppercase font-bold">Dalle visioni digitali ad azioni concrete nei borghi.</p>
                        </div>
                    </div>

                    <h3 class="text-2xl font-bold mt-8 mb-4">Incontra Olga-bot</h3>
                    <p>
                        Per rendere la partecipazione fluida e immediata, abbiamo creato <strong>Olga-bot</strong>, la nostra fidata assistente virtuale. Olga non è solo un chatbot: è l'interfaccia che raccoglie le istanze, i sogni e le criticità dei giovani di Verona, Vicenza, Padova, Belluno e Mantova, traducendoli in dati pronti per essere presentati alle istituzioni.
                    </p>
                    
                    <p>
                        Con il supporto metodologico di Upskill 4.0, continuiamo a sperimentare nuove forme di rigenerazione culturale e professionale, dimostrando che per fare innovazione non serve fuggire all'estero, ma basta avere gli strumenti giusti per agire dove sono le nostre radici.
                    </p>
                </div>

                <div class="mt-16 text-center">
                    <button onclick="history.pushState('', document.title, window.location.pathname); window.location.reload();" 
                            class="text-slate-400 font-bold text-xs uppercase tracking-[0.2em] hover:text-indigo-600">
                        <i class="fas fa-arrow-left mr-2"></i> Torna alla home
                    </button>
                </div>
            </div>
        </main>`;

        // Inserisce tutto dopo la navigazione che resta fissa
        document.querySelector('nav').insertAdjacentHTML('afterend', chiSiamoHTML);
        window.scrollTo(0, 0);
    }
}

//OPPORTUNITà
function GoOpportunity() {
    window.location.hash = "opportunità";

    const currentHeader = document.querySelector('header');
    const currentMain = document.querySelector('main');

    if (currentHeader && currentMain) {
        currentHeader.remove();
        currentMain.remove();

        const OpportunityHTML = `
        
    <header class="relative pt-24 pb-20 overflow-hidden bg-slate-900">
        <div class="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                 class="w-full h-full object-cover opacity-10" 
                 alt="Veneto Youth">
            <div class="absolute inset-0 bg-slate-900/80"></div>
        </div>
        <div class="relative z-10 max-w-6xl mx-auto px-6 text-center">
            <span class="inline-flex items-center px-3 py-1 rounded-md bg-slate-800 text-indigo-400 text-[10px] font-bold uppercase tracking-widest mb-6">
                Risorse 2026
            </span>
            <h1 class="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 tracking-tight">
                Opportunità sul territorio
            </h1>
            <p class="text-lg text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed">
                Guida alle agevolazioni regionali, formazione professionale e programmi di inserimento lavorativo per giovani in Veneto.
            </p>
        </div>
    </header>

    <div class="relative z-20 -mt-8 max-w-4xl mx-auto px-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
            <div class="text-center border-r border-slate-100">
                <div class="text-2xl font-bold text-slate-900">7</div>
                <div class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Province</div>
            </div>
            <div class="text-center md:border-r border-slate-100">
                <div class="text-2xl font-bold text-slate-900">100%</div>
                <div class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Finanziato</div>
            </div>
            <div class="text-center border-r border-slate-100">
                <div class="text-2xl font-bold text-slate-900">20+</div>
                <div class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">ITS Academy</div>
            </div>
            <div class="text-center">
                <div class="text-2xl font-bold text-slate-900">18-30</div>
                <div class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Target Età</div>
            </div>
        </div>
    </div>

    <main class="py-20 bg-white">
        <div class="max-w-6xl mx-auto px-6">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
                <div class="lg:col-span-7 flex flex-col">
                    <h2 class="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4 tracking-tight">Percorsi e Formazione</h2>
                    <div class="space-y-10">
                        <div class="group">
                            <h3 class="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">Programma GOL (Garanzia Occupabilità)</h3>
                            <p class="text-slate-600 text-sm leading-relaxed">Percorsi personalizzati di riqualificazione professionale e inserimento lavorativo finanziati dal PNRR per disoccupati e profili fragili.</p>
                            <div class="mt-3 flex gap-2 text-[9px] font-bold uppercase tracking-tight text-slate-400"><span>Regione Veneto</span> • <span>Lavoro</span></div>
                        </div>
                        <div class="group">
                            <h3 class="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">ITS Academy Veneto</h3>
                            <p class="text-slate-600 text-sm leading-relaxed">Scuole di alta tecnologia post-diploma. Formazione biennale pratica in settori come meccatronica, ICT, moda e agroalimentare.</p>
                            <div class="mt-3 flex gap-2 text-[9px] font-bold uppercase tracking-tight text-slate-400"><span>Alta Formazione</span> • <span>Skills</span></div>
                        </div>
                        <div class="p-6 bg-slate-50 rounded-xl border border-slate-100">
                            <h4 class="text-xs font-bold uppercase text-indigo-600 mb-2">Agevolazioni Imprese</h4>
                            <p class="text-sm text-slate-600 m-0">Bandi regionali per l'imprenditoria giovanile Under 35 con contributi a fondo perduto per acquisto attrezzature e digitalizzazione.</p>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-5 relative !static">
                    <div class="p-8 bg-slate-900 rounded-2xl text-white shadow-lg">
                        <h4 class="text-xl font-bold mb-6 tracking-tight">Programmi Civici</h4>
                        <ul class="space-y-6">
                            <li class="flex items-start gap-4">
                                <div class="w-6 h-6 rounded bg-indigo-500/20 flex items-center justify-center flex-shrink-0"><i class="fas fa-check text-[10px] text-indigo-400"></i></div>
                                <div><h5 class="font-bold text-sm text-white">Servizio Civile Universale</h5><p class="text-slate-400 text-xs mt-1">Impegno di 12 mesi con assegno mensile garantito.</p></div>
                            </li>
                            <li class="flex items-start gap-4">
                                <div class="w-6 h-6 rounded bg-indigo-500/20 flex items-center justify-center flex-shrink-0"><i class="fas fa-check text-[10px] text-indigo-400"></i></div>
                                <div><h5 class="font-bold text-sm text-white">ESC - Volontariato Europeo</h5><p class="text-slate-400 text-xs mt-1">Esperienze all'estero con costi di vitto e alloggio coperti.</p></div>
                            </li>
                        </ul>
                        <div class="mt-8 pt-6 border-t border-white/10 text-center">
                            <a href="https://bandi.regione.veneto.it" target="_blank" class="inline-block w-full py-3 bg-indigo-600 text-white text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-indigo-700 transition-colors">Portale Bandi Veneto</a>
                        </div>
                    </div>
                </div>
            </div>

            <section>
                            <div class="mb-8">
                                <h2 class="text-3xl font-black uppercase tracking-tighter italic"><span class="text-indigo-600">Eventi e Iniziative Locali</span></h2>
                                <p class="text-slate-500 text-[12px] font-bold uppercase tracking-wider mt-1">Cosa succede oggi nel tuo territorio.</p>
                            </div>
                            <div class="grid md:grid-cols-3 gap-6">
                                <article href="javascript:void(0)" onclick="GoEvento1()" class="group relative aspect-[4/5] rounded-[2rem] overflow-hidden cursor-pointer shadow-xl">
                                    <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000">
                                    <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
                                    <div class="absolute bottom-6 left-6 right-6 text-white">
                                        <span class="text-[9px] font-bold bg-indigo-600 px-2 py-1 rounded-full uppercase mb-2 inline-block tracking-widest">Padova</span>
                                        <h3 class="text-xl font-bold leading-tight">Hackathon Territoriale 2026</h3>
                                    </div>
                                </article>
                                <article href="javascript:void(0)" onclick="GoEvento2()" class="group relative aspect-[4/5] rounded-[2rem] overflow-hidden cursor-pointer shadow-xl">
                                    <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000">
                                    <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
                                    <div class="absolute bottom-6 left-6 right-6 text-white">
                                        <span class="text-[9px] font-bold bg-rose-600 px-2 py-1 rounded-full uppercase mb-2 inline-block tracking-widest">Vicenza</span>
                                        <h3 class="text-xl font-bold leading-tight">Workshop: Public Speaking</h3>
                                    </div>
                                </article>
                                <article href="javascript:void(0)" onclick="GoEvento3()" class="group relative aspect-[4/5] rounded-[2rem] overflow-hidden cursor-pointer shadow-xl">
                                    <img src="https://plus.unsplash.com/premium_photo-1677048147637-c2a5f668fe56?q=80&w=387&auto=format&fit=crop&w=800&q=80" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000">
                                    <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
                                    <div class="absolute bottom-6 left-6 right-6 text-white">
                                        <span class="text-[9px] font-bold bg-indigo-600 px-2 py-1 rounded-full uppercase mb-2 inline-block tracking-widest">Padova</span>
                                        <h3 class="text-xl font-bold leading-tight">Passeggiate patrimoniali Vicenza</h3>
                                    </div>
                                </article>
                            </div>
                        </section>

        </div>
    </main>`;

        document.querySelector('nav').insertAdjacentHTML('afterend', OpportunityHTML);
        window.scrollTo(0, 0);
    }
}

//GIOCOQUIZ
function GoGIOCOQUIZ() {
    window.location.hash = "gioco-quiz";

    const pageWrapper = document.getElementById('page-wrapper');
    const footer = document.querySelector('footer');
    if (pageWrapper) pageWrapper.style.display = 'none';
    if (footer) footer.style.display = 'none';

    const existingQuiz = document.getElementById('quiz-section-container');
    if (existingQuiz) existingQuiz.remove();

    const quizSection = document.createElement('div');
    quizSection.id = 'quiz-section-container';
    quizSection.className = "min-h-screen w-full bg-[#F0B27A] pt-[100px] pb-12 flex items-center justify-center relative z-10 transition-colors duration-700";

    quizSection.innerHTML = `
        <div class="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl max-w-xl w-[90%] text-slate-900 relative">
            <div id="setup-screen" class="text-center">
                <h2 class="text-4xl font-black uppercase italic tracking-tighter mb-4 text-indigo-600">Quiz Veneto</h2>
                <p class="text-slate-600 font-bold mb-8 uppercase text-xs tracking-widest leading-relaxed">
                    Metti alla prova la tua conoscenza locale.<br>Leggi gli aneddoti per scoprire i segreti del territorio.
                </p>
                <button id="start-quiz-btn" class="w-full py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-lg">Inizia la sfida</button>
            </div>

            <div id="quiz-screen" class="hidden">
                <div class="flex justify-between items-center mb-6">
                    <span id="question-counter" class="text-[10px] font-bold text-indigo-500 uppercase tracking-[0.2em]"></span>
                </div>
                <div id="question-text" class="text-2xl font-black mb-6 leading-tight text-slate-800"></div>
                <div id="options-container" class="space-y-3"></div>
                
                <div id="feedback-area" class="mt-6 hidden">
                    <div id="feedback-container" class="p-4 rounded-2xl mb-4">
                        <p id="feedback-text" class="font-bold text-sm leading-relaxed"></p>
                    </div>
                    <button id="next-question-btn" class="w-full py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-xl flex items-center justify-center gap-3">
                        Avanti <i class="fas fa-arrow-right text-xs"></i>
                    </button>
                </div>
            </div>

            <div id="result-screen" class="hidden text-center">
                <h3 class="text-2xl font-black mb-2 uppercase italic text-indigo-600">Completato!</h3>
                <div id="final-score" class="text-7xl font-black mb-4 text-slate-900">0/0</div>
                <p id="result-message" class="mb-8 font-bold text-slate-500 uppercase text-xs tracking-widest"></p>
                <button onclick="history.pushState('', document.title, window.location.pathname); window.location.reload();" 
                    class="text-slate-400 font-bold text-xs uppercase tracking-[0.2em] hover:text-indigo-600">
                    <i class="fas fa-arrow-left mr-2"></i> Torna alla home
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(quizSection);

    //SORT
    // // Algoritmo Fisher-Yates per un rimescolamento reale
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    // All'interno di GoGIOCOQUIZ:
    const shuffledQuestions = shuffle([...allQuestions]);
    const questions = shuffledQuestions.slice(0, 5);
        let currentIdx = 0;
        let score = 0;

    const setupScreen = document.getElementById('setup-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const resultScreen = document.getElementById('result-screen');
    const optionsContainer = document.getElementById('options-container');
    const feedbackArea = document.getElementById('feedback-area');
    const feedbackContainer = document.getElementById('feedback-container');
    const feedbackText = document.getElementById('feedback-text');
    const nextBtn = document.getElementById('next-question-btn');
    const counter = document.getElementById('question-counter');

    document.getElementById('start-quiz-btn').onclick = () => {
        setupScreen.classList.add('hidden');
        quizScreen.classList.remove('hidden');
        loadQuestion();
    };

    function loadQuestion() {
        feedbackArea.classList.add('hidden');
        optionsContainer.innerHTML = '';
        const q = questions[currentIdx];
        
        counter.innerText = `Domanda ${currentIdx + 1}/${questions.length}`;
        document.getElementById('question-text').innerText = q.q;

        q.options.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.className = "w-full py-4 px-6 text-left bg-slate-50 border-2 border-slate-100 rounded-2xl font-bold hover:border-indigo-400 hover:bg-indigo-50 transition-all";
            btn.innerText = opt;
            btn.onclick = () => checkAnswer(i, btn);
            optionsContainer.appendChild(btn);
        });
    }

    function checkAnswer(selected, btn) {
        const q = questions[currentIdx];
        const allBtns = optionsContainer.querySelectorAll('button');
        allBtns.forEach(b => b.disabled = true);

        feedbackArea.classList.remove('hidden');
        
        if (selected === q.correct) {
            score++;
            btn.classList.add('border-emerald-500', 'bg-emerald-50', 'text-emerald-700');
            feedbackContainer.className = "p-4 rounded-2xl mb-4 bg-emerald-100 text-emerald-800";
            feedbackText.innerHTML = `<strong>Corretto!</strong><br>${q.anecdote}`;
        } else {
            btn.classList.add('border-rose-500', 'bg-rose-50', 'text-rose-700');
            allBtns[q.correct].classList.add('border-emerald-500', 'text-emerald-700');
            feedbackContainer.className = "p-4 rounded-2xl mb-4 bg-rose-100 text-rose-800";
            feedbackText.innerHTML = `<strong>Sbagliato...</strong><br>${q.anecdote}`;
        }
    }

    nextBtn.onclick = () => {
        currentIdx++;
        if (currentIdx < questions.length) {
            loadQuestion();
        } else {
            showFinalResults();
        }
    };

    function showFinalResults() {
        quizScreen.classList.add('hidden');
        resultScreen.classList.remove('hidden');
        quizSection.classList.replace('bg-[#F0B27A]', 'bg-[#A8DCD2]');
        document.getElementById('final-score').innerText = `${score}/${questions.length}`;
        document.getElementById('result-message').innerText = score >= 3 ? "Complimenti, conosci bene il Veneto!" : "Puoi fare di meglio, riprova!";
    }

    window.scrollTo(0, 0);
}

/**
 * GESTIONE HUB YOUTHVOICE - CODICE INTEGRATO
 */

// --- 1. GESTIONE MODAL ---

function toggleLoginModal() {
    const modal = document.getElementById('login-modal');
    if (modal) {
        const isHidden = modal.classList.toggle('hidden');
        document.body.style.overflow = isHidden ? 'auto' : 'hidden';
    }
}

function toggleRegisterModal() {
    const regModal = document.getElementById('register-modal');
    if (regModal) {
        const isHidden = regModal.classList.toggle('hidden');
        document.body.style.overflow = isHidden ? 'auto' : 'hidden';
    }
}

function toggleLogoutModal() {
    const modal = document.getElementById('logout-confirm-modal');
    if (modal) {
        const isHidden = modal.classList.toggle('hidden');
        document.body.style.overflow = isHidden ? 'auto' : 'hidden';
    }
}

function toggleEntityField(show) {
    const container = document.getElementById('entity-name-container');
    const input = document.getElementById('reg-ente');
    if (container && input) {
        container.classList.toggle('hidden', !show);
        input.required = show;
        if (!show) input.value = "";
    }
}

// --- 2. LOGICA SESSIONE E INTERFACCIA ---

function controllaSessione() {
    const sessionUser = JSON.parse(localStorage.getItem('user_session'));
    if (!sessionUser) return;

    // Navbar
    const btnLogin = document.getElementById('btn-login');
    const userProfile = document.getElementById('user-profile');
    const navName = document.querySelector('#user-profile span');
    const navOp = document.getElementById('nav-operatori');
    const navAvatar = document.querySelector('#user-profile img');

    if (btnLogin) btnLogin.classList.add('hidden');
    if (userProfile) userProfile.classList.remove('hidden');
    if (navName) navName.innerText = sessionUser.nome + " " + sessionUser.cognome;
    
    // Carica foto nella navbar se esiste
    if (navAvatar && sessionUser.profilePic) {
        navAvatar.src = sessionUser.profilePic;
    }

    if (navOp) {
        navOp.classList.toggle('hidden', sessionUser.tipo !== 'ente');
    }

    // Sezione Personale (Pagina/Operatori)
    const nameDisplays = document.querySelectorAll('#user-full-name');
    const descDisplays = document.querySelectorAll('#user-role-desc');
    const profileImg = document.getElementById('profile-img-display');

    nameDisplays.forEach(el => el.innerText = sessionUser.nome + " " + sessionUser.cognome);
    descDisplays.forEach(el => {
        el.innerText = (sessionUser.tipo === 'ente' && sessionUser.ente) 
            ? "Operatore di " + sessionUser.ente 
            : "Membro attivo della community";
    });

    if (profileImg && sessionUser.profilePic) {
        profileImg.src = sessionUser.profilePic;
    }
}

// --- 3. GESTIONE FOTO PROFILO ---

function setupProfilePicture() {
    const fileInput = document.getElementById('profile-file-input');
    const displayImg = document.getElementById('profile-img-display');
    const navAvatar = document.querySelector('#user-profile img');
    let sessionUser = JSON.parse(localStorage.getItem('user_session'));

    if (!fileInput || !displayImg || !sessionUser) return;

    fileInput.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const base64Image = e.target.result;
                
                // Aggiorna UI
                displayImg.src = base64Image;
                if (navAvatar) navAvatar.src = base64Image;
                
                // Salva in Sessione
                sessionUser.profilePic = base64Image;
                localStorage.setItem('user_session', JSON.stringify(sessionUser));
                
                // Salva nel Database Utenti Globale
                let users = JSON.parse(localStorage.getItem('hub_users')) || [];
                const idx = users.findIndex(u => u.email === sessionUser.email);
                if (idx !== -1) {
                    users[idx].profilePic = base64Image;
                    localStorage.setItem('hub_users', JSON.stringify(users));
                }
            };
            reader.readAsDataURL(file);
        }
    });
}

// --- 4. LOGIN E REGISTRAZIONE ---

function gestisciRegistrazione(e) {
    e.preventDefault();
    const emailInput = document.getElementById('reg-email').value.toLowerCase().trim();
    const pass = document.getElementById('reg-pass').value;
    const confirmPass = document.getElementById('reg-pass-confirm').value;

    if (pass !== confirmPass) { alert("Le password non coincidono!"); return; }

    let users = JSON.parse(localStorage.getItem('hub_users')) || [];
    if (users.some(u => u.email === emailInput)) { alert("Email già in uso!"); return; }

    const newUser = {
        nome: document.getElementById('reg-nome').value,
        cognome: document.getElementById('reg-cognome').value,
        email: emailInput,
        password: pass,
        provincia: document.getElementById('reg-provincia').value,
        tipo: document.querySelector('input[name="u-type"]:checked').value,
        ente: document.getElementById('reg-ente')?.value || "",
        profilePic: null
    };

    users.push(newUser);
    localStorage.setItem('hub_users', JSON.stringify(users));
    alert("Registrazione completata!");
    toggleRegisterModal();
    toggleLoginModal();
}

function gestisciLogin(e) {
    e.preventDefault();
    const emailInput = e.target.querySelector('input[type="email"]').value.toLowerCase().trim();
    const passInput = e.target.querySelector('input[type="password"]').value;
    
    const users = JSON.parse(localStorage.getItem('hub_users')) || [];
    const validUser = users.find(u => u.email === emailInput && u.password === passInput);

    if (validUser) {
        localStorage.setItem('user_session', JSON.stringify(validUser));
        controllaSessione();
        toggleLoginModal();
        e.target.reset();
    } else {
        alert("Credenziali errate.");
    }
}

function handleLogout() { toggleLogoutModal(); }

function confirmLogoutAction() {
    localStorage.removeItem('user_session');
    window.location.reload();
}


// --- 5. INIT ---

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(controllaSessione, 100);
    const regForm = document.getElementById('hub-register-form');
    const loginForm = document.getElementById('hub-login-form');
    if (regForm) regForm.addEventListener('submit', gestisciRegistrazione);
    if (loginForm) loginForm.addEventListener('submit', gestisciLogin);
});