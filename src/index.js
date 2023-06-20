import './style.css';
import people from './modules/players.js';

const playersScores = document.querySelector('.scores-list');

playersScores.innerHTML = people
  .map(
    (player) => `
    <tr>
      <td>${player.name}</td>
      <td>${player.score}</td>
    </tr>
  `,
  )
  .join('');
