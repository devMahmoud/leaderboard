import './style.css';
import { addGameToEndPoint, addScoreToEndPoint, getScoreList } from './modules/fetchData.js';
import { addScoreToDom, loadData, scoreList } from './modules/domEdit.js';
// let scoresArr = [];
const refreshBtn = document.querySelector('.refresh-btn');
// addScoreToEndPoint('John', 90);
if (localStorage.getItem('game_id')) {
  loadData();
} else {
  addGameToEndPoint('Dummy Game');
}

refreshBtn.addEventListener('click', () => {
  scoreList.innerHTML = null;
  loadData();
});

// addScoreToEndPoint('Sam', 70).then(getScoreList);

// getScoreList();