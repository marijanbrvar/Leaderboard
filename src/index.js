import './style.css';
import Data from './data';

const form = document.querySelector('form');
const list = document.querySelector('#list');
const scoreList = [];

const commit = (newRecord) => {
  scoreList.push(newRecord);
};

const listItem = (name, score) => `
  <li>
    <div>${name}</div>
    <div>${score}</div>
  </li>
  `;

const renderUi = (data) => {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
  data.forEach((item) => {
    list.innerHTML += listItem(item.name, item.score);
  });
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const newRecord = new Data(form.name.value.trim(), form.score.value.trim());
  commit(newRecord);
  renderUi(scoreList);
  form.reset();
});
