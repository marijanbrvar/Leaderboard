import './style.css';
import Data from './data';
import Store from './store';

const store = new Store();

const loadData = document.querySelector('#loadData');
const form = document.querySelector('form');
const list = document.querySelector('#list');

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
    list.innerHTML += listItem(item.user, item.score);
  });
};

const intialLoad = async () => {
  const res = await store.getData();
  renderUi(res.result);
};

intialLoad();

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const newRecord = new Data(form.name.value.trim(), form.score.value.trim());
  await store.commit(newRecord);
  renderUi(store.scoreList);
  form.reset();
});

loadData.addEventListener('click', async () => {
  const res = await store.getData();
  renderUi(res.result);
});