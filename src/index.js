import './style.css';
import { createScore, getScore } from './modules/apiOperations.js';
import Board from './modules/leadrBoard.js';

const submit = document.getElementById('submit');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  const player = document.getElementById('player');
  const score = document.getElementById('score');

  createScore(player.value, score.value);
  player.value = '';
  score.value = '';
});

const players = new Board();
const print = async () => {
  const result = await getScore();
  players.data = result.result;
  const playersScores = document.querySelector('.scores-list');

  // sorted the array descending order
  const sortedScores = players.data.sort((a, b) => b.score - a.score);

  playersScores.innerHTML = sortedScores
    .map((player) => `<tr><td>${player.user}: ${player.score}</td></tr>`)
    .join('');
};

const refreshButton = document.getElementById('refBtn');

refreshButton.addEventListener('click', () => {
  print();
});

window.onload = print();
