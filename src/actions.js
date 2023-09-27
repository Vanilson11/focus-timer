import { state } from "./state.js";
import * as timer from './timer.js';
import * as el from './elements.js';
import * as sounds from './sounds.js';

export function toggleRunning(){
  state.isRunning = document.documentElement.classList.toggle('running');
  timer.countdown();
  sounds.buttonPressAudio.play();
}

export function setMinutes(){
  el.minutes.setAttribute('contenteditable', true);
  el.minutes.focus();
  sounds.buttonPressAudio.play();
}

export function reset(){
  state.isRunning = false;
  document.documentElement.classList.remove('running');
  timer.uptadeDisplay();
}

export function setFiveMinutes(){
  let time = Number(el.minutes.textContent);
  let sum = time + 5;

  state.minutes = sum;
  state.seconds = 59;

  timer.uptadeDisplay(state.minutes, state.seconds);
  sounds.buttonPressAudio.play();
}

export function subFiveMinutes(){
  let time = Number(el.minutes.textContent);
  let currentSecond = Number(el.seconds.textContent);
  let sub = time - 5;
  
  state.minutes = sub < 0 ? 0 : sub;
  state.seconds = currentSecond;

  timer.uptadeDisplay(state.minutes, state.seconds);
  sounds.buttonPressAudio.play();
}