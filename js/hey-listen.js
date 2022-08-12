var textarea = document.getElementById('text_area');
var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
recognition.lang = 'en-En';

const microphone = document.getElementById('microphone');
const currentSentence = '';


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
input.addEventListener('keydown', function (event) {
    if (event.code === 'Enter') {
        input.value = '';
    }
})
// input.addEventListener('input', () => {
//     transcript = input.value;
//     textarea.innerHTML = input.value;
//     // checkTest();
// })

const input = document.getElementById('input');

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


// =======================================DIALOGUE FUNCTIONS=======================================
function keyWordsCheck() {
    if (textarea.innerHTML.includes('hello')) {
        sayItBitch('how have you been my king');
    }
}