import './style.css'
import { getRounds, next_round, previous_round, Round } from './utils.ts'
import arrowLeft from './assets/arrow_left.svg'
import arrowRight from './assets/arrow_right.svg'
import { setupTeams } from './teams.ts'

export const APP_ELEMENT = document.querySelector<HTMLDivElement>('#app')!

APP_ELEMENT.innerHTML = `
  <header class="header">
    <span class="logo">SEVN ESPORTES ⚽ </span>
  </header>
  <div class="main">
    <h1>Confira as rodadas do nosso campeonato fictício!</h1>
    <section class="card">
      <div class="card-menu">
        <button id="previous-round" type="button" class="button-icon">
          <img src="${arrowLeft}" class="arrow" alt="Arrow left" />
        </button>
        <div>
          <p>Rodada de Jogos</p>
          <span id="round-number">RODADA 1</span>
        </div>
        <button id="next-round" type="button" class="button-icon">
          <img src="${arrowRight}" class="arrow" alt="Arrow right" />
        </button>
      </div>
      <div id="teams-wrapper">

      </div>  
    </section>
  </div>
`

export const PREVIOUS_ROUND = document.querySelector<HTMLButtonElement>('#previous-round')!
export const NEXT_ROUND = document.querySelector<HTMLButtonElement>('#next-round')!
export const TEAMS_WRAPPER_ELEMENT = document.querySelector<HTMLDivElement>('#teams-wrapper')!
export const ROUND_NUMBER_ELEMENT = document.querySelector<HTMLSpanElement>('#round-number')!;

const rounds = await getRounds();
let currentRound = rounds[0];

function updateButtonState() {
  const roundIndex = rounds.findIndex(round => round.round === currentRound.round);

  if (roundIndex === 0) {
    PREVIOUS_ROUND.disabled = true;
  } else {
    PREVIOUS_ROUND.disabled = false;
  }

  if (roundIndex === rounds.length - 1) {
    NEXT_ROUND.disabled = true;
  } else {
    NEXT_ROUND.disabled = false;
  }
}

function setRound(round: Round) {
  currentRound = round;
  ROUND_NUMBER_ELEMENT.textContent = `RODADA ${currentRound.round}`;
  setupTeams(TEAMS_WRAPPER_ELEMENT, currentRound);
  updateButtonState()
}

setRound(currentRound);

previous_round({
  getCurrentRoundId: () => currentRound.round,
  element: PREVIOUS_ROUND,
  fn: (round: Round) => {
    setRound(round);
  },
  rounds,
});

next_round({
  getCurrentRoundId: () => currentRound.round,
  element: NEXT_ROUND,
  fn: (round: Round) => {
    setRound(round);
  },
  rounds,
});


