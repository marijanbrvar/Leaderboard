import Api from './api';

export default class Store {
  constructor() {
    this.scoreList = [];
    this.api = new Api();
  }

  async init() {
    await this.getData();
  }

  commit = async (newRecord) => {
    const { user, score } = newRecord;

    await this.api.postScores(user, score);
    const data = await this.getData();
    this.scoreList = data.result;
  }

  getData = async () => {
    const data = await this.api.getScores();
    return data;
  };
}