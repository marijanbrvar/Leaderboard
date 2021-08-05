import Api from './api';

export default class LeaderVoard {
  constructor() {
    this.api = new Api();
    this.leaderList = [];
  }

  async get() {
    return this.leaderList;
  }

  async refresh() {
    const refresh = await this.api.getScores();
    return refresh;
  }
}
