import './style.css';
import { addGameToEndPoint, addScoreToEndPoint } from './modules/fetchData.js';
import { loadData, refreshDom } from './modules/domEdit.js';

const refreshBtn = document.querySelector('.refresh-btn');
const addScoreForm = document.querySelector('.add-score-form');
const nameInput = document.querySelector('.name-input');
const scoreInput = document.querySelector('.score-input');

if (localStorage.getItem('game_id')) {
  loadData();
} else {
  addGameToEndPoint('Dummy Game');
}

refreshBtn.addEventListener('click', () => {
  refreshDom();
});

addScoreForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  await addScoreToEndPoint(nameInput.value.trim(), scoreInput.value.trim());
  await refreshDom();
  nameInput.value = '';
  scoreInput.value = '';
});
