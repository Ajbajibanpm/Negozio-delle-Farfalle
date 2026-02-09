//#region NAV E FOOTER (INVARIATI)
function inserisciNav() {
    const navContent = `
    <nav class="nav-horizontal">
        <ul class="nav-links">
            <img src="Coccinelle_logo_rettangolare.png" alt="Logo Le Coccinelle" class="footer-logo-img">
        </ul>
        <ul class="nav-links">
            <li><a href="index.html">HOME</a></li>
            <li><a href="chi-siamo.html">CHI SIAMO</a></li>
            <li><a href="dispensa.html">DISPENSA</a></li>
            <li><a href="ricette.html">RICETTE</a></li>
            <li><a href="eventi.html">EVENTI</a></li>
        </ul>
        <ul class="nav-links">
            <a href="https://wa.me/393203552698?text=Buongiorno,%20vorrei%20effettuare%20un%20ordine%20di%20prodotti%20alimentari%20bio%20con%20ritiro%20presso%20la%20vostra%20sede."
            style="display: inline-flex; align-items: center; padding: 12px 25px; background-color: #79c81f; color: #ffffff; text-decoration: none; border-radius: 4px; font-family: Arial, sans-serif; font-size: 15px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" style="margin-right: 10px;">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.06 3.973L0 16l4.104-1.076a7.858 7.858 0 0 0 3.888 1.035h.001c4.469 0 8.043-3.633 8.047-8.096A7.95 7.95 0 0 0 13.601 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg>
            Contattaci
            </a>
            </ul>
        </nav>`;
    const p = document.getElementById('nav-placeholder');
    if (p) p.innerHTML = navContent;
}

function inserisciFooter() {
    const footerContent = `<footer>
        <div class="footer-container">
            <div class="footer-section">
                <img src="Farfalle_logo_rettangolare_verde.png" alt="Logo Le Coccinelle" class="footer-logo-img">
                <span class="footer-brand">LE FARFALLE</span>
                <p class="footer-tagline">Azienda Agricola • Borgo Valbelluna</p>
                <p style="margin-top: 15px; font-style: italic; color: #777;">
                    Prodotti genuini coltivati con passione nel cuore delle Dolomiti Bellunesi.
                </p>
            </div>

            <div class="footer-section">
                <h4>Contatti</h4>
                <p>32026 Borgo Valbelluna (BL)</p>
                <a href="tel:+39********98" class="contact-link"><strong>T.</strong> +39 320 355 2698</a>
                <a href="mailto:******@gmail.com" class="contact-link"><strong>E.</strong> scartondeborah@gmail.com</a>
            </div>

            <div class="footer-section">
                <h4>Orari Negozio</h4>
                <div class="hours-row">
                    <span class="day">Giovedì</span>
                    <span class="time">15:00 – 18:30</span>
                </div>
                <div class="hours-row">
                    <span class="day">Venerdì</span>
                    <span class="time">08:30 – 12:30 | 15:00 – 18:30</span>
                </div>
                <div class="hours-row" style="border: none;">
                    <span class="day">Sabato</span>
                    <span class="time">08:30 – 12:30</span>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            &copy; 2026 Azienda Agricola Le Coccinelle di Scarton Deborah. Tutti i diritti riservati.
        </div>
    </footer>`;
    const p = document.getElementById('footer-placeholder');
    if (p) p.innerHTML = footerContent;
}
//#endregion

//#region AVVIO UNIFICATO
let prodotti = []; 
let ricetteGlobal = []; 

document.addEventListener('DOMContentLoaded', async () => {
    inserisciNav();
    inserisciFooter();

    // 1. Carichiamo SEMPRE la dispensa perché serve a entrambi (filtri ricette e grid prodotti)
    await caricaProdotti(); 

    // 2. Se siamo in DISPENSA
    if (document.getElementById('productGrid')) {
        // I prodotti sono già stati caricati sopra, aggiorniamo solo la gallery
        updateGallery(); 
        
        const searchInput = document.getElementById('searchInput');
        const filterCategory = document.getElementById('filterCategory');
        const sortOrder = document.getElementById('sortOrder');
        
        if (searchInput) searchInput.addEventListener('input', updateGallery);
        if (filterCategory) filterCategory.addEventListener('change', updateGallery);
        if (sortOrder) sortOrder.addEventListener('change', updateGallery);
    }

    // 3. Se siamo in RICETTE
    if (document.getElementById('recipeGrid')) {
        ricetteGlobal = await caricaRicetteLogica();
        
        // FONDAMENTALE: Popoliamo il select con i dati di 'prodotti' appena scaricati
        popolaFiltroIngredienti(); 
        
        renderizzaRicette(ricetteGlobal);
        configuraFiltriRicette();
    }
});
//#endregion
//#region LOGICA DISPENSA (IL TUO CODICE ORIGINALE)
async function caricaProdotti() {
    try {
        const id = "1GiLgBDbPRFQtf4HDmH_PVvQ6azT4EpdGI7mHnn4_z0Q";
        const gid = "1440058023";
        const url = `https://docs.google.com/spreadsheets/d/${id}/export?format=csv&gid=${gid}&v=${new Date().getTime()}`;
        
        const response = await fetch(url);
        const csvText = await response.text();
        const righe = csvText.split(/\r?\n/).filter(r => r.trim() !== "");

        prodotti = righe.slice(1).map(riga => {
            const col = riga.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
            const p = (v) => v ? v.replace(/^"|"$/g, '').trim() : "";
            const isTrue = (v) => v ? v.toLowerCase() === 'true' : false;

            return {
                id: parseInt(p(col[0])),
                nome: p(col[1]),
                prezzoUnita: parseFloat(p(col[2]).replace(',', '.')),
                unita: p(col[3]),
                prezzoChilo: parseFloat(p(col[4]).replace(',', '.')),
                categoria: p(col[5]) ? p(col[5]).split(';').map(s => s.trim()) : [],
                isVegan: isTrue(p(col[6])),
                isVegetarian: isTrue(p(col[7])),
                isGlutenFree: isTrue(p(col[8])),
                isLactoseFree: isTrue(p(col[9])),
                isNew: isTrue(p(col[10])),
                provenienza: p(col[11]),
                desc: p(col[12]),
                immagine: p(col[13]),
                data: p(col[14]),
                isAvailable: isTrue(p(col[15]))
            };
        });
        updateGallery();
    } catch (error) { console.error("Errore:", error); }
}

let preferiti = JSON.parse(localStorage.getItem('preferiti_farfalle')) || [];

function togglePreferito(id) {
    if (preferiti.includes(id)) {
        preferiti = preferiti.filter(favId => favId !== id);
    } else {
        preferiti.push(id);
    }
    localStorage.setItem('preferiti_farfalle', JSON.stringify(preferiti));
    const btn = document.querySelector(`button[onclick="togglePreferito(${id})"] span`);
    if (btn) {
        const isFav = preferiti.includes(id);
        btn.innerHTML = isFav ? '★' : '☆';
        btn.style.color = isFav ? '#be9825' : '#ccc';
    }
}

const grid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const filterCategory = document.getElementById('filterCategory');
const sortOrder = document.getElementById('sortOrder');

function getDietDots(prodotto) {
    if (!prodotto) return '';
    const dietConfig = [
        { key: 'isVegetarian', color: '#708238', label: 'Vegetariano' },
        { key: 'isVegan', color: '#a9ba9d', label: 'Vegano' },
        { key: 'isGlutenFree', color: '#e6ccb2', label: 'Senza Glutine' },
        { key: 'isLactoseFree', color: '#b7b7a4', label: 'Senza Lattosio' }
    ];
    return dietConfig
        .filter(config => prodotto[config.key] === true)
        .map(config => `<span title="${config.label}" style="display:inline-block; width:8px; height:8px; background:${config.color}; border-radius:50%; margin-left:4px;"></span>`)
        .join('');
}

function renderProdotti(lista) {
    if (!grid) return;
    grid.innerHTML = '';
    lista.forEach(p => {
        const isFav = preferiti.includes(p.id);
        
        // Determina lo stile per i prodotti esauriti
        const opacityStyle = p.isAvailable ? '1' : '0.6';
        const grayscaleStyle = p.isAvailable ? 'none' : 'grayscale(100%)';

        const card = `
            <article class="card" style="position: relative; margin-bottom: 2rem; opacity: ${opacityStyle};">
                <div class="card-image-container" style="position: relative; overflow: hidden;">
                    <img src="${p.immagine}" alt="${p.nome}" style="width: 100%; height: 250px; object-fit: cover; filter: ${grayscaleStyle};">
                    
                    <button class="fav-btn" onclick="togglePreferito(${p.id})" style="position: absolute; top: 15px; right: 15px; background: white; border-radius: 50%; width: 36px; height: 36px; border:none; cursor:pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 5px rgba(0,0,0,0.2); z-index: 10;">
                        <span style="color: ${isFav ? '#be9825' : '#ccc'}; font-size: 1.2rem;">★</span>
                    </button>

                    ${!p.isAvailable ? `
                        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: rgba(0,0,0,0.7); color: white; padding: 10px 20px; font-size: 0.8rem; letter-spacing: 2px; z-index: 5;">ESAURITO</div>
                    ` : ''}

                    ${p.isNew ? `
                        <div style="position: absolute; bottom: 0; left: 0; background: #d4a373; color: white; padding: 6px 15px; font-size: 0.65rem; text-transform: uppercase; letter-spacing: 1px;">NUOVO ARRIVO</div>
                    ` : ''}
                </div>

                <div class="card-body" style="padding: 1.5rem; background: white;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                        <span style="font-size: 0.65rem; color: #888; text-transform: uppercase; letter-spacing: 1px;">${p.provenienza}</span>
                        <div class="diet-dots">${getDietDots(p)}</div>
                    </div>
                    
                    <h3 style="font-family: 'Playfair Display'; font-size: 1.4rem; margin: 0.5rem 0; color: #2D4030;">${p.nome}</h3>
                    
                    <p style="font-size: 0.85rem; color: #666; margin-bottom: 1.5rem; min-height: 2.5em;">${p.desc}</p>
                    
                    <div style="margin-top: 1rem; border-top: 1px solid #eee; padding-top: 1rem; display: flex; align-items: baseline; gap: 5px;">
                        <span style="font-size: 1.3rem; font-weight: 700; color: #333;">${p.prezzoUnita.toFixed(2)} €</span>
                        <small style="color: #888; font-size: 0.75rem;">/ ${p.unita}</small>
                    </div>
                </div>
            </article>`;
        grid.innerHTML += card;
    });
}

function updateGallery() {
    if (!grid) return;
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const selectedCat = filterCategory ? filterCategory.value : 'all';
    const selectedSort = sortOrder ? sortOrder.value : 'new';

    let filtrati = prodotti.filter(p => {
        const matchesSearch = p.nome.toLowerCase().includes(searchTerm) || p.desc.toLowerCase().includes(searchTerm);
        let matchesCat = true;
        
        if (selectedCat === 'fav') matchesCat = preferiti.includes(p.id);
        else if (selectedCat === 'available') matchesCat = p.isAvailable;
        else if (selectedCat !== 'all') matchesCat = p.categoria.includes(selectedCat);
        
        return matchesSearch && matchesCat;
    });

    filtrati.sort((a, b) => {
        const isFavA = preferiti.includes(a.id);
        const isFavB = preferiti.includes(b.id);

        // 1. DISPONIBILITÀ (Sempre sopra i disponibili)
        if (a.isAvailable !== b.isAvailable) return b.isAvailable - a.isAvailable;

        // 2. PREFERITI (Sempre sopra i preferiti del loro gruppo)
        if (isFavA !== isFavB) return isFavB - isFavA;

        // 3. ORDINAMENTO SCELTO
        if (selectedSort === 'alpha') return a.nome.localeCompare(b.nome);
        if (selectedSort === 'price-asc') return a.prezzoUnita - b.prezzoUnita;
        return (b.isNew - a.isNew);
    });

    renderProdotti(filtrati);
}
//#endregion



//#region LOGICA RICETTE (ADATTATA)
async function caricaRicetteLogica() {
    const url = `https://docs.google.com/spreadsheets/d/13A5Lh4LTC1R1vDWmlXRc2kSMCs6-nfwwX6d9sNxeOPk/export?format=tsv&gid=1358989914`;
    const response = await fetch(url);
    const text = await response.text();
    const linee = text.split(/\r?\n/).filter(l => l.trim() !== "");
    
    // Normalizziamo gli header (rimuove accenti e spazi)
    const headers = linee[0].split('\t').map(h => 
        h.trim().toLowerCase().replace('à', 'a').replace(' ', '_')
    );

    return linee.slice(1).map(linea => {
        const valori = linea.split('\t');
        let obj = {};
        headers.forEach((h, i) => obj[h] = valori[i] ? valori[i].trim() : "");
        return obj;
    });
}

function renderizzaRicette(ricette) {
    const rGrid = document.getElementById('recipeGrid');
    if (!rGrid) return;
    rGrid.innerHTML = '';
    
    ricette.forEach(r => {
        // Recupero i dati (assicurati che nel foglio la colonna si chiami 'Tempo')
        const tempo = r.tempo || "N.D."; 
        const difficolta = (r.difficolta || "Media").toUpperCase();
        
        const card = document.createElement('article');
        card.className = 'card'; // Usiamo la classe card esistente per coerenza
        card.style.position = 'relative'; 
        
        card.innerHTML = `
            <div class="card-image-container" style="position: relative; overflow: hidden;">
                <div style="position: absolute; top: 12px; left: 12px; z-index: 10; display: flex; flex-direction: column; gap: 4px;">
                    <div style="background: rgba(255, 255, 255, 0.95); color: #2D4030; padding: 5px 10px; font-size: 0.6rem; font-weight: 700; border-radius: 2px; box-shadow: 0 2px 4px rgba(0,0,0,0.2); display: flex; align-items: center; gap: 4px;">
                        ⏱ ${tempo}
                    </div>
                    <div style="background: rgba(45, 64, 48, 0.9); color: white; padding: 5px 10px; font-size: 0.6rem; font-weight: 600; letter-spacing: 1px; border-radius: 2px; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">
                        ${difficolta}
                    </div>
                </div>
                
                <img src="${r.immagine}" alt="${r.titolo}" style="width:100%; height:250px; object-fit:cover; display: block;">
            </div>
            
            <div class="card-body" style="padding: 1.5rem; background: white;">
                <span style="font-size: 0.65rem; color: #d4a373; text-transform: uppercase; letter-spacing: 2px; font-weight: 600;">${r.dieta}</span>
                <h3 style="font-family: 'Playfair Display'; font-size: 1.4rem; margin: 0.5rem 0; color: #2D4030;">${r.titolo}</h3>
                <p style="font-size: 0.85rem; color: #666; margin-bottom: 1.5rem; line-height: 1.4;">
                    ${(r.procedimento || "").substring(0, 85)}...
                </p>
                
                <div style="border-top: 1px solid #eee; padding-top: 1rem;">
                    <a href="dettaglio-ricetta.html?id=${r.id_ricetta}" 
                       style="color: #2D4030; font-weight: 700; text-decoration: none; font-size: 0.75rem; letter-spacing: 1px; text-transform: uppercase; display: flex; align-items: center; gap: 5px;">
                       Leggi tutto <span style="font-size: 1rem;">›</span>
                    </a>
                </div>
            </div>`;
        rGrid.appendChild(card);
    });
}

let ingredientiSelezionati = []; 

function popolaFiltroIngredienti() {
    const listCont = document.getElementById('ingList');
    const inputSearch = document.getElementById('ingSearch');
    // Verifica che gli elementi esistano e che 'prodotti' sia popolato
    if (!listCont || !inputSearch || !prodotti || prodotti.length === 0) return;

    const renderizzaLista = (term = "") => {
        // Ordina: prima i selezionati, poi ordine alfabetico
        const prodottiOrdinati = [...prodotti].sort((a, b) => {
            const aSel = ingredientiSelezionati.includes(a.id.toString());
            const bSel = ingredientiSelezionati.includes(b.id.toString());
            if (aSel && !bSel) return -1;
            if (!aSel && bSel) return 1;
            return (a.nome || "").localeCompare(b.nome || "");
        });

        const html = prodottiOrdinati
            .filter(p => (p.nome || "").toLowerCase().includes(term.toLowerCase()))
            .map(p => `
                <label style="display: flex; align-items: center; gap: 8px; padding: 8px; cursor: pointer; border-bottom: 1px solid #f0f0f0;">
                    <input type="checkbox" class="ing-checkbox" value="${p.id}" 
                           ${ingredientiSelezionati.includes(p.id.toString()) ? 'checked' : ''}> 
                    <span style="font-size: 0.85rem; ${ingredientiSelezionati.includes(p.id.toString()) ? 'font-weight:bold; color:#d4a373;' : ''}">${p.nome}</span>
                </label>
            `).join('');
        
        listCont.innerHTML = html;
    };

    inputSearch.addEventListener('input', (e) => renderizzaLista(e.target.value));
    
    // Mostra e renderizza al focus
    inputSearch.addEventListener('focus', () => {
        listCont.style.display = 'block';
        renderizzaLista(inputSearch.value);
    });

    listCont.addEventListener('change', (e) => {
        if (e.target.classList.contains('ing-checkbox')) {
            const val = e.target.value.toString();
            
            if (e.target.checked) {
                if (!ingredientiSelezionati.includes(val)) ingredientiSelezionati.push(val);
            } else {
                ingredientiSelezionati = ingredientiSelezionati.filter(i => i !== val);
            }
            
            const countEl = document.getElementById('selectedCount');
            if (countEl) countEl.textContent = ingredientiSelezionati.length > 0 ? `${ingredientiSelezionati.length} selezionati` : "";
            
            setTimeout(() => {
                listCont.style.display = 'none';
                inputSearch.value = "";
            }, 250);

            eseguiFiltroRicette();
        }
    });

    renderizzaLista();
}

function eseguiFiltroRicette() {
    const s = document.getElementById('recipeSearch');
    const fDiff = document.getElementById('filterDifficulty');
    const fDiet = document.getElementById('filterDiet');

    const query = s ? s.value.toLowerCase() : "";
    const diffScelta = fDiff ? fDiff.value.toLowerCase() : "all";
    const dietaScelta = fDiet ? fDiet.value.toLowerCase() : "all";

    const filtrate = ricetteGlobal.filter(r => {
        const rTitolo = (r.titolo || "").toLowerCase();
        
        // Usiamo la chiave 'difficolta' (normalizzata sopra)
        const rDiff = (r.difficolta || "").toLowerCase();
        const rDiet = (r.dieta || "").toLowerCase();
        
        // Raccolta ID ingredienti (come prima)
        const idsInRicetta = [];
        for (let i = 1; i <= 4; i++) {
            const val = r[`ingrediente_${i}`];
            if (val) idsInRicetta.push(val.toString().trim());
        }

        const matchNome = rTitolo.includes(query);
        
        // Filtro difficoltà: deve corrispondere esattamente (es. "facile" === "facile")
        const matchDiff = (diffScelta === 'all' || rDiff === diffScelta);
        
        const matchDieta = (dietaScelta === 'all' || rDiet.includes(dietaScelta));
        
        const matchIng = ingredientiSelezionati.length === 0 || 
                         ingredientiSelezionati.every(idSel => idsInRicetta.includes(idSel));

        return matchNome && matchDiff && matchDieta && matchIng;
    });

    renderizzaRicette(filtrate);
}

// Listener per gli altri filtri
function configuraFiltriRicette() {
    const s = document.getElementById('recipeSearch');
    const fDiff = document.getElementById('filterDifficulty');
    const fDiet = document.getElementById('filterDiet');
    
    if (s) s.addEventListener('input', eseguiFiltroRicette);
    if (fDiff) fDiff.addEventListener('change', eseguiFiltroRicette);
    if (fDiet) fDiet.addEventListener('change', eseguiFiltroRicette);
}

//#endregion
