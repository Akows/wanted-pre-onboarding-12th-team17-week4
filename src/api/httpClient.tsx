import axios from 'axios';

export class HttpClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async fetch() {
    try {
      const response = await axios.get(`${this.baseURL}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching the data', error);
      throw error;
    }
  }
}
