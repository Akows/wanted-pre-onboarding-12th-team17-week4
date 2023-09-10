import axios from 'axios';

export class HttpClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async fetchServerData() {
    try {
      const response = await axios.get(`${this.baseURL}`);

      if (response.data && typeof response.data === 'object') {
        return Object.keys(response.data).map(key => ({
          time: key,
          ...response.data[key],
        }));
      } else {
        console.error('Invalid data format from API');
        return [];
      }
    } catch (error) {
      console.error('Error fetching the data', error);
      throw error;
    }
  }
}
