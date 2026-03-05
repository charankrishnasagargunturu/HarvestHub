/* ============================================
   HARVEST HUB — app.js  (with i18n)
   ============================================ */

/* ===== DATA ===== */
const STATES = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
    'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana',
    'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
    'Andaman and Nicobar Islands', 'Chandigarh',
    'Dadra and Nagar Haveli and Daman and Diu', 'Lakshadweep',
    'Delhi', 'Puducherry', 'Ladakh', 'Jammu and Kashmir'
];

const CROP_PRICES = {
    'Amaranth Leaves': [10, 14], 'Amla': [55, 70], 'Ash Gourd': [20, 30],
    'Baby Corn': [60, 70], 'Banana Flower': [15, 25], 'Beetroot': [30, 40],
    'Bell Pepper (Capsicum)': [40, 55], 'Bitter Gourd': [30, 40],
    'Bottle Gourd': [30, 40], 'Butter Beans': [45, 55],
    'Broad Beans (Fava / Lima)': [55, 70], 'Cabbage': [30, 40],
    'Carrot': [35, 50], 'Cauliflower': [20, 30], 'Cluster Beans': [40, 50],
    'Coconut (Fresh)': [30, 45], 'Coriander Leaves (Cilantro)': [10, 20],
    'Corn': [30, 40], 'Cucumber': [25, 35], 'Curry Leaves': [30, 38],
    'Dill Leaves': [10, 15], 'Drumsticks': [70, 85],
    'Eggplant (Brinjal)': [30, 40], 'Brinjal (Big)': [30, 40],
    'Elephant Yam': [35, 45], 'Fenugreek Leaves': [10, 15],
    'French Beans (Green Beans)': [115, 130], 'Garlic': [210, 240],
    'Ginger': [120, 135], 'Green Chili': [55, 70], 'Green Peas': [35, 50],
    'Ivy Gourd': [25, 35], 'Lemon (Lime)': [90, 110], 'Mango': [100, 140],
    'Mint Leaves': [10, 20], 'Mushroom': [75, 90], 'Mustard Leaves': [10, 20],
    'Okra (Ladies Finger)': [35, 50], 'Onion (Big)': [40, 50],
    'Onion (Small)': [55, 65], 'Potato': [30, 45], 'Pumpkin': [25, 35],
    'Radish (Daikon)': [35, 50], 'Ridge Gourd': [30, 40],
    'Snake Gourd': [30, 40], 'Sorrel Leaves': [15, 20], 'Spinach': [20, 30],
    'Sweet Potato': [30, 45], 'Tomato': [7, 15],
    // Staple crops
    'Paddy (Rice)': [170, 220], 'Wheat': [210, 250], 'Bajra (Pearl Millet)': [180, 210],
    'Jowar (Sorghum)': [160, 200], 'Sugarcane': [35, 50], 'Cotton': [55, 70],
    'Turmeric': [85, 120], 'Dry Chilli': [120, 180], 'Groundnut (Peanut)': [55, 80],
    'Soybean': [38, 55], 'Sunflower': [50, 65], 'Black Gram (Urad)': [75, 95],
    'Bengal Gram (Chana)': [65, 85], 'Red Gram (Tur Dal)': [95, 120], 'Green Gram (Moong)': [85, 100],
};

const TIPS_EN = [
    'Rotate crops to improve soil health and break pest cycles.',
    'Use organic fertilizers like compost and vermicompost to enrich the soil.',
    'Implement drip irrigation to conserve water and reduce evaporation.',
    'Practice integrated pest management (IPM) to reduce chemical use.',
    'Maintain farm equipment regularly to ensure efficiency.',
    'Test your soil before planting to know which nutrients are needed.',
    'Mulching around plants retains moisture and suppresses weed growth.',
    'Intercropping with legumes can fix nitrogen naturally in the soil.',
    'Keep detailed records of your crops, costs, and yields each season.',
    'Join a local farmer cooperative for better pricing and shared resources.',
];

const TIPS_TE = [
    'పంట మార్పిడి మట్టి ఆరోగ్యాన్ని మెరుగుపరుస్తుంది.',
    'కంపోస్ట్ మరియు వర్మీకంపోస్ట్ వంటి సేంద్రీయ ఎరువులు వాడండి.',
    'నీటి నష్టాన్ని తగ్గించడానికి బిందు సేద్యం అమలు చేయండి.',
    'రసాయన వాడకాన్ని తగ్గించడానికి సమగ్ర తెగులు నిర్వహణ పాటించండి.',
    'వ్యవసాయ పరికరాలు క్రమం తప్పకుండా నిర్వహించండి.',
    'నాటడానికి ముందు మట్టి పరీక్ష చేయించుకోండి.',
    'మొక్కల చుట్టూ మల్చింగ్ తేమను నిలుపుతుంది, కలుపు తగ్గిస్తుంది.',
    'చిక్కుళ్ళతో అంతర పంటలు సాగు చేయడం నత్రజని అందిస్తుంది.',
    'ప్రతి సీజన్లో పంట, వ్యయం, దిగుబడి రికార్డులు నిర్వహించండి.',
    'మంచి ధర మరియు వనరుల కోసం స్థానిక రైతు సహకార సంఘంలో చేరండి.',
];

const TIPS_HI = [
    'फसल चक्र से मिट्टी की सेहत बेहतर होती है और कीट नियंत्रण सरल होता है।',
    'खाद और वर्मीकम्पोस्ट जैसे जैविक उर्वरकों का उपयोग करें।',
    'पानी बचाने के लिए ड्रिप सिंचाई अपनाएँ।',
    'रासायनिक उपयोग कम करने के लिए समेकित कीट प्रबंधन करें।',
    'कृषि उपकरणों की नियमित देखभाल करें।',
    'बुवाई से पहले मिट्टी की जाँच करवाएँ।',
    'पौधों के आसपास मल्चिंग से नमी बनी रहती है और खरपतवार कम होते हैं।',
    'फलियों के साथ अंतरफसल उगाने से मिट्टी में नाइट्रोजन मिलती है।',
    'हर सीज़न में फसल, लागत और उपज का रिकॉर्ड रखें।',
    'बेहतर मूल्य के लिए स्थानीय किसान सहकारी समिति से जुड़ें।',
];

const TIPS_TA = [
    'பயிர் சுழற்சி மண் ஆரோக்கியத்தை மேம்படுத்தும்.',
    'மண்புழு உரம் மற்றும் கம்போஸ்ட் போன்ற இயற்கை உரங்களை பயன்படுத்துங்கள்.',
    'நீர் சேமிக்க சொட்டு நீர்ப்பாசனம் பயன்படுத்துங்கள்.',
    'ஒருங்கிணைந்த பயிர் பாதுகாப்பு முறையை பின்பற்றுங்கள்.',
    'விவசாய கருவிகளை தொடர்ந்து பராமரியுங்கள்.',
    'நடவு செய்வதற்கு முன் மண் பரிசோதனை செய்யுங்கள்.',
    'தழை மூடாக்கு வழியாக ஈரப்பதம் தக்கவைக்கப்படும்.',
    'பருப்பு வகைகளுடன் இடைப்பயிராக விதைப்பது நைட்ரஜனை சேர்க்கும்.',
    'ஒவ்வொரு பருவத்திலும் பயிர் பதிவுகளை வைத்திருங்கள்.',
    'சிறந்த விலைக்கு உழவர் கூட்டுறவு சங்கங்களில் இணையுங்கள்.',
];

const TIPS_KN = [
    'ಬೆಳೆ ಸರದಿ ಮಣ್ಣಿನ ಆರೋಗ್ಯ ಸುಧಾರಿಸುತ್ತದೆ.',
    'ಕಾಂಪೋಸ್ಟ್ ಮತ್ತು ವರ್ಮಿಕಾಂಪೋಸ್ಟ್ ಗೊಬ್ಬರ ಬಳಸಿ.',
    'ನೀರು ಉಳಿಸಲು ಹನಿ ನೀರಾವರಿ ಅಳವಡಿಸಿ.',
    'ಸಮಗ್ರ ಕೀಟ ನಿರ್ವಹಣೆ ಪದ್ಧತಿ ಅನುಸರಿಸಿ.',
    'ಕೃಷಿ ಉಪಕರಣಗಳನ್ನು ನಿಯಮಿತವಾಗಿ ನಿರ್ವಹಿಸಿ.',
    'ಬಿತ್ತನೆಗೆ ಮೊದಲು ಮಣ್ಣು ಪರೀಕ್ಷೆ ಮಾಡಿ.',
    'ಸಸ್ಯಗಳ ಸುತ್ತ ಮಲ್ಚಿಂಗ್ ತೇವಾಂಶ ಕಾಯ್ದುಕೊಳ್ಳುತ್ತದೆ.',
    'ದ್ವಿದಳ ಧಾನ್ಯಗಳೊಂದಿಗೆ ಮಿಶ್ರ ಬೆಳೆ ನೈಟ್ರೋಜನ್ ಒದಗಿಸುತ್ತದೆ.',
    'ಪ್ರತಿ ಋತುವಿನಲ್ಲೂ ಬೆಳೆ ದಾಖಲೆ ಇಟ್ಟುಕೊಳ್ಳಿ.',
    'ಉತ್ತಮ ಬೆಲೆಗಾಗಿ ಕೃಷಿ ಸಹಕಾರ ಸಂಘ ಸೇರಿ.',
];

const TIPS_BY_LANG = { en: TIPS_EN, te: TIPS_TE, hi: TIPS_HI, ta: TIPS_TA, kn: TIPS_KN };

const TOP_CROPS = [
    ['Tomato', 52], ['Potato', 37], ['Onion (Big)', 45],
    ['Garlic', 225], ['Ginger', 127], ['Paddy (Rice)', 195],
    ['Wheat', 230], ['Turmeric', 102], ['Groundnut (Peanut)', 67],
];

/* ===== APP STATE ===== */
let currentUser = null;
let tipIndex = 0;
let tipTimer = null;
let currentLang = 'en';

/* ===== i18n ENGINE ===== */
function t(key) {
    const tr = TRANSLATIONS[currentLang] || TRANSLATIONS['en'];
    return tr[key] || TRANSLATIONS['en'][key] || key;
}

/* Returns translated crop name for the given English key */
function cropName(key) {
    const names = CROP_NAMES[currentLang];
    return (names && names[key]) || key;
}

function applyTranslations() {
    // Text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
    });
    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = t(key);
    });
    // Refresh dynamic content
    if (document.getElementById('tip-text')) updateTip();
    if (document.getElementById('tips-list') && document.getElementById('tips-list').children.length > 0) {
        populateNotifications(true);
    }
}

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    applyTranslations();
    renderAllLangPickers();
    // Refresh whichever page is currently visible
    const activeId = (document.querySelector('.page.active') || {}).id || '';
    if (activeId === 'page-home') refreshHome();
    if (activeId === 'page-search') populateSearchSelects();
    if (activeId === 'page-notifications') populateNotifications(true);
    if (activeId === 'page-profile') refreshProfile();
}

/* ===== LANGUAGE PICKER BUILDER ===== */
const LANG_ORDER = ['en', 'te', 'hi', 'ta', 'kn'];

function buildLangPickerHTML(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';

    const wrapper = document.createElement('div');
    wrapper.className = 'lang-dropdown-wrap';

    const current = TRANSLATIONS[currentLang];
    const btn = document.createElement('button');
    btn.className = 'lang-current-btn';
    btn.innerHTML = `${current.flag} ${current.name} <span class="lang-chevron">▾</span>`;
    btn.onclick = (e) => {
        e.stopPropagation();              // prevent global click handler closing it immediately
        // Close all other open pickers first
        document.querySelectorAll('.lang-dropdown-wrap.open').forEach(w => {
            if (w !== wrapper) w.classList.remove('open');
        });
        wrapper.classList.toggle('open');
    };

    const menu = document.createElement('div');
    menu.className = 'lang-menu';

    LANG_ORDER.forEach(code => {
        const lang = TRANSLATIONS[code];
        const item = document.createElement('button');
        item.className = 'lang-item' + (code === currentLang ? ' active' : '');
        item.innerHTML = `${lang.flag} ${lang.name}`;
        item.onclick = (e) => {
            e.stopPropagation();
            setLanguage(code);
            wrapper.classList.remove('open');
        };
        menu.appendChild(item);
    });

    wrapper.appendChild(btn);
    wrapper.appendChild(menu);
    container.appendChild(wrapper);
    // NOTE: global click-outside listener is set ONCE in DOMContentLoaded, not here
}

function renderAllLangPickers() {
    const ids = [
        'lang-picker-welcome', 'lang-picker-login', 'lang-picker-signup',
        'lang-picker-home', 'lang-picker-search', 'lang-picker-notif', 'lang-picker-profile'
    ];
    ids.forEach(id => buildLangPickerHTML(id));
}

/* ===== NAVIGATION ===== */
function navigate(pageId) {
    // Guard: redirect to login if not authenticated BEFORE changing visible page
    if (pageId === 'home' && !currentUser) { showToast('🔐 Please login first.'); navigate('login'); return; }
    if (pageId === 'profile' && !currentUser) { showToast('🔐 Please login first.'); navigate('login'); return; }

    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById('page-' + pageId);
    if (target) { target.classList.add('active'); window.scrollTo(0, 0); }

    // Page-specific refresh
    if (pageId === 'home') refreshHome();
    if (pageId === 'profile') refreshProfile();
    if (pageId === 'search') populateSearchSelects();
    if (pageId === 'notifications') populateNotifications(false);
    if (pageId === 'weather') showToast(t('weatherSoonToast'));

    // Single call — no duplicates
    renderAllLangPickers();
    applyTranslations();
}

/* ===== AUTH: LOGIN ===== */
function handleLogin(e) {
    e.preventDefault();
    const phone = document.getElementById('login-phone').value.trim();
    const pass = document.getElementById('login-password').value.trim();
    let valid = true;
    clearErrors(['login-phone-err', 'login-pass-err']);
    if (!phone || phone.length !== 10 || !/^\d+$/.test(phone)) {
        showError('login-phone-err', t('validPhone')); valid = false;
    }
    if (!pass) { showError('login-pass-err', t('passwordRequired')); valid = false; }
    if (!valid) return;
    if (!currentUser) currentUser = { name: 'Farmer Friend', phoneNumber: phone, locality: 'Your Locality' };
    showToast(t('loginSuccess'));
    setTimeout(() => navigate('home'), 500);
}

/* ===== AUTH: SIGN UP ===== */
function handleSignup(e) {
    e.preventDefault();
    const name = document.getElementById('su-name').value.trim();
    const phone = document.getElementById('su-phone').value.trim();
    const locality = document.getElementById('su-locality').value.trim();
    const pass = document.getElementById('su-password').value.trim();
    const confirm = document.getElementById('su-confirm').value.trim();
    let valid = true;
    clearErrors(['su-name-err', 'su-phone-err', 'su-locality-err', 'su-pass-err', 'su-confirm-err']);
    if (!name) { showError('su-name-err', t('nameRequired')); valid = false; }
    if (!phone || phone.length !== 10 || !/^\d+$/.test(phone)) { showError('su-phone-err', t('phoneRequired')); valid = false; }
    if (!locality) { showError('su-locality-err', t('localityRequired')); valid = false; }
    if (!pass) { showError('su-pass-err', t('passwordRequired')); valid = false; }
    if (!confirm) { showError('su-confirm-err', t('confirmRequired')); valid = false; }
    else if (pass && confirm !== pass) { showError('su-confirm-err', t('passwordsMismatch')); valid = false; }
    if (!valid) return;
    currentUser = { name, phoneNumber: phone, locality };
    // Clear the signup form fields
    document.getElementById('su-name').value = '';
    document.getElementById('su-phone').value = '';
    document.getElementById('su-locality').value = '';
    document.getElementById('su-password').value = '';
    document.getElementById('su-confirm').value = '';
    showToast(t('accountCreated'));
    setTimeout(() => navigate('login'), 700);
}

/* ===== AUTH: FORGOT PASSWORD ===== */
function sendOTP() {
    const phone = document.getElementById('fp-phone').value.trim();
    if (!phone || phone.length !== 10 || !/^\d+$/.test(phone)) { showToast('⚠️ ' + t('validPhone')); return; }
    // Hide step 1, show step 2
    document.getElementById('fp-step-1').classList.add('hidden');
    document.getElementById('fp-step-2').classList.remove('hidden');
    // Clear any previous OTP inputs
    document.querySelectorAll('.otp-box').forEach(b => b.value = '');
    showToast(t('otpSentToast'));
}
function otpMove(input, idx) {
    if (input.value.length === 1) {
        const boxes = document.querySelectorAll('.otp-box');
        if (idx < boxes.length - 1) boxes[idx + 1].focus();
    }
}
function verifyOTP() {
    const otp = Array.from(document.querySelectorAll('.otp-box')).map(b => b.value).join('');
    if (otp === '1234') {
        document.getElementById('fp-step-3').classList.remove('hidden');
        document.getElementById('fp-step-2').classList.add('hidden');
        showToast(t('otpVerified'));
    } else { showToast(t('wrongOTP')); }
}
function resetPassword() {
    const np = document.getElementById('fp-newpass').value;
    const cp = document.getElementById('fp-confirm').value;
    if (!np || !cp) { showToast('⚠️ ' + t('passwordRequired')); return; }
    if (np !== cp) { showToast(t('passwordsMismatch')); return; }
    showToast(t('passwordReset'));
    setTimeout(() => navigate('login'), 800);
}

/* ===== HOME ===== */
function refreshHome() {
    if (!currentUser) return;
    const hour = new Date().getHours();
    const greet = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';
    const el = document.getElementById('home-greeting');
    if (el) el.textContent = greet + ', ' + (currentUser.name || 'Farmer') + '!';

    const container = document.getElementById('crop-highlights');
    if (container) {
        container.innerHTML = TOP_CROPS.map(([crop, price]) => `
      <div class="crop-chip" onclick="quickPrice('${crop}',${price})">
        <div class="crop-chip-name">${cropName(crop)}</div>
        <div class="crop-chip-price">₹${price}</div>
        <div class="crop-chip-unit">${t('avgPerKg')}</div>
      </div>`).join('');
    }
    startTipCarousel();
}

function quickPrice(crop, price) {
    // Show translated crop name in toast
    showToast('💰 ' + cropName(crop) + ' — ₹' + price + '/kg');
}

function startTipCarousel() {
    const tips = TIPS_BY_LANG[currentLang] || TIPS_EN;
    const tipEl = document.getElementById('tip-text');
    const dotsEl = document.getElementById('tip-dots');
    if (!tipEl || !dotsEl) return;
    dotsEl.innerHTML = tips.map((_, i) =>
        `<div class="tip-dot${i === 0 ? ' active' : ''}" onclick="goToTip(${i})"></div>`
    ).join('');
    if (tipTimer) clearInterval(tipTimer);
    tipIndex = 0;
    tipEl.textContent = tips[0];
    tipTimer = setInterval(() => {
        tipIndex = (tipIndex + 1) % tips.length;
        updateTip();
    }, 4000);
}

function goToTip(i) { tipIndex = i; updateTip(); }

function updateTip() {
    const tips = TIPS_BY_LANG[currentLang] || TIPS_EN;
    const tipEl = document.getElementById('tip-text');
    const dots = document.querySelectorAll('.tip-dot');
    if (tipEl) {
        tipEl.style.opacity = '0';
        setTimeout(() => {
            tipEl.textContent = tips[tipIndex] || '';
            tipEl.style.opacity = '1';
            tipEl.style.transition = 'opacity 0.4s';
        }, 200);
    }
    dots.forEach((d, i) => d.classList.toggle('active', i === tipIndex));
}

/* ===== SEARCH ===== */
function populateSearchSelects() {
    const stateEl = document.getElementById('search-state');
    const cropEl = document.getElementById('search-crop');
    if (!stateEl || !cropEl) return;

    // Rebuild selects with translated names, English key as value
    stateEl.innerHTML = `<option value="">${t('chooseState')}</option>`;
    STATES.forEach(s => { const o = document.createElement('option'); o.value = s; o.textContent = s; stateEl.appendChild(o); });

    cropEl.innerHTML = `<option value="">${t('chooseCrop')}</option>`;
    Object.keys(CROP_PRICES).forEach(key => {
        const o = document.createElement('option');
        o.value = key;
        o.textContent = cropName(key);  // translated!
        cropEl.appendChild(o);
    });

    // Rebuild price table with translated names
    const tbody = document.getElementById('prices-tbody');
    if (tbody) {
        tbody.innerHTML = '';
        Object.entries(CROP_PRICES).forEach(([key, [min, max]]) => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${cropName(key)}</td><td>₹${min}</td><td>₹${max}</td>`;
            tbody.appendChild(row);
        });
    }
}

function updateSearchPrice() {
    const state = document.getElementById('search-state').value;
    const crop = document.getElementById('search-crop').value;
    if (state && crop) fetchCropPrice();
    else document.getElementById('price-result').classList.add('hidden');
}

function fetchCropPrice() {
    const state = document.getElementById('search-state').value;
    const crop = document.getElementById('search-crop').value;
    if (!state) { showToast(t('selectStateWarn')); return; }
    if (!crop) { showToast(t('selectCropWarn')); return; }
    const [min, max] = CROP_PRICES[crop];
    const stateIdx = STATES.indexOf(state);
    const price = Math.round(min + (max - min) * stateIdx / (STATES.length - 1));
    document.getElementById('pr-crop').textContent = cropName(crop);   // translated!
    document.getElementById('pr-state').textContent = '📍 ' + state;
    document.getElementById('pr-amount').textContent = '₹' + price;
    document.getElementById('pr-range').textContent = t('marketRange') + ': ₹' + min + ' – ₹' + max + ' ' + t('perKilogram');
    document.getElementById('price-result').classList.remove('hidden');
    document.getElementById('price-result').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/* ===== NOTIFICATIONS ===== */
function populateNotifications(force) {
    const tips = TIPS_BY_LANG[currentLang] || TIPS_EN;
    const tr = TRANSLATIONS[currentLang] || TRANSLATIONS['en'];
    const tipsList = document.getElementById('tips-list');
    const seasonalGrid = document.getElementById('seasonal-grid');

    if (tipsList && (force || tipsList.children.length === 0)) {
        tipsList.innerHTML = '';
        tips.forEach((tip, i) => {
            const div = document.createElement('div');
            div.className = 'tip-item';
            div.innerHTML = `<div class="tip-item-num">${i + 1}</div><div class="tip-item-text">${tip}</div>`;
            tipsList.appendChild(div);
        });
    }

    if (seasonalGrid && (force || seasonalGrid.children.length === 0)) {
        seasonalGrid.innerHTML = '';
        (tr.seasonal || TRANSLATIONS['en'].seasonal).forEach(card => {
            const div = document.createElement('div');
            div.className = 'seasonal-card';
            div.innerHTML = `<div class="seasonal-icon">${card.icon}</div><div class="seasonal-title">${card.title}</div><div class="seasonal-text">${card.text}</div>`;
            seasonalGrid.appendChild(div);
        });
    }
}

/* ===== PROFILE ===== */
function refreshProfile() {
    if (!currentUser) return;
    document.getElementById('profile-name').textContent = currentUser.name || 'Farmer';
    document.getElementById('profile-phone').textContent = currentUser.phoneNumber || '—';
    document.getElementById('profile-locality').textContent = currentUser.locality || '—';
    document.getElementById('profile-locality-tag').textContent = '📍 ' + (currentUser.locality || 'Your Locality');
    const av = document.getElementById('profile-avatar');
    if (av) av.textContent = (currentUser.name || 'F').trim().charAt(0).toUpperCase();
}

function logout() {
    currentUser = null;
    showToast(t('loggedOut'));
    setTimeout(() => navigate('welcome'), 500);
}

/* ===== UTILITIES ===== */
function togglePw(inputId, btn) {
    const input = document.getElementById(inputId);
    input.type = input.type === 'password' ? 'text' : 'password';
    btn.textContent = input.type === 'password' ? '👁' : '🙈';
}
function showError(id, msg) { const el = document.getElementById(id); if (el) el.textContent = msg; }
function clearErrors(ids) { ids.forEach(id => { const el = document.getElementById(id); if (el) el.textContent = ''; }); }

let toastTimeout = null;
function showToast(msg) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.remove('hidden', 'show');
    void toast.offsetWidth;
    toast.classList.add('show');
    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => { toast.classList.add('hidden'); toast.classList.remove('show'); }, 3000);
}

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
    // Bug fix: single global click-outside listener added ONCE here instead of
    // inside buildLangPickerHTML (which was called on every navigate, causing
    // hundreds of duplicate listeners — a memory leak)
    document.addEventListener('click', () => {
        document.querySelectorAll('.lang-dropdown-wrap.open')
            .forEach(w => w.classList.remove('open'));
    });

    renderAllLangPickers();
    applyTranslations();
    navigate('welcome');
});
