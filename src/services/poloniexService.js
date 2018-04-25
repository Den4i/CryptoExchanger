/* eslint-disable require-jsdoc */
class PoloniexService {
    static async fetchData() {
        const response = await fetch('http://127.0.0.1:5000/poloniex');
        let data = await response.json();
        return data;
    }
}

export default new PoloniexService();
