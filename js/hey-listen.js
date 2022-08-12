var textarea = document.getElementById('text_area');
var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
recognition.lang = 'en-En';

const microphone = document.getElementById('microphone');
const currentSentence = '';
const inputText = document.getElementById('input');

// ============================DEBOUNCE======================
const debounce = (fn, delay) => {
    let timeoutID;
    return function (...args) {
        if (timeoutID) {
            clearTimeout(timeoutID);
        }
        timeoutID = setTimeout(() => {
            fn(...args)
        }, delay)
    }
}

// ==============================        MICRO              ===============================

microphone.addEventListener('click', function () {
    recognition.start();
    textarea.innerHTML = '...speaking';
})
recognition.onresult = function (e) {
    console.log(e);
    var transcript = e.results[0][0].transcript;
    transcript.innerHTML = transcript;
    textarea.innerHTML = transcript;
}
// speak.addEventListener('click', function () {
//     speak.style.background = 'red';
//     recognition.start();
//     textarea.innerHTML = '...speaking';
// });
// recognition.onresult = function (e) {
//     console.log(e);
//     var transcript = e.results[0][0].transcript;
//     transcript.innerHTML = transcript.toUpperCase();
//     textarea.innerHTML = transcript.toUpperCase();
//     if (secondVerb.style.boxShadow === PrSStyle) {
//         checkPrSTest();
//     } else {
//         checkFSTest();
//     }
// }
// input.addEventListener('input', () => {
//     transcript = input.value;
//     textarea.innerHTML = input.value;
//     // checkTest();
// })


// ===================================SPEECH========================
// var voices = window.speechSynthesis.getVoices();
var speech = new SpeechSynthesisUtterance();
speech.volume = 1;
speech.lang = 'en-US';
// speech.name = 'Google US English'
speech.rate = 1;
speech.pitch = 1;
// speech.voice = window.speechSynthesis.getVoices()[6];
var voiceName = 'Google US English'
console.log(speech);

for (let i = 0; i < window.speechSynthesis.getVoices().length; i++) {
    if (window.speechSynthesis.getVoices()[i].voiceURI.search(voiceName) != -1) {
        speech.voice = window.speechSynthesis.getVoices()[i];
    }
}
setTimeout(function () {
    for (let i = 0; i < window.speechSynthesis.getVoices().length; i++) {
        if (window.speechSynthesis.getVoices()[i].voiceURI.search(voiceName) != -1) {
            speech.voice = window.speechSynthesis.getVoices()[i];
        }
    }
}, 2000);

function sayItBitch(answer) {
    speech.text = answer;
    window.speechSynthesis.speak(speech);
    // speechSynthesis.speak(new SpeechSynthesisUtterance(`${currentSentence}`))
}

// =============================  input  =========================

// inputText.addEventListener('keydown', function (event) {
//     if (event.code === 'Enter') {
//         input.value = '';
//     }
// })
let KW = '';
inputText.addEventListener('input', () => {
    // transcript = input.value.toUpperCase();
    transcript = input.value;
    textarea.innerHTML = input.value;
})
inputText.addEventListener('input', debounce(e => {
    KW = `${textarea.innerHTML}`
    keyWordsCheck();
    console.log(KW);
}, 1000));

// let KW = ''
// function (word) {
//     keyWords.includes(word)
//     KW = word;
// }

// function setKeyWords(catchWords) {
//     if (textarea.innerHTML.includes(`${catchWords}`))
//         keyWords = catchWords;
//     console.log(keyWords);
// } 
// =======================================DIALOGUE FUNCTIONS=======================================
function keyWordsCheck() {
    if (KW.includes('hello') || KW.includes('hi') || KW.includes('morning') || KW.includes('afternoon') || KW.includes('evening')) {
        sayItBitch("What's up");
    }
}