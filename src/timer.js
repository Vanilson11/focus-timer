import { state } from "./state.js";
import * as el from './elements.js';
import { reset } from "./actions.js";
import * as sounds from './sounds.js';
import * as events from './events.js';

export function countdown(){
  clearTimeout(state.countdownId);

  if(!state.isRunning){
    return
  }

  let minutes = Number(el.minutes.textContent);
  let seconds = Number(el.seconds.textContent);

  seconds--

  if(seconds < 0){
    seconds = 59;
    minutes--
  }

  if(minutes < 0){
    reset();
    removeClassActive();

    sounds.kichenTimerAudio.play();
    events.pauseAllAudios();

    return
  }

  uptadeDisplay(minutes, seconds);

  state.countdownId = setTimeout(() => countdown(), 1000);
}

function removeClassActive(){
  sounds.elementAudio.forEach(elementAudio => {
    let active = elementAudio.classList.contains('active');

    if(active){
      elementAudio.classList.remove('active');
    }
  });
}

export function uptadeDisplay(minutes, seconds){
  minutes = minutes ?? state.minutes;
  seconds = seconds ?? state.seconds;

  el.minutes.textContent = String(minutes).padStart(2, '0');
  el.seconds.textContent = String(seconds).padStart(2, '0');
}