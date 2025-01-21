import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchPopularMovies = async (apiKey: string): Promise<any> => {
  try {
    const response = await apiClient.get('/movie/popular', {
      params: {
        api_key: apiKey,
        language: 'en-US',
        page: 1,
      },
    });

    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error(
        'Axios Error:',
        error.response?.data?.status_message || error.message,
      );
      throw new Error(error.response?.data?.status_message || error.message);
    } else {
      console.error('Unexpected Error:', error);
      throw new Error('Something went wrong!');
    }
  }
};
