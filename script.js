function setTheme(name) {
    document.body.className = name;
    localStorage.setItem('user_theme', name);
}

const tglBtn = document.getElementById('toggleBtn');
const infoBox = document.getElementById('extraContent');

if(tglBtn) {
    tglBtn.addEventListener('click', () => {
        infoBox.classList.toggle('hidden');
        tglBtn.innerText = infoBox.classList.contains('hidden') ? 'Tehnicka specifikacija' : 'Zatvori';
    });
}

function dodajElement() {
    const naziv = document.getElementById('inputNaslov').value;
    const cena = document.getElementById('inputCena').value;
    const grid = document.getElementById('dynamicGrid');

    if(naziv.trim() === "" || cena.trim() === "") {
        alert("Greska: Polja su prazna.");
        return;
    }

    const item = document.createElement('div');
    item.className = 'card';
    item.innerHTML = `
        <h4>[KOMPONENTA]</h4>
        <p>Model: ${naziv}</p>
        <p>Cena: <strong>${cena} EUR</strong></p>
    `;

    grid.appendChild(item);

    document.getElementById('inputNaslov').value = "";
    document.getElementById('inputCena').value = "";
}

window.onload = () => {
    const saved = localStorage.getItem('user_theme');
    if(saved) document.body.className = saved;
};