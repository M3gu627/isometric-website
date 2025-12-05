// Multi-language translations
const translations = {
    en: {
        menuTitle: "MY STUFF", Programs: "Programs", Experience: "Experience", Education: "Education", Resume: "Resume", Links: "Links", Mini_game: "Mini Game", Valorant: "Valorant", Websites: "Websites", Gallery: "Gallery",
        findMeOn: "FIND ME ON", clickToVisit: "Click a Pokémon to visit!", myResume: "MY RESUME", hiIm: "Hi!, I'm Martin Jorrell H. Gaspar", downloadCV: "DOWNLOAD FULL CV", programming: "PROGRAMMING LANGUAGES", education: "EDUCATION", experience: "EXPERIENCE", flappy: "FLAPPY BIRD", gallerySoon: "Gallery coming soon!", deployed: "MY DEPLOYED WEBSITES"
    },
    tl: {
        menuTitle: "AKING MGA BAGAY", Programs: "Mga Programa", Experience: "Karanasan", Education: "Edukasyon", Resume: "Resume", Links: "Mga Link", Mini_game: "Mini Laro", Valorant: "Valorant", Websites: "Mga Website", Gallery: "Gallery",
        findMeOn: "HANAPIN AKO SA", clickToVisit: "I-click ang Pokémon para bumisita!", myResume: "AKING RESUME", hiIm: "Kamusta!, Ako si Martin Jorrell H. Gaspar", downloadCV: "I-DOWNLOAD ANG BUONG CV", programming: "MGA WIKA SA PROGRAMMING", education: "EDUKASYON", experience: "KARANASAN", flappy: "FLAPPY BIRD", gallerySoon: "Gallery darating na!", deployed: "AKING MGA WEBSITE"
    },
    ja: {
        menuTitle: "私のモノ", Programs: "プログラム", Experience: "経験", Education: "学歴", Resume: "履歴書", Links: "リンク", Mini_game: "ミニゲーム", Valorant: "ヴァロラント", Websites: "ウェブサイト", Gallery: "ギャラリー",
        findMeOn: "見つける", clickToVisit: "ポケモンをクリック！", myResume: "私の履歴書", hiIm: "こんにちは、マーティン・ジョレル・H・ガスパールです", downloadCV: "完全なCVをダウンロード", programming: "プログラミング言語", education: "学歴", experience: "経験", flappy: "フラッピーバード", gallerySoon: "ギャラリーはまもなく公開！", deployed: "デプロイされたウェブサイト"
    },
    es: {
        menuTitle: "MIS COSAS", Programs: "Programas", Experience: "Experiencia", Education: "Educación", Resume: "Currículum", Links: "Enlaces", Mini_game: "Mini Juego", Valorant: "Valorant", Websites: "Sitios Web", Gallery: "Galería",
        findMeOn: "ENCUÉNTRAME EN", clickToVisit: "¡Haz clic en un Pokémon para visitar!", myResume: "MI CURRÍCULUM", hiIm: "¡Hola! Soy Martin Jorrell H. Gaspar", downloadCV: "DESCARGAR CV COMPLETO", programming: "LENGUAJES DE PROGRAMACIÓN", education: "EDUCACIÓN", experience: "EXPERIENCIA", flappy: "FLAPPY BIRD", gallerySoon: "¡Galería próximamente!", deployed: "MIS SITIOS WEB DESPLEGADOS"
    }
};

// Content for the info bubble
const messages = {
    Programs: {
        title: "Programming Languages",
        text: `
            <p>I focus on languages and frameworks that enable modern, scalable web and application development.</p>
            <ul>
                <li><strong>Web:</strong> JavaScript/TypeScript, React, Node.js, HTML5, CSS3, Tailwind CSS.</li>
                <li><strong>Backend/Scripting:</strong> Python, PHP, C#.</li>
                <li><strong>Databases:</strong> PostgreSQL, MongoDB, MySQL.</li>
            </ul>
        `
    },
    Experience: {
        title: "Professional Experience",
        text: `
            <ul>
                <li><strong>Full Stack Developer @ Tech Corp (2022 - Present)</strong>: Developed and maintained high-traffic RESTful APIs using Node.js and improved frontend performance by 30% using React and modern state management.</li>
                <li><strong>Junior Developer @ Startup X (2020 - 2022)</strong>: Built internal tooling for inventory management, contributing to a 15% reduction in manual data entry errors.</li>
            </ul>
        `
    },
    Education: {
        title: "Education & Certifications",
        text: `
            <ul>
                <li><strong>Bachelor of Science in Computer Science</strong> - University of Manila (2016-2020).</li>
                <li><strong>Certified Kubernetes Administrator (CKA)</strong> - The Linux Foundation.</li>
                <li><strong>Advanced React Patterns Course</strong> - Online Learning Platform.</li>
            </ul>
        `
    },
    Resume: {
        title: "MY RESUME",
        text: `
            <p id="hiIm">Hi!, I'm Martin Jorrell H. Gaspar. I am a passionate Full Stack Developer specializing in creating interactive and high-performance web applications.</p>
            <p>You can download my full curriculum vitae below.</p>
            <a href="./assets/martin_gaspar_cv.pdf" target="_blank" class="download-link" id="downloadCV" style="display: inline-block; margin-top: 15px; padding: 10px 15px; background: #00ff88; color: #000; text-decoration: none; font-weight: bold; font-size: 0.9em;">DOWNLOAD FULL CV</a>
        `
    },
    Links: {
        title: "FIND ME ON",
        text: `
            <p id="clickToVisit">Click a Pokémon to visit!</p>
            <div style="display: flex; justify-content: space-around; margin-top: 20px;">
                <a href="https://github.com/yourusername" target="_blank" title="GitHub">
                    <img src="./assets/github.png" alt="GitHub" style="width: 50px; height: 50px; image-rendering: pixelated;">
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" title="LinkedIn">
                    <img src="./assets/linkedin.png" alt="LinkedIn" style="width: 50px; height: 50px; image-rendering: pixelated;">
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" title="Twitter/X">
                    <img src="./assets/twitter.png" alt="Twitter/X" style="width: 50px; height: 50px; image-rendering: pixelated;">
                </a>
            </div>
        `
    },
    Mini_game: {
        title: "FLAPPY BIRD",
        text: "<p>The console screen has become a tiny game! Click the button below to start the Flappy Bird clone and test your reflexes.</p><button onclick='startFlappyGame()' style='margin-top: 15px; padding: 10px 20px; background: #ff0040; color: white; border: none; cursor: pointer; font-family: inherit; font-weight: bold;'>START GAME</button>"
    },
    Valorant: {
        title: "Valorant Stats",
        text: "<p>This is a placeholder for dynamic content, like linking to my Valorant stats tracker or gaming profile.</p><ul><li>Rank: Diamond 3 (Peak Ascendant 1)</li><li>Favorite Agent: Sova / Fade</li></ul>"
    },
    Websites: {
        title: "MY DEPLOYED WEBSITES",
        text: `
            <p>Here are some projects I have deployed and am proud of:</p>
            <ul>
                <li><a href="https://project1.com" target="_blank" style="color: #00ff88;">Project X - E-commerce platform built with MERN stack.</a></li>
                <li><a href="https://project2.com" target="_blank" style="color: #00ff88;">Project Y - Real-time chat application using WebSockets.</a></li>
                <li><a href="https://project3.com" target="_blank" style="color: #00ff88;">Project Z - Data visualization tool using D3.js.</a></li>
            </ul>
        `
    },
    Gallery: {
        title: "Gallery",
        text: "<p>Gallery coming soon! This area will feature my personal digital art and photography projects.</p>"
    }
};

let currentLang = 'en';
let currentAudio = null;
let isMuted = false;
let currentIndex = 0; // For desktop menu navigation

// Sound Logic (Tone.js)
const synth = new Tone.Synth().toDestination();

function playTone(freq, duration = "8n") {
    if (isMuted) return;
    synth.triggerAttackRelease(freq, duration);
}

function speak(message, lang = currentLang) {
    if (isMuted || !window.speechSynthesis) return;

    if (currentAudio) {
        window.speechSynthesis.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(message.title + ". " + message.text.replace(/<[^>]*>?/gm, ' '));
    utterance.lang = lang;

    // Find the correct voice for the current language
    const voices = window.speechSynthesis.getVoices();
    let voice = voices.find(v => v.lang.startsWith(lang));
    if (!voice && lang === 'en') {
        voice = voices.find(v => v.lang.startsWith('en'));
    }
    utterance.voice = voice || voices[0]; // Fallback

    window.speechSynthesis.speak(utterance);
    currentAudio = utterance;
}

function openBubble(key) {
    const bubble = document.getElementById('bubble');
    const title = document.getElementById('bubbleTitle');
    const text = document.getElementById('bubbleText');
    const lang = currentLang;

    const data = messages[key];
    const translationData = translations[lang] || translations['en'];

    // Update Bubble Content with translated strings
    title.textContent = translationData[key];

    // Simple template rendering for content (using innerHTML for formatted text)
    let contentHtml = data.text;
    
    // Replace placeholder texts in the content with translations
    contentHtml = contentHtml.replace("Programming Languages", translationData.programming || "PROGRAMMING LANGUAGES");
    contentHtml = contentHtml.replace("MY RESUME", translationData.myResume || "MY RESUME");
    contentHtml = contentHtml.replace("Hi!, I'm Martin Jorrell H. Gaspar", translationData.hiIm || "Hi!, I'm Martin Jorrell H. Gaspar");
    contentHtml = contentHtml.replace("DOWNLOAD FULL CV", translationData.downloadCV || "DOWNLOAD FULL CV");
    contentHtml = contentHtml.replace("FIND ME ON", translationData.findMeOn || "FIND ME ON");
    contentHtml = contentHtml.replace("Click a Pokémon to visit!", translationData.clickToVisit || "Click a Pokémon to visit!");
    contentHtml = contentHtml.replace("EDUCATION", translationData.education || "EDUCATION");
    contentHtml = contentHtml.replace("EXPERIENCE", translationData.experience || "EXPERIENCE");
    contentHtml = contentHtml.replace("FLAPPY BIRD", translationData.flappy || "FLAPPY BIRD");
    contentHtml = contentHtml.replace("Gallery coming soon!", translationData.gallerySoon || "Gallery coming soon!");
    contentHtml = contentHtml.replace("MY DEPLOYED WEBSITES", translationData.deployed || "MY DEPLOYED WEBSITES");

    text.innerHTML = contentHtml;

    // Show bubble
    bubble.classList.add('show');
    playTone('C4');

    // Speak the content
    speak({ title: title.textContent, text: contentHtml }, lang);

    // If Mini_game is selected, handle the flappy canvas display in case it was active
    if (key !== 'Mini_game') {
        document.getElementById('flappyCanvas').classList.remove('active');
    }
}

function closeBubble() {
    const bubble = document.getElementById('bubble');
    bubble.classList.remove('show');
    playTone('G3');
    if (currentAudio) {
        window.speechSynthesis.cancel();
        currentAudio = null;
    }
    document.getElementById('flappyCanvas').classList.remove('active');
}

function selectIndex(index) {
    const items = document.querySelectorAll('.menu-item');
    currentIndex = index;
    items.forEach((item, idx) => {
        item.classList.toggle('selected', idx === currentIndex);
    });
}

function updateTranslations(lang) {
    const t = translations[lang] || translations.en;
    document.getElementById('menuTitle').textContent = t.menuTitle;
    document.querySelectorAll('.menu-item').forEach(item => {
        item.textContent = t[item.dataset.item];
    });
    document.getElementById('findMeOn').textContent = t.findMeOn;
    document.getElementById('clickToVisit').textContent = t.clickToVisit;

    // Also update mobile buttons
    document.querySelectorAll('.mobile-item-btn').forEach(btn => {
        btn.textContent = t[btn.dataset.item];
    });

    // If bubble is open, refresh content with new language
    const bubble = document.getElementById('bubble');
    if (bubble.classList.contains('show')) {
        const key = document.getElementById('bubbleTitle').textContent;
        // Find the key based on current content (not perfect, but works)
        const currentKey = Object.keys(translations.en).find(k => translations.en[k] === key) || 
                            Object.keys(t).find(k => t[k] === key);
        
        if(currentKey && messages[currentKey]) {
            openBubble(currentKey); // Re-open to refresh content
        }
    }
}

// Flappy Game Logic (Placeholders)
function initFlappy() {
    // This is where you would initialize the Flappy Bird game on the canvas
    const canvas = document.getElementById('flappyCanvas');
    canvas.classList.add('active');
    console.log("Flappy Bird initialized. Canvas visible.");
}

function startFlappyGame() {
    document.getElementById('flappyCanvas').classList.add('active');
    closeBubble();
    // Add logic here to start the game loop, listen for inputs, etc.
    console.log("Flappy Bird started!");
}

// ----------------------------------------------------
// DOM Initialization and Event Listeners
// ----------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('langSelect');
    const soundBtn = document.getElementById('soundBtn');
    const items = document.querySelectorAll('.menu-item');

    // 1. Language Selector
    langSelect.onchange = (e) => {
        currentLang = e.target.value;
        updateTranslations(currentLang);
    };

    // 2. Sound Toggle
    soundBtn.onclick = () => {
        isMuted = !isMuted;
        soundBtn.classList.toggle('muted', isMuted);
        if (currentAudio) {
            window.speechSynthesis.cancel();
            currentAudio = null;
        }
    };

    // 3. Desktop Menu Click Listener
    items.forEach((item, index) => {
        item.addEventListener('click', e => {
            e.preventDefault();
            const key = item.dataset.item;
            if (messages[key]) {
                openBubble(key);
                selectIndex(index);
                // Mini-game check for initialization *after* bubble opens/speech starts
                if (key === 'Mini_game') setTimeout(initFlappy, 300);
            }
        });
    });

    // 4. NEW: Map Area and Mobile Button Click Listener
    // Select both the image map areas and the new mobile buttons
    const interactiveElements = document.querySelectorAll('area[data-item], .mobile-item-btn');
    
    interactiveElements.forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();
            const key = item.dataset.item;
            
            // Core logic: open the bubble and handle the mini-game
            if (messages[key]) {
                openBubble(key);
                if (key === 'Mini_game') setTimeout(initFlappy, 300);
            }
            
            // If this click came from a desktop menu item, update selection
            if (item.classList.contains('menu-item')) {
                const idx = [...items].findIndex(el => el === item);
                if (idx !== -1) selectIndex(idx);
            }
        });
    });

});

document.getElementById('closeBtn').onclick = closeBubble;

// Keyboard navigation (for desktop menu)
document.addEventListener('keydown', e => {
    const items = document.querySelectorAll('.menu-item');
    const b = document.getElementById('bubble');
    // Exit bubble
    if (e.key === 'Escape' && b.classList.contains('show')) {
        closeBubble();
        return;
    }

    // Menu navigation (only if menu is visible and bubble is closed)
    // Check if on a screen size where the menu is likely visible (desktop)
    if (window.innerWidth > 768 && !b.classList.contains('show')) {
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            selectIndex((currentIndex - 1 + items.length) % items.length);
            playTone('D4', '16n');
        }
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            selectIndex((currentIndex + 1) % items.length);
            playTone('D4', '16n');
        }
        if (e.key === 'Enter') {
            e.preventDefault();
            const key = items[currentIndex].dataset.item;
            if (messages[key]) {
                openBubble(key);
                // Mini-game check for initialization *after* bubble opens/speech starts
                if (key === 'Mini_game') setTimeout(initFlappy, 300);
            }
        }
    }
});

// Auto-select the first menu item (or any you want) when page loads
window.addEventListener('load', () => {
    const defaultItem = 'Programs'; // Change this to whatever you want default (e.g., 'Resume', 'Mini_game', etc.)
    const items = document.querySelectorAll('.menu-item');
    const defaultIndex = [...items].findIndex(item => item.dataset.item === defaultItem);
    
    if (defaultIndex !== -1) {
        selectIndex(defaultIndex);
    }

    // --- Loading Screen Logic ---
    const loadingScreen = document.getElementById('loadingScreen');
    const meterFill = document.getElementById('meterFill');
    const meterPercent = document.getElementById('meterPercent');
    let loadProgress = 0;

    const interval = setInterval(() => {
        loadProgress += Math.random() * 10;
        if (loadProgress >= 100) {
            loadProgress = 100;
            clearInterval(interval);
            meterFill.style.width = '100%';
            meterPercent.textContent = '100%';
            
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
            }, 500); // Wait half a second before fading out
            
            // Focus on the room image for better accessibility/interaction start
            document.getElementById('pixelRoom').focus();

        } else {
            const displayProgress = Math.min(loadProgress, 99.9).toFixed(0);
            meterFill.style.width = displayProgress + '%';
            meterPercent.textContent = displayProgress + '%';
        }
    }, 100);
});
