import './style.css'
import arrowLeft from './assets/arrow_left.svg'
import arrowRight from './assets/arrow_right.svg'
import teamShield from "./assets/team_shield.svg";
import X from "./assets/x.svg";

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
        <div class="teams">
          <div class="team">
            <img src="${teamShield}" class="shield" alt="Arrow right" />
            <span>Time A</span>
          </div>
          <div class="score">
            <span>0</span> 
            <img src="${X}" class="shield" alt="Arrow right" /> 
            <span>3</span>
          </div>
          <div class="team">
            <span>Time B</span>
            <img src="${teamShield}" class="shield" alt="Arrow right" />
          </div>
        </div>
      </div>  
    </section>
  </div>
`



