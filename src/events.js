import * as actions from './actions.js';
import * as el from './elements.js';
import { state } from './state.js';
import * as timer from './timer.js';
import * as audios from './sounds.js';

export function registerControls(){
  el.controls.addEventListener("click", (event) => {
    let action = event.target.dataset.action;
  
    if(typeof actions[action] != 'function'){
      return
    }
    actions[action]();
  });
}

export function setMinutes(){
  el.minutes.addEventListener("focus", () => {
    el.minutes.textContent = '';
  });

  el.minutes.onkeypress = (event) => /\d/.test(event.key);

  el.minutes.addEventListener("blur", (event) => {
    let time = event.currentTarget.textContent;

    state.minutes = time;
    state.seconds = 0;

    timer.uptadeDisplay();
  });
}

audios.elementAudio.forEach(audio => {
  audio.addEventListener("click", (event) => {
    removeAndAddClassActive(event.target, event.target.dataset.action);
  })
});

function removeAndAddClassActive(divElement, dataseElement){
  pauseAllAudios();

  let elements = audios.elementAudio;
  let active = divElement.classList.contains('active');

  if(active){
    divElement.classList.remove('active');
    return
  } else{
    elements.forEach(audio => {
      audio.classList.remove('active');
    })
    addClassActive(divElement, dataseElement);
    return
  }
}

export function pauseAllAudios(){
  audios.allAudios.forEach(audio => {
    audio.pause();
  })
}

function addClassActive(elementDiv, elementAudio){
  elementDiv.classList.add('active');
  audios[elementAudio].play();
}