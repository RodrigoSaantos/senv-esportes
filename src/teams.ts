import X from "./assets/x.svg";
import { Round } from "./utils";

export function setupTeams(element: HTMLDivElement, round: Round) {
  try {
    if (!round.games.length) {
      element.innerHTML = `sem dados`;
    }
    element.innerHTML = `
        ${round.games.map(game => {
          return (
            `
              <div class="teams">
                <div class="team">
                  <img src="./shield-${game.team_home_id}.svg" class="shield" alt="Arrow right" />
                  <span>${game.team_home_name}</span>
                </div>
                <div class="score">
                  <span>${game.team_home_score}</span> 
                  <img src="${X}" class="shield" alt="Arrow right" /> 
                  <span>${game.team_away_score}</span>
                </div>
                <div class="team">
                  <span>${game.team_away_name}</span>
                  <img src="./shield-${game.team_away_id}.svg" class="shield" alt="Arrow right" />
                </div>
              </div>
            `
          )
        }).join('')}
      `;
  } catch (error) {
    element.innerHTML =  `Erro ao buscar os dados`
  }
}
