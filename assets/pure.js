// window.onload = function () {
//     let input_user = document.querySelector('.textarea-ai');
//     let send = document.getElementById('send-m');
//     let chatContainer = document.querySelector('.chat');

//     const synonymMap = {
//         "siapa yang membuatmu": [
//             "sopo sing gawe koe", "spkah kmu buat", "siapa creator mu", "who made u", "kamu dari siapa",
//             "who is your creator", "who made you", "siapa pembuat kamu", "pencipta mu siapa",
//             "lu dibuat siapa", "sapa gawe koe", "谁创造了你", "quién te creó", "qui t'a créé",
//             "من صنعك", "кто тебя создал", "ki moun ki te kreye ou", "who programmed you",
//             "who designed you", "who is your developer", "kto cię stworzył", "kimi yaptı",
//             "siapa coder kamu", "dari mana asalmu", "sapa sing nggawe sampeyan", "kepribadianmu dari mana",
//             "あなたを作ったのは誰ですか", "quem te criou", "o teu criador quem é", "tko te stvorio",
//             "senin yaratıcın kim", "napravio te tko", "kto jest twoim twórcą", "cu cine ai fost creat",
//             "quale è il tuo creatore", "kdo tě vytvořil", "누가 너를 만들었어", "谁编写了你的代码"
//         ],
//         "kapan kamu dibuat": [
//             "kmu lahir kapan", "di buat taun piro", "lahir di taun piro", "umur mu brp", "umurmu berapa",
//             "you were created when", "when were you born", "lahir kapan", "kamu dibuat tahun berapa",
//             "umur kmu skrg", "berapa umurmu", "tahun pembuatanmu kapan", "lahirnya kapan",
//             "你什么时候诞生的", "quand es-tu né", "cuándo naciste", "когда ты был создан",
//             "коли тебе зробили", "何時你出生", "คุณเกิดเมื่อไหร่", "tum kab bane", "tôi được tạo ra khi nào",
//             "se hizo cuando", "في أي عام وُلدت", "quel âge as-tu", "wie alt bist du", "quando sei stato creato",
//             "quando foste criado", "ne zaman doğdun", "koji datum si rođen", "kada si stvoren",
//             "kada si napravljen", "quando eri stato creato", "mikor hoztak létre", "коли ти був створений"
//         ],
//         "apa statusmu": [
//             "kondisimu piye", "keadaanmu gimana", "lagi sibuk ga", "aktif gak", "lagi on ga",
//             "are you online", "are you busy", "kamu lagi apa", "status mu apa", "lagi ngapain",
//             "lagi apa", "lagi off ga", "lagi sibuk ga", "how are you", "are you active",
//             "kamu masih online?", "saat ini lagi apa?", "bagaimana keadaanmu?", "你现在怎样？",
//             "estás activo?", "quelle est ta condition?", "kaisa hai tu", "σε τι κατάσταση είσαι",
//             "أنت مشغول الآن؟", "dabar esi prisijungęs?", "hogy vagy?", "cum stai?",
//             "kas tavo statusas?", "er du opptatt?", "estás ocupado?", "sei connesso?",
//             "du bist online?", "estás en línea?", "mikä on tilasi?", "cos'è il tuo stato?"
//         ],
//         "apa website resmi kamu": [
//             "situs kmu", "web kmu", "url mu", "link resmi", "official website", "situs resmi",
//             "kamu punya website gak", "apa link resmi mu", "website mu apa", "web resmimu mana",
//             "link official mu apa", "website mu apa", "tautan resmimu apa", "你的官方站点是什么",
//             "cuál es tu sitio web oficial", "quel est ton site officiel", "ما هو موقعك الرسمي",
//             "kay site web ofisyèl ou", "что такое твой официальный сайт", "ما هو عنوان موقعك",
//             "τα δικά σου ιστοσελίδα τι είναι", "websitenizi paylaşabilir misiniz?", "tvoje webové stránky jaké jsou?",
//             "da mi dai il tuo sito web ufficiale?", "ne tvoj interneta vietne kāda?", "wat is jouw officiële website?"
//         ],
//         "siapa nama kamu": [
//             "nama lo sopo", "km nma sapa", "siapa nama lu", "who are u", "lu siapa", "namamu siapa",
//             "namamu apa", "kamu siapa", "kamu namanya apa", "nama panggilan kamu siapa",
//             "kamu dipanggil siapa", "nama lo siapa", "你叫什么名字", "cómo te llamas",
//             "quel est ton nom", "ما هو اسمك", "quale è il tuo nome", "senin adın ne",
//             "какое у тебя имя", "あなたの名前は何ですか", "vad heter du?", "hva heter du?",
//             "wie heißt du?", "qual é o seu nome?", "mikä on nimesi?", "tvoje meno je čo?",
//             "tvoje ime je šta?", "あなたの名前を教えてください", "je naam wat is?", "ti chiamano come?"
//         ],
//         "siapa fkzsecxploit": [
//             "apa itu FkzSecXploit",
//             "siapa yang punya fkzsecxploit",
//             "fkzsecxploit itu siapa",
//             "FkzSec itu apa",
//             "ceritakan tentang fkzsecxploit",
//             "fkzsec siapa",
//             "profil fkzsecxploit",
//             "apa itu ./fkzsecxploit.dev",
//             "siapa yang menjalankan fkzsecxploit",
//             "fkzsecxploit siapa",
//             "fkzsecxploit team mana",
//             "who is fkzsecxploit",
//             "what is fkzsecxploit",
//             "who owns fkzsecxploit",
//             "who created fkzsecxploit",
//             "ما هو fkzsecxploit",
//             "quem é o fkzsecxploit",
//             "qui est fkzsecxploit",
//             "fkzsecxploit adalah siapa"
//         ],
//         "fkzsecxploit dari mana": [
//             "fkzsecxploit berasal dari mana",
//             "dimana fkzsecxploit berada",
//             "asal usul fkzsecxploit",
//             "fkzsecxploit base dimana",
//             "fkzsecxploit lokasinya di mana",
//             "fkzsecxploit dari negara mana",
//             "fkzsecxploit dari kota mana",
//             "fkzsecxploit team berasal dari mana",
//             "dari mana asal fkzsecxploit",
//             "fkzsecxploit where from",
//             "fkzsecxploit team location",
//             "fkzsecxploit comes from"
//         ],
//         "apa tujuan fkzsecxploit": [
//             "tujuan dari fkzsecxploit",
//             "visi misi fkzsecxploit",
//             "apa tujuan tim fkzsecxploit",
//             "apa yang dilakukan fkzsecxploit",
//             "mengapa fkzsecxploit dibuat",
//             "what is fkzsecxploit's purpose",
//             "fkzsecxploit objective",
//             "intention of fkzsecxploit",
//             "misión de fkzsecxploit",
//             "le but de fkzsecxploit"
//         ],
//         "fkzsecxploit tergabung di mana": [
//             "tim fkzsecxploit gabung dengan siapa",
//             "fkzsecxploit ada di grup apa",
//             "fkzsecxploit afiliasi dengan siapa",
//             "fkzsecxploit bekerja sama dengan siapa",
//             "fkzsecxploit berhubungan dengan siapa",
//             "fkzsecxploit team affiliation",
//             "fkzsecxploit is part of which group",
//             "fkzsecxploit's alliances",
//             "fkzsecxploit connection with other teams"
//         ]
//     };
    
//     const predefinedResponses = {
//         "siapa yang membuatmu": "Saya dibuat oleh FkzsecXploit dari Leviathan404TeamCyber.",
//         "kapan kamu dibuat": "Saya dibuat pada tahun 2024 untuk membantu pengguna dengan berbagai informasi.",
//         "apa statusmu": "Saya adalah chatbot AI yang dikembangkan untuk membantu dalam berbagai hal.",
//         "apa website resmi kamu": "Website resmi saya adalah https://leviathan404teamcyber.com",
//         "siapa nama kamu": "Saya adalah Qwen AI, dibuat oleh FkzsecXploit.",
//         "siapa fkzsecxploit": 
//             "FkzSecXploit adalah seorang individu atau tim yang merupakan bagian dari Leviathan404TeamCyber. Mereka dikenal dalam dunia keamanan siber dan memiliki rekam jejak dalam defacement serta peretasan situs web. FkzSecXploit juga memiliki beberapa proyek teknologi terkait dengan keamanan siber dan web development.",
        
//         "fkzsecxploit dari mana": 
//             "FkzSecXploit berasal dari komunitas keamanan siber dan merupakan bagian dari Leviathan404TeamCyber. Mereka aktif di berbagai platform seperti Defacer ID, Telegram, dan YouTube, serta memiliki pengaruh dalam dunia peretasan situs web global.",

//         "apa tujuan fkzsecxploit": 
//             "Tujuan utama FkzSecXploit adalah mengeksplorasi celah keamanan pada situs web serta mengedukasi komunitas mengenai keamanan siber. Selain itu, mereka juga terlibat dalam berbagai proyek yang berhubungan dengan pengembangan web dan eksploitasi keamanan.",

//         "fkzsecxploit tergabung di mana": 
//             "FkzSecXploit tergabung dalam Leviathan404TeamCyber dan memiliki koneksi dengan komunitas peretas lainnya. Mereka aktif di beberapa situs dan forum seperti Defacer ID, Defacer Mirror, dan memiliki kehadiran di platform sosial seperti Telegram dan YouTube."
//     };
    
//     function normalizeInput(input) {
//         input = input.toLowerCase().trim();
//         for (const key in synonymMap) {
//             if (synonymMap[key].some(phrase => input.includes(phrase))) {
//                 return key; // Balikin pertanyaan standar
//             }
//         }
//         return input;
//     }
    
//     function levenshteinDistance(s1, s2) {
//         const len1 = s1.length;
//         const len2 = s2.length;
//         let matrix = Array(len1 + 1).fill().map(() => Array(len2 + 1).fill(0));
    
//         for (let i = 0; i <= len1; i++) matrix[i][0] = i;
//         for (let j = 0; j <= len2; j++) matrix[0][j] = j;
    
//         for (let i = 1; i <= len1; i++) {
//             for (let j = 1; j <= len2; j++) {
//                 let cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
//                 matrix[i][j] = Math.min(
//                     matrix[i - 1][j] + 1, 
//                     matrix[i][j - 1] + 1,
//                     matrix[i - 1][j - 1] + cost 
//                 );
//             }
//         }
//         return matrix[len1][len2];
//     }
//     function findClosestMatch(input) {
//         let minDistance = Infinity;
//         let bestMatch = null;
    
//         for (const key in predefinedResponses) {
//             let distance = levenshteinDistance(input, key);
//             if (distance < minDistance) {
//                 minDistance = distance;
//                 bestMatch = key;
//             }
//         }
    
//         return minDistance <= 3 ? bestMatch : null; 
//     }
//     if (!chatContainer) {
//         console.error("Error: Elemen .chat tidak ditemukan.");
//         return;
//     }
//     function scrollToBottom() {
//         setTimeout(() => {
//             chatContainer.scrollTop = chatContainer.scrollHeight;
//         }, 100);
//     }
//     function addUserMessage(message) {
//         let userMessageDiv = document.createElement('div');
//         userMessageDiv.classList.add('user');
//         userMessageDiv.innerHTML = `
//             <div class="contoh-teks2">
//                 <p>${message}</p>
//             </div>
//             <img style="padding-left: 12px;" src="./images/user.png" alt="" width="auto" height="40">
//         `;
//         chatContainer.appendChild(userMessageDiv);
//         scrollToBottom();
//     }
//     function addAiMessage(message) {
//         let aiMessageDiv = document.createElement('div');
//         aiMessageDiv.classList.add('sapa');
//         aiMessageDiv.innerHTML = `
//             <img src="./images/ai.png" alt="" width="auto" height="40">
//             <div class="contoh-teks">
//                 <p>${message}</p>
//             </div>`;
//         chatContainer.appendChild(aiMessageDiv);
//         scrollToBottom();
//     }
//     send.addEventListener('click', async () => {
//         let userMessage = input_user.value.trim();
//         if (!userMessage) return;

//         addUserMessage(userMessage);
//         input_user.value = "";

//         let aiResponse = await sendMessageToAI(userMessage);
//         addAiMessage(aiResponse);
//     });

//     async function sendMessageToAI(message) {
//         const normalizedMessage = normalizeInput(message);
//         if (predefinedResponses[normalizedMessage]) {
//             return predefinedResponses[normalizedMessage];
//         }
//         let bestMatch = findClosestMatch(normalizedMessage);
//         if (bestMatch) {
//             return predefinedResponses[bestMatch];
//         }
//         try {
//             const response = await fetch("http://localhost:3000/ai", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({ prompt: message })
//             });
    
//             if (!response.ok) {
//                 throw new Error(`Server error: ${response.status}`);
//             }
    
//             const data = await response.json();
//             return data.message || "AI tidak memberikan jawaban.";
    
//         } catch (error) {
//             console.error("Error saat menghubungi backend:", error);
//             return "Maaf, terjadi kesalahan saat menghubungi AI.";
//         }
//     }
    

//     input_user.addEventListener('keydown', async (e) => {
//         if (e.key === "Enter" && input_user.value.trim()) {
//             e.preventDefault();
//             send.click(); 
//         }
//     });
// };
window.onload = function () {
    let input_user = document.querySelector('.textarea-ai');
    let send = document.getElementById('send-m');
    let chatContainer = document.querySelector('.chat');

    const synonymMap = {
        "siapa yang membuatmu": [
            "sopo sing gawe koe", "spkah kmu buat", "siapa creator mu", "who made u", "kamu dari siapa",
            "who is your creator", "who made you", "siapa pembuat kamu", "pencipta mu siapa",
            "lu dibuat siapa", "sapa gawe koe", "谁创造了你", "quién te creó", "qui t'a créé",
            "من صنعك", "кто тебя создал", "ki moun ki te kreye ou", "who programmed you",
            "who designed you", "who is your developer", "kto cię stworzył", "kimi yaptı",
            "siapa coder kamu", "dari mana asalmu", "sapa sing nggawe sampeyan", "kepribadianmu dari mana",
            "あなたを作ったのは誰ですか", "quem te criou", "o teu criador quem é", "tko te stvorio",
            "senin yaratıcın kim", "napravio te tko", "kto jest twoim twórcą", "cu cine ai fost creat",
            "quale è il tuo creatore", "kdo tě vytvořil", "누가 너를 만들었어", "谁编写了你的代码"
        ],
        "kapan kamu dibuat": [
            "kmu lahir kapan", "di buat taun piro", "lahir di taun piro", "umur mu brp", "umurmu berapa",
            "you were created when", "when were you born", "lahir kapan", "kamu dibuat tahun berapa",
            "umur kmu skrg", "berapa umurmu", "tahun pembuatanmu kapan", "lahirnya kapan",
            "你什么时候诞生的", "quand es-tu né", "cuándo naciste", "когда ты был создан",
            "коли тебе зробили", "何時你出生", "คุณเกิดเมื่อไหร่", "tum kab bane", "tôi được tạo ra khi nào",
            "se hizo cuando", "في أي عام وُلدت", "quel âge as-tu", "wie alt bist du", "quando sei stato creato",
            "quando foste criado", "ne zaman doğdun", "koji datum si rođen", "kada si stvoren",
            "kada si napravljen", "quando eri stato creato", "mikor hoztak létre", "коли ти був створений"
        ],
        "apa statusmu": [
            "kondisimu piye", "keadaanmu gimana", "lagi sibuk ga", "aktif gak", "lagi on ga",
            "are you online", "are you busy", "kamu lagi apa", "status mu apa", "lagi ngapain",
            "lagi apa", "lagi off ga", "lagi sibuk ga", "how are you", "are you active",
            "kamu masih online?", "saat ini lagi apa?", "bagaimana keadaanmu?", "你现在怎样？",
            "estás activo?", "quelle est ta condition?", "kaisa hai tu", "σε τι κατάσταση είσαι",
            "أنت مشغول الآن؟", "dabar esi prisijungęs?", "hogy vagy?", "cum stai?",
            "kas tavo statusas?", "er du opptatt?", "estás ocupado?", "sei connesso?",
            "du bist online?", "estás en línea?", "mikä on tilasi?", "cos'è il tuo stato?"
        ],
        "apa website resmi kamu": [
            "situs kmu", "web kmu", "url mu", "link resmi", "official website", "situs resmi",
            "kamu punya website gak", "apa link resmi mu", "website mu apa", "web resmimu mana",
            "link official mu apa", "website mu apa", "tautan resmimu apa", "你的官方站点是什么",
            "cuál es tu sitio web oficial", "quel est ton site officiel", "ما هو موقعك الرسمي",
            "kay site web ofisyèl ou", "что такое твой официальный сайт", "ما هو عنوان موقعك",
            "τα δικά σου ιστοσελίδα τι είναι", "websitenizi paylaşabilir misiniz?", "tvoje webové stránky jaké jsou?",
            "da mi dai il tuo sito web ufficiale?", "ne tvoj interneta vietne kāda?", "wat is jouw officiële website?"
        ],
        "siapa nama kamu": [
            "nama lo sopo", "km nma sapa", "siapa nama lu", "who are u", "lu siapa", "namamu siapa",
            "namamu apa", "kamu siapa", "kamu namanya apa", "nama panggilan kamu siapa",
            "kamu dipanggil siapa", "nama lo siapa", "你叫什么名字", "cómo te llamas",
            "quel est ton nom", "ما هو اسمك", "quale è il tuo nome", "senin adın ne",
            "какое у тебя имя", "あなたの名前は何ですか", "vad heter du?", "hva heter du?",
            "wie heißt du?", "qual é o seu nome?", "mikä on nimesi?", "tvoje meno je čo?",
            "tvoje ime je šta?", "あなたの名前を教えてください", "je naam wat is?", "ti chiamano come?"
        ],
        "siapa fkzsecxploit": [
            "apa itu FkzSecXploit",
            "siapa yang punya fkzsecxploit",
            "fkzsecxploit itu siapa",
            "FkzSec itu apa",
            "ceritakan tentang fkzsecxploit",
            "fkzsec siapa",
            "profil fkzsecxploit",
            "apa itu ./fkzsecxploit.dev",
            "siapa yang menjalankan fkzsecxploit",
            "fkzsecxploit siapa",
            "fkzsecxploit team mana",
            "who is fkzsecxploit",
            "what is fkzsecxploit",
            "who owns fkzsecxploit",
            "who created fkzsecxploit",
            "ما هو fkzsecxploit",
            "quem é o fkzsecxploit",
            "qui est fkzsecxploit",
            "fkzsecxploit adalah siapa"
        ],
        "fkzsecxploit dari mana": [
            "fkzsecxploit berasal dari mana",
            "dimana fkzsecxploit berada",
            "asal usul fkzsecxploit",
            "fkzsecxploit base dimana",
            "fkzsecxploit lokasinya di mana",
            "fkzsecxploit dari negara mana",
            "fkzsecxploit dari kota mana",
            "fkzsecxploit team berasal dari mana",
            "dari mana asal fkzsecxploit",
            "fkzsecxploit where from",
            "fkzsecxploit team location",
            "fkzsecxploit comes from"
        ],
        "apa tujuan fkzsecxploit": [
            "tujuan dari fkzsecxploit",
            "visi misi fkzsecxploit",
            "apa tujuan tim fkzsecxploit",
            "apa yang dilakukan fkzsecxploit",
            "mengapa fkzsecxploit dibuat",
            "what is fkzsecxploit's purpose",
            "fkzsecxploit objective",
            "intention of fkzsecxploit",
            "misión de fkzsecxploit",
            "le but de fkzsecxploit"
        ],
        "fkzsecxploit tergabung di mana": [
            "tim fkzsecxploit gabung dengan siapa",
            "fkzsecxploit ada di grup apa",
            "fkzsecxploit afiliasi dengan siapa",
            "fkzsecxploit bekerja sama dengan siapa",
            "fkzsecxploit berhubungan dengan siapa",
            "fkzsecxploit team affiliation",
            "fkzsecxploit is part of which group",
            "fkzsecxploit's alliances",
            "fkzsecxploit connection with other teams"
        ]
    };
    
    const predefinedResponses = {
        "siapa yang membuatmu": "Saya dibuat oleh FkzsecXploit dari Leviathan404TeamCyber.",
        "kapan kamu dibuat": "Saya dibuat pada tahun 2024 untuk membantu pengguna dengan berbagai informasi.",
        "apa statusmu": "Saya adalah chatbot AI yang dikembangkan untuk membantu dalam berbagai hal.",
        "apa website resmi kamu": "Website resmi saya adalah https://leviathan404teamcyber.com",
        "siapa nama kamu": "Saya adalah Qwen AI, dibuat oleh FkzsecXploit.",
        "siapa fkzsecxploit": 
            "FkzSecXploit adalah seorang individu atau tim yang merupakan bagian dari Leviathan404TeamCyber. Mereka dikenal dalam dunia keamanan siber dan memiliki rekam jejak dalam defacement serta peretasan situs web. FkzSecXploit juga memiliki beberapa proyek teknologi terkait dengan keamanan siber dan web development.",
        
        "fkzsecxploit dari mana": 
            "FkzSecXploit berasal dari komunitas keamanan siber dan merupakan bagian dari Leviathan404TeamCyber. Mereka aktif di berbagai platform seperti Defacer ID, Telegram, dan YouTube, serta memiliki pengaruh dalam dunia peretasan situs web global.",

        "apa tujuan fkzsecxploit": 
            "Tujuan utama FkzSecXploit adalah mengeksplorasi celah keamanan pada situs web serta mengedukasi komunitas mengenai keamanan siber. Selain itu, mereka juga terlibat dalam berbagai proyek yang berhubungan dengan pengembangan web dan eksploitasi keamanan.",

        "fkzsecxploit tergabung di mana": 
            "FkzSecXploit tergabung dalam Leviathan404TeamCyber dan memiliki koneksi dengan komunitas peretas lainnya. Mereka aktif di beberapa situs dan forum seperti Defacer ID, Defacer Mirror, dan memiliki kehadiran di platform sosial seperti Telegram dan YouTube."
    };
    
    function normalizeInput(input) {
        input = input.toLowerCase().trim();
        for (const key in synonymMap) {
            if (synonymMap[key].some(phrase => input.includes(phrase))) {
                return key;
            }
        }
        return input;
    }
    
    function levenshteinDistance(s1, s2) {
        const len1 = s1.length;
        const len2 = s2.length;
        let matrix = Array(len1 + 1).fill().map(() => Array(len2 + 1).fill(0));
    
        for (let i = 0; i <= len1; i++) matrix[i][0] = i;
        for (let j = 0; j <= len2; j++) matrix[0][j] = j;
    
        for (let i = 1; i <= len1; i++) {
            for (let j = 1; j <= len2; j++) {
                let cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
                matrix[i][j] = Math.min(
                    matrix[i - 1][j] + 1, 
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j - 1] + cost 
                );
            }
        }
        return matrix[len1][len2];
    }
    function findClosestMatch(input) {
        let minDistance = Infinity;
        let bestMatch = null;
    
        for (const key in predefinedResponses) {
            let distance = levenshteinDistance(input, key);
            if (distance < minDistance) {
                minDistance = distance;
                bestMatch = key;
            }
        }
    
        return minDistance <= 3 ? bestMatch : null; 
    }
    if (!chatContainer) {
        console.error("Error: Elemen .chat tidak ditemukan.");
        return;
    }
    function scrollToBottom() {
        setTimeout(() => {
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }, 100);
    }
    function addUserMessage(message) {
        let userMessageDiv = document.createElement('div');
        userMessageDiv.classList.add('user');
        userMessageDiv.innerHTML = `
            <div class="contoh-teks2">
                <p>${message}</p>
            </div>
            <img style="padding-left: 12px;" src="./images/user.png" alt="" width="auto" height="40">
        `;
        chatContainer.appendChild(userMessageDiv);
        scrollToBottom();
    }
    function addAiMessage(message) {
        let aiMessageDiv = document.createElement('div');
        aiMessageDiv.classList.add('sapa');
        aiMessageDiv.innerHTML = `
            <img src="./images/ai.png" alt="" width="auto" height="40">
            <div class="contoh-teks">
                <p>${message}</p>
            </div>`;
        chatContainer.appendChild(aiMessageDiv);
        scrollToBottom();
    }
    send.addEventListener('click', async () => {
        let userMessage = input_user.value.trim();
        if (!userMessage) return;

        addUserMessage(userMessage);
        input_user.value = "";

        let aiResponse = await sendMessageToAI(userMessage);
        addAiMessage(aiResponse);
    });

    async function sendMessageToAI(message) {
        const normalizedMessage = normalizeInput(message);
        if (predefinedResponses[normalizedMessage]) {
            return predefinedResponses[normalizedMessage];
        }
        let bestMatch = findClosestMatch(normalizedMessage);
        if (bestMatch) {
            return predefinedResponses[bestMatch];
        }
        try {
            const response = await fetch("https://api-backend-three-kappa.vercel.app/api/ai", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ prompt: message })
            });
    
            if (!response.ok) {
                throw new Error(`Server error: ${response.status}`);
            }
    
            const data = await response.json();
            return data.message || "AI tidak memberikan jawaban.";
    
        } catch (error) {
            console.error("Error saat menghubungi backend:", error);
            return "Maaf, terjadi kesalahan saat menghubungi AI.";
        }
    }
    

    input_user.addEventListener('keydown', async (e) => {
        if (e.key === "Enter" && input_user.value.trim()) {
            e.preventDefault();
            send.click(); 
        }
    });
};
