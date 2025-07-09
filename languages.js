const keyboardLayouts = {
    en: {
        name: "English",
        layout: [
            "1234567890-=",
            "qwertyuiop[]",
            "asdfghjkl;'",
            "zxcvbnm,./"
        ],
        emoji: "🇬🇧",
        rtl: false,
        specialChars: []
    },
    no: {
        name: "Norsk",
        layout: [
            "1234567890+\\",
            "qwertyuiopåø",
            "asdfghjklæø'",
            "zxcvbnm,.-"
        ],
        emoji: "🇳🇴",
        rtl: false,
        specialChars: ['æ', 'ø', 'å']
    },
    so: {
        name: "Soomaali",
        layout: [
            "1234567890-=",
            "qwertyuiop[]",
            "asdfghjkl;'",
            "zxcvbnm,./"
        ],
        specialChars: ["'", "c", "x", "q"],
        emoji: "🇸🇴",
        rtl: false
    },
    ar: {
        name: "العربية",
        layout: [
            "ذ1234567890-=",
            "ضصثقفغعهخحجد",
            "شسيبلاتنمكط",
            "ئءؤرﻻىةوزظ"
        ],
        emoji: "🇸🇦",
        rtl: true,
        specialChars: []
    }
};
