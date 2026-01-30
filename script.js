/**
 * DATABASE PRODOTTI - DISPENSA "IL NEGOZIO DELLE FARFALLE"
 */
const prodotti = [
    { 
        nome: "Mela Renetta Canuta", 
        prezzoUnita: 0.70, 
        unita: "al pezzo",
        prezzoChilo: 2.80,
        categoria: ["vegetali", "ortaggi"], 
        provenienza: "Loc. Conzago, Mel",
        desc: "Per chi non cerca la perfezione estetica ma l'intensità. Aspra, decisa, con la buccia rugosa che profuma di terra. Sceglierla significa onorare la biodiversità di Borgo Valbelluna.",
        immagine: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=800&q=80", 
        data: "2024-01-10" 
    },
    { 
        nome: "Miele di Castagno Bellunese", 
        prezzoUnita: 7.50, 
        unita: "vasetto 500g",
        prezzoChilo: 15.00,
        categoria: ["vegetali"], 
        provenienza: "Bribano",
        desc: "Un miele per chi ama i contrasti. Raccolto ai piedi delle Dolomiti, è denso e scuro. Parla di chi sa guardare oltre la dolcezza superficiale dei mieli industriali.",
        immagine: "https://plus.unsplash.com/premium_photo-1726880614839-faa6caa3b3d4?q=80&w=643&auto=format&fit=crop", 
        data: "2024-03-01" 
    },
    { 
        nome: "Farina Mais Sponcio", 
        prezzoUnita: 4.80, 
        unita: "sacchetto 1kg",
        prezzoChilo: 4.80,
        categoria: ["farine", "senza-glutine"], 
        provenienza: "Pietra - Sospirolo",
        desc: "Non è una polenta, è un ritorno a casa. Lo Sponcio richiede tempo, pazienza e fuoco. Per chi custodisce il valore dell'attesa.",
        immagine: "https://images.unsplash.com/photo-1587920710219-f6f9804dc10d?q=80&w=387&auto=format&fit=crop", 
        data: "2024-02-15" 
    },
    { 
        nome: "Vino Rosso Resistente", 
        prezzoUnita: 12.00, 
        unita: "bottiglia 750ml",
        prezzoChilo: 16.00,
        categoria: ["vini"], 
        provenienza: "Colli di Mel",
        desc: "Viti che sfidano l'altitudine. Un rosso che racconta la fierezza di chi coltiva in pendenza. Per spiriti liberi e coraggiosi.",
        immagine: "https://images.unsplash.com/photo-1587920710219-f6f9804dc10d?q=80&w=387&auto=format&fit=crop", 
        data: "2024-03-20" 
    },
    { 
        nome: "Mela Golden Bio", 
        prezzoUnita: 0.50, 
        unita: "al pezzo",
        prezzoChilo: 2.20,
        categoria: ["vegetali"], 
        provenienza: "Villa di Villa",
        desc: "Croccante e solare. È la scelta di chi cerca l'armonia quotidiana, coltivata nei frutteti baciati dal sole sopra il castello di Zumelle.",
        immagine: "https://images.unsplash.com/photo-1667823885519-63329c1b63b3?q=80&w=435&auto=format&fit=crop", 
        data: "2024-03-25" 
    },
    { 
        nome: "Fagiolo Gialét", 
        prezzoUnita: 9.25, 
        unita: "confezione 500g",
        prezzoChilo: 18.50,
        categoria: ["vegetali", "senza-glutine"], 
        provenienza: "Val Canzoi",
        desc: "Perla gialla dalla buccia finissima, quasi impalpabile. Un tesoro locale raro che racchiude la delicatezza dei torrenti dolomitici.",
        immagine: "https://plus.unsplash.com/premium_photo-1664527307810-63c15cb57346?q=80&w=387&auto=format&fit=crop", 
        data: "2024-04-01" 
    },
    { 
        nome: "Vino Rosso Pavana", 
        prezzoUnita: 13.50, 
        unita: "bottiglia 750ml",
        prezzoChilo: 18.00,
        categoria: ["vini"], 
        provenienza: "Colderù, Lentiai",
        desc: "Un vitigno eroico che profuma di marasca e di resistenza al freddo. Il sorso fiero di chi coltiva dove altri hanno rinunciato.",
        immagine: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600", 
        data: "2024-03-10" 
    },
    { 
        nome: "Patate di Cesana", 
        prezzoUnita: 5.40, 
        unita: "sacco 3kg",
        prezzoChilo: 1.80,
        categoria: ["ortaggi"], 
        provenienza: "Piana di Cesana",
        desc: "Cresciute tra i sassi del Piave. Polpa soda e sapore antico di terra pulita, perfette per i rituali della cucina domenicale.",
        immagine: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=870&auto=format&fit=crop", 
        data: "2024-01-20" 
    },
    { 
        nome: "Farina di Segale", 
        prezzoUnita: 3.90, 
        unita: "sacchetto 1kg",
        prezzoChilo: 3.90,
        categoria: ["farine"], 
        provenienza: "Passo San Boldo",
        desc: "Coltivata dove l'aria si fa sottile. Una farina scura che regala pani dal profumo di confine e di vento di montagna.",
        immagine: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600", 
        data: "2024-02-10" 
    },
    { 
        nome: "Radicchio Verdon", 
        prezzoUnita: 2.10, 
        unita: "al mazzo",
        prezzoChilo: 8.50,
        categoria: ["ortaggi", "vegetali"], 
        provenienza: "Orti di Trichiana",
        desc: "Piccole rose croccanti nate sotto la neve. Il primo risveglio della terra bellunese, un inno alla forza della natura.",
        immagine: "https://plus.unsplash.com/premium_photo-1675364285746-c99b72498ede?q=80&w=387&auto=format&fit=crop", 
        data: "2024-03-15" 
    },
    { 
        nome: "Confettura di Rosa Canina", 
        prezzoUnita: 7.00, 
        unita: "vasetto 250g",
        prezzoChilo: 28.00,
        categoria: ["vegetali"], 
        provenienza: "Rive di Carve",
        desc: "Raccolta a mano dopo la prima brinata. Una carezza selvatica per il palato, ricca di una vitalità aspra e pura.",
        immagine: "https://images.unsplash.com/photo-1572281911253-7bdcf52d97e1?q=80&w=870&auto=format&fit=crop", 
        data: "2024-04-10" 
    },
    { 
        nome: "Noci Feltrine", 
        prezzoUnita: 4.75, 
        unita: "sacchetto 500g",
        prezzoChilo: 9.50,
        categoria: ["vegetali", "senza-glutine"], 
        provenienza: "Valbelluna",
        desc: "Gherigli ricchi e oleosi. Il battito del cuore delle nostre campagne d'autunno, conservate con la cura di una volta.",
        immagine: "https://plus.unsplash.com/premium_photo-1669205336460-a237c324cc11?q=80&w=774&auto=format&fit=crop", 
        data: "2024-01-05" 
    },
    { 
        nome: "Sidro di Mele Bellunesi", 
        prezzoUnita: 9.00, 
        unita: "bottiglia 750ml",
        prezzoChilo: 12.00,
        categoria: ["vini"], 
        provenienza: "Frazione Nave",
        desc: "Bollicine di montagna nate dal recupero di antichi frutteti. La freschezza croccante di un mattino di primavera.",
        immagine: "https://plus.unsplash.com/premium_photo-1722168009723-ff75c2f1abdb?q=80&w=870&auto=format&fit=crop", 
        data: "2024-03-18" 
    },
    { 
        nome: "Orzo di Mel", 
        prezzoUnita: 1.75, 
        unita: "confezione 500g",
        prezzoChilo: 3.50,
        categoria: ["vegetali"], 
        provenienza: "Campagne di Mel",
        desc: "Il cereale della tempra. Essenziale per zuppe calde che sanno di focolare mentre fuori fischia il vento.",
        immagine: "https://plus.unsplash.com/premium_photo-1726138627013-b2c15eec0dd7?q=80&w=870&auto=format&fit=crop", 
        data: "2024-01-30" 
    },
    { 
        nome: "Zafferano dei Colli", 
        prezzoUnita: 12.50, 
        unita: "confezione 0.5g",
        prezzoChilo: 25000.00,
        categoria: ["vegetali"], 
        provenienza: "Colli di Mel",
        desc: "Pistilli essiccati al sole delle prealpi. Una spezia rara, raccolta petalo per petalo nel silenzio delle nostre colline.",
        immagine: "https://images.unsplash.com/photo-1476994230281-1448088947db?q=80&w=387&auto=format&fit=crop", 
        data: "2024-04-15" 
    }
];

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
        
        // Evidenzia link attivo
        const currentPath = window.location.pathname.split("/").pop() || "index.html";
        document.querySelectorAll('.nav-links a').forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            }
        });
    }
}

// --- LOGICA PRODOTTI (Solo per pagina Dispensa) ---
const grid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const filterCategory = document.getElementById('filterCategory');
const sortOrder = document.getElementById('sortOrder');

function renderProdotti(lista) {
    if (!grid) return; // Se non siamo nella pagina dispensa, esci
    grid.innerHTML = '';
    
    if (lista.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 3rem;">Nessun prodotto trovato.</p>';
        return;
    }

    lista.forEach(p => {
        const card = `
            <article class="card">
                <img src="${p.immagine}" alt="${p.nome}">
                <div class="card-body">
                    <span class="tag">${p.provenienza.toUpperCase()}</span>
                    <h3>${p.nome}</h3>
                    <p>${p.desc}</p>
                    <div class="prezzo-container" style="margin-top: 1.5rem; border-top: 1px solid #eee; padding-top: 1rem;">
                        <span class="prezzo-unita" style="display: block; font-family: 'Playfair Display'; font-size: 1.4rem; font-weight: 700;">
                            ${p.prezzoUnita.toFixed(2)} € <small style="font-size: 0.8rem; font-weight: 400; font-family: 'Montserrat';">(${p.unita})</small>
                        </span>
                        <span class="prezzo-chilo" style="display: block; font-size: 0.75rem; color: #888; text-transform: uppercase; letter-spacing: 1px;">
                            ${p.prezzoChilo.toFixed(2)} € / kg
                        </span>
                    </div>
                </div>
            </article>`;
        grid.innerHTML += card;
    });
}

function updateGallery() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCat = filterCategory.value;
    const selectedSort = sortOrder.value;

    let result = prodotti.filter(p => {
        const matchesSearch = p.nome.toLowerCase().includes(searchTerm) || p.desc.toLowerCase().includes(searchTerm);
        const matchesCat = selectedCat === 'all' || p.categoria.includes(selectedCat);
        return matchesSearch && matchesCat;
    });

    if (selectedSort === 'alpha') result.sort((a, b) => a.nome.localeCompare(b.nome));
    else if (selectedSort === 'price-asc') result.sort((a, b) => a.prezzoUnita - b.prezzoUnita);
    else if (selectedSort === 'new') result.sort((a, b) => new Date(b.data) - new Date(a.data));

    renderProdotti(result);
}

// --- AVVIO ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Carica il menu sempre
    inserisciNav();
    
    // 2. Se siamo nella pagina dispensa, attiva i filtri e mostra i prodotti
    if (grid) {
        renderProdotti(prodotti);
        if (searchInput) searchInput.addEventListener('input', updateGallery);
        if (filterCategory) filterCategory.addEventListener('change', updateGallery);
        if (sortOrder) sortOrder.addEventListener('change', updateGallery);
    }
});