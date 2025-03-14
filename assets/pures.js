window.onload = async function () {
    let inputUser = document.querySelector('.textarea-ai');
    let send = document.getElementById('send-m');
    let chatContainer = document.querySelector('.chat');

    // Fungsi untuk memuat JSON dari file
    async function loadJsonData() {
        try {
            const response = await fetch('../assets/glightbox/css/css.json');
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error('Gagal mengambil data JSON:', error);
            return null;
        }
    }

    // Respons yang sudah didefinisikan
    const predefinedResponses = {
        "siapa yang membuatmu": "Saya dibuat oleh FkzsecXploit dari Leviathan404TeamCyber.",
        "kapan kamu dibuat": "Saya dibuat pada tahun 2024 untuk membantu pengguna dengan berbagai informasi.",
        "apa statusmu": "Saya adalah chatbot AI yang dikembangkan untuk membantu dalam berbagai hal.",
        "apa website resmi kamu": "Website resmi saya adalah https://leviathan404teamcyber.com",
        "siapa nama kamu": "Saya adalah Qwen AI, dibuat oleh FkzsecXploit.",
        "siapa fkzsecxploit": "FkzSecXploit adalah bagian dari Leviathan404TeamCyber dan aktif dalam dunia keamanan siber.",
        "fkzsecxploit dari mana": "FkzSecXploit berasal dari komunitas keamanan siber dan aktif di berbagai platform.",
        "apa tujuan fkzsecxploit": "Tujuan utama FkzSecXploit adalah mengeksplorasi keamanan web serta edukasi siber.",
        "fkzsecxploit tergabung di mana": "FkzSecXploit tergabung dalam Leviathan404TeamCyber dan komunitas terkait."
    };

    // Normalisasi input (hilangkan spasi ekstra dan ubah ke huruf kecil)
    function normalizeInput(input) {
        return input.toLowerCase().trim();
    }

    // Fungsi untuk menemukan kata kunci yang cocok dari sinonim JSON
    function findKeywordMatch(input, synonymData) {
        for (const keyword in synonymData) {
            if (synonymData[keyword].includes(input)) {
                return keyword;
            }
        }
        return null;
    }

    // Fungsi menambahkan pesan pengguna ke chat
    function addUserMessage(message) {
        let userMessageDiv = document.createElement('div');
        userMessageDiv.classList.add('user');
        userMessageDiv.innerHTML = `
            <div class="triangle2"></div>
            <div class="contoh-teks2">
                <p>${message}</p>
            </div>
            <img style="padding-left: 12px;" src="./images/user.png" alt="" width="auto" height="40">
        `;
        chatContainer.appendChild(userMessageDiv);
        scrollToBottom();
    }

    // Fungsi menambahkan respons AI ke chat
    function addAiMessage(message) {
        let aiMessageDiv = document.createElement('div');
        aiMessageDiv.classList.add('sapa');
        aiMessageDiv.innerHTML = `
            <img src="./images/ai.png" alt="" width="auto" height="40">
            <div class="triangle"></div>
            <div class="contoh-teks">
                <p>${message}</p>
            </div>`;
        chatContainer.appendChild(aiMessageDiv);
        scrollToBottom();
    }

    // Fungsi untuk scroll otomatis ke bawah
    function scrollToBottom() {
        setTimeout(() => {
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }, 100);
    }

    // Event listener saat tombol send diklik
    send.addEventListener('click', async () => {
        let userMessage = inputUser.value.trim();
        if (!userMessage) return;

        addUserMessage(userMessage);
        inputUser.value = "";

        let aiResponse = await sendMessageToAI(userMessage);
        addAiMessage(aiResponse);
    });

    // Fungsi untuk mengirim pesan ke AI
    async function sendMessageToAI(message) {
        const synonymData = await loadJsonData();
        if (!synonymData) return "Data tidak tersedia.";

        let normalizedMessage = normalizeInput(message);
        let matchedKeyword = findKeywordMatch(normalizedMessage, synonymData);

        if (matchedKeyword && predefinedResponses[matchedKeyword]) {
            return predefinedResponses[matchedKeyword];
        }

        return "Maaf, saya tidak mengerti pertanyaan Anda.";
    }

    // Event listener untuk enter pada input
    inputUser.addEventListener('keydown', async (e) => {
        if (e.key === "Enter" && inputUser.value.trim()) {
            e.preventDefault();
            send.click();
        }
    });
};
