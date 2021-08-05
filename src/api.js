/* eslint-disable class-methods-use-this */
module.exports = class Api {
  constructor() {
    this.key = 'kPpLZETmBlLPdW1zpuaz';
    this.baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
    this.url = `${this.baseUrl}${this.key}/scores/`;
    this.header = new Headers({ 'Content-type': 'application/json; charset=UTF-8' });
  }

  addScore(user, score) {
    return JSON.stringify({ user, score });
  }

  async postScores(user, score) {
    await fetch(this.url, {
      headers: this.header,
      method: 'POST',
      body: this.addScore(user, score),
    });
  }

  async getScores() {
    const res = await fetch(this.url, {
      headers: this.header,
      method: 'GET',
    });
    const data = await res.json();

    return data;
  }
};