let play = document.querySelector("#play-button");
let vol = document.querySelector("#level");
let volLabel = document.querySelector("label");
let next = document.querySelector("#next");
let prev = document.querySelector("#prev");
let info = document.querySelector("#info");
let source = document.querySelector("source");
let img = document.querySelector("#thumbnail");
let audio = document.querySelector("audio");
let current = localStorage.getItem("current") == null ? 0 : +localStorage.getItem("current");
let lifeTimeMeter = document.querySelector("#progress");
let lifeTime = document.querySelector("#time-display");

let music = [
    {
        "src": "./audio/0.mp3",
        "info": "Marwan Pablo - BONO",
        "thumbnail": "./photo/0.png"
    },
    {
        "src": "./audio/1.mp3",
        "info": "Marwan Pablo - LELLEY YAH",
        "thumbnail": "./photo/1.png"
    },
    {
        "src": "./audio/2.mp3",
        "info": "Wegz - El WA3D",
        "thumbnail": "./photo/2.png"
    },
    {
        "src": "./audio/3.mp3",
        "info": "Abyusif - SWLGN",
        "thumbnail": "./photo/3.png"
    }
];

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function playNext() {
    current = (current == music.length - 1) ? 0 : current + 1;
    localStorage.setItem("current", current + "");
    source.setAttribute("src", music[current]["src"]);
    info.textContent = music[current]["info"];
    img.classList.add("fade");
    setTimeout(() => {
        img.setAttribute("src", music[current]["thumbnail"]);
        img.classList.remove("fade");
    }, 300);
    audio.load();
    if (play.classList.contains("fa-pause"))
        audio.play();
}

function playPrev() {
    current = (current == 0) ? music.length - 1 : current - 1;
    localStorage.setItem("current", current + "");
    source.setAttribute("src", music[current]["src"]);
    info.textContent = music[current]["info"];
    img.classList.add("fade");
    setTimeout(() => {
        img.setAttribute("src", music[current]["thumbnail"]);
        img.classList.remove("fade");
    }, 300);
    audio.load();
    if (play.classList.contains("fa-pause"))
        audio.play();
}

if (localStorage.getItem("volume") == null)
    localStorage.setItem("volume", vol.value);

vol.value = localStorage.getItem("volume");
volLabel.textContent = vol.value + "%";
audio.volume = (+vol.value) * 0.01;
source.setAttribute("src", music[current]["src"]);
info.textContent = music[current]["info"];
img.setAttribute("src", music[current]["thumbnail"]);
audio.load();

play.onclick = () => {
    if (play.classList.contains("fa-play")) {
        if (vol.value != "")
            audio.volume = (+vol.value) * 0.01;
        audio.play();
        play.classList.remove("fa-play");
        play.classList.add("fa-pause");
    } else {
        audio.pause();
        play.classList.remove("fa-pause");
        play.classList.add("fa-play");
    }
};

next.onclick = () => {
    playNext();
};

prev.onclick = () => {
    playPrev();
};

audio.onloadedmetadata = () => {
    lifeTimeMeter.max = audio.duration;
    lifeTimeMeter.value = 0;
    lifeTime.textContent = `00:00 / ${formatTime(audio.duration)}`;
};

audio.ontimeupdate = () => {
    lifeTimeMeter.value = audio.currentTime;
    lifeTime.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
    if (audio.duration == audio.currentTime)
        playNext();
};

lifeTimeMeter.oninput = () => {
    audio.currentTime = lifeTimeMeter.value;
};

vol.oninput = () => {
    audio.volume = (+vol.value) * 0.01;
    localStorage.setItem("volume", vol.value);
    volLabel.textContent = vol.value + "%";
};