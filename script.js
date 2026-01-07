// ===================================
// AGE CALCULATOR PRO - ENHANCED VERSION
// Features: Real-time updates, zodiac, theme switching, multilingual
// ===================================

// ===============================
// 1. TRANSLATIONS DATABASE
// ===============================
const translations = {
    en: {
        main_title: "Age Calculator & Personality Hub Pro",
        subtitle: "Discover your age, birthday twins, and personality matches",
        age_calc_title: "Age Calculator",
        enter_dob: "Enter Your Date of Birth",
        dob_help: "Select your birth date to calculate your age",
        add_photo: "Add Photo",
        years: "Years",
        months: "Months",
        days: "Days",
        hours: "Hours",
        minutes: "Minutes",
        seconds: "Seconds",
        zodiac: "Zodiac Sign",
        born_on: "Born on",
        next_birthday: "Next Birthday",
        share: "Share",
        export: "Export PDF",
        birthday_twins: "Your Birthday Twins",
        famous_placeholder: "Enter your date of birth above to find famous people who share your birthday!",
        mbti_title: "MBTI Personality Matcher",
        select_mbti: "Select Your MBTI Type",
        choose_personality: "-- Choose your personality type --",
        mbti_help: "Not sure? Take a free test online!",
        privacy_note: "Data is processed locally. No information is stored.",
        exact_match: "🎉 Exact Birthday Match!",
        same_month: "🌟 Born in the Same Month",
        no_match: "No famous birthdays found for your date. You're one of a kind! ✨",
        days_left: "days left",
        day_today: "Today is your birthday! 🎉",
        anime_title: "📺 Recommended Anime",
        movies_title: "🎬 Recommended Movies",
        celebrities_title: "⭐ Famous People with",
        born_label: "Born:"
    },
    uz: {
        main_title: "Yosh Kalkulatori & Shaxsiyat Markazi Pro",
        subtitle: "Yoshingizni, tug'ilgan kuningiz egalarini va shaxsiyat mosliklarini toping",
        age_calc_title: "Yosh Kalkulatori",
        enter_dob: "Tug'ilgan Kuningizni Kiriting",
        dob_help: "Yoshingizni hisoblash uchun tug'ilgan sanangizni tanlang",
        add_photo: "Rasm Qo'shish",
        years: "Yil",
        months: "Oy",
        days: "Kun",
        hours: "Soat",
        minutes: "Daqiqa",
        seconds: "Soniya",
        zodiac: "Burj Belgisi",
        born_on: "Tug'ilgan kun",
        next_birthday: "Keyingi Tug'ilgan Kun",
        share: "Ulashish",
        export: "PDF Yuklab Olish",
        birthday_twins: "Sizning Tug'ilgan Kun Egasingiz",
        famous_placeholder: "Yuqorida tug'ilgan kuningizni kiriting va mashhur odamlarni toping!",
        mbti_title: "MBTI Shaxsiyat Moslashtiruvchi",
        select_mbti: "MBTI Turingizni Tanlang",
        choose_personality: "-- Shaxsiyat turini tanlang --",
        mbti_help: "Bilmaysizmi? Onlayn bepul test topshiring!",
        privacy_note: "Ma'lumotlar mahalliy qayta ishlanadi. Hech narsa saqlanmaydi.",
        exact_match: "🎉 Bir xil tug'ilgan kun topildi!",
        same_month: "🌟 Bir oyda tug'ilganlar",
        no_match: "Sizning sanangizda mashhur shaxslar topilmadi. Siz noyobsiz! ✨",
        days_left: "kun qoldi",
        day_today: "Bugun sizning tug'ilgan kuningiz! 🎉",
        anime_title: "📺 Tavsiya Etilgan Anime",
        movies_title: "🎬 Tavsiya Etilgan Filmlar",
        celebrities_title: "⭐ Mashhur Odamlar",
        born_label: "Tug'ilgan:"
    }
};

let currentLang = 'en';

// ===============================
// 2. DATABASE: FAMOUS PEOPLE (EXPANDED)
// ===============================
const famousPeople = [
    // January
    { name: "Muhammad Ali", profession: "Boxer & Activist", month: 1, day: 17 },
    { name: "Oprah Winfrey", profession: "Media Mogul", month: 1, day: 29 },
    { name: "Ellen DeGeneres", profession: "Comedian & TV Host", month: 1, day: 26 },
    { name: "Martin Luther King Jr.", profession: "Civil Rights Leader", month: 1, day: 15 },
    { name: "Isaac Asimov", profession: "Sci-Fi Author", month: 1, day: 2 },
    
    // February
    { name: "Steve Jobs", profession: "Tech Entrepreneur", month: 2, day: 24 },
    { name: "Rihanna", profession: "Singer & Entrepreneur", month: 2, day: 20 },
    { name: "Michael Jordan", profession: "Basketball Legend", month: 2, day: 17 },
    { name: "Cristiano Ronaldo", profession: "Football Legend", month: 2, day: 5 },
    { name: "Charles Darwin", profession: "Naturalist", month: 2, day: 12 },
    
    // March
    { name: "Albert Einstein", profession: "Physicist", month: 3, day: 14 },
    { name: "Lady Gaga", profession: "Singer & Actress", month: 3, day: 28 },
    { name: "Bruce Willis", profession: "Actor", month: 3, day: 19 },
    { name: "Vincent van Gogh", profession: "Painter", month: 3, day: 30 },
    
    // April
    { name: "Leonardo da Vinci", profession: "Artist & Inventor", month: 4, day: 15 },
    { name: "Queen Elizabeth II", profession: "British Monarch", month: 4, day: 21 },
    { name: "Robert Downey Jr.", profession: "Actor", month: 4, day: 4 },
    { name: "William Shakespeare", profession: "Playwright", month: 4, day: 23 },
    
    // May
    { name: "Sigmund Freud", profession: "Psychologist", month: 5, day: 6 },
    { name: "Adele", profession: "Singer", month: 5, day: 5 },
    { name: "George Clooney", profession: "Actor & Director", month: 5, day: 6 },
    { name: "Mark Zuckerberg", profession: "Tech Entrepreneur", month: 5, day: 14 },
    
    // June
    { name: "Marilyn Monroe", profession: "Actress & Icon", month: 6, day: 1 },
    { name: "Elon Musk", profession: "Tech Entrepreneur", month: 6, day: 28 },
    { name: "Angelina Jolie", profession: "Actress & Humanitarian", month: 6, day: 4 },
    { name: "Lionel Messi", profession: "Football Legend", month: 6, day: 24 },
    
    // July
    { name: "Nelson Mandela", profession: "Anti-Apartheid Leader", month: 7, day: 18 },
    { name: "Tom Cruise", profession: "Actor", month: 7, day: 3 },
    { name: "J.K. Rowling", profession: "Author", month: 7, day: 31 },
    { name: "Nikola Tesla", profession: "Inventor", month: 7, day: 10 },
    
    // August
    { name: "Barack Obama", profession: "44th US President", month: 8, day: 4 },
    { name: "Mother Teresa", profession: "Humanitarian", month: 8, day: 26 },
    { name: "Bill Clinton", profession: "42nd US President", month: 8, day: 19 },
    { name: "Napoleon Bonaparte", profession: "French Emperor", month: 8, day: 15 },
    
    // September
    { name: "Beyoncé", profession: "Singer & Performer", month: 9, day: 4 },
    { name: "Keanu Reeves", profession: "Actor", month: 9, day: 2 },
    { name: "Stephen King", profession: "Author", month: 9, day: 21 },
    { name: "Freddie Mercury", profession: "Singer", month: 9, day: 5 },
    
    // October
    { name: "Bill Gates", profession: "Tech Entrepreneur", month: 10, day: 28 },
    { name: "Mahatma Gandhi", profession: "Independence Leader", month: 10, day: 2 },
    { name: "Kim Kardashian", profession: "Media Personality", month: 10, day: 21 },
    { name: "Pablo Picasso", profession: "Artist", month: 10, day: 25 },
    
    // November
    { name: "Marie Curie", profession: "Physicist & Chemist", month: 11, day: 7 },
    { name: "Leonardo DiCaprio", profession: "Actor & Environmentalist", month: 11, day: 11 },
    { name: "Mark Twain", profession: "Author", month: 11, day: 30 },
    { name: "Scarlett Johansson", profession: "Actress", month: 11, day: 22 },
    
    // December
    { name: "Walt Disney", profession: "Animator & Entrepreneur", month: 12, day: 5 },
    { name: "Taylor Swift", profession: "Singer-Songwriter", month: 12, day: 13 },
    { name: "Isaac Newton", profession: "Mathematician & Physicist", month: 12, day: 25 },
    { name: "Brad Pitt", profession: "Actor", month: 12, day: 18 }
];

// ===============================
// 3. DATABASE: MBTI RECOMMENDATIONS
// ===============================
const mbtiData = {
    INTJ: {
        anime: ["Death Note", "Code Geass", "Steins;Gate", "Psycho-Pass"],
        movies: ["Inception", "The Dark Knight", "Interstellar", "The Matrix"],
        celebrities: ["Elon Musk", "Isaac Newton", "Friedrich Nietzsche", "Christopher Nolan"]
    },
    INTP: {
        anime: ["Steins;Gate", "Serial Experiments Lain", "Monster", "Ergo Proxy"],
        movies: ["Primer", "The Prestige", "Ex Machina", "Arrival"],
        celebrities: ["Albert Einstein", "Bill Gates", "Tina Fey", "Kristen Stewart"]
    },
    ENTJ: {
        anime: ["Code Geass", "Legend of the Galactic Heroes", "Death Note", "Overlord"],
        movies: ["The Wolf of Wall Street", "The Social Network", "Jobs", "Moneyball"],
        celebrities: ["Steve Jobs", "Margaret Thatcher", "Gordon Ramsay", "Napoleon Bonaparte"]
    },
    ENTP: {
        anime: ["One Punch Man", "Cowboy Bebop", "Great Teacher Onizuka", "Gintama"],
        movies: ["Fight Club", "Ocean's Eleven", "Iron Man", "Catch Me If You Can"],
        celebrities: ["Tony Stark", "Mark Twain", "Leonardo da Vinci", "Sacha Baron Cohen"]
    },
    INFJ: {
        anime: ["Neon Genesis Evangelion", "Your Name", "Violet Evergarden", "March Comes in Like a Lion"],
        movies: ["The Green Mile", "Schindler's List", "A Beautiful Mind", "The Pursuit of Happyness"],
        celebrities: ["Martin Luther King Jr.", "Nelson Mandela", "Mahatma Gandhi", "Lady Gaga"]
    },
    INFP: {
        anime: ["Clannad", "Your Lie in April", "A Silent Voice", "Mushishi"],
        movies: ["Amélie", "Eternal Sunshine of the Spotless Mind", "Dead Poets Society", "Her"],
        celebrities: ["J.R.R. Tolkien", "William Shakespeare", "Audrey Hepburn", "Johnny Depp"]
    },
    ENFJ: {
        anime: ["My Hero Academia", "Haikyuu!!", "Fruits Basket", "Little Witch Academia"],
        movies: ["Dead Poets Society", "Freedom Writers", "The King's Speech", "Remember the Titans"],
        celebrities: ["Oprah Winfrey", "Barack Obama", "Maya Angelou", "Martin Luther King Jr."]
    },
    ENFP: {
        anime: ["Soul Eater", "Ouran High School Host Club", "The Melancholy of Haruhi Suzumiya", "K-On!"],
        movies: ["Inside Out", "Forrest Gump", "Big Fish", "About Time"],
        celebrities: ["Robin Williams", "Ellen DeGeneres", "Robert Downey Jr.", "Will Smith"]
    },
    ISTJ: {
        anime: ["Fullmetal Alchemist", "Attack on Titan", "Parasyte", "Mobile Suit Gundam"],
        movies: ["Saving Private Ryan", "Apollo 13", "The Accountant", "Sully"],
        celebrities: ["George Washington", "Queen Elizabeth II", "Warren Buffett", "Natalie Portman"]
    },
    ISFJ: {
        anime: ["Barakamon", "Silver Spoon", "Usagi Drop", "My Neighbor Totoro"],
        movies: ["The Sound of Music", "Forrest Gump", "The Help", "Julie & Julia"],
        celebrities: ["Mother Teresa", "Kate Middleton", "Jimmy Carter", "Beyoncé"]
    },
    ESTJ: {
        anime: ["One Piece", "Hunter x Hunter", "Sword Art Online", "Naruto"],
        movies: ["The Godfather", "The Departed", "Top Gun", "Gladiator"],
        celebrities: ["Donald Trump", "Judge Judy", "John D. Rockefeller", "Frank Sinatra"]
    },
    ESFJ: {
        anime: ["Kimi ni Todoke", "Toradora!", "Anohana", "Chihayafuru"],
        movies: ["The Blind Side", "Mean Girls", "Legally Blonde", "The Proposal"],
        celebrities: ["Taylor Swift", "Jennifer Garner", "Bill Clinton", "Danny Glover"]
    },
    ISTP: {
        anime: ["Cowboy Bebop", "Samurai Champloo", "Black Lagoon", "Berserk"],
        movies: ["Mad Max: Fury Road", "John Wick", "Drive", "Baby Driver"],
        celebrities: ["Clint Eastwood", "Tom Cruise", "Bear Grylls", "Michael Jordan"]
    },
    ISFP: {
        anime: ["Your Name", "A Silent Voice", "The Garden of Words", "Wolf Children"],
        movies: ["La La Land", "Into the Wild", "The Secret Life of Walter Mitty", "Juno"],
        celebrities: ["Michael Jackson", "Marilyn Monroe", "Britney Spears", "Rihanna"]
    },
    ESTP: {
        anime: ["One Punch Man", "Hajime no Ippo", "Megalo Box", "Redline"],
        movies: ["The Fast and the Furious", "Mission Impossible", "Point Break", "The Bourne Identity"],
        celebrities: ["Bruce Willis", "Madonna", "Eddie Murphy", "Samuel L. Jackson"]
    },
    ESFP: {
        anime: ["Ouran High School Host Club", "Fairy Tail", "One Piece", "Assassination Classroom"],
        movies: ["The Devil Wears Prada", "Pitch Perfect", "Mamma Mia!", "Zoolander"],
        celebrities: ["Marilyn Monroe", "Jamie Foxx", "Serena Williams", "Miley Cyrus"]
    }
};

// ===============================
// 4. ZODIAC SIGNS DATA
// ===============================
const zodiacSigns = [
    { name: "Capricorn ♑", start: [12, 22], end: [1, 19] },
    { name: "Aquarius ♒", start: [1, 20], end: [2, 18] },
    { name: "Pisces ♓", start: [2, 19], end: [3, 20] },
    { name: "Aries ♈", start: [3, 21], end: [4, 19] },
    { name: "Taurus ♉", start: [4, 20], end: [5, 20] },
    { name: "Gemini ♊", start: [5, 21], end: [6, 20] },
    { name: "Cancer ♋", start: [6, 21], end: [7, 22] },
    { name: "Leo ♌", start: [7, 23], end: [8, 22] },
    { name: "Virgo ♍", start: [8, 23], end: [9, 22] },
    { name: "Libra ♎", start: [9, 23], end: [10, 22] },
    { name: "Scorpio ♏", start: [10, 23], end: [11, 21] },
    { name: "Sagittarius ♐", start: [11, 22], end: [12, 21] }
];

// ===============================
// 5. DOM ELEMENTS
// ===============================
const dobInput = document.getElementById('dob-input');
const yearsEl = document.getElementById('years');
const monthsEl = document.getElementById('months');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const zodiacEl = document.getElementById('zodiac');
const dayNameEl = document.getElementById('day-name');
const daysUntilEl = document.getElementById('days-until');
const famousResults = document.getElementById('famous-results');
const mbtiSelect = document.getElementById('mbti-select');
const mbtiResults = document.getElementById('mbti-results');
const themeToggle = document.getElementById('theme-toggle');
const shareBtn = document.getElementById('share-btn');
const exportBtn = document.getElementById('export-btn');
const picUpload = document.getElementById('pic-upload');
const profilePic = document.getElementById('profile-pic');
const langBtns = document.querySelectorAll('.lang-btn');

// ===============================
// 6. INITIALIZE
// ===============================
const today = new Date().toISOString().split('T')[0];
dobInput.setAttribute('max', today);

// Set default profile pic
profilePic.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="120" height="120"%3E%3Crect width="120" height="120" fill="%23667eea"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="48" fill="white"%3E👤%3C/text%3E%3C/svg%3E';

// Load saved data from localStorage
loadFromStorage();

// ===============================
// 7. THEME SWITCHING
// ===============================
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const icon = themeToggle.querySelector('.theme-icon');
    
    if (document.body.classList.contains('light-theme')) {
        icon.textContent = '☀️';
        localStorage.setItem('theme', 'light');
    } else {
        icon.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
    }
});

// Load saved theme
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-theme');
    themeToggle.querySelector('.theme-icon').textContent = '☀️';
}

// ===============================
// 8. LANGUAGE SWITCHING
// ===============================
langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        langBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentLang = btn.dataset.lang;
        updateLanguage();
        localStorage.setItem('language', currentLang);
    });
});

function updateLanguage() {
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.dataset.translate;
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });
    
    // Re-render if data exists
    if (dobInput.value) {
        const birthDate = new Date(dobInput.value);
        const month = birthDate.getMonth() + 1;
        const day = birthDate.getDate();
        
        // Update day name
        dayNameEl.textContent = getDayName(dobInput.value);
        
        // Update days until birthday
        const daysLeft = getDaysUntilBirthday(dobInput.value);
        if (daysLeft === 0) {
            daysUntilEl.textContent = translations[currentLang].day_today;
        } else {
            daysUntilEl.textContent = `${daysLeft} ${translations[currentLang].days_left}`;
        }
        
        // Update famous people
        const matches = findFamousPeople(month, day);
        displayFamousPeople(matches);
    }
    
    if (mbtiSelect.value) {
        displayMBTI(mbtiSelect.value);
    }
}

// Load saved language
const savedLang = localStorage.getItem('language');
if (savedLang) {
    currentLang = savedLang;
    langBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });
    updateLanguage();
}

// ===============================
// 9. PROFILE PICTURE UPLOAD
// ===============================
picUpload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            profilePic.src = event.target.result;
            localStorage.setItem('profilePic', event.target.result);
        };
        reader.readAsDataURL(file);
    }
});

// ===============================
// 10. AGE CALCULATION (Real-time)
// ===============================
let ageInterval;

function calculateAge(birthDate) {
    const now = new Date();
    const birth = new Date(birthDate);
    
    let years = now.getFullYear() - birth.getFullYear();
    let months = now.getMonth() - birth.getMonth();
    let days = now.getDate() - birth.getDate();
    
    if (days < 0) {
        months--;
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
    }
    
    if (months < 0) {
        years--;
        months += 12;
    }
    
    // Calculate hours, minutes, seconds
    const totalMs = now - birth;
    const hours = Math.floor(totalMs / (1000 * 60 * 60));
    const minutes = Math.floor(totalMs / (1000 * 60));
    const seconds = Math.floor(totalMs / 1000);
    
    return { years, months, days, hours, minutes, seconds };
}

function updateAgeRealtime() {
    if (!dobInput.value) return;
    
    const age = calculateAge(dobInput.value);
    yearsEl.textContent = age.years.toLocaleString();
    monthsEl.textContent = age.months;
    daysEl.textContent = age.days;
    hoursEl.textContent = age.hours.toLocaleString();
    minutesEl.textContent = age.minutes.toLocaleString();
    secondsEl.textContent = age.seconds.toLocaleString();
}

// ===============================
// 11. ZODIAC CALCULATION
// ===============================
function getZodiacSign(month, day) {
    for (const sign of zodiacSigns) {
        const [startMonth, startDay] = sign.start;
        const [endMonth, endDay] = sign.end;
        
        if (startMonth > endMonth) {
            // Capricorn case (Dec 22 - Jan 19)
            if ((month === startMonth && day >= startDay) || (month === endMonth && day <= endDay)) {
                return sign.name;
            }
        } else {
            // Normal case
            if ((month === startMonth && day >= startDay) || 
                (month === endMonth && day <= endDay) ||
                (month > startMonth && month < endMonth)) {
                return sign.name;
            }
        }
    }
    return "Unknown";
}

// ===============================
// 12. DAY NAME CALCULATION
// ===============================
function getDayName(date) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const daysUz = ['Yakshanba', 'Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba'];
    const dayIndex = new Date(date).getDay();
    return currentLang === 'uz' ? daysUz[dayIndex] : days[dayIndex];
}

// ===============================
// 13. DAYS UNTIL NEXT BIRTHDAY
// ===============================
function getDaysUntilBirthday(birthDate) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const birth = new Date(birthDate);
    const thisYear = today.getFullYear();
    
    let nextBirthday = new Date(thisYear, birth.getMonth(), birth.getDate());
    nextBirthday.setHours(0, 0, 0, 0);
    
    if (nextBirthday < today) {
        nextBirthday = new Date(thisYear + 1, birth.getMonth(), birth.getDate());
    }
    
    // Check if today is birthday
    if (today.getTime() === nextBirthday.getTime()) {
        return 0;
    }
    
    const diffTime = nextBirthday - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays;
}

// ===============================
// 14. FIND FAMOUS PEOPLE
// ===============================
function findFamousPeople(month, day) {
    const exactMatches = famousPeople.filter(person => 
        person.month === month && person.day === day
    );
    
    const sameMonthMatches = famousPeople.filter(person => 
        person.month === month && !(person.day === day)
    );
    
    return {
        exact: exactMatches,
        sameMonth: sameMonthMatches.slice(0, 5)
    };
}

// ===============================
// 15. DISPLAY FAMOUS PEOPLE
// ===============================
function displayFamousPeople(matches) {
    let html = '';
    
    if (matches.exact.length > 0) {
        html += `<h3 style="color: #43e97b; margin-bottom: 1rem;">${translations[currentLang].exact_match}</h3>`;
        matches.exact.forEach(person => {
            html += `
                <div class="famous-person">
                    <div class="famous-name">${person.name}</div>
                    <div class="famous-profession">${person.profession}</div>
                    <div class="famous-birth">${translations[currentLang].born_label} ${getMonthName(person.month)} ${person.day}</div>
                </div>
            `;
        });
    }
    
    if (matches.sameMonth.length > 0 && matches.exact.length === 0) {
        html += `<h3 style="color: #4facfe; margin-bottom: 1rem;">${translations[currentLang].same_month}</h3>`;
        matches.sameMonth.forEach(person => {
            html += `
                <div class="famous-person">
                    <div class="famous-name">${person.name}</div>
                    <div class="famous-profession">${person.profession}</div>
                    <div class="famous-birth">${translations[currentLang].born_label} ${getMonthName(person.month)} ${person.day}</div>
                </div>
            `;
        });
    }
    
    if (matches.exact.length === 0 && matches.sameMonth.length === 0) {
        html = `<p class="placeholder-text">${translations[currentLang].no_match}</p>`;
    }
    
    famousResults.innerHTML = html;
}

// ===============================
// 16. HELPER: GET MONTH NAME
// ===============================
function getMonthName(monthNum) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
                   'July', 'August', 'September', 'October', 'November', 'December'];
    return months[monthNum - 1];
}

// ===============================
// 17. DISPLAY MBTI RECOMMENDATIONS
// ===============================
function displayMBTI(type) {
    const data = mbtiData[type];
    
    if (!data) {
        mbtiResults.innerHTML = '';
        return;
    }
    
    const html = `
        <div class="mbti-category">
            <h3 class="category-title">${translations[currentLang].anime_title}</h3>
            <div class="mbti-grid">
                ${data.anime.map(item => `<div class="mbti-item">${item}</div>`).join('')}
            </div>
        </div>
        
        <div class="mbti-category">
            <h3 class="category-title">${translations[currentLang].movies_title}</h3>
            <div class="mbti-grid">
                ${data.movies.map(item => `<div class="mbti-item">${item}</div>`).join('')}
            </div>
        </div>
        
        <div class="mbti-category">
            <h3 class="category-title">${translations[currentLang].celebrities_title} ${type}</h3>
            <div class="mbti-grid">
                ${data.celebrities.map(item => `<div class="mbti-item">${item}</div>`).join('')}
            </div>
        </div>
    `;
    
    mbtiResults.innerHTML = html;
}

// ===============================
// 18. EVENT LISTENER: DATE INPUT
// ===============================
dobInput.addEventListener('input', function() {
    const dateValue = this.value;
    
    if (!dateValue) {
        yearsEl.textContent = '-';
        monthsEl.textContent = '-';
        daysEl.textContent = '-';
        hoursEl.textContent = '-';
        minutesEl.textContent = '-';
        secondsEl.textContent = '-';
        zodiacEl.textContent = '-';
        dayNameEl.textContent = '-';
        daysUntilEl.textContent = '-';
        famousResults.innerHTML = `<p class="placeholder-text">${translations[currentLang].famous_placeholder}</p>`;
        
        if (ageInterval) {
            clearInterval(ageInterval);
            ageInterval = null;
        }
        return;
    }
    
    // Save to localStorage
    localStorage.setItem('dob', dateValue);
    
    // Initial calculation
    updateAgeRealtime();
    
    // Start real-time updates
    if (ageInterval) {
        clearInterval(ageInterval);
    }
    ageInterval = setInterval(updateAgeRealtime, 1000);
    
    // Calculate additional info
    const birthDate = new Date(dateValue);
    const month = birthDate.getMonth() + 1;
    const day = birthDate.getDate();
    
    // Zodiac sign
    zodiacEl.textContent = getZodiacSign(month, day);
    
    // Day name
    dayNameEl.textContent = getDayName(dateValue);
    
    // Days until birthday
    const daysLeft = getDaysUntilBirthday(dateValue);
    if (daysLeft === 0) {
        daysUntilEl.textContent = translations[currentLang].day_today;
    } else {
        daysUntilEl.textContent = `${daysLeft} ${translations[currentLang].days_left}`;
    }
    
    // Find and display famous people
    const matches = findFamousPeople(month, day);
    displayFamousPeople(matches);
});

// ===============================
// 19. EVENT LISTENER: MBTI SELECT
// ===============================
mbtiSelect.addEventListener('change', function() {
    const selectedType = this.value;
    
    if (!selectedType) {
        mbtiResults.innerHTML = '';
        return;
    }
    
    localStorage.setItem('mbti', selectedType);
    displayMBTI(selectedType);
});

// ===============================
// 20. SHARE FUNCTIONALITY
// ===============================
shareBtn.addEventListener('click', async () => {
    if (!dobInput.value) {
        const msg = currentLang === 'uz' ? 
            'Iltimos, avval tug\'ilgan kuningizni kiriting!' : 
            'Please enter your date of birth first!';
        alert(msg);
        return;
    }
    
    const age = calculateAge(dobInput.value);
    const shareText = currentLang === 'uz' ?
        `Men ${age.years} yoshdaman! 🎂\nBu ajoyib Yosh Kalkulatorini sinab ko'ring!` :
        `I'm ${age.years} years old! 🎂\nCheck out this amazing Age Calculator & Personality Hub!`;
    
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'Age Calculator Pro',
                text: shareText,
                url: window.location.href
            });
        } catch (err) {
            if (err.name !== 'AbortError') {
                console.log('Share error:', err);
            }
        }
    } else {
        // Fallback: Copy to clipboard
        try {
            await navigator.clipboard.writeText(shareText + '\n' + window.location.href);
            const msg = currentLang === 'uz' ? 
                'Havola nusxalandi! 📋' : 
                'Link copied to clipboard! 📋';
            alert(msg);
        } catch (err) {
            console.log('Clipboard error:', err);
            const msg = currentLang === 'uz' ? 
                'Ulashish imkoni yo\'q' : 
                'Share not available';
            alert(msg);
        }
    }
});

// ===============================
// 21. EXPORT TO PDF (HTML File)
// ===============================
exportBtn.addEventListener('click', () => {
    if (!dobInput.value) {
        const msg = currentLang === 'uz' ? 
            'Iltimos, avval tug\'ilgan kuningizni kiriting!' : 
            'Please enter your date of birth first!';
        alert(msg);
        return;
    }
    
    const age = calculateAge(dobInput.value);
    const birthDate = new Date(dobInput.value);
    const month = birthDate.getMonth() + 1;
    const day = birthDate.getDate();
    
    const title = currentLang === 'uz' ? 'Yosh Kalkulatori Hisoboti' : 'Age Calculator Report';
    const yourAge = currentLang === 'uz' ? 'Sizning Yoshingiz' : 'Your Age';
    const additionalInfo = currentLang === 'uz' ? 'Qo\'shimcha Ma\'lumot' : 'Additional Information';
    const inNumbers = currentLang === 'uz' ? 'Raqamlarda' : 'In Numbers';
    const generated = currentLang === 'uz' ? 'Yaratilgan' : 'Generated by';
    const dateLabel = currentLang === 'uz' ? 'Sana' : 'Date';
    
    const pdfContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>${title}</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 40px auto;
            padding: 20px;
            color: #333;
        }
        h1 {
            color: #667eea;
            text-align: center;
            border-bottom: 3px solid #667eea;
            padding-bottom: 10px;
        }
        .section {
            margin: 30px 0;
            padding: 20px;
            background: #f5f7fa;
            border-radius: 10px;
        }
        .info-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin: 20px 0;
        }
        .info-item {
            text-align: center;
            padding: 15px;
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .info-value {
            font-size: 2em;
            font-weight: bold;
            color: #667eea;
        }
        .info-label {
            font-size: 0.9em;
            color: #666;
            text-transform: uppercase;
        }
        .footer {
            text-align: center;
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
            color: #999;
        }
    </style>
</head>
<body>
    <h1>🎂 ${title}</h1>
    
    <div class="section">
        <h2>${yourAge}</h2>
        <div class="info-grid">
            <div class="info-item">
                <div class="info-value">${age.years}</div>
                <div class="info-label">${translations[currentLang].years}</div>
            </div>
            <div class="info-item">
                <div class="info-value">${age.months}</div>
                <div class="info-label">${translations[currentLang].months}</div>
            </div>
            <div class="info-item">
                <div class="info-value">${age.days}</div>
                <div class="info-label">${translations[currentLang].days}</div>
            </div>
        </div>
    </div>
    
    <div class="section">
        <h2>${additionalInfo}</h2>
        <p><strong>${translations[currentLang].enter_dob}:</strong> ${dobInput.value}</p>
        <p><strong>${translations[currentLang].born_on}:</strong> ${getDayName(dobInput.value)}</p>
        <p><strong>${translations[currentLang].zodiac}:</strong> ${getZodiacSign(month, day)}</p>
        <p><strong>${translations[currentLang].next_birthday}:</strong> ${getDaysUntilBirthday(dobInput.value)} ${translations[currentLang].days_left}</p>
    </div>
    
    <div class="section">
        <h2>${inNumbers}</h2>
        <p><strong>${translations[currentLang].hours}:</strong> ${age.hours.toLocaleString()}</p>
        <p><strong>${translations[currentLang].minutes}:</strong> ${age.minutes.toLocaleString()}</p>
        <p><strong>${translations[currentLang].seconds}:</strong> ${age.seconds.toLocaleString()}</p>
    </div>
    
    <div class="footer">
        <p>${generated} Age Calculator Pro © 2025</p>
        <p>${dateLabel}: ${new Date().toLocaleDateString()}</p>
    </div>
</body>
</html>
    `;
    
    const blob = new Blob([pdfContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `age-report-${new Date().getTime()}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});

// ===============================
// 22. LOCALSTORAGE FUNCTIONS
// ===============================
function loadFromStorage() {
    // Load saved DOB
    const savedDob = localStorage.getItem('dob');
    if (savedDob) {
        dobInput.value = savedDob;
        dobInput.dispatchEvent(new Event('input'));
    }
    
    // Load saved MBTI
    const savedMbti = localStorage.getItem('mbti');
    if (savedMbti) {
        mbtiSelect.value = savedMbti;
        displayMBTI(savedMbti);
    }
    
    // Load saved profile pic
    const savedPic = localStorage.getItem('profilePic');
    if (savedPic) {
        profilePic.src = savedPic;
    }
}

// ===============================
// 23. CLEANUP ON PAGE UNLOAD
// ===============================
window.addEventListener('beforeunload', () => {
    if (ageInterval) {
        clearInterval(ageInterval);
    }
});

// ===============================
// 24. INITIALIZE ON LOAD
// ===============================
console.log('🎉 Age Calculator Pro initialized successfully!');
console.log('📊 Database loaded:', famousPeople.length, 'famous people');
console.log('🧠 MBTI types available:', Object.keys(mbtiData).length);
console.log('🌟 Zodiac signs:', zodiacSigns.length);
console.log('🌍 Languages:', Object.keys(translations).length);