
export interface Round {
  round: number
  games: Game[]
}

export interface Game {
  team_home_id: string
  team_home_name: string
  team_home_score: number
  team_away_id: string
  team_away_name: string
  team_away_score: number
}

interface PaginationRound {
  element: HTMLButtonElement;
  getCurrentRoundId: () => number; // Função que retorna o ID da rodada atual
  rounds: Round[];
  fn: (round: Round) => void;
}

export function previous_round({ getCurrentRoundId, element, fn, rounds }: PaginationRound) {
  element.addEventListener('click', () => {
    const currentRoundId = getCurrentRoundId(); // Obtém o ID da rodada atual dinamicamente
    const roundIndex = rounds.findIndex(round => round.round === currentRoundId);
    
    if (roundIndex > 0) {
     fn(rounds[roundIndex - 1]);
    } 
  });
}

export function next_round({ getCurrentRoundId, element, fn, rounds }: PaginationRound) {
  element.addEventListener('click', () => {
    const currentRoundId = getCurrentRoundId(); // Obtém o ID da rodada atual dinamicamente
    const roundIndex = rounds.findIndex(round => round.round === currentRoundId);

    if (roundIndex < rounds.length - 1) {
      fn(rounds[roundIndex + 1]);
    }
  });
}

export async function getRounds(): Promise<Round[]> {
    const response = await fetch(`https://sevn-pleno-esportes.deno.dev/`);
  
    if (response.status !== 200) {
      throw new Error("Erro ao buscar os dados");
    }
  
    const data = await response.json();
  
    return data;
}
