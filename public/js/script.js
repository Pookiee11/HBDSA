const answers_no = {
    english: [
        "No",
        "Are you sure?",
        "What if I asked really nicely?",
        "Pretty pleaseeeee",
        "Please my lil pookie",
        "But :*(",
        "I am going to die Shayan",
        "Andddd I am dead",
        "Now you're talking to Khawla's ghost",
        "Birdie is sad",
        "I thought I was your gandu",
        "Why are you doing this to me?",
        "Please say yessssss",
        "I die without you Shayan janu",
        "Ok, Let's just start over.."
    ],
    urdu: [
        "Naah",
        "Soch le?",
        "Maan ja chootar",
        "Nae maanega?",
        "Na samjhun?",
        "Mai mar jaegi tere bagher",
        "Shayan meri jaaaannn",
        "Tujhe jaane na dungi",
        "Aaja aaja",
        "Tu hai pyar meraaaaa",
        "Ab tou haan bol de",
        "Mai teri birdieeeee",
        "Tu mera birdoooo",
        "Shayan kaka laka boom boom",
        "Chal phir se shuru karte hain"
    ]
};

answers_yes = {
    "english": "Yes",
    "urdu": "Haaan"
}

let language = "english"; // Default language is English
const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
let i = 1;
let size = 50;
let clicks = 0;

no_button.addEventListener('click', () => {
    // Change banner source
    let banner = document.getElementById('banner');
    if (clicks === 0) {
        banner.src = "public/images/naah.gif";
        refreshBanner();
    }
    clicks++;
    // increase button height and width gradually to 250px
    const sizes = [40, 50, 30, 35, 45]
    const random = Math.floor(Math.random() * sizes.length);
    size += sizes[random]
    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;
    let total = answers_no[language].length;
    // change button text
    if (i < total - 1) {
        no_button.innerHTML = answers_no[language][i];
        i++;
    } else if (i === total - 1) {
        alert(answers_no[language][i]);
        i = 1;
        no_button.innerHTML = answers_no[language][0];
        yes_button.innerHTML = answers_yes[language];
        yes_button.style.height = "50px";
        yes_button.style.width = "50px";
        size = 50;
    }
});

yes_button.addEventListener('click', () => {
    // change banner gif path
    let banner = document.getElementById('banner');
    banner.src = "public/images/yeahuh.gif";
    refreshBanner();
    // hide buttons div
    let buttons = document.getElementsByClassName('buttons')[0];
    buttons.style.display = "none";
    // show message div
    let message = document.getElementsByClassName('message')[0];
    message.style.display = "block";
});

function refreshBanner() {
    // Reload banner gif to force load  
    let banner = document.getElementById('banner');
    let src = banner.src;
    banner.src = '';
    banner.src = src;
}

function changeLanguage() {
    const selectElement = document.getElementById("language-select");
    const selectedLanguage = selectElement.value;
    language = selectedLanguage;

    // Update question heading
    const questionHeading = document.getElementById("question-heading");
    if (language === "urdu") {
        questionHeading.textContent = "Sab ne ye shor machaya hai Shayan ki salgirah ka din aaya hai!";
    } else {
        questionHeading.textContent = "Happy birthday to you! Will you be my boo?";
    }

    // Reset yes button text
    yes_button.innerHTML = answers_yes[language];

    // Reset button text to first in the new language
    if (clicks === 0) {
        no_button.innerHTML = answers_no[language][0];
    } else {
        no_button.innerHTML = answers_no[language][clicks];
    }

    // Update success message
    const successMessage = document.getElementById("success-message");
    if (language === "urdu") {
        successMessage.textContent = "Woohoo! Mujhe tujh se pyaar hua hai <3";
    } else {
        successMessage.textContent = "Yepppie, I love youuuuu <3";
    }
}