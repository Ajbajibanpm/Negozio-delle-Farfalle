/**
 * DATABASE PRODOTTI - DISPENSA "IL NEGOZIO DELLE FARFALLE"
 */
// 1. Dichiara la variabile vuota
let prodotti = []; 

async function caricaProdotti() {
    try {
        console.log("Inizio caricamento...");
        
        // URL di esportazione CSV con cache buster per il refresh live
        const id = "1GiLgBDbPRFQtf4HDmH_PVvQ6azT4EpdGI7mHnn4_z0Q";
        const gid = "1440058023";
        const url = `https://docs.google.com/spreadsheets/d/${id}/export?format=csv&gid=${gid}&v=${new Date().getTime()}`;
        
        const response = await fetch(url);
        
        if (!response.ok) {
            console.error("Errore nel caricamento dei dati");
            return;
        }

        const csvText = await response.text();
        const righe = csvText.split(/\r?\n/).filter(r => r.trim() !== "");

        // Parsing manuale del CSV per trasformarlo in oggetti
        prodotti = righe.slice(1).map(riga => {
            const col = riga.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
            const p = (v) => v ? v.replace(/^"|"$/g, '').trim() : "";

            return {
                id: parseInt(p(col[0])),
                nome: p(col[1]),
                prezzoUnita: parseFloat(p(col[2]).replace(',', '.')), 
                unita: p(col[3]),
                prezzoChilo: parseFloat(p(col[4]).replace(',', '.')),
                categoria: p(col[5]) ? p(col[5]).split(';') : [],
                diet: p(col[6]) ? p(col[6]).split(';') : [],
                isNew: p(col[7]).toLowerCase() === 'true',
                provenienza: p(col[8]),
                desc: p(col[9]),
                immagine: p(col[10]),
                data: p(col[11])
            };
        });

        console.log("Dati caricati con successo:", prodotti);
        updateGallery(); 

    } catch (error) {
        console.error("Errore critico:", error);
    }
}

// 4. Modifica l'avvio nel DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    inserisciNav();
    if (document.getElementById('productGrid')) {
        caricaProdotti(); // Questa funzione caricherà i dati E POI chiamerà updateGallery

        // Listener per i filtri (rimangono invariati)
        if (searchInput) searchInput.addEventListener('input', updateGallery);
        if (filterCategory) filterCategory.addEventListener('change', updateGallery);
        if (sortOrder) sortOrder.addEventListener('change', updateGallery);
    }
});
// --- GESTIONE PREFERITI ---
let preferiti = JSON.parse(localStorage.getItem('preferiti_farfalle')) || [];

function togglePreferito(id) {
    if (preferiti.includes(id)) {
        preferiti = preferiti.filter(favId => favId !== id);
    } else {
        preferiti.push(id);
    }
    localStorage.setItem('preferiti_farfalle', JSON.stringify(preferiti));
    
    // Invece di updateGallery(), aggiorniamo solo l'aspetto del bottone
    // per non far saltare la card in cima immediatamente
    const btn = document.querySelector(`button[onclick="togglePreferito(${id})"] span`);
    if (btn) {
        const isFav = preferiti.includes(id);
        btn.innerHTML = isFav ? '★' : '☆';
        btn.style.color = isFav ? '#d4a373' : '#ccc';
    }
}

// --- LOGICA DI NAVIGAZIONE ---
function inserisciNav() {
    const navContent = `
    <nav class="nav-horizontal">
        <div class="brand-inline">
            <span class="prefix">il negozio delle</span>
            <span class="main-name"><br>FARFALLE</span>
        </div>
        <ul class="nav-links">
            <li><a href="index.html">HOME</a></li>
            <li><a href="chi-siamo.html">CHI SIAMO</a></li>
            <li><a href="dispensa.html">DISPENSA</a></li>
            <li><a href="#ricette">RICETTE</a></li>
            <li><a href="#eventi">EVENTI</a></li>
        </ul>
    </nav>`;

    const placeholder = document.getElementById('nav-placeholder');
    if (placeholder) {
        placeholder.innerHTML = navContent;
        const currentPath = window.location.pathname.split("/").pop() || "index.html";
        document.querySelectorAll('.nav-links a').forEach(link => {
            if (link.getAttribute('href') === currentPath) link.classList.add('active');
        });
    }
}

// --- LOGICA PRODOTTI ---
const grid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const filterCategory = document.getElementById('filterCategory');
const sortOrder = document.getElementById('sortOrder');

function getDietDots(dietArray) {
    if (!dietArray) return '';
    const colors = {
        'veg': '#708238', 'vegan': '#a9ba9d', 'gf': '#e6ccb2', 'lf': '#b7b7a4'
    };
    const labels = { 'veg': 'Vegetariano', 'vegan': 'Vegano', 'gf': 'Senza Glutine', 'lf': 'Senza Lattosio' };
    return dietArray.map(d => 
        `<span title="${labels[d]}" style="display:inline-block; width:8px; height:8px; background:${colors[d]}; border-radius:50%; margin-left:4px;"></span>`
    ).join('');
}

function renderProdotti(lista) {
    if (!grid) return;
    grid.innerHTML = '';
    
    if (lista.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 3rem;">Nessun prodotto trovato.</p>';
        return;
    }

    lista.forEach(p => {
        const isFav = preferiti.includes(p.id);
        const card = `
            <article class="card" style="position: relative; margin-bottom: 2rem;">
                <div class="card-image-container" style="position: relative; overflow: hidden; border-radius: 4px;">
                    <img src="${p.immagine}" alt="${p.nome}" style="width: 100%; height: 250px; object-fit: cover; display: block;">
                    
<button class="fav-btn" onclick="togglePreferito(${p.id})" 
    style="position: absolute; top: 15px; right: 15px; background: rgba(255,255,255,0.9); border: none; width: 36px; height: 36px; cursor: pointer; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: 0.3s; box-shadow: 0 2px 10px rgba(0,0,0,0.1); z-index: 10;">
    <span style="color: ${isFav ? '#be9825' : '#ccc'}; 
                 font-size: 1.55rem; 
                 display: flex; 
                 align-items: center; 
                 justify-content: center; 
                 line-height: 0; 
                 margin-top: 2px;">
        ${isFav ? '★' : '☆'}
    </span>
</button>

                    ${p.isNew ? `
                        <div style="position: absolute; bottom: 0; left: 0; background: rgba(212, 163, 115, 0.9); color: white; padding: 6px 15px; font-size: 0.65rem; letter-spacing: 2px; text-transform: uppercase; font-family: 'Montserrat';">
                            Nuovo Arrivo
                        </div>
                    ` : ''}
                </div>

                <div class="card-body" style="padding: 1.5rem;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                        <span class="tag" style="font-size: 0.65rem; letter-spacing: 1px; color: #888; font-family: 'Montserrat';">${p.provenienza.toUpperCase()}</span>
                        <div class="diet-dots">${getDietDots(p.diet)}</div>
                    </div>
                    
                    <h3 style="margin: 0.5rem 0; font-family: 'Playfair Display'; font-weight: 700; font-size: 1.3rem; color: #333;">
                        ${p.nome}
                    </h3>
                    
                    <p style="font-size: 0.85rem; color: #666; line-height: 1.6; margin-bottom: 1.2rem; font-family: 'Montserrat';">${p.desc}</p>
                    
                    <div class="prezzo-container" style="border-top: 1px solid #f0f0f0; padding-top: 1rem; display: flex; align-items: baseline; gap: 8px;">
                        <span style="font-family: 'Playfair Display'; font-size: 1.3rem; font-weight: 700; color: #222;">${p.prezzoUnita.toFixed(2)} €</span>
                        <small style="font-size: 0.75rem; color: #999; font-family: 'Montserrat'; text-transform: lowercase;">/ ${p.unita}</small>
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
        let matchesCat = (selectedCat === 'fav') ? preferiti.includes(p.id) : (selectedCat === 'all' || p.categoria.includes(selectedCat));
        return matchesSearch && matchesCat;
    });

    // ORDINAMENTO
    filtrati.sort((a, b) => {
        // Se l'ordinamento è impostato su "novità"
        if (selectedSort === 'new') {
            // Se 'a' è nuovo e 'b' no, 'a' va sopra (-1)
            if (a.isNew && !b.isNew) return -1;
            // Se 'b' è nuovo e 'a' no, 'b' va sopra (1)
            if (!a.isNew && b.isNew) return 1;
            // Se entrambi sono nuovi o entrambi no, mantieni ordine originale
            return 0;
        } 
        
        if (selectedSort === 'alpha') return a.nome.localeCompare(b.nome);
        if (selectedSort === 'price-asc') return a.prezzoUnita - b.prezzoUnita;
        return 0;
    });

    // SEPARAZIONE FISSA: Preferiti in alto, Altri sotto
    // Questa struttura garantisce che i preferiti siano in cima, 
    // e all'interno del gruppo "Altri", le novità (isNew: true) siano le prime visibili.
    const listaPreferiti = filtrati.filter(p => preferiti.includes(p.id));
    const listaAltri = filtrati.filter(p => !preferiti.includes(p.id));

    renderProdotti([...listaPreferiti, ...listaAltri]);
}

// --- AVVIO ---
// --- AVVIO ---
document.addEventListener('DOMContentLoaded', () => {
    inserisciNav();
    if (grid) {
        // CORREZIONE: Non usare renderProdotti(prodotti), 
        // ma chiama updateGallery() per attivare subito l'ordine Novità + Preferiti
        updateGallery(); 

        if (searchInput) searchInput.addEventListener('input', updateGallery);
        if (filterCategory) filterCategory.addEventListener('change', updateGallery);
        if (sortOrder) sortOrder.addEventListener('change', updateGallery);
    }
});