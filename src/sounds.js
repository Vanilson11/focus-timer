export const elementAudio = document.querySelectorAll('.audio');

export const forestSound = new Audio('./assets/Floresta.wav');

export const rainSound = new Audio('./assets/Chuva.wav');

export const coffeAudio = new Audio('./assets/Cafeteria.wav');

export const fireAudio = new Audio('./assets/Lareira.wav');

export const buttonPressAudio = new Audio('./assets/button-press.wav');

export const kichenTimerAudio = new Audio('./assets/kichen-timer.mp3');

export const allAudios = [forestSound, rainSound, coffeAudio, fireAudio];

forestSound.loop = true;
rainSound.loop = true;
coffeAudio.loop = true;
fireAudio.loop = true;