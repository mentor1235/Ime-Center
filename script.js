// Globale variabler
let currentLang = 'no';
let inputField = document.getElementById('input-field');
let keyboard = document.getElementById('keyboard');

// Initialiserer applikasjonen
document.addEventListener('DOMContentLoaded', () => {
    // Sett opp språkvelger
    const langSwitcher = document.querySelector('.lang-switcher');
    const langDropdown = document.querySelector('.lang-dropdown');
    
    langSwitcher.addEventListener('click', () => {
        langDropdown.style.display = langDropdown.style.display === 'block' ? 'none' : 'block';
    });
    
    // Håndter språkvalg
    document.querySelectorAll('.lang-dropdown div').forEach(option => {
        option.addEventListener('click', () => {
            const langCode = option.getAttribute('data-lang');
            currentLang = langCode;
            updateLanguage(langCode);
            langDropdown.style.display = 'none';
        });
    });
    
    // Knappefunksjoner
    document.getElementById('clear-btn').addEventListener('click', () => {
        inputField.value = '';
        inputField.focus();
    });
    
    document.getElementById('copy-btn').addEventListener('click', () => {
        inputField.select();
        document.execCommand('copy');
        alert('Tekst kopiert til utklippstavle!');
    });
    
    document.getElementById('speak-btn').addEventListener('click', () => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(inputField.value);
            utterance.lang = currentLang === 'ar' ? 'ar-SA' : 
                            currentLang === 'no' ? 'nb-NO' : 
                            currentLang === 'so' ? 'so-SO' : 'en-US';
            speechSynthesis.speak(utterance);
        } else {
            alert('Talegjenkjenning støttes ikke i din nettleser');
        }
    });
    
    // Initialt oppsett
    updateLanguage(currentLang);
});

// Oppdater språk og tastatur
function updateLanguage(langCode) {
    const layout = keyboardLayouts[langCode];
    
    // Oppdater språkvelger UI
    document.getElementById('lang-emoji').textContent = layout.emoji;
    document.getElementById('lang-name').textContent = layout.name;
    
    // Sett tekstretning for arabisk
    document.body.dir = layout.rtl ? 'rtl' : 'ltr';
    
    // Oppdater tastatur
    renderKeyboard(layout);
}

// Tegn tastaturet
function renderKeyboard(layout) {
    keyboard.innerHTML = '';
    
    layout.layout.forEach(row => {
        const keyRow = document.createElement('div');
        keyRow.className = 'key-row';
        
        for (let char of row) {
            const key = document.createElement('div');
            key.className = 'key';
            key.textContent = char;
            
            // Spesiell styling for arabiske tegn
            if (currentLang === 'ar') {
                key.classList.add('arabic-key');
            }
            
            // Spesialtegn for somali
            if (currentLang === 'so' && layout.specialChars.includes(char)) {
                key.classList.add('special-key');
            }
            
            key.addEventListener('click', () => {
                inputField.value += char;
                inputField.focus();
            });
            
            keyRow.appendChild(key);
        }
        
        keyboard.appendChild(keyRow);
    });
    
    // Legg til mellomromstasten
    const spaceRow = document.createElement('div');
    spaceRow.className = 'key-row';
    
    const spaceKey = document.createElement('div');
    spaceKey.className = 'key space-key';
    spaceKey.textContent = 'Mellomrom';
    spaceKey.addEventListener('click', () => {
        inputField.value += ' ';
        inputField.focus();
    });
    
    spaceRow.appendChild(spaceKey);
    keyboard.appendChild(spaceRow);
}
