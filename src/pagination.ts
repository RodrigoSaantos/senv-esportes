import { Round } from './utils';

export function updateButtonState(
  currentRound: Round,
  rounds: Round[],
  previousButton: HTMLButtonElement,
  nextButton: HTMLButtonElement
) {
  const roundIndex = rounds.findIndex(round => round.round === currentRound.round);

  if (roundIndex === 0) {
    previousButton.disabled = true;
  } else {
    previousButton.disabled = false;
  }

  if (roundIndex === rounds.length - 1) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}