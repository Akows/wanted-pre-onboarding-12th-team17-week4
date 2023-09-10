import { HttpClient } from './httpClient';

export class DataFetchService {
  constructor(protected httpClient: HttpClient) {}

  async fetchData() {
    try {
      const data = await this.httpClient.fetch();

      if (data && typeof data === 'object') {
        return Object.keys(data).map(key => ({
          time: key,
          ...data[key],
        }));
      } else {
        console.error('Invalid data format from API');
        return [];
      }
    } catch (error) {
      console.error('Error fetching data', error);
      throw error;
    }
  }
}
