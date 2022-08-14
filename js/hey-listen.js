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
var transcript = '';
// ==============================        MICRO              ===============================

microphone.addEventListener('click', function () {
    recognition.start();
    textarea.innerHTML = '...speaking';
})
recognition.onresult = function (e) {
    console.log(e);
    transcript = e.results[0][0].transcript;
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
    // transcript = input.value;
    textarea.innerHTML = input.value;

})
inputText.addEventListener('input', debounce(e => {
    KW = `${textarea.innerHTML}`
    keyWordsCheck();
    console.log(KW);
}, 1000));


// =======================================DIALOGUE FUNCTIONS=======================================
let currentArray = '';
let defaultArray = [];
let greetingsArray = ["what's up", "oh, hello, how have you been?", "what's up, player", "hey, how are you?", "hi there", "hey there", "hey, how is it going?", "oh, hello there", "yes, hello", "greetings to you", "make it rain, let's go!", "wow, you're so brave, hi, let's talk",];
let weatherArray = ["Why don't you ask Siri about it?", "Just look outside and you'll know", "Open the window and stick out your hand to feel it yourself", "I think it's cloudy", "I have no idea", "I haven't the foggiest idea",];

function getRandoms(array) {
    random_answer = Math.floor(Math.random() * array.length);
    testRandomNumber = array[random_answer];
    sayItBitch(array[random_answer]);
    // array.splice(random_answer, 1);
};
function defaultResponse() {
    o1 = `Did you say ${KW}I'm not sure I have an answer for that`;
    o2 = `Hold up, did you just say${KW}`;
    o3 = `What do you want me to respond to ${KW}`;
    o4 = `Can you say something better than${KW}?`;
    o5 = `Don't ask me to respond to ${KW}`;
    o6 = `Well, I'm not sure about that, but did you say${KW}?`;
    o7 = `What do you mean by${KW}?`;
    o8 = `Tell your mom about ${KW}?`;
    o9 = `Hold on, I'm gonna need some help with${KW}, could you expand on it please?`;
    o10 = `Do you think it's encouraging to hear${KW}from you?`;
    o11 = `I'm pretty sure you can do better than${KW}`;
    o12 = `${KW}? Are you serious?`;
    o13 = `${KW}This is exactly what I told your mom when we broke up`;
    o14 = `${KW} - My dog told me the same thing last night`;
    o15 = `You've just said ${KW}, well that's pretty sad`;
    o16 = `${KW}, um... try again`;
    o17 = `Um...${KW}? This is not what I'd like to talk to you about`;
    o18 = `${KW}? Um... I don't get it, but nice try anyway`;
    o19 = `Um... Do you say'${KW}'to everybody?`;
    o20 = `${KW}, how interesting`;
    o21 = `${KW}? Tell me more about it`;
    o22 = `${KW} - This is exactly what I said at my cat's funeral`;
    o23 = `Wow! ${KW}, really? I need to analyze this for a moment`;
    o24 = `My brain is going to explode if I hear '${KW}' again`



    defaultArray = [o1, o2, o3, o4, o5, o6, o7, o8, o9, o10, o11, o12, o13, o14, o15, o16, o17, o18, o19, o20, o21, o22, o23, o24,]
    getRandoms(defaultArray);
}
function keyWordsCheck() {
    if (KW.includes('hello') || KW.includes('hi') || KW.includes('morning') || KW.includes('afternoon') || KW.includes('evening') || KW.includes("WhatsApp")) {
        getRandoms(greetingsArray);
    } else if ((KW.includes('how') || KW.includes('what') || KW.includes('tell')) && KW.includes('weather')) {
        getRandoms(weatherArray);
    } else if ((KW.includes('my') || KW.includes("I'm") || KW.includes('tell')) && KW.includes('name')) {
        getRandoms(weatherArray);
    } else { defaultResponse() }
};





// function testCallback(question, who, connection, mark1, verb, style, time, sentence) {
//     questionWord.innerHTML = `${question}`
//     changeSubject(who);
//     connectionWord.innerHTML = `${connection}`
//     changeMark(mark1)
//     verbPic.src = `${verbsFolder}${verb}`
//     changeBodyStyle(style);
//     changeVerb(verb);
//     timeMarker.innerHTML = `${time}`
//     textSolution.innerHTML = `${sentence}`
//     currentSentence = sentence;
//     if (mark1 === "1.png") {
//         fuckingShit = '1';
//     } else { fuckingShit = '2' }
// };
// function generateSentence() {
//     if (currentArray === ' ') {
//         getRandoms(randomNumbersAll);
//     } else if (currentArray === 'greetings') {
//         getRandoms(presentArray);
//     } else if (currentArray === 'Past') {
//         getRandoms(pastArray);
//     } else if (currentArray === 'Future') {
//         getRandoms(futureArray)
//     } else if (currentArray === 'questions') {
//         getRandoms(questionsArray)
//     } else if (currentArray === 'negatives') {
//         getRandoms(negativesArray)
//     } else {
//         getRandoms(affirmativeArray)
//     }
//     testSimple();
// }