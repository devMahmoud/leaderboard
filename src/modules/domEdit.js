import { getScoreList } from './fetchData.js';

const scoreList = document.querySelector('.scores-list');

const addScoreToDom = (name, score) => {
  const scoreLi = document.createElement('li');
  scoreLi.className = 'list-item';
  scoreLi.innerHTML = `<p class="name-text">${name}</p>
    <p class="score-text">${score}</p>`;
  scoreList.append(scoreLi);
};

const loadData = async () => {
  const resultObj = await getScoreList();
  for (let i = 0; i < resultObj.result.length; i += 1) {
    addScoreToDom(resultObj.result[i].user, resultObj.result[i].score);
  }
};

const refreshDom = async () => {
  scoreList.innerHTML = null;
  loadData();
};

export { addScoreToDom, loadData, refreshDom };