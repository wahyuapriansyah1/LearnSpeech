// Frasa target untuk latihan (dengan arti Bahasa Indonesia)
const phrases = [
    { en: "Hello, how are you?", id: "Halo, apa kabar?" },
    { en: "The quick brown fox jumps over the lazy dog.", id: "Rubah coklat cepat melompati anjing malas." },
    { en: "Good morning, have a nice day!", id: "Selamat pagi, semoga harimu menyenangkan!" },
    { en: "Can you help me, please?", id: "Bisakah kamu membantu saya?" },
    { en: "I would like a cup of coffee.", id: "Saya ingin secangkir kopi." },
    { en: "What time is it?", id: "Jam berapa sekarang?" },
    { en: "Where is the nearest station?", id: "Di mana stasiun terdekat?" },
    { en: "Thank you very much.", id: "Terima kasih banyak." },
    { en: "See you tomorrow!", id: "Sampai jumpa besok!" },
    { en: "I am learning English.", id: "Saya sedang belajar bahasa Inggris." },
    { en: "Excuse me, where is the bathroom?", id: "Permisi, di mana kamar mandinya?" },
    { en: "Could you repeat that, please?", id: "Bisakah kamu mengulanginya?" },
    { en: "I don't understand.", id: "Saya tidak mengerti." },
    { en: "How much does it cost?", id: "Berapa harganya?" },
    { en: "What is your name?", id: "Siapa namamu?" },
    { en: "My name is John.", id: "Nama saya John." },
    { en: "Nice to meet you.", id: "Senang bertemu denganmu." },
    { en: "Where are you from?", id: "Dari mana asalmu?" },
    { en: "I am from Indonesia.", id: "Saya dari Indonesia." },
    { en: "I am a student.", id: "Saya seorang pelajar." },
    { en: "I like reading books.", id: "Saya suka membaca buku." },
    { en: "Can I have the menu, please?", id: "Bolehkah saya melihat menu?" },
    { en: "I am looking for a hotel.", id: "Saya sedang mencari hotel." },
    { en: "How do I get to the airport?", id: "Bagaimana cara ke bandara?" },
    { en: "I am lost.", id: "Saya tersesat." },
    { en: "Can you show me on the map?", id: "Bisakah kamu tunjukkan di peta?" },
    { en: "What do you do?", id: "Apa pekerjaanmu?" },
    { en: "I work as a teacher.", id: "Saya bekerja sebagai guru." },
    { en: "Do you speak English?", id: "Apakah kamu bisa berbahasa Inggris?" },
    { en: "A little bit.", id: "Sedikit." },
    { en: "Please speak slowly.", id: "Tolong bicara pelan-pelan." },
    { en: "Can you write it down?", id: "Bisakah kamu menuliskannya?" },
    { en: "I am allergic to peanuts.", id: "Saya alergi kacang." },
    { en: "Call the police!", id: "Panggil polisi!" },
    { en: "I need a doctor.", id: "Saya butuh dokter." },
    { en: "Congratulations!", id: "Selamat!" },
    { en: "Happy birthday!", id: "Selamat ulang tahun!" },
    { en: "Merry Christmas!", id: "Selamat Natal!" },
    { en: "Happy New Year!", id: "Selamat Tahun Baru!" },
    { en: "Good luck!", id: "Semoga beruntung!" },
    { en: "Have a safe trip!", id: "Selamat jalan!" },
    { en: "See you later!", id: "Sampai jumpa lagi!" },
    { en: "Take care!", id: "Hati-hati!" },
    { en: "What is your favorite food?", id: "Apa makanan favoritmu?" },
    { en: "My favorite food is pizza.", id: "Makanan favorit saya adalah pizza." },
    { en: "It is raining today.", id: "Hari ini hujan." },
    { en: "The weather is nice.", id: "Cuacanya bagus." },
    { en: "I am tired.", id: "Saya lelah." },
    { en: "Let's go to the park.", id: "Ayo ke taman." },
    { en: "I love listening to music.", id: "Saya suka mendengarkan musik." },
    { en: "Can you help me with my homework?", id: "Bisakah kamu membantu saya mengerjakan PR?" },
    // Tambahan frasa baru
    { en: "Where do you live?", id: "Di mana kamu tinggal?" },
    { en: "I live in Jakarta.", id: "Saya tinggal di Jakarta." },
    { en: "What is your hobby?", id: "Apa hobimu?" },
    { en: "My hobby is swimming.", id: "Hobi saya berenang." },
    { en: "How old are you?", id: "Berapa umurmu?" },
    { en: "I am twenty years old.", id: "Saya berumur dua puluh tahun." },
    { en: "Do you have any siblings?", id: "Apakah kamu punya saudara?" },
    { en: "I have one brother and one sister.", id: "Saya punya satu saudara laki-laki dan satu saudara perempuan." },
    { en: "What do you like to do in your free time?", id: "Apa yang kamu suka lakukan di waktu luang?" },
    { en: "I like to watch movies.", id: "Saya suka menonton film." },
    { en: "Can you play the guitar?", id: "Bisakah kamu bermain gitar?" },
    { en: "Yes, I can play the guitar.", id: "Ya, saya bisa bermain gitar." },
    { en: "No, I can't play the guitar.", id: "Tidak, saya tidak bisa bermain gitar." },
    { en: "What is your favorite color?", id: "Apa warna favoritmu?" },
    { en: "My favorite color is blue.", id: "Warna favorit saya biru." },
    { en: "Do you like sports?", id: "Apakah kamu suka olahraga?" },
    { en: "Yes, I like sports.", id: "Ya, saya suka olahraga." },
    { en: "No, I don't like sports.", id: "Tidak, saya tidak suka olahraga." },
    { en: "What time do you usually wake up?", id: "Jam berapa kamu biasanya bangun?" },
    { en: "I usually wake up at six o'clock.", id: "Saya biasanya bangun jam enam." },
    { en: "Do you like to travel?", id: "Apakah kamu suka bepergian?" },
    { en: "Yes, I love to travel.", id: "Ya, saya suka bepergian." },
    { en: "No, I don't like to travel.", id: "Tidak, saya tidak suka bepergian." }
];

let currentPhraseIndex = 0;
let recognition;
let isRecording = false;

const targetPhraseDiv = document.getElementById('target-phrase');
const resultTextDiv = document.getElementById('result-text');
const feedbackDiv = document.getElementById('feedback');
const statusSpan = document.getElementById('status');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const nextPhraseBtn = document.getElementById('next-phrase');

function showPhrase(index) {
    // Hapus chart jika ada sebelumnya
    const oldChart = document.getElementById('accuracy-chart');
    if (oldChart && oldChart.parentNode) {
        oldChart.parentNode.removeChild(oldChart);
    }
    // Buat wrapper untuk frasa dan chart
    targetPhraseDiv.innerHTML = `
        <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;">
            <div>
                <b>${phrases[index].en}</b><br>
                <span style='color:#888;font-size:0.95em'>${phrases[index].id}</span>
            </div>
            <canvas id="accuracy-chart" width="70" height="70" style="flex-shrink:0;"></canvas>
        </div>
    `;
    resultTextDiv.textContent = '-';
    feedbackDiv.textContent = '';
}

function nextPhrase() {
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    showPhrase(currentPhraseIndex);
}

function normalize(text) {
    return text.toLowerCase().replace(/[^a-z0-9 ]/g, '').trim();
}

function comparePhrases(target, spoken) {
    const normTarget = normalize(target);
    const normSpoken = normalize(spoken);
    if (normTarget === normSpoken) {
        return { match: true, accuracy: 100 };
    } else {
        // Highlight perbedaan kata (opsional sederhana)
        const targetWords = normTarget.split(' ');
        const spokenWords = normSpoken.split(' ');
        let feedback = '';
        let correct = 0;
        for (let i = 0; i < targetWords.length; i++) {
            if (spokenWords[i] === targetWords[i]) {
                feedback += `<span style="color:green">${targetWords[i]}</span> `;
                correct++;
            } else {
                feedback += `<span style="color:red">${targetWords[i]}</span> `;
            }
        }
        // Hitung persentase akurasi
        const accuracy = Math.round((correct / targetWords.length) * 100);
        return { match: false, feedback, accuracy };
    }
}

function initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        alert('Browser Anda tidak mendukung Web Speech API. Silakan gunakan Google Chrome atau Microsoft Edge versi terbaru.');
        startBtn.disabled = true;
        stopBtn.disabled = true;
        return;
    }
    recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
        isRecording = true;
        statusSpan.textContent = 'Merekam...';
        startBtn.disabled = true;
        stopBtn.disabled = false;
    };
    recognition.onend = () => {
        isRecording = false;
        statusSpan.textContent = 'Siap';
        startBtn.disabled = false;
        stopBtn.disabled = true;
    };
    recognition.onerror = (event) => {
        statusSpan.textContent = 'Terjadi kesalahan: ' + event.error;
        isRecording = false;
        startBtn.disabled = false;
        stopBtn.disabled = true;
    };
    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        resultTextDiv.textContent = transcript;
        const cmp = comparePhrases(phrases[currentPhraseIndex].en, transcript);
        if (cmp.match) {
            feedbackDiv.innerHTML = `<span style=\"color:green\">Cocok! Pengucapan Anda sudah benar. (Akurasi: 100%)</span>`;
            updateAccuracyChart(100);
        } else {
            feedbackDiv.innerHTML = `<span style=\"color:red\">Tidak cocok. Coba lagi.</span><br>Petunjuk: ${cmp.feedback}<br><span style=\"color:blue\">Akurasi: ${cmp.accuracy}%</span><br><button id='replay-btn'>Putar Ulang Suara Benar</button>`;
            updateAccuracyChart(cmp.accuracy);
            playCorrectPronunciation(phrases[currentPhraseIndex].en);
            // Tambahkan event listener untuk tombol replay
            setTimeout(() => {
                const replayBtn = document.getElementById('replay-btn');
                if (replayBtn) {
                    replayBtn.onclick = () => playCorrectPronunciation(phrases[currentPhraseIndex].en);
                }
            }, 100);
        }
    };
}

// Fungsi untuk membacakan frasa target dengan suara
function playCorrectPronunciation(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.7; // Lebih lambat dari default
        // Pilih voice yang bagus untuk listening (misal: Google US English Female)
        const voices = window.speechSynthesis.getVoices();
        // Cari voice dengan nama yang mengandung 'Google US English' atau 'en-US' dan female
        let selectedVoice = voices.find(v => v.name.includes('Google US English') && v.lang === 'en-US');
        if (!selectedVoice) {
            // fallback: cari voice en-US female
            selectedVoice = voices.find(v => v.lang === 'en-US' && v.name.toLowerCase().includes('female'));
        }
        if (!selectedVoice) {
            // fallback: cari voice en-US apapun
            selectedVoice = voices.find(v => v.lang === 'en-US');
        }
        if (selectedVoice) {
            utterance.voice = selectedVoice;
        }
        window.speechSynthesis.speak(utterance);
    }
}

function updateAccuracyChart(accuracy) {
    let chart = document.getElementById('accuracy-chart');
    if (!chart) return;
    const ctx = chart.getContext('2d');
    ctx.clearRect(0, 0, chart.width, chart.height);
    // Draw background circle (abu-abu)
    ctx.beginPath();
    ctx.arc(35, 35, 28, 0, 2 * Math.PI);
    ctx.strokeStyle = '#eee';
    ctx.lineWidth = 10;
    ctx.stroke();
    // Draw accuracy arc (biru)
    const endAngle = (accuracy / 100) * 2 * Math.PI;
    ctx.beginPath();
    ctx.arc(35, 35, 28, -0.5 * Math.PI, endAngle - 0.5 * Math.PI);
    ctx.strokeStyle = '#1a73e8';
    ctx.lineWidth = 10;
    ctx.stroke();
    // Draw text persentase
    ctx.font = 'bold 16px Arial';
    ctx.fillStyle = '#222';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(accuracy + '%', 35, 35);
}

startBtn.addEventListener('click', () => {
    if (!recognition) return;
    recognition.start();
});

stopBtn.addEventListener('click', () => {
    if (!recognition) return;
    recognition.stop();
});

nextPhraseBtn.addEventListener('click', () => {
    nextPhrase();
});

// Inisialisasi
showPhrase(currentPhraseIndex);
initSpeechRecognition();
