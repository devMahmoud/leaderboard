import { getScoreList } from './fetchData.js';

const scoreList = document.querySelector('.scores-list');

const addScoreToDom = (name, score) => {
  const scoreLi = document.createElement('li');
  scoreLi.className = 'list-item';
  scoreLi.innerHTML = `<span class="name-span">${name}</span>
    <span class="score-span">${score}</span>`;
  scoreList.append(scoreLi);
};

const loadData = async () => {
  const resultObj = await getScoreList();
  for (let i = 0; i < resultObj.result.length; i += 1) {
    addScoreToDom(resultObj.result[i].user, resultObj.result[i].score);
  }
};

export { addScoreToDom, loadData, scoreList };